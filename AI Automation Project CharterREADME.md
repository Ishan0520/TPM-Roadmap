# 🤖 AI TPM Coach — Project Charter

![Status](https://img.shields.io/badge/Status-In%20Progress-green?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-Notion%20%7C%20Make.com%20%7C%20OpenAI%20%7C%20Gmail-blue?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-No--Code%20Agentic%20AI-purple?style=for-the-badge)
![Owner](https://img.shields.io/badge/Owner-Ishan%20Gupta-orange?style=for-the-badge)

---

## 📋 Document Info

| Field | Detail |
|-------|--------|
| **Project Name** | AI TPM Coach |
| **Owner** | Ishan Gupta |
| **Version** | v1.0 |
| **Last Updated** | March 2026 |
| **Status** | Active — Phase 1 Build |

---

## 🧩 Problem Statement

TPM candidates in self-directed learning programs lack a structured, feedback-aware system that closes the loop between daily study inputs and actionable coaching outputs.

Manual review of progress, ad-hoc reflection, and scattered tools create high cognitive overhead — reducing consistency and slowing skill development. Existing AI tools are reactive (chat-only) and stateless; they don't integrate with a learner's actual workflow or adapt based on accumulated context.

**The gap:** There is no lightweight, agentic AI system purpose-built to function as an always-on TPM coach — one that senses learner activity, reasons over it, and delivers structured, personalized guidance without requiring engineering expertise to operate.

---

## 🎯 Project Objective

Build a no-code agentic AI system — the **AI TPM Coach** — that operates on a **Sense → Think → Act** loop to:

1. **Sense** learning activity and inputs (via Notion database updates or Gmail triggers)
2. **Think** by passing structured context to an OpenAI model with a deterministic coaching prompt
3. **Act** by delivering a personalized, TPM-framed coaching output (via Gmail or Notion write-back)

This project simultaneously serves as a **functional coaching tool** and a **TPM portfolio artifact** demonstrating agentic system design, no-code orchestration, and prompt engineering.

---

## ✅ Scope — What's In

| Area | Description |
|------|-------------|
| **Trigger Layer** | Notion database entry or Gmail input triggers a Make.com scenario |
| **Orchestration** | Make.com automation handles the full Sense → Think → Act pipeline |
| **AI Reasoning** | OpenAI API call with structured system prompt for coaching output |
| **Output Delivery** | Coaching response sent via Gmail and/or written back to Notion |
| **Prompt Design** | Deterministic, capacity-aware prompts with defined output schema |
| **Portfolio Documentation** | Architecture diagram, prompt library, and system README for GitHub |

---

## 🚫 Out of Scope

| Item | Reason |
|------|--------|
| Custom Python scripts or backend code | Intentional constraint — no-code only; validates TPM orchestration skills |
| Real-time or streaming AI responses | Adds complexity without proportional learning value at this stage |
| Multi-user support | Single-user system; generalization is a future phase |
| LLM fine-tuning or custom model training | Unnecessary for prompt-driven coaching; scope risk |
| Native mobile app | Not required; Gmail + Notion are mobile-accessible |
| Paid third-party coaching integrations | Out of budget and scope for v1 |
| Persistent memory across sessions (vector DB) | Phase 2 consideration only |

---

## 📊 Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| **System Reliability** | ≥ 90% of Make.com scenario runs complete without error | Make.com execution logs |
| **Coaching Output Quality** | Structured output matches defined schema in ≥ 85% of runs | Manual spot-check of 10 outputs |
| **End-to-End Latency** | Trigger → Gmail delivery in < 3 minutes | Make.com timestamp comparison |
| **Prompt Determinism** | Same input produces structurally consistent output across 3 runs | A/B prompt testing |
| **Portfolio Readiness** | GitHub README + architecture diagram published by Phase 3 | GitHub commit |
| **Personal Coaching Value** | Weekly reflection quality improves (self-assessed, 1–5 scale) | Personal log in Notion |

---

## 🗓️ Phases & Milestones

| Phase | Name | Key Deliverable | Target |
|-------|------|-----------------|--------|
| **Phase 1** | Foundation & Trigger | Make.com scenario triggers on Notion update; OpenAI call returns raw text | Week 1–2 |
| **Phase 2** | Structured Output | Prompt refined to return schema-compliant coaching (JSON or formatted text); Gmail delivery live | Week 3–4 |
| **Phase 3** | Loop Closure | Notion write-back active; end-to-end Sense → Think → Act loop validated | Week 5–6 |
| **Phase 4** | Portfolio Packaging | GitHub README, architecture diagram, prompt library, and retrospective published | Week 7 |

---

## ⚠️ Key Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Make.com scenario fragility** — field mapping breaks on Notion schema change | Medium | High | Lock Notion DB schema before build; document all field names |
| **Prompt drift** — OpenAI output format inconsistent across runs | Medium | High | Use explicit JSON output instructions + output validation step in Make.com |
| **Scope creep** — adding features (memory, multi-user, voice) mid-build | High | Medium | Strict Phase gate: no new features until current phase passes success metrics |
| **API rate limits or cost overrun** | Low | Medium | Cap max_tokens per call; monitor OpenAI usage dashboard weekly |
| **Portfolio over-engineering** — spending more time documenting than building | Medium | Medium | Time-box documentation to 20% of weekly effort |
| **Feedback loop gap** — outputs are generated but never reviewed or acted on | Low | High | Build a weekly "Coach Review" ritual into Notion as a recurring task |

---

## 👥 Stakeholders

| Role | Name / Group | Responsibility |
|------|-------------|----------------|
| **Project Owner & Builder** | Ishan Gupta | Design, build, test, and document the system |
| **Primary User** | Ishan Gupta | Daily learner receiving coaching outputs |
| **Portfolio Audience** | TPM Hiring Managers, Recruiters | Evaluate system as a portfolio artifact |
| **Technical Advisor (async)** | AI TPM Coach (Claude) | Act as thinking partner and TPM co-builder |

---

## 🏗️ System Architecture (High-Level)

```
┌─────────────────────────────────────────────────────────────┐
│                     SENSE → THINK → ACT                      │
└─────────────────────────────────────────────────────────────┘

  [SENSE]                  [THINK]                  [ACT]
  Notion DB Update   →   Make.com Scenario   →   Gmail Delivery
  (or Gmail Input)        ↓                       +
                     OpenAI API Call          Notion Write-Back
                     (Structured Prompt)
```

**Core Tools:**
- **Notion** — Learner input database (triggers + context store)
- **Make.com** — Orchestration engine (no-code automation)
- **OpenAI API** — Reasoning layer (GPT-4 with system prompt)
- **Gmail** — Output delivery channel

---

## Sign-Off

**Project Owner:** Ishan Gupta
**Date:** March 2026
**Notion Database:** [Notion](https://www.notion.so/Technical-Program-Management-Portfolio-3044313537cf805ab1bdf0fd2252547f)

---

*Part of the TPM Career Transformation Portfolio — demonstrating agentic system design, no-code orchestration, and prompt engineering.*
