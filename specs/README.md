# Specs

This directory is the canonical home for product, implementation, design, and architecture documentation.

## Structure

- `milestones/` for grouped deliverables and project-level checklists
- `product/reference/` for domain explainers and reference material
- `product/features/` for user-facing feature requirements and acceptance criteria
- `product/backlog/` for future ideas and proposals
- `implementation/` for repository-specific technical notes, file touch points, and sequencing
- `design/` for visual language, tokens, and UI guidance
- `architecture/` for cross-cutting conventions and architecture docs

## Reading Order

For implementation work:

1. Read `product/reference/` when domain context is needed.
2. Read `product/features/<feature>.md`.
3. Read `implementation/<feature>.md` if it exists.
4. Read `design/README.md` for UI work.
5. Read `architecture/engineering-conventions.md` for repository rules.

## Conventions

- Product specs describe behavior, goals, and acceptance criteria.
- Product reference docs explain concepts and domain context.
- Implementation specs describe code touch points, sequencing, and technical notes.
- Milestone docs group work and track delivery status, but they do not define behavior themselves.
- Cross-cutting rules should live in `architecture/` instead of being repeated in every feature spec.
