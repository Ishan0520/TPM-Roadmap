# AI TPM Coach

> An agentic AI system that senses learning activity, reasons over priorities, and delivers structured weekly execution plans — built entirely with no-code tools.

![Status](https://img.shields.io/badge/Status-Active%20Build-brightgreen?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Notion%20%7C%20Make.com%20%7C%20GPT--4o--mini%20%7C%20Gmail-0052CC?style=flat-square)
![Approach](https://img.shields.io/badge/Approach-No--Code%20Agentic%20AI-8B5CF6?style=flat-square)
![Phase](https://img.shields.io/badge/Phase-2%20of%204-orange?style=flat-square)

---

## Project Summary

The AI TPM Coach is a **no-code agentic AI system** that automates the weekly planning and coaching loop for a self-directed TPM learning program. It connects a structured Notion task database to GPT-4o-mini via Make.com automation, producing a prioritized weekly execution plan and risk-aware coaching note — delivered to Gmail every Monday morning.

This project is simultaneously a **functional productivity tool** and a **TPM portfolio artifact**, demonstrating agentic system design, API orchestration, prompt engineering, and structured program management — without writing a single line of Python.

---

## Problem

Self-directed learning programs have a well-known execution gap: the distance between what you plan to do and what you actually do, compounded weekly.

The specific failure modes in a TPM upskilling program are:

- **No priority enforcement** — all tasks feel equally urgent until a deadline forces a decision
- **Effort blindness** — weekly goals are set without accounting for available time, creating chronic over-commitment
- **Absent feedback loops** — progress is logged but never reviewed against a consistent framework
- **Stateless reflection** — end-of-week retrospectives happen ad hoc, if at all, with no structured coaching output

Existing AI tools (ChatGPT, Notion AI) are reactive and chat-based. They have no awareness of your task queue, your available hours, or your current program phase. Every session starts from zero.

---

## Solution

The AI TPM Coach closes this loop by running a **Sense → Think → Act cycle** once per week:

1. **Sense** — Make.com queries the Notion Tasks database, retrieves all `Status = In Progress` items, and packages task metadata (name, priority, deadline, effort, category) into a structured JSON payload
2. **Think** — The payload is passed to GPT-4o-mini with a deterministic system prompt that selects 3–5 high-impact tasks within the available hours budget and produces a structured weekly plan
3. **Act** — The coaching output is delivered via Gmail and written back to the Notion Weekly Plans database, closing the loop for review and retrospective

The result is a weekly execution plan that is **capacity-aware, priority-ranked, and coaching-annotated** — generated in under 3 minutes with zero manual effort.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        AI TPM COACH — v1                            │
│                    Sense  →  Think  →  Act                          │
└─────────────────────────────────────────────────────────────────────┘

 NOTION (Data Layer)          MAKE.COM (Orchestration)      OUTPUTS
 ┌──────────────────┐         ┌────────────────────────┐   ┌──────────────────┐
 │   Tasks DB       │──────▶  │  1. Schedule Trigger   │   │                  │
 │  - name          │         │     (Daily 8:00 AM)    │   │  Gmail           │
 │  - priority      │         │                        │   │  Weekly Plan     │
 │  - deadline      │         │  2. Notion: Search DB  │   │  + Coach Note    │
 │  - effort_hours  │         │     Filter: Active     │   │                  │
 │  - category      │         │                        │   └──────────────────┘
 │  - status        │         │  3. Iterator           │
 └──────────────────┘         │     (per task)         │   ┌──────────────────┐
                              │                        │   │                  │
 ┌──────────────────┐         │  4. Set Variables      │   │  Notion          │
 │  Weekly Plans DB │◀──────  │     (7 fields)         │   │  AI Coaching     │
 │  - weekly_goal   │         │                        │   │  Output field    │
 │  - reflection    │         │  5. OpenAI HTTP Call   │   │                  │
 │  - energy_level  │         │     GPT-4o-mini        │   └──────────────────┘
 │  - coach_output  │         │     temp: 0            │
 │  - coach_trigger │         │                        │
 └──────────────────┘         │  6. Parse JSON         │
                              │                        │
 ┌──────────────────┐         │  7a. Gmail: Send       │
 │  Phases DB       │         │  7b. Notion: Update    │
 │  Milestones DB   │         └────────────────────────┘
 └──────────────────┘
```

**Schema:** 4 linked Notion databases — Phases → Milestones → Tasks → Weekly Plans — with a frozen field naming convention to prevent Make.com mapping drift.

---

## How It Works

### Sense — Retrieving Context

Make.com fires on a daily schedule and calls the Notion API to query the Tasks database with a single filter: `Status = In Progress`. Results are sorted by priority ascending and capped at 10 records to control downstream token usage.

Each retrieved task bundle passes through an Iterator module, which processes records one at a time, and a Set Variables module that maps raw Notion field references to clean, named variables (`task_name`, `task_priority`, `task_deadline`, `task_effort`, `task_category`).

**Key design choice:** Schedule-based trigger (not Notion Watch) — reduces Make.com operation consumption by ~95% and produces predictable, debuggable execution windows.

### Think — Reasoning Over Priorities

The 7 structured variables are assembled into a JSON payload and passed to GPT-4o-mini via an HTTP module. The system prompt enforces deterministic task selection using explicit ranked rules:

```
1. Include ALL priority-1 tasks first
2. Fill remaining budget by ascending priority
3. Tiebreak on earliest deadline
4. Stop when effort_hours would exceed available_hours
```

Temperature is set to `0`. The model is instructed to return only a JSON object — no preamble — making the response directly parseable by Make.com's JSON Parse module without cleanup.

Output schema:
```json
{
  "selected_tasks": [...],
  "hours_allocated": 11,
  "hours_remaining": 1,
  "daily_breakdown": { "Monday": [...], ... },
  "coach_note": "..."
}
```

### Act — Delivering the Plan

Make.com's JSON Parse module extracts the structured fields and routes them to two parallel actions:

- **Gmail:** Formats the weekly plan as a readable email and delivers it by 8:05 AM Monday
- **Notion:** Writes the `AI Coaching Output` field on the current Weekly Plans record and updates `Coach Trigger` from `Ready` → `Sent`

The Notion write-back creates a permanent, searchable coaching log — enabling retrospective analysis across weeks.

---

## Key Design Decisions

| Decision | Rationale | Trade-off Accepted |
|---|---|---|
| **No-code only (Make.com, not Python)** | Validates TPM orchestration skills without engineering dependency; faster iteration cycle | Less flexibility for complex conditional logic |
| **Schedule trigger over Notion Watch** | Predictable execution window; ~95% fewer Make.com operations consumed | 24-hour maximum sensing lag vs. real-time |
| **Frozen Notion schema before Make.com build** | Prevents silent field-mapping failures — the #1 failure mode in no-code pipelines | Schema changes require a formal update process |
| **Temperature = 0 on GPT-4o-mini** | Deterministic output — same inputs produce identical task rankings and daily breakdowns | Slightly less "natural" coach note language |
| **JSON-only output format enforced in prompt** | Make.com parses JSON natively; eliminates need for regex or text cleanup modules | Prompt uses ~15% more tokens to enforce format |
| **Cap of 10 tasks in Notion query** | Prevents token overload in the OpenAI request; forces intentional backlog management | Very large task queues require manual triage before sensing |
| **`coach_note` capped at 2–3 sentences** | Keeps output token budget predictable; mirrors executive brevity norms | Coaching depth is limited vs. a conversational AI |

---

## Impact Metrics

*Measured over 4 weeks of active use.*

| Metric | Baseline (Manual Planning) | With AI TPM Coach | Delta |
|---|---|---|---|
| Weekly planning time | 25–35 min | < 3 min | **−90%** |
| Tasks completed vs. planned | ~55% | ~80% | **+25pp** |
| Week-over-week plan consistency | Low (ad hoc) | High (schema-enforced) | **Qualitative improvement** |
| End-of-week reflection rate | ~40% of weeks | 100% of weeks | **+60pp** |
| Over-commitment rate (planned hrs > available hrs) | ~3 of 4 weeks | 0 of 4 weeks | **Eliminated** |

> Note: Baseline data collected during 3 weeks of manual Notion planning prior to system activation. Task completion rate measured by `Status = Done` entries per week.

---

## Future Roadmap

| Phase | Feature | Description | Status |
|---|---|---|---|
| **v1.1** | Reflection-triggered coaching | Add a second Make.com scenario triggered when `End of Week Reflection` is updated — produces a retrospective coaching note alongside the forward plan | Planned |
| **v1.2** | Capacity variance detection | If `available_hours` drops below a threshold (e.g., < 8), automatically downgrade to a 2-task "survival mode" plan and flag in Gmail | Planned |
| **v2.0** | Rolling context window | Pass the last 3 weeks of `coach_note` + `tasks_completed` as context to GPT-4o-mini — enabling trend-aware coaching ("You've deprioritized Documentation tasks for 3 weeks straight") | Research |
| **v2.1** | Skill gap mapping | Cross-reference completed tasks against a TPM competency matrix stored in Notion; surface coaching notes tied to specific skill gaps | Research |
| **v3.0** | Multi-agent loop | Separate Sense, Think, and Act into independent Make.com scenarios with shared state via Notion — enabling asynchronous, event-driven coaching at task completion rather than weekly cadence | Future |

---

## Repository Structure

```
ai-tpm-coach/
├── README.md                        ← This file
├── charter/
│   └── project_charter.md           ← Scope, success metrics, risk register
├── schema/
│   └── notion_schema.md             ← Full DB schema with field types and relations
├── prompts/
│   └── weekly_planner_v1.md         ← GPT-4o-mini system prompt + test inputs
├── architecture/
│   └── system_diagram.md            ← Make.com module sequence + data flow
└── retrospectives/
    └── week_01.md                   ← First coaching output + reflection log
```

---

## Stack

| Layer | Tool | Purpose |
|---|---|---|
| Data | Notion | Task storage, weekly plans, coaching log |
| Orchestration | Make.com | Automation, API routing, field mapping |
| Intelligence | GPT-4o-mini (OpenAI API) | Task prioritization, plan generation, coaching |
| Delivery | Gmail | Weekly plan distribution |

---

## About This Project

This system was designed and built by **Ishan Gupta** as part of a structured TPM career transition program. It serves dual purposes: a functional coaching tool in active daily use, and a portfolio artifact demonstrating program design, system thinking, and AI integration — the same skills required to manage technical programs at companies building at the intersection of software, hardware, and AI.

**Connect:** [LinkedIn](https://linkedin.com/in/ishan-gupta) · [TPM Portfolio](https://ishan-gupta-53783y5.gamma.site/) · [GitHub](https://github.com/Ishan0520/TPM-Roadmap)
