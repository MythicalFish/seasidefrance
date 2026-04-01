---
name: cleanup
description: Refactor code for composition, naming clarity, smaller files, simpler data flow, and leaner interfaces. Use when the user asks for cleanup, refactoring, simplification, or when files and abstractions have grown hard to work with.
---

# Cleanup

Apply this skill when refactoring or cleaning up code. Prioritize composition, naming clarity, and small focused files.

## Core Principles

1. Code composition: each unit should have one clear responsibility.
2. Naming: prefer simple names that reveal intent.
3. File size: keep files small. Split early when a file becomes hard to scan.
4. Separation: new non-trivial logic should usually live in its own file.
5. Utilities: keep helpers focused and testable.
6. Minimal shape: return only the data downstream consumers actually need.
7. Low indirection: remove thin wrappers and pass-through layers when they do not add a real boundary.

## File And Structure Rules

- One component per file.
- When a React component needs custom styles, use a component folder with `index.tsx` and `styles.module.css`.
- Extract sub-components when JSX becomes large or contains multiple clear sections.
- Move non-trivial logic out of UI files into utilities, hooks, or typed modules where that improves readability.
- When in doubt, create a new focused file instead of extending an overloaded one.

## Simplification Heuristics

- Trace the full input-to-output path before changing structure.
- Inline thin wrappers when they mostly forward to the next function.
- Trim unused fields from return types and intermediate objects.
- Prefer flatter shapes when nested wrappers are not buying anything.
- Delete orphaned parameters, helpers, and plumbing after simplifying a flow.

## Imports

- Prefer project aliases from `tsconfig.json` when available instead of long relative import chains.

## Refactoring Workflow

1. Identify the main sources of complexity.
2. Trace the current data or control flow.
3. Split files or responsibilities where natural boundaries already exist.
4. Simplify types, returns, and control flow.
5. Rename for clarity.
6. Verify that the resulting shape is easier to change and still matches project conventions.
