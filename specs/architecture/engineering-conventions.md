---
id: engineering-conventions
title: Engineering Conventions
status: draft
owner: engineering
related:
  - specs/design/README.md
---

# Engineering Conventions

These are the cross-cutting repository rules that implementation work should follow.

## Repository Roots

- App code: `src/`
- Public assets: `public/`
- Product and implementation docs: `specs/`

## Implementation Rules

- Keep files small and focused. Split components and utilities early when a file becomes hard to scan.
- Use one component per file, and when a React component has custom styles, use a component folder with `index.tsx` and `styles.module.css`.
- Prefer aliases from `tsconfig.json` over long relative import chains when an alias exists.
- Keep page and layout shells in Astro where that is the simpler boundary, and keep interactive behavior in TSX islands or modules where appropriate.
- Prefer small pure utilities for business logic when possible.

## Verification Defaults

- Format touched files with Prettier.
- Build with `npm run build` when you need a production validation pass.
- Run focused script commands when working on content or data generation flows.
- Add project-specific typecheck, lint, or test commands here if they are introduced later.

## Spec Reading Order

For feature work:

1. Read `specs/product/features/<feature>.md`.
2. Read `specs/implementation/<feature>.md` when it exists.
3. Read `specs/design/README.md` for UI changes.
4. Read `README.md` for broader repository context.
