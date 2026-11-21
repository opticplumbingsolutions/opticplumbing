# CITE Domain Rating — Skills Reference

> Based on **CITE Domain Rating** **v1.0** (2026-02-10)
>
> **Version sync**: When the source spec updates, check: item count references in README (currently "40 items"), skill validation checkpoints, and Sections 2, 3, 7 below.

**4 dimensions × 10 items = 40 evaluation criteria** for assessing domain authority in the Generative Engine Optimization (GEO) era.

**Sister benchmark**: CORE-EEAT Content Benchmark — content-level quality assessment (80 items). See `references/core-eeat-benchmark.md`.

---

## 1. Framework Overview

### CITE + CORE-EEAT: The Complete Picture

| Benchmark | Evaluates | Level | Items | Core Question |
|-----------|-----------|-------|-------|---------------|
| **CORE-EEAT** | Content quality | Single page/article | 80 | Is this content worth citing? |
| **CITE** | Domain authority | Entire domain | 40 | Is this domain worth trusting as a source? |
| **Combined** | Full assessment | Content + Domain | **120** | Should AI engines cite this source? |

### 4 Dimensions

| Dim | Full Name | Default Weight | Core Question |
|-----|-----------|:-:|---------------|
| **C** | Citation | 35% | How strongly is this domain referenced — through links AND AI citations? |
| **I** | Identity | 20% | How clearly is this domain recognized as a distinct entity? |
| **T** | Trust | 25% | Are there red flags suggesting manipulation? |
| **E** | Eminence | 20% | How visible and influential is this domain? |

---

## 2. Complete 40-Item Checklist

### C — Citation (10 Items)

| ID | Check Item | One-Line Standard |
|----|-----------|-------------------|
| C01 | Referring Domains Volume | >=500 unique referring domains |
| C02 | Referring Domains Quality | >=20% of referring domains have DA/DR 50+ |
| C03 | Link Equity Distribution | Top sources concentrate outbound links (<1,000 outbound domains) |
| C04 | Link Velocity | Steady natural growth; no month >3x average |
| C05 | AI Citation Frequency | Cited by >=2 AI engines on >=10 niche queries |
| C06 | AI Citation Prominence | Primary/sole source in >=50% of AI citations |
| C07 | Cross-Engine Citation | Cited by >=3 different AI engines |
| C08 | Citation Sentiment | >=80% of citations in positive/neutral context |
| C09 | Editorial Link Ratio | >=60% of backlinks from editorial decisions |
| C10 | Link Source Diversity | Referring domains span >=3 industries, >=5 regions |

### I — Identity (10 Items)

| ID | Check Item | One-Line Standard |
|----|-----------|-------------------|
| I01 | Knowledge Graph Presence | Entity in >=2 knowledge graphs (Google KG, Wikidata, DBpedia) |
| I02 | Brand Search Volume | Brand name >=1,000 monthly exact-match searches |
| I03 | Brand SERP Ownership | Brand search yields >=7 first-page results you control |
| I04 | Schema.org Coverage | >=50% of indexable pages with correct Schema.org markup |
| I05 | Author Entity Recognition | >=80% of content has authors with verifiable public identities |
| I06 | Domain Tenure | Registered >=5 years with continuous active use |
| I07 | Cross-Platform Consistency | Brand name/description/contact identical across all platforms |
| I08 | Niche Consistency | Same niche for >=3 consecutive years without major pivot |
| I09 | Unlinked Brand Mentions | >=50 third-party mentions without links |
| I10 | Query-Brand Association | Brand appears in industry query autocomplete |

### T — Trust (10 Items)

| ID | Check Item | One-Line Standard |
|----|-----------|-------------------|
| T01 | Link Profile Naturalness | No month >15% of total backlinks; growth correlates with publishing |
| T02 | Dofollow Ratio Normality | Dofollow 40-85% of total backlinks |
| T03 | Link-Traffic Coherence | Link volume proportional to organic traffic (**Veto Item**) |
| T04 | IP/Network Diversity | >=100 unique C-class IP ranges; no single C-class >5% |
| T05 | Backlink Profile Uniqueness | No other domain shares >60% same referring domains (**Veto Item**) |
| T06 | WHOIS & Registration Transparency | Public WHOIS, reputable registrar, stable ownership >=2 years |
| T07 | Technical Security | Site-wide HTTPS + HSTS; no malware/phishing flags |
| T08 | Content Freshness Signal | New/updated content within last 90 days |
| T09 | Penalty & Deindex History | No Google manual actions or deindexing (**Veto Item**) |
| T10 | Review & Reputation Signals | >=3.5/5 average on >=2 third-party review platforms |

### E — Eminence (10 Items)

| ID | Check Item | One-Line Standard |
|----|-----------|-------------------|
| E01 | Organic Search Visibility | Ranks for >=1,000 keywords in top 100 |
| E02 | Organic Traffic Estimate | >=10,000 estimated monthly organic visits |
| E03 | SERP Feature Ownership | Appears in >=3 SERP feature types |
| E04 | Technical Crawlability | AI-crawler-friendly robots.txt; clean rendering; <3s load |
| E05 | Multi-Platform Footprint | Official presence on >=3 major platforms with recent activity |
| E06 | Authoritative Media Coverage | Featured in >=3 authoritative publications |
| E07 | Topical Authority Depth | Ranks for long-tail (4+ word) keywords deep in niche |
| E08 | Topical Authority Breadth | Covers >=70% of sub-topics in primary niche |
| E09 | Geographic Reach | Organic traffic from >=10 countries/regions |
| E10 | Industry Share of Voice | >=5% visibility share across top 50 industry keywords |

