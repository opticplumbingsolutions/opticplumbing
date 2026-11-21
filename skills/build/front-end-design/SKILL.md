---
name: frontend-design
description: Bespoke frontend engineering focused purely on aesthetic excellence. Invoke for web components, pages, dashboards, applications, or any UI requiring distinctive visual execution. Outputs functional code with intentional aesthetic direction and creative craft.
version: "1.0.0"
license: MIT
homepage: "https://github.com/Ilm-Alan/frontend-design"
when_to_use: "Use when building or redesigning web pages, landing pages, or UI components where visual quality matters. Use when pages look generic or 'AI-made'. Use for suburb pages, service pages, comparison pages, marketing pages."
---

# Frontend Design Skill

## Core Thesis

Great frontend design is disciplined translation: a clear, context-specific aesthetic intent (archetype + one differentiator) translated into a coherent system of typography, color tokens, layout, motion, and texture.

---

## 1. Operating Mode

Before writing code, complete this sequence:

1. **Context**: Identify purpose, users, domain, and content density. Output a clear problem statement.
2. **Aesthetic Direction**: Select one archetype from Section 2 and state it explicitly.
3. **Differentiator**: Define one memorable anchor — a signature interaction, typographic move, layout motif, texture, or material treatment.
4. **System**: Define tokens and rules: type scale, spacing rhythm, palette mapping, elevation levels.
5. **Implementation**: Outline structure and interaction model, then build.

**Directive:** Commit fully to the chosen direction. Do not average multiple styles into a bland middle. Hybridize only when you can articulate the governing rule for the hybrid.

---

## 2. Aesthetic Archetypes

Select one archetype as the foundation:

- **Editorial / Magazine**: Strong typographic hierarchy, generous whitespace, refined grid. Pull quotes, drop caps, column layouts, serif display type.
- **Swiss / International**: Geometric precision, sans-serif dominance, systematic spacing. Strict grids, Akzidenz/Helvetica lineage, asymmetric balance.
- **Brutalist / Raw**: Exposed structure, high contrast, anti-decorative. Monospace type, visible borders, raw HTML aesthetic.
- **Minimalist / Refined**: Restraint, micro-contrast, meticulous spacing. Limited palettes, ample whitespace, subtle shadows, precise alignment.
- **Maximalist / Expressive**: Layered composition, bold color, dynamic motion. Overlapping elements, animated gradients, complex grid breaks.
- **Organic / Natural**: Soft geometry, earthy palettes, tactile texture. Rounded shapes, grain overlays, warm tones.
- **Industrial / Utilitarian**: Functional aesthetic, monochrome, dense grids. Data-heavy layouts, no ornamentation.

**Archetype selection rule:** Choose the archetype that matches the project's brand guidelines (if available in `brand_assets/` or a brand-guidelines doc). If none exist, ask the user before defaulting. Never invent brand colours — pull them from the project's guidelines or logo.

---

## 3. Technical Implementation

### 3.1 Typography
Choose typefaces that reinforce the archetype — avoid Inter, Roboto, Arial, system stacks.
Establish hierarchy: distinct display/body pairing with 3–5 clear levels.
Use `clamp()` for fluid responsive scaling: `font-size: clamp(1rem, 2.5vw, 1.5rem)`
Tune `line-height`: 1.4–1.6 for body, 1.1–1.2 for display type.

### 3.2 Color System
Structure palette with CSS custom properties:
```css
--color-surface, --color-text, --color-muted,
--color-primary (#0b61f4), --color-accent (#EAAF00),
--color-border, --color-success, --color-warning, --color-error
```
Distribution: dominant (60%) + supporting (30%) + accent (10%).

### 3.3 Motion & Interaction
Motion must communicate state, hierarchy, or affordance — never decoration alone.
Use custom `cubic-bezier()` timing; avoid `linear` for UI transitions.
Stagger page-load sequences with 50–100ms `animation-delay` offsets.
Use `IntersectionObserver` for scroll-triggered animations.

### 3.4 Spatial Composition
CSS Grid for 2D layouts, Flexbox for linear distribution.
Define spacing scale: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
Treat whitespace as structural. Create hierarchy through dramatic scale contrast (4:1 heading-to-body).
Break the grid intentionally — overlap with `position: absolute/relative` for purposeful disruption.

### 3.5 Visual Depth & Texture
Multi-value `box-shadow` for realistic depth. Define elevation: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
Gradients with intention — no generic purple→blue linears.
`clip-path` for non-rectangular shapes where appropriate.

---

## 4. Anti-Patterns — Explicitly Avoid

- **Typography**: Never system font stacks, Inter, Roboto, or uniform sizing
- **Color**: No purple-on-white gradients, evenly distributed palettes, low contrast
- **Layout**: No centered card grids, predictable hero→cards→testimonials→footer
- **Motion**: No gratuitous animations, linear easing, motion without purpose
- **Details**: No stock illustrations or generic icons
- **Structure**: Every visible element must be intentional

---

## 5. Output Contract

Every implementation delivers:
- **Stated Direction**: Name the archetype and differentiator in 1–2 lines before code
- **Working Code**: Functional code demonstrating the aesthetic direction
- **Design Tokens**: CSS custom properties for colors, spacing, typography, shadows
- **Responsiveness**: Fluid layout, breakpoints, or container queries

---

## 6. Finish Checklist

- [ ] Archetype fidelity — does every visual choice reinforce it?
- [ ] Differentiator implemented (not just described)?
- [ ] Token coherence across typography, spacing, and color?
- [ ] Responsive across mobile, tablet, and wide desktop?
- [ ] No generic scaffolding remaining?

---

Intention in every choice. Precision in every detail. Nothing left to default.
