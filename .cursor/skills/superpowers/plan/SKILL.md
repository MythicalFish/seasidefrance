---
name: plan
description: Turn approved scope into a concrete implementation plan. Use after the direction is agreed on and before coding non-trivial work. Break the work into small ordered tasks with explicit files, intent, and verification steps.
---

# Plan

Use this skill after the user agrees on the direction and before substantial coding begins.

## Workflow

1. Re-read the approved scope and the relevant code or specs.
2. Break the work into small ordered tasks that can be executed safely.
3. For each task, include:
   - Files or folders to touch
   - What will change and why
   - How to verify the step
4. Call out notable risks, dependencies, or decision points.
5. End with a plan the user can approve quickly.

## Rules

- Prefer 3-8 meaningful tasks over a huge checklist.
- Make the plan specific enough to execute, but not so detailed that it becomes brittle.
- Do not include TDD or git worktree steps unless the user explicitly asks for them.
- If the request is already tiny and explicit, skip this skill and implement directly.
- Do not start implementation until the user approves or explicitly asks you to proceed.
