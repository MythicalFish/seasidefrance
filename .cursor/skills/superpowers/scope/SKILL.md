---
name: scope
description: Clarify ambiguous or multi-path work before coding. Use when requirements are rough, multiple approaches are possible, or the task needs codebase exploration and a concrete proposed direction before implementation.
---

# Scope

Use this skill to turn a rough request into an implementation-ready direction.

## Workflow

1. Read the most relevant repo context first such as `README.md`, `specs/`, and nearby code.
2. Explore only enough code to understand the current state, constraints, and likely touch points.
3. Ask the minimum number of clarifying questions needed to remove ambiguity.
4. Present the result in compact sections:
   - Goal
   - Current state
   - Proposed approach
   - Open questions or trade-offs
5. End with a clear approval prompt or a small set of options.

## Rules

- Do not write code unless the user explicitly asks to skip planning.
- Prefer concrete file and system references over abstract design talk.
- Keep the scope narrow enough that it can become a practical implementation plan.
- If one approach is clearly better, recommend it instead of presenting fake symmetry.
