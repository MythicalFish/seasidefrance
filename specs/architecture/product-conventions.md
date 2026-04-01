---
id: product-conventions
title: Product Conventions
status: draft
owner: product
---

# Product Conventions

Use these conventions when writing or updating product-facing specs.

## Product Spec Shape

Each feature spec should usually contain:

1. `## Purpose`
2. `## Current State`
3. `## Target State`
4. `## Acceptance Criteria`

## What Belongs In Product Specs

- user-visible behavior
- interaction flows
- constraints and non-goals
- prioritized requirements
- acceptance criteria

## What Does Not Belong In Product Specs

- exhaustive file lists
- internal migration sequencing
- temporary implementation workarounds
- tool-specific instructions for a single coding assistant

Put those in `specs/implementation/` instead.

## Backlog Conventions

- Backlog items live in `specs/product/backlog/`.
- Use frontmatter `status` values such as `backlog`, `active`, or `done`.
- Keep backlog items framed as opportunities or proposals, not partial implementation plans.
