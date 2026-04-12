# Architecture

This document describes the five core components of the platform and how they interact.

---

## Overview

The system is structured as a unidirectional pipeline. Each layer has a single responsibility and communicates only with its immediate neighbours. No layer reaches across the stack.

```
API Layer
    └── Feature Dispatcher
            ├── Mapping Engine
            ├── DBC Parser
            └── CAN Bus Simulator
                        └── ECU Simulators (×3)
                                    └── SQLite Signal Log
```

## Components

### 1. API Layer (`api/`)

**Responsibility:** Accept HTTP requests, validate input, and return structured responses.

- Built with FastAPI and Pydantic v2
- Two route groups: `feature_routes` (commands) and `status_routes` (observability)
- No business logic lives here — routes delegate immediately to the dispatcher
- FastAPI's dependency injection system provides the dispatcher and shared state to routes without coupling

**Key files:**
- `api/routes/feature_routes.py` — `POST /feature/{name}`
- `api/routes/status_routes.py` — `GET /status/health|ecus|history|stats|features`
- `api/dependencies.py` — injects shared instances from `app.state`

---

### 2. Feature Dispatcher (`core/feature_dispatcher.py`)

**Responsibility:** Orchestrate the full pipeline for one feature request.

This is the only component that knows all other components exist. It acts as the coordinator — calling mapping, then DBC encoding, then CAN send — and handles failures at each step without letting them propagate upstream as unhandled exceptions.

**Pipeline steps:**
1. Call `MappingEngine.resolve(feature_name, value)` → get signal name + message name + resolved value
2. Call `DBCParser.encode_signal(message, signal, value)` → get frame ID + raw bytes
3. Call `CANBus.send(frame_id, data)` → put frame on the bus
4. Call `log_signal(...)` → write to SQLite audit log
5. Return a `FeatureResponse`

**Design note:** The dispatcher logs both successes and failures. DB errors never crash the pipeline — they are caught and logged separately.

---

### 3. Mapping Engine (`mapping/engine.py`)

**Responsibility:** Translate a human-facing feature name into a CAN signal definition.

Loaded from `mapping/feature_map.json` at startup. The engine resolves:
- Which CAN message carries this feature (`DOOR_CONTROL`, `CLIMATE_CONTROL`, etc.)
- Which signal within that message (`DOOR_LOCK_CMD`, `CABIN_TEMP_SET`, etc.)
- What the final signal value should be (discrete lookup or passthrough float)

**Value resolution logic:**
- If `value_map` is defined and the requested value is a key → use mapped value (discrete mode)
- If `value_map` is empty and value is provided → pass through directly (continuous mode, e.g. temperature)
- If no value provided → use `default_value`

This design means the API caller doesn't need to know CAN signal semantics — they just send a human value (`22.5` for temperature) and the engine handles translation.

---

### 4. DBC Parser (`dbc/parser.py`)

**Responsibility:** Encode Python values into CAN frame bytes, and decode raw bytes back into signal values.

Wraps `cantools` behind a project-specific interface (Facade pattern). The rest of the application never calls `cantools` directly — only the parser does. This means if `cantools` changes its API, there is exactly one file to update.

**Core operations:**
- `encode_signal(message_name, signal_name, value)` → `(frame_id, bytes)`
- `encode_message(message_name, signal_dict)` → `(frame_id, bytes)` (multi-signal)
- `decode_message(message_id, data)` → `dict[signal_name, value]`

**DBC file (`dbc/vehicle.dbc`):**

| Message | ID | Signals |
|---|---|---|
| `DOOR_CONTROL` | 0x210 (528) | `DOOR_LOCK_CMD`, `DOOR_WINDOW_CMD` |
| `CLIMATE_CONTROL` | 0x220 (544) | `CABIN_TEMP_SET`, `AC_ENABLE`, `FAN_SPEED` |
| `BMS_CONTROL` | 0x230 (560) | `CHARGE_ENABLE`, `CHARGE_CURRENT_LIMIT`, `SOC_REQUEST` |

Scale/offset encoding means floats are stored as integers on the wire. Example: `CABIN_TEMP_SET` has scale=0.5, offset=15.0 — so 22.5°C encodes to raw value 15 (`0x0F`).

---

### 5. CAN Bus Simulator (`can_sim/bus.py`)

**Responsibility:** Maintain a virtual CAN channel and provide send/receive operations.

Uses `python-can` with `interface="virtual"` — an in-memory broadcast channel. Any number of bus connections sharing the same channel name (`vcan0`) form one logical bus. Frames sent by one are received by all — exactly like real CAN.

**Key behaviours:**
- `connect()` / `disconnect()` — lifecycle management
- `send(frame_id, data)` — transmit one CAN frame
- `receive_one(timeout)` — blocking receive with timeout
- `start_listener(callback, stop_event)` — blocking loop designed to run in a background thread

**Hardware swap path:** Change `interface="virtual"` to `interface="socketcan"` in `core/config.py`. Nothing else changes.

---

### 6. ECU Simulators (`ecu_sim/`)

**Responsibility:** Simulate the receive-side of the CAN bus — what real ECU firmware would do.

Each ECU is a daemon thread running a tight receive loop. The base class (`BaseECU`) owns the thread lifecycle and CAN connection. Subclasses only implement `on_message()` — what to do when a relevant frame arrives.

```
BaseECU (abstract)
  ├── start() / stop()         — thread lifecycle
  ├── _run()                   — receive loop (filters by LISTEN_IDS)
  └── on_message() [abstract]  — subclass hook

DoorECU    → LISTEN_IDS = {0x210}
ClimateECU → LISTEN_IDS = {0x220}
BMSECU     → LISTEN_IDS = {0x230}
```

Each ECU maintains a `self.state` dict reflecting its current condition. State is updated only on actual change, and changes are logged.

Each ECU opens its **own** `CANBus` connection — this is intentional. In real vehicle networks, each ECU is an independent node. Sharing a connection would be architecturally incorrect.

---

## Interaction Summary

```
Request arrives
    │
    ▼ FastAPI validates body (Pydantic)
    │
    ▼ FeatureDispatcher.dispatch(feature_name, value)
    │
    ├─▶ MappingEngine.resolve()      →  MappingEntry + final_value
    │
    ├─▶ DBCParser.encode_signal()    →  frame_id + bytes
    │
    ├─▶ CANBus.send()                →  frame on virtual bus
    │        │
    │        └─▶ ECU thread receives frame
    │                 └─▶ DBCParser.decode_message()
    │                          └─▶ ECU.on_message() → state update
    │
    └─▶ signal_log.log_signal()      →  SQLite row written
    │
    ▼ FeatureResponse returned to API
```

---

*See [`data-flow.md`](data-flow.md) for a step-by-step trace of a real request.*
