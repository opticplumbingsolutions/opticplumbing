---
name: check-technical
description: Run a quick technical SEO health check for a given URL or domain
argument-hint: "<URL or domain>"
allowed-tools: ["WebFetch"]
parameters:
  - name: target
    type: string
    required: true
    description: URL or domain to check
---

# Check Technical Command

A focused **technical SEO health check** covering infrastructure, performance, and crawlability.

## Usage

```
/seo:check-technical example.com
/seo:check-technical https://example.com
/seo:check-technical https://example.com/services/emergency-plumbing
```

## Workflow

1. **Determine Scope** — Single page vs site-wide check based on input.
2. **Run Technical SEO Audit** — Invoke `technical-seo-checker`. Audits: crawlability, HTTPS/security, page speed/Core Web Vitals, mobile responsiveness, URL/redirect health, infrastructure.
3. **Compile Output** — Format with weighted overall score and prioritized action list.

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SEO CHECK: [URL or Domain]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERALL TECHNICAL SCORE: XX/100

SECTION SCORES:
[6 areas: Crawlability, HTTPS, Page Speed, Mobile, URL Health, Infrastructure]

CORE WEB VITALS:
LCP / INP / CLS / TTFB with pass/fail status

PRIORITY ACTION LIST:
CRITICAL / IMPORTANT / MINOR items with specific fixes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Related Skills
- `optimize/technical-seo-checker` — full technical SEO audit skill
