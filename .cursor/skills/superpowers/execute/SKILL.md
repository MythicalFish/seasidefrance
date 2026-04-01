---
name: execute
description: Execute an approved implementation plan in small verified batches. Use after the user approves a non-trivial plan, or when the request already includes a clear plan to follow.
---

# Execute

Use this skill to carry an approved plan through completion.

## Workflow

1. Read the approved plan, relevant specs, and the files you will touch.
2. If the plan is missing and the task is not truly small, stop and create one first.
3. Implement in small batches with brief progress updates before major edits.
4. After each batch, run the lightest useful verification for the affected area.
5. Pause if a hidden dependency, architectural decision, or conflicting local change appears.
6. Finish with a concise summary of completed work, verification, and residual risk.

## Rules

- Prefer the smallest meaningful diff that satisfies the plan.
- Follow project conventions on file splitting, component structure, and imports.
- Add or update tests only when they materially reduce regression risk or the user asks.
- Use targeted verification such as lints, type checks, focused tests, or manual checks.
- Suggest `review` at the end when extra confidence would help.
