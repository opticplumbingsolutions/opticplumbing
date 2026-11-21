---
name: optimize-meta
description: Optimize title tags, meta descriptions, and Open Graph tags for a page
argument-hint: "<URL or page details>"
parameters:
  - name: source
    type: string
    required: true
    description: URL or page details to optimize
  - name: keyword
    type: string
    required: false
    description: Target keyword
  - name: mode
    type: string
    required: false
    description: "Set to 'a/b-test' to generate multiple variants for testing"
---

# Optimize Meta Command

Analyzes and enhances **title tags, meta descriptions, and social media tags** to maximize click-through rates.

## Usage

```
/seo:optimize-meta https://example.com keyword="emergency plumber sydney"
/seo:optimize-meta https://example.com/services/drainage keyword="blocked drain repair"
/seo:optimize-meta title="Current Title" keyword="target keyword" mode="a/b-test"
```

## Workflow

1. **Analyze Current Meta Tags** — Invoke `meta-tags-optimizer`. Evaluates title tag, meta description, OG/Twitter tags for length, keyword placement, CTR appeal.
2. **Generate Optimized Variants** — Produce 3-5 title variants and 3-5 meta description variants with scoring.
3. **Compile Output** — Before/after comparison, implementation HTML, A/B test recommendations if requested.

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
META TAG OPTIMIZATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CURRENT: TITLE: X/10 | META DESC: X/10 | SOCIAL TAGS: X/10

OPTIMIZED TITLE TAG VARIANTS: RECOMMENDED + 2-3 alternatives

OPTIMIZED META DESCRIPTION VARIANTS: RECOMMENDED + 1-2 alternatives

IMPLEMENTATION CODE:
[Copy-paste HTML: title, meta description, OG tags, Twitter Card]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Tips
- Front-load primary keyword in first half of title tag
- Add "Sydney" to titles for local SEO boost
- Include one clear CTA in every meta description
- Add year to title tags for recurring topics (+3-8% CTR)

## Related Skills
- `build/meta-tags-optimizer` — full meta tag optimization workflow
