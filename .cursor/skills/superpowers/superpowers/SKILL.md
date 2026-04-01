---
name: superpowers
description: Lightweight staged delivery workflow for non-trivial work: brainstorm when needed, clarify scope, write an implementation plan, implement in batches, and optionally run a final review.
---

# Superpowers

Follow this sequence for non-trivial work:

1. Read the most relevant repo context such as `README.md`, `specs/`, issue notes, and nearby code.
2. If the user needs ideation or trade-off analysis, use `brainstorm`.
3. If the request is still fuzzy at the codebase level, use `scope`.
4. Once the direction is approved, use `plan`.
5. After the user approves the plan or says to proceed, use `execute`.
6. Offer `review` as an optional final pass when extra confidence would help.

## Guardrails

- Do not front-load process for tiny requests.
- Do not implement broad changes before the scope or plan is approved.
- Keep each phase lightweight and easy for the user to review.
- Treat brainstorming as a real design phase, not a token preamble before coding.
