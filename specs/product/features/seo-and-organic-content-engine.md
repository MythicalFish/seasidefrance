---
id: seo-and-organic-content-engine
title: SEO Foundation and Organic Content Engine
status: draft
owner: product
---

# SEO Foundation and Organic Content Engine

## Purpose

Increase qualified organic traffic by improving technical SEO and introducing a repeatable article workflow targeting high-intent travel queries.

## Current State

- Core pages exist, but metadata is mostly static and canonical tags are not page-specific.
- There is no sitemap or robots policy.
- There is no dedicated article section or publishing template for search-led content.
- Internal linking to informational content is limited.

## Target State

- Every key page has meaningful title, description, canonical URL, social metadata, and relevant structured data.
- Search engines can crawl the site efficiently through sitemap + robots.
- The site has an `/articles` hub and article detail pages generated from structured content files.
- Content creators can publish new articles with a template-driven workflow.

## Acceptance Criteria

- [ ] Metadata and canonical URLs are page-aware across homepage, discover, contact, property pages, and article pages.
- [ ] Sitemap is generated at build time and robots points to the sitemap.
- [ ] Property and article pages emit valid JSON-LD schema.
- [ ] Article listing and article detail routes are available and backed by a typed content collection.
- [ ] A documented keyword-to-publish workflow exists for regular content production.
