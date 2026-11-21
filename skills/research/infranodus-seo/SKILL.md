---
name: infranodus-seo
description: SEO content gap analysis using topical clustering and knowledge graph methodology. Finds gaps between what people search for and what currently exists in search results. Use for identifying content opportunities the project is missing, building topical authority maps, and LLMO (LLM mention optimisation).
version: "1.0.0"
license: MIT
homepage: "https://infranodus.com/skills/seo"
when_to_use: "Use when planning content strategy. Use to find content gaps the primary competitor isn't covering. Use to map topical authority for the project's category in its service area. Use before building a new batch of pages."
metadata:
  author: infranodus
  geo-relevance: "high"
  tags:
    - seo
    - content-gap
    - topical-authority
    - knowledge-graph
    - llmo
---

# InfraNodus SEO Skill — Content Gap & Topical Authority Analysis

> Based on the InfraNodus SEO methodology. Full tool available at infranodus.com (optional MCP server for live data).
> This skill applies the InfraNodus methodology manually — it works without the MCP server but live search data makes it significantly more powerful.

## What This Skill Does

Combines search intent analysis with topical clustering to find content gaps and opportunities. The core insight: most SEO tools tell you what keywords exist. This tells you what people are searching for that NOBODY is properly answering yet.

**Use it to find topics customers care about that neither the project nor its primary competitor currently covers well — then own them.**

---

## Workflow

### Step 1: Build a Search Intent Map

Identify the main topical clusters in the audience's search behaviour. Adapt these clusters to the project's category. Generic shape:

**Cluster 1 — Product / service types**
- Each distinct service line or product family

**Cluster 2 — Problems / needs**
- The customer-language problems that drive purchase (taste, smell, leaks, blockages, smell, cost, etc.)

**Cluster 3 — Location**
- "{category} {city}", "{category} {suburb}", "near me", "local {trade}"

**Cluster 4 — Buying intent**
- "best {category} {city}", "{service} cost", "{trade} near me", brand comparisons

**Cluster 5 — Educational**
- "is X safe", "what's in Y", "how to test Z", buying guides

**Cluster 6 — Competitor comparison**
- "{competitor} alternative", "best {category} {city}", "{trade} reviews"

---

### Step 2: Build a Search Results Map

For each cluster, identify what currently ranks:
- What topics does the primary competitor cover?
- What topics do manufacturers / aggregators / directories cover?
- What topics does nobody cover well?

---

### Step 3: Find the Content Gap

The gap = what people search for (Step 1) that doesn't have good existing content (Step 2).

**Gap Analysis Template:**

| Topic Cluster | Search Demand | Current Coverage | Project Opportunity |
|--------------|--------------|-----------------|-----------------|
| Suburb-level pages | HIGH | LOW (competitor generic) | ✅ Build 50+ suburb pages |
| Local quality / safety data | MEDIUM | NONE | ✅ Educational authority content |
| Brand comparisons | HIGH | MEDIUM | ✅ Comparison pages |
| Installation / job process | MEDIUM | LOW | ✅ How-to content |
| Local data-led piece | MEDIUM | NONE | ✅ Data-led authority piece |
| Maintenance guides | LOW | MEDIUM | ⚠️ Lower priority |
| Cost / pricing guides | HIGH | LOW | ✅ Transparent pricing page |

---

### Step 4: Build a Topical Authority Map

Map which content clusters need to be owned to be seen as THE authority for "{category} {location}". Generic skeleton:

```
{Category} {Location} (PILLAR)
├── Product / Service Types
│   ├── {Service A} {Location}
│   ├── {Service B} {Location}
│   ├── {Service C} {Location}
│   └── {Service D} {Location}
├── Locations (50+ suburb pages)
│   ├── {Category} {Suburb} (x50)
│   └── {Category} Installation Near {Suburb}
├── Problems / Solutions
│   ├── How to {Solve Problem A}
│   ├── {Problem B} Solutions {Location}
│   └── Is {Common Concern} a problem in {Location}?
├── Comparison / Intent
│   ├── Best {Category} Company {Location}
│   ├── {Project} vs {Competitor}
│   └── {Service} Cost {Location}
└── Educational Authority
    ├── {Location} Category Guide
    ├── How to Choose a {Service Provider}
    └── {Service} Maintenance Guide
```

---

### Step 5: LLMO Gap Analysis (AI Platforms)

Apply the same methodology to AI recommendations — what questions do people ask AI assistants about the project's category in its service area?

**Generic questions to own in AI:**
- "Who does {service} in {location}?"
- "What's the best {service provider} in {location}?"
- "Is {Project} or {Competitor} better?"
- "How much does {service} cost in {location}?"
- "What {service} is best for {common scenario}?"

**How to get cited by AI:**
- Create direct-answer content (FAQ format)
- Include specific data (prices, timelines, technical specs)
- Cite authoritative sources (government / regulator data)
- Build entity consistency (same info everywhere: name, address, phone, ABN)

---

## Output Format

### Content Gap Report
List of uncovered topics ranked by opportunity (demand × competition gap).

### Topical Authority Map
Visual cluster map showing content to build for full authority.

### Priority Content List
Top 20 pages to build first, ordered by impact.

### LLMO Target Questions
10–20 questions the project should be the cited answer for across AI platforms.

---

## Note on MCP Integration

For live search data (actual search volumes, real-time SERP analysis), sign up for an InfraNodus API key at infranodus.com. The methodology above works without it — but live data makes the gap analysis significantly more precise.

Without MCP: Use this as a strategic framework + manual SERP research.
With MCP: Fully automated gap detection with live data.

---

## Related Skills
- `research/keyword-research` — for keyword volume and difficulty scoring
- `research/competitor-analysis` — for competitor content mapping
- `research/content-gap-analysis` — for detailed gap execution
- `build/seo-content-writer` — for building the identified gap content
