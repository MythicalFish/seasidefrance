---
name: review
description: Optional final review pass for recent changes. Use when the user asks for a review, wants extra confidence, or when a risky change deserves one more pass for bugs, regressions, edge cases, and missing verification.
---

# Review

Use this skill as an optional quality pass after implementation.

## Workflow

1. Read the changed files and the approved scope or plan.
2. Check for bugs, behavioral regressions, edge cases, and missing verification.
3. Confirm the changes still match the intended scope and project conventions.
4. Report findings in severity order, with concise references and reasoning.
5. If there are no findings, say so clearly and mention any residual risk or testing gaps.

## Rules

- Findings come first. Keep summaries brief.
- Focus on correctness, risk, and maintainability, not stylistic nitpicks.
- Do not invent issues to make the review look useful.
- Treat this as optional guidance, not a hard gate before completion.
