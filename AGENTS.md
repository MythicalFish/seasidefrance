# Seaside France

## Cursor Cloud specific instructions

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Astro dev server | `npm run dev` | 4321 | Main dev server; hot-reloads `.astro`, `.tsx`, `.css` changes |

No databases, Docker, or external backend services are required. All property data comes from pre-fetched fixture JSON files in `src/data/_fixtures/`.

### Running the dev server

```sh
npm run dev
```

The site is accessible at `http://localhost:4321/`.

### Build

```sh
npm run build
```

The build generates ~5000 optimized images and takes several minutes. Output goes to `dist/`.

### Linting / Formatting

- No ESLint is configured. Prettier is available with `npx prettier --check "src/**/*.{ts,tsx,astro,css}"` and `npx prettier --write` to auto-fix.
- No `lint` or `check` npm scripts exist; run Prettier directly.
- Pre-existing formatting warnings exist in auto-generated SDK files under `src/lib/lodgify-sdk/` — these are not regressions.

### Gotchas

- The `@api/lodgify` devDependency in `package.json` references a local path (`.api/apis/lodgify`) that was removed from the repo. `npm install` still succeeds because no source code imports it. Do not re-add the directory.
- External API calls (Lodgify, OpenAI, Google Maps) require API keys not present in the repo. The dev server works without them because fixture data is checked in. Only the `npm run fetch-*` and `npm run generate-about` scripts need live API keys.
- `npm run build` clears `.cache/` before building. Image optimization is the slowest step.