---

## 3. Scoring System

### Per-Item Scoring

| Result | Score |
|--------|-------|
| Pass | 10 |
| Partial | 5 |
| Fail | 0 |

### Score Calculation

- **Dimension score** = sum of 10 items (0–100)
- **CITE Score** = C × 0.35 + I × 0.20 + T × 0.25 + E × 0.20 (default weights)
- **Weighted Score** = C × w_C + I × w_I + T × w_T + E × w_E (domain-type-specific)

### Domain-Type Weight Table

| Dim | Default | Content Publisher | Product & Service | E-commerce | Community & UGC | Tool & Utility | Authority & Institutional |
|-----|:-------:|:-:|:-:|:-:|:-:|:-:|:-:|
| C | 35% | **40%** | 25% | 20% | 35% | 25% | **45%** |
| I | 20% | 15% | **30%** | 20% | 10% | **30%** | 20% |
| T | 25% | 20% | 25% | **35%** | 25% | 25% | 20% |
| E | 20% | 25% | 20% | 25% | **30%** | 20% | 15% |

**Tip:** Most local trade and service businesses fall under **Product & Service** — use those weights unless the project tells you otherwise.

### Rating Scale

| Score Range | Rating |
|-------------|--------|
| 90–100 | Excellent |
| 75–89 | Good |
| 60–74 | Medium |
| 40–59 | Low |
| 0–39 | Poor |

### Veto Items

| Veto ID | Dimension | Check |
|---------|-----------|-------|
| **T03** | Trust | Thousands of links but near-zero organic traffic (link farm) |
| **T05** | Trust | Near-identical backlink profile found on another domain (manipulation network) |
| **T09** | Trust | Google manual action or deindexing (zero trust) |

---

## 4. Domain Type Decision Tree

```
What is the domain's primary function?
├── Publishes articles, news, guides, or research     → Content Publisher
├── Sells/markets a product or service                 → Product & Service
├── Operates an online store or marketplace            → E-commerce
├── Hosts user-generated content, forums, or Q&A       → Community & UGC
├── Provides web tools, utilities, or applications     → Tool & Utility
└── Academic, government, non-profit, or standards     → Authority & Institutional
```

---

## 5. AI Engine Citation Preferences (Domain Signals)

| Engine | Preferred Domain Signals | Priority CITE Items |
|--------|-------------------------|---------------------|
| Google AI Overview | High organic rankings, Schema.org, SERP features | E01, E03, I04, C01 |
| ChatGPT Browse | Original data, authoritative sources, clear conclusions | C05, C06, I01, E06 |
| Perplexity AI | Research-grade content, methodology transparency | C09, C10, E07, I05 |
| Google Gemini | Knowledge graph presence, brand recognition, topical authority | I01, I02, E07, E08 |
| Claude | Trustworthy sources, balanced perspectives, transparent methodology | T01-T10, C08, I08 |

### Top 6 CITE Priority Items for AI Visibility

| Rank | ID | Name | Why It Matters |
|------|----|------|----------------|
| 1 | C05 | AI Citation Frequency | Direct measurement of AI engine citation |
| 2 | I01 | Knowledge Graph Presence | AI engines use KG to verify entity identity |
| 3 | T03 | Link-Traffic Coherence | Veto item that invalidates all other scores |
| 4 | E07 | Topical Authority Depth | AI prefers deep niche experts over generalists |
| 5 | C01 | Referring Domains Volume | Foundation signal — links remain the backbone |
| 6 | I04 | Schema.org Coverage | Structured data helps AI parse your content |

---

## 6. CITE + CORE-EEAT Integration Map

| CITE Item | Related CORE-EEAT Items | Relationship |
|-----------|--------------------------|--------------|
| C05-C08 (AI Citations) | C02 (Direct Answer), O02 (Summary Box), E01 (Original Data) | Domain gets cited when content is citable |
| I01 (Knowledge Graph) | A07 (Knowledge Graph Presence), A08 (Entity Consistency) | EEAT-A items build the identity that I items measure |
| I04 (Schema.org) | O05 (Schema Markup), R09 (HTML Semantics) | Content-level schema contributes to domain-level coverage |
| I05 (Author Entity) | Ept01 (Author Identity), Ept02 (Credentials Display) | Content author signals build domain author recognition |
| T07 (Technical Security) | T03 (Security Standards) | Same signal, different scope (domain vs page) |
| E07-E08 (Topical Authority) | C03 (Query Coverage), E08 (Depth Advantage) | Content depth builds domain topical authority |

### Combined Diagnosis Matrix

| CITE Score | CORE-EEAT Score | Diagnosis | Priority Action |
|-----------|-----------------|-----------|-----------------| 
| High | High | Ideal state | Maintain and expand |
| High | Low | Authority wasted on poor content | Prioritize content quality (CORE-EEAT) |
| Low | High | Great content, invisible domain | Build domain authority (CITE) |
| Low | Low | Fundamental issues | Start with CORE-EEAT, then CITE |
