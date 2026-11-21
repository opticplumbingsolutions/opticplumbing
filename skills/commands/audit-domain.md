---
name: audit-domain
description: Run a full CITE domain authority audit with 40-item scoring, veto checks, and prioritized action plan
argument-hint: "<domain>"
parameters:
  - name: domain
    type: string
    required: true
    description: Domain to audit (e.g., example.com)
  - name: type
    type: string
    required: false
    description: "Domain type: Content Publisher, Product & Service, E-commerce, Community & UGC, Tool & Utility, Authority & Institutional"
  - name: competitors
    type: string
    required: false
    description: Competitor domains for comparison (space-separated)
---

# Audit Domain Command

A comprehensive **CITE 40-item domain authority** audit with veto checks. Full reference: `references/cite-domain-rating.md`.

## Usage

```
/seo:audit-domain example.com
/seo:audit-domain example.com type="Product & Service"
/seo:audit-domain example.com vs competitor1.com competitor2.com
```

## Workflow

1. **Identify Domain Type** — Classify using decision tree (e.g., a plumbing or trade business = "Product & Service").
2. **Run Full CITE Audit** — Invoke `domain-authority-auditor`. Veto check first, then score all 40 items, calculate weighted CITE Score.
3. **Compile Output** — Format with dimension scores, veto status, action plan, and competitor comparison if provided.

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CITE DOMAIN AUTHORITY AUDIT: [Domain]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOMAIN TYPE: [Type]
CITE SCORE: [X]/100 ([Rating])
VETO STATUS: Pass / MANIPULATION ALERT

DIMENSION SCORES:
Citation      [████████░░] XX/100  (weight: 25%)
Identity      [████████░░] XX/100  (weight: 30%)
Trust         [████████░░] XX/100  (weight: 25%)
Eminence      [████████░░] XX/100  (weight: 20%)

TOP 5 IMPROVEMENTS (by weighted impact):
1. [Issue] — [action] (potential: +X pts)
...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Related Skills
- `cross-cutting/domain-authority-auditor` — full CITE audit skill
