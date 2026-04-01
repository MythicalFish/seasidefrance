# Seaside France

Seaside France is an Astro site for showcasing and booking stays in France. The repo uses Astro for page composition and server-rendered content, with React islands for interactive booking and availability flows.

## Stack

- Astro
- React
- Tailwind CSS
- CSS modules
- TypeScript
- Nanostores

## Project Structure

```text
/
├── public/
├── specs/
├── src/
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── modules/
│   ├── pages/
│   ├── stores/
│   └── styles/
├── CLAUDE.md
└── package.json
```

## Working Conventions

- Keep `src/pages/` thin and hand off to page modules in `src/modules/` when possible.
- Use `.astro` for layout shells, page composition, and server-side data preparation.
- Use `.tsx` for interactive UI, browser state, and store-driven behavior.
- Use path aliases from `tsconfig.json` such as `@components/*`, `@modules/*`, `@lib/*`, `@data/*`, and `@stores/*`.
- Prefer Tailwind for layout and simple styling, and CSS modules for component-specific styling.

## Commands

Run commands from the repository root:

| Command | Action |
| :------ | :----- |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build locally |
| `npm run fetch-properties` | Fetch property data |
| `npm run fetch-roomInfo` | Fetch room information |
| `npm run fetch-images` | Fetch remote images |
| `npm run compress-images` | Compress downloaded images |
| `npm run generate-pages` | Generate property pages |
| `npm run generate-about` | Generate about content |
| `npm run download-thumbnails` | Download thumbnails |

## Documentation

- `CLAUDE.md` contains repo-specific working guidance for coding agents.
- `specs/` contains product, implementation, design, and architecture documentation.
- `specs/architecture/engineering-conventions.md` is the main cross-cutting implementation guide.

## Development Notes

- Astro is configured with the React and Tailwind integrations.
- The app uses responsive images and constrained Astro image layouts.
- Shared interactive search state lives in `src/stores/`.
