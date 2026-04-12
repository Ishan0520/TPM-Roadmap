# Vehicle CAN Signal Routing & API Simulation Platform

> Simulates a full automotive CAN bus stack — from REST API feature commands down to ECU-level signal decoding — built on real DBC standards used in production vehicle programs.

---

## Why This Exists

At Rivian, I worked as a TPM on system integration — coordinating CAN/DBC signal readiness across domain teams (Body, BMS, Climate), tracking dependencies between network architecture and software delivery, and asking questions like:

- *Is this signal correctly defined in the DBC?*
- *Which controller routes this message?*
- *What breaks downstream if this mapping is wrong?*

I was operating at the program layer. I understood the flow but hadn't built it.

This project closes that gap. I built the actual technical system those teams were delivering — to understand it mechanistically, not just managerially.

---

## What It Does

A single REST API call triggers a full automotive signal pipeline:

```
POST /feature/unlock_door
        │
        ▼
  Mapping Engine          →  resolves feature to signal + message
        │
        ▼
  DBC Parser (cantools)   →  encodes signal value into raw CAN bytes
        │
        ▼
  Virtual CAN Bus         →  broadcasts frame on python-can virtual channel
        │
        ▼
  Door ECU Simulator      →  receives frame, decodes signal, updates state
```

Supported features out of the box:

| Feature | Signal | Message | ECU |
|---|---|---|---|
| `unlock_door` | `DOOR_LOCK_CMD` | `DOOR_CONTROL` (0x210) | Door ECU |
| `lock_door` | `DOOR_LOCK_CMD` | `DOOR_CONTROL` (0x210) | Door ECU |
| `set_temperature` | `CABIN_TEMP_SET` | `CLIMATE_CONTROL` (0x220) | Climate ECU |
| `set_ac` | `AC_ENABLE` | `CLIMATE_CONTROL` (0x220) | Climate ECU |
| `start_charging` | `CHARGE_ENABLE` | `BMS_CONTROL` (0x230) | BMS ECU |
| `set_charge_limit` | `CHARGE_CURRENT_LIMIT` | `BMS_CONTROL` (0x230) | BMS ECU |
| `request_soc` | `SOC_REQUEST` | `BMS_CONTROL` (0x230) | BMS ECU |

