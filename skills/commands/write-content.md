---
name: write-content
description: Write SEO and GEO optimized content from a topic and target keyword
argument-hint: "<topic> keyword=\"<target keyword>\" type=\"<content type>\""
parameters:
  - name: topic
    type: string
    required: true
    description: Content topic
  - name: keyword
    type: string
    required: true
    description: Primary SEO target keyword
  - name: type
    type: string
    required: false
    description: "Content type (default: blog post). Options: blog post, how-to guide, comparison, listicle, landing page, ultimate guide"
---

# Write Content Command

Writes search-engine-optimized content, then applies a GEO optimization pass for AI citability.

## Usage

```
/seo:write-content "emergency plumber sydney" keyword="emergency plumber sydney" type="landing page"
/seo:write-content "how to fix a blocked drain" keyword="blocked drain repair" type="how-to guide"
/seo:write-content "tradesperson A vs tradesperson B" keyword="best plumber sydney" type="comparison"
```

## Workflow

1. **Run SEO Content Writer** — Invoke `seo-content-writer` with topic, keyword, and type.
2. **Run GEO Content Optimizer** — Pass draft to `geo-content-optimizer` for AI citability pass.
3. **Compile Final Output** — Assemble deliverables with meta, scores, and GEO notes.

## Output Format

```markdown
# [Final Optimized Title]

**Meta Description**: "[description]" ([X] chars)
**Primary Keyword**: [keyword] | **Content Type**: [type]

---

[Full written content with GEO enhancements applied]

---

## SEO Metadata
| Title Tag | Meta Description | URL Slug | Keywords | Word Count |

## CORE Self-Check Scores
| C | O | R | E | GEO Score avg |

## GEO Optimization Notes
| GEO Factor | Score (1-10) | Notes |
**GEO Readiness**: X/10
```

## Related Skills
- `build/seo-content-writer` — SEO content creation
- `build/geo-content-optimizer` — GEO optimization pass
- `research/keyword-research` — research keywords before writing
