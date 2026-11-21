# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed via npm in the project root (`node_modules/puppeteer`). Chrome is managed by Puppeteer automatically.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## SEO / GEO — Local Service Pages (added 2026-06-22)

Goal: rank Optic Plumbing for Concord service searches and earn AI-answer citations.
Model = **one suburb (Concord), many services**, hub-and-spoke. Scale later by repeating
the winning template into neighbouring suburbs (Concord West, Five Dock, Drummoyne, etc.).

**The deep how-to lives in the `skills/` folder — not in this file.** For each page, use the
SEO skills (they hold the full instructions):
- `/seo:keyword-research` — once per service cluster
- `/seo:write-content` — draft the page
- `/seo:generate-schema` — Plumber/LocalBusiness + Service + FAQPage
- `/seo:optimize-meta` — title tag + meta description
- `/seo:audit-page` + `/seo:check-technical` — verify before calling a page done

**Hard rules — every page, no exceptions:**
- Each service = its own HTML file at its own clean URL (e.g. `/burst-pipe-concord`),
  never one mega-page. A per-page URL + meta is the whole point.
- Unique title tag, meta description, and H1 per page, built around that page's keyword.
  Never reuse them across pages.
- Optimise at the moment of creation — never "SEO it later."
- **Differentiate or get flagged:** write each page around that service's real problem
  (symptoms, causes, urgency, process, price band). No find-and-replace clones. If two
  pages share the same search intent, they are ONE page (hot water replacement = hot
  water system, so pick one).
- Schema on every page: LocalBusiness/Plumber + Service + a service-specific FAQPage
  (this is the AI-citation / GEO play).
- Internal linking: every service page links UP to the "Plumber Concord" hub and ACROSS
  to related services (blocked drain ↔ jet blasting ↔ CCTV ↔ tree roots).
- Add every new page to the nav across all HTML files **in the same session it is created** —
  no orphan pages.
- Add every new page to `sitemap.xml`.
- Hero paragraph must stay visible on mobile — never `display:none` it (mobile-first indexing).
- Images: WebP + descriptive alt text.

**Page plan / topic map:** kept in a SEPARATE file, never inline in this CLAUDE.md (keeps
this file lean so it loads fully every session). Build and extend the map there, not here.
