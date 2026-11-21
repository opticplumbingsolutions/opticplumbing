---
name: audit-page
description: Run a comprehensive on-page SEO + CORE-EEAT content quality audit for a given URL or content
argument-hint: "<URL or paste content>"
allowed-tools: ["WebFetch"]
parameters:
  - name: source
    type: string
    required: true
    description: URL to audit or pasted content
  - name: keyword
    type: string
    required: false
    description: Target keyword for relevance scoring
---

# Audit Page Command

A combined **on-page SEO** + **CORE-EEAT content quality** audit. Full reference benchmark: `references/core-eeat-benchmark.md`.

## Usage

```
/seo:audit-page https://example.com
/seo:audit-page https://example.com/services keyword="emergency plumber sydney"
/seo:audit-page [paste content here] targeting "keyword"
```

## Workflow

1. **Run On-Page SEO Audit** — Invoke `on-page-seo-auditor` with URL/content and target keyword. Scores 8 areas (Title, Meta Description, Headers, Content, Keywords, Links, Images, Technical).
2. **Run CORE-EEAT Content Quality Audit** — Invoke `content-quality-auditor`. Veto check first, then score all 80 items across 8 dimensions. Calculate GEO Score (CORE) and SEO Score (EEAT).
3. **Compile Output** — Merge both results. Generate priority-ranked action list by severity (Critical / Important / Minor).

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ON-PAGE SEO AUDIT: [Page Title or URL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERALL SCORE: XX/100
[████████████████████░░░░░░░░░░░░░░░░░░░░] XX%

SECTION SCORES: [8 area scores with bar charts]

PRIORITY ACTION LIST: CRITICAL / IMPORTANT / MINOR items with specific fixes

CORE-EEAT CONTENT QUALITY:
Content Type: [type]
Veto Status: Pass / Fail [item]
GEO Score (CORE): XX/100    SEO Score (EEAT): XX/100

Dimension Scores:
Contextual Clarity   [████████░░] XX/100
Organization         [████████░░] XX/100
Referenceability     [████████░░] XX/100
Exclusivity          [████████░░] XX/100
Experience           [████████░░] XX/100
Expertise            [████████░░] XX/100
Authority            [████████░░] XX/100
Trust                [████████░░] XX/100
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Related Skills
- `optimize/on-page-seo-auditor` — on-page SEO detail
- `cross-cutting/content-quality-auditor` — full 80-item CORE-EEAT audit
