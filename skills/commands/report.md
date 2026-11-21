---
name: report
description: Generate a comprehensive SEO and GEO performance report for a domain or period
argument-hint: "<domain> <time period>"
parameters:
  - name: domain
    type: string
    required: false
    description: "Single domain to report on (e.g., example.com)"
  - name: period
    type: string
    required: true
    description: "Time period: last-month, last-quarter, last-30-days, last-90-days, or YYYY-MM-DD to YYYY-MM-DD"
  - name: comparison
    type: string
    required: false
    description: "Comparison period: vs previous-quarter, vs last-year, vs previous-period"
  - name: format
    type: string
    required: false
    description: "Output format: detailed (default) or executive (condensed for stakeholders)"
---

# Report Command

A comprehensive **SEO and GEO performance report** that aggregates data across all channels, identifies trends, and delivers actionable recommendations.

## Usage

```
/seo:report example.com last-month
/seo:report example.com last-quarter vs previous-quarter
/seo:report example.com last-30-days format=executive
```

## Workflow

1. **Generate Performance Report** — Invoke `performance-reporter` with domain, period, and comparison.
2. **Include CITE/CORE-EEAT Context** — Include latest domain and content quality scores if available from prior audits.
3. **Compile Output** — Full report or executive summary.

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO & GEO PERFORMANCE REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOMAIN: [domain]
PERIOD: [date range]

EXECUTIVE SUMMARY:
- Key wins / Critical concerns / Strategic recommendations

ORGANIC SEARCH:
- Traffic trends, keyword rankings, new/lost keywords

GEO VISIBILITY:
- AI citation status across Google, ChatGPT, Perplexity, Claude

TECHNICAL HEALTH:
- Core Web Vitals, crawl errors, indexation

PRIORITY ACTION PLAN:
1. [Highest impact action]
...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Related Skills
- `monitor/performance-reporter` — full performance reporting skill
- `monitor/rank-tracker` — keyword ranking data