---

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    API Layer (FastAPI)               │
│         POST /feature/{name}   GET /status/*         │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│              Feature Dispatcher (core/)              │
│    Orchestrates: mapping → DBC encode → CAN send     │
└──────┬────────────────┬────────────────┬────────────┘
       │                │                │
┌──────▼──────┐  ┌──────▼──────┐  ┌─────▼──────────┐
│   Mapping   │  │  DBC Parser │  │   CAN Bus Sim   │
│   Engine    │  │ (cantools)  │  │  (python-can)   │
│ feature_map │  │ vehicle.dbc │  │  virtual/vcan0  │
└─────────────┘  └─────────────┘  └────────┬────────┘
                                            │ broadcasts
                              ┌─────────────▼──────────────┐
                              │       ECU Simulators        │
                              │  DoorECU │ ClimateECU │ BMS │
                              │  (threaded listeners)       │
                              └─────────────────────────────┘
                                            │
                              ┌─────────────▼──────────────┐
                              │     SQLite Signal Log       │
                              │  GET /status/history|stats  │
                              └────────────────────────────┘
```

Full component breakdown → [`docs/architecture.md`](docs/architecture.md)

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| API | FastAPI + Uvicorn | Async, auto-docs, Pydantic validation |
| Signal encoding | cantools | Industry-standard DBC parsing |
| CAN simulation | python-can (virtual) | No hardware required; swappable to SocketCAN |
| Data validation | Pydantic v2 | Schema enforcement across all layers |
| Persistence | SQLite (stdlib) | Zero-dependency signal audit log |
| Concurrency | Python threading | ECU listeners run as daemon threads |

Design decisions explained → [`docs/decisions.md`](docs/decisions.md)

---

## Project Structure

```
vehicle-can-platform/
├── main.py                        # App entry point, startup/shutdown lifecycle
├── requirements.txt
│
├── api/
│   ├── dependencies.py            # FastAPI dependency injection
│   └── routes/
│       ├── feature_routes.py      # POST /feature/{name}
│       └── status_routes.py       # GET /status/health|ecus|history|stats
│
├── core/
│   ├── config.py                  # Centralised settings (Pydantic BaseSettings)
│   ├── feature_dispatcher.py      # Pipeline orchestrator
│   └── logging_config.py          # Structured log formatting
│
├── mapping/
│   ├── engine.py                  # MappingEngine: feature → signal resolution
│   └── feature_map.json           # 10 features defined
│
├── dbc/
│   ├── parser.py                  # DBCParser: encode/decode wrapper over cantools
│   └── vehicle.dbc                # 3 messages, 9 signals, 3 ECU nodes
│
├── can_sim/
│   └── bus.py                     # CANBus: connect, send, receive, listener loop
│
├── ecu_sim/
│   ├── base_ecu.py                # BaseECU: threading, listen loop, decode hook
│   ├── door_ecu.py                # Handles DOOR_CONTROL (0x210)
│   ├── climate_ecu.py             # Handles CLIMATE_CONTROL (0x220)
│   └── bms_ecu.py                 # Handles BMS_CONTROL (0x230)
│
├── models/
│   ├── feature.py                 # FeatureRequest, FeatureResponse, MappingEntry
│   └── signal.py                  # SignalRecord (DB schema)
│
├── db/
│   ├── database.py                # SQLite init, connection context manager
│   └── signal_log.py              # log_signal, get_recent, get_stats, clear
│
└── docs/
    ├── architecture.md
    ├── data-flow.md
    ├── decisions.md
    ├── demo.md
    └── future-work.md
```

---

## Quick Start

**Requirements:** Python 3.10+

```bash
# 1. Clone and enter
git clone https://github.com/YOUR_USERNAME/vehicle-can-platform.git
cd vehicle-can-platform

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the server
uvicorn main:app --reload
```

Server starts at `http://localhost:8000`
Interactive API docs at `http://localhost:8000/docs`

---

## Example API Usage

**Unlock the door:**
```bash
curl -X POST http://localhost:8000/feature/unlock_door \
  -H "Content-Type: application/json" \
  -d '{"feature_name": "unlock_door", "value": 0}'
```

**Response:**
```json
{
  "success": true,
  "feature_name": "unlock_door",
  "value": 0.0,
  "message": "Signal 'DOOR_LOCK_CMD' = 0.0 on 'DOOR_CONTROL' (ID=0x210). Frame: 0000000000000000",
  "can_message_id": 528,
  "can_signal": "DOOR_LOCK_CMD",
  "timestamp": "2024-01-15T10:23:45.123456"
}
```

**Server log (ECU reacting in real time):**
```
10:23:45 | INFO | ecu_sim.door_ecu    | [DoorECU] lock: LOCKED → UNLOCKED
```

Full request/response examples → [`docs/demo.md`](docs/demo.md)

---

## Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/feature/{name}` | Trigger a vehicle feature |
| `GET` | `/status/features` | List all registered features |
| `GET` | `/status/ecus` | Live state of all ECU simulators |
| `GET` | `/status/history` | Signal dispatch log (filterable) |
| `GET` | `/status/stats` | Aggregate stats by feature |
| `GET` | `/status/health` | Liveness check |
| `GET` | `/docs` | Swagger UI (auto-generated) |

---

## What This Demonstrates

### System Design
- End-to-end simulation of an automotive signal pipeline across five distinct layers
- Clean separation of concerns: API, mapping, encoding, transport, and ECU simulation are fully decoupled
- Each layer is independently replaceable — swap virtual CAN for SocketCAN without touching API or ECU code

### Automotive Domain Knowledge
- Correct DBC file structure: signal bit positions, scale/offset encoding, message framing, node definitions
- Accurate modeling of real ECU responsibilities (Door, BMS, Climate) matching production vehicle architectures
- Understanding of how high-level feature requests map to low-level signal values — the same translation problem in real vehicle programs

### Backend Engineering
- FastAPI with dependency injection, Pydantic schema validation, and async lifespan management
- Thread-safe concurrent ECU listeners as Python daemon threads
- Context-managed SQLite with indexed queries and a full audit log

### TPM-Relevant Thinking
- Incrementally designed with a clear interface contract between each layer — mirrors how cross-functional programs are structured
- Every failure mode is explicitly handled and logged: missing feature, bad value, DBC mismatch, bus error
- Signal history and stats provide the observability a program team would need to track delivery status

---

## Data Flow

Step-by-step breakdown → [`docs/data-flow.md`](docs/data-flow.md)
