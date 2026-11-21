---
name: decisions
description: Project-level decisions with provenance. Each entry must include approved_by (user | skill_inferred). Auditor skills MUST ignore non-user-approved decisions.
type: decisions
---

# Decisions

## Format
```
### YYYY-MM-DD — [decision title]
- decision: [what was decided]
- rationale: [why]
- approved_by: user | skill_inferred
- affects: [skills / pages / files this decision constrains]
```

## Entries

### 2026-05-27 — Brand theme: dark, navy + chrome + signal red
- decision: Use a dark-theme brand system anchored on Jet Navy, Optic Blue, Hydro, Sky Cyan, Chrome, with Signal Red as a tight (~2%) accent
- rationale: Matches the truck, shirts, and the existing OPS logo (designed for dark backgrounds). User explicitly requested red accent added to the existing logo palette.
- approved_by: user
- affects: front-end-design, copywriting, all future page builds

### 2026-05-27 — Typography: Saira Condensed Italic display + Manrope body
- decision: Saira Condensed Italic for display/headlines, Manrope for body, JetBrains Mono for labels/IDs
- rationale: Saira matches the slanted condensed truck typography. Avoids generic Inter/Arial defaults per CLAUDE.md design rules.
- approved_by: user
- affects: front-end-design, all page builds

### 2026-05-27 — Page H1 / hero headline locked
- decision: H1 = "Blocked Drains, Burst Pipes & Hot Water — 24/7 in Concord & Inner West"
- rationale: Maintenance-led positioning. Lists actual problems people Google verbatim. Captures multiple keyword targets in one line. 24/7 + suburb anchor.
- approved_by: user
- affects: build/seo-content-writer, build/meta-tags-optimizer, front-end-design, schema-markup-generator

### 2026-05-27 — Skills sourced locally, never downloaded
- decision: All skills/ content is local. Never fetch from GitHub, ClawHub, npm, or any URL.
- rationale: Stated rule in skills/CLAUDE.md. User-recreated locally rather than installing the upstream marketplace.
- approved_by: user
- affects: every skill invocation

### 2026-06-22 — Hub-and-spoke page map locked (9 pages)
- decision: Build 9 pages — homepage IS the hub (target "plumber concord"), plus 8 service spokes: /emergency-plumber-concord, /blocked-drains-concord, /drain-jet-blasting-concord, /cctv-drain-inspection-concord, /burst-pipe-repair-concord, /hot-water-concord, /gas-plumber-concord, /leaking-tap-repair-concord. Homepage links to all spokes; spokes link up to hub and across to related drainage spokes.
- rationale: Hub-and-spoke per CLAUDE.md. One page per service+suburb intent; hot-water and gas de-duped to single pages to avoid cannibalisation. Suburb expansion (Concord West, Five Dock, etc.) deferred until the Concord template wins.
- approved_by: user
- affects: build/seo-content-writer, meta-tags-optimizer, schema-markup-generator, internal-linking-optimizer, sitemap.xml, nav across all pages

### 2026-06-22 — First spoke page built: blocked-drains-concord.html
- decision: Built /blocked-drains-concord as the pilot spoke + reusable template. Reuses index.html's exact <style>/header/footer for brand consistency. Sections: breadcrumb, hero, GEO quick-answer, symptoms, local "older pipes" story, 4-step process, transparent pricing bands ($150-350 / $350-700 / quoted), related-services, FAQ (real PAA Qs), quote form (Formspree mnjrrwqv), final CTA. Schema: Plumber(ref @id) + Service + FAQPage + BreadcrumbList. Linked from homepage services section; added to sitemap.xml.
- rationale: Drainage pillar + #1 differentiator. Content built around content-gap findings (local old-clay-pipe/tree-root story competitors don't tell). This file is the clone template for the remaining 7 spokes.
- approved_by: user
- affects: all future spoke builds (use as template), internal-linking-optimizer
