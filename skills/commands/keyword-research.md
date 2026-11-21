---
name: keyword-research
description: Research and analyze keywords for a topic or niche
argument-hint: "<seed keyword or topic>"
parameters:
  - name: seed
    type: string
    required: true
    description: Seed keyword or topic
  - name: audience
    type: string
    required: false
    description: Target audience
  - name: goal
    type: string
    required: false
    description: "Business goal: traffic, leads, sales, awareness"
  - name: authority
    type: string
    required: false
    description: "Site authority level: low, medium, high"
  - name: competitors
    type: string
    required: false
    description: Competitor domains (comma-separated) for keyword gap analysis
---

# Keyword Research Command

Discovers high-value keywords from a seed topic, classifies intent, scores difficulty, and delivers a prioritized keyword strategy.

## Usage

```
/seo:keyword-research "water filter sydney"
/seo:keyword-research "water filtration" audience="Sydney homeowners" goal="leads" authority="low"
/seo:keyword-research "emergency plumber sydney" competitors="competitor1.com,competitor2.com"
```

## Workflow

1. **Run Keyword Research** — Invoke `keyword-research` skill with all arguments.
2. **Run Competitor Analysis** (if `competitors=` provided) — Invoke `competitor-analysis` for keyword gap.
3. **Compile Keyword Strategy Report** — Priority keyword list, GEO opportunities, topic clusters, content calendar.

## Output Format

```markdown
# Keyword Research Report: [Topic]

## Executive Summary
- Total keywords, high-priority opportunities, estimated traffic potential

## Quick Wins (Low difficulty, High value)
| Keyword | Volume | Difficulty | Intent | Score |

## Growth Keywords (Medium difficulty, High volume)
| Keyword | Volume | Difficulty | Intent | Score |

## GEO Opportunities (AI-citation potential)
| Keyword | Query Type | AI Potential | Recommended Format |

## Topic Clusters
**Pillar**: [keyword] + cluster keywords

## Competitive Keyword Gaps (when competitors= provided)
| Keyword | Competitor | Their Position | Opportunity |

## Content Calendar Recommendations
| Priority | Content Title | Target Keyword | Type | Est. Effort |
```

## Related Skills
- `research/keyword-research` — full keyword research skill
- `research/competitor-analysis` — competitive analysis
- `build/seo-content-writer` — write content for top keywords
