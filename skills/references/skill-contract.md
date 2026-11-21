# Skill Contract

This repository uses one contract across all 20 skills. The contract keeps each skill specialized while making the full library feel like one operating system.

## Required Top Sections

Every `SKILL.md` should expose these sections near the top:

- `When This Must Trigger`
- `Quick Start`
- `Skill Contract`
- `Instructions`
- `Validation Checkpoints`
- `Reference Materials`
- `Next Best Skill`

## Handoff Summary Format

Every skill produces a concise handoff summary using this shape:

```markdown
### Handoff Summary

- **Status**: DONE / DONE_WITH_CONCERNS / BLOCKED / NEEDS_INPUT
- **Objective**: what was analyzed, created, or fixed
- **Key Findings / Output**: the highest-signal result
- **Evidence**: URLs, data points, or sections reviewed
- **Open Loops**: blockers, missing inputs, or unresolved risks
- **Recommended Next Skill**: one primary next move
```

## Termination rules for Next Best Skill chains

Skill handoff chains MUST not recurse indefinitely. Each skill's `Next Best Skill` block MUST specify at least one of:

1. **Verdict-conditional branching**: `Primary only when verdict = X; stop when verdict = Y`
2. **Depth limit**: explicit `max-depth: N` in the block — default 3
3. **Visited-set check**: if the Next Best target was the caller in the same chain, STOP and report chain-complete

When ambiguous, stop. Never follow a Next Best Skill recommendation if it would return to a skill already invoked in this session's chain.

## Category Defaults

### Research
- Reads: topics, competitors, search behavior, user goals
- Writes: opportunity summaries and strategic findings
- Promotes: priorities, terminology, competitor facts, and candidate entity signals

### Build
- Reads: briefs, target keywords, page intent, entity inputs
- Writes: drafts, metadata, markup, optimization outputs
- Promotes: chosen messaging, approved structure, publish blockers

### Optimize
- Reads: existing assets, audits, issues, performance symptoms
- Writes: repair plans and scored findings
- Promotes: blockers, recurring defects, remediation priorities

### Monitor
- Reads: previous baselines, new performance data, thresholds
- Writes: deltas, trend summaries, alerts, reports
- Promotes: major changes, confirmed anomalies, follow-up actions

### Cross-cutting
- Reads: outputs from every other category
- Writes: gates, truth records, and memory structure
- Promotes: the canonical state other skills should trust
