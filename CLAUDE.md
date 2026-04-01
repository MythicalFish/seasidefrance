# Seaside France

This repository is an Astro site for Seaside France. It combines server-rendered `.astro` pages and modules with React islands for interactive booking and search flows.

## Stack

- Astro
- React islands
- Tailwind CSS
- CSS modules
- TypeScript
- Nanostores for shared client-side search state

## Repository Map

- `src/pages/` route entry points
- `src/modules/` page-level compositions and feature modules
- `src/components/` shared UI components
- `src/lib/` utilities, API integration helpers, and scripts
- `src/data/` local data access and fixtures
- `src/stores/` client-side shared state
- `src/styles/` global styles, tokens, and shared CSS
- `public/` static assets
- `specs/` product, implementation, design, and architecture docs

## Working Conventions

- Keep `src/pages/` thin. Prefer importing a page module such as `@modules/HomePage/index.astro`.
- Use `.astro` for layout shells, static composition, and server-side data preparation.
- Use `.tsx` for interactive components, browser event handling, and store-driven UI.
- Prefer path aliases from `tsconfig.json` such as `@components/*`, `@modules/*`, `@lib/*`, `@data/*`, and `@stores/*`.
- Use Tailwind utilities for layout and simple styling; use `styles.module.css` for component-specific styling that should stay local.
- When adding a React component with custom styling, create a folder named after the component with `index.tsx` and `styles.module.css`.
- Keep files focused and extract sub-components or helpers before a file becomes hard to scan.

## Existing Patterns

- Layout and document-level imports live in `src/modules/Layout/index.astro`.
- Pages often hand off immediately to a module in `src/modules/`.
- Interactive booking UI is implemented in React under `src/modules/Availability/` and related components.
- Shared UI elements such as buttons, maps, modals, and cards live in `src/components/`.

## Commands

- `npm run dev` starts the Astro dev server
- `npm run build` creates a production build
- `npm run preview` previews the built site
- `npm run fetch-properties`
- `npm run fetch-roomInfo`
- `npm run fetch-images`
- `npm run compress-images`
- `npm run generate-pages`
- `npm run generate-about`
- `npm run download-thumbnails`

## Specs Workflow

For non-trivial work:

1. Read the most relevant file in `specs/product/features/`
2. Read the corresponding file in `specs/implementation/` if it exists
3. Read `specs/design/README.md` for UI changes
4. Read `specs/architecture/engineering-conventions.md` for repository-wide rules

If a substantial behavior or architecture change has no spec yet, add one before or during implementation.

## Debugging

```ts
console.log("🟢 thing", thing);
```
