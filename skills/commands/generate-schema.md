---
name: generate-schema
description: Generate Schema.org JSON-LD structured data markup for a page
argument-hint: "<schema type> for <content description>"
allowed-tools: ["WebFetch"]
parameters:
  - name: schema_type
    type: string
    required: true
    description: "Schema type: FAQ, HowTo, Article, Product, LocalBusiness, Organization, Breadcrumb, Review, Event, Video"
  - name: source
    type: string
    required: false
    description: URL, pasted content, or description of the content
---

# Generate Schema Command

Generates valid **Schema.org JSON-LD** structured data markup to enhance search visibility and enable rich results.

## Usage

```
/seo:generate-schema FAQ for emergency plumbing FAQ page
/seo:generate-schema LocalBusiness for example.com
/seo:generate-schema HowTo for unblocking a kitchen sink guide
/seo:generate-schema Article for https://example.com/blog/plumbing-guide
```

**Schema types:** FAQ, HowTo, Article, Product, LocalBusiness, Organization, Breadcrumb, Review, Event, Video

## Workflow

1. **Identify Schema Requirements** — Parse schema type, fetch URL if provided, determine if secondary types help.
2. **Generate Schema Markup** — Invoke `schema-markup-generator`. Select most specific type, collect required + recommended properties, generate valid JSON-LD.
3. **Compile Output** — Ready-to-paste markup with validation results and implementation instructions.

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCHEMA.ORG MARKUP GENERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCHEMA TYPE: [SchemaType]
RICH RESULT ELIGIBLE: [Yes/No]

GENERATED MARKUP:
[Complete JSON-LD markup — ready to paste]

VALIDATION RESULTS:
[JSON syntax, required properties, data types, Google requirements]

IMPLEMENTATION:
1. Add JSON-LD to page <head> in a <script type="application/ld+json"> tag
2. Test: https://search.google.com/test/rich-results
3. Submit URL in Google Search Console
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Related Skills
- `build/schema-markup-generator` — full schema markup generation skill
