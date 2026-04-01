---
id: implementation-seo-and-organic-content-engine
title: SEO and Content Engine Implementation Notes
status: draft
owner: engineering
---

# SEO and Content Engine Implementation Notes

## Scope

Implement technical SEO foundations and a lightweight publishing system for evergreen articles that target organic travel demand.

## Likely Touch Points

- `astro.config.mjs`
- `public/robots.txt`
- `src/modules/Layout/index.astro`
- `src/modules/HomePage/index.astro`
- `src/modules/PropertyPage/index.astro`
- `src/pages/contact.astro`
- `src/pages/articles/index.astro`
- `src/pages/articles/[slug].astro`
- `src/content/config.ts`
- `src/content/articles/*.md`

## Constraints

- Keep page shell ownership in Astro modules and avoid heavy client JS for article routes.
- Reuse the existing layout and header so content pages fit current site navigation.
- Keep content schema minimal so non-technical authors can publish quickly.

## Proposed Sequence

1. Add site URL + sitemap integration and publish robots policy.
2. Upgrade global layout to support per-page metadata and optional JSON-LD.
3. Apply page-specific metadata/structured data to core commercial pages.
4. Add typed Astro content collection for articles plus template/example entries.
5. Add article index and detail routes with SEO-ready metadata and schema.
6. Add internal links from navigation so article pages are discoverable.
7. Validate with build + manual checks for sitemap output and metadata tags.

## Content Production Workflow (Weekly)

1. **Keyword intake (Monday):**
   - Pull 5-10 long-tail keywords from Search Console, Ahrefs, or Semrush.
   - Prioritize by intent overlap with bookings (family stays, beaches, itineraries, local travel logistics).
2. **Brief and outline (Tuesday):**
   - Create one article file from `src/content/articles/_template.md`.
   - Set title/description/date/tags and draft a practical H2 outline.
3. **Write and optimize (Wednesday):**
   - Include first-hand local detail, concise scannable sections, and at least 2 internal links.
   - Add 3-5 FAQ items when relevant for long-tail query capture.
4. **Publish (Thursday):**
   - Set `draft: false`.
   - Confirm the article appears in `/articles` and has correct metadata.
5. **Measure and iterate (Friday):**
   - Track impressions/clicks in Search Console and iterate titles/descriptions on underperforming posts.

## Editorial Rules for Organic Growth

- Prefer evergreen local intent topics over broad generic travel posts.
- Aim for one primary keyword + 3-5 semantically related phrases per article.
- Keep intros short; front-load practical answers.
- Link each article to a relevant property or booking-oriented page.
- Refresh top-performing articles quarterly (`updatedDate`) to preserve rankings.
