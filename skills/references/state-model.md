# State Model

Standardizes where reusable project state belongs. All state follows a three-tier temperature model with automatic lifecycle management.

## Temperature Tiers

### HOT — `memory/hot-cache.md`

- Capacity: 80 lines max
- Loaded automatically every session
- Content: project goals, hero keywords (max 10), primary competitors (max 5), active veto items, unresolved open loops
- Promotion trigger: finding referenced by 2 or more skills, or mentioned in 2 or more consecutive sessions
- Demotion trigger: 30 days unreferenced

### WARM — `memory/<category>/<skill>/`

- Capacity: 200 lines per file
- Loaded on demand when a skill matches the topic
- Promotion trigger: referenced 3+ times within 7 days → extract core conclusion (max 3 lines) to HOT
- Demotion trigger: 90 days unreferenced → move to `memory/archive/`

### COLD — `memory/archive/`

- No capacity limit
- Queried only when `memory-management` is explicitly invoked
- Never auto-deleted, only archived
- Filename format: `YYYY-MM-DD-original-filename.md`

## Lifecycle Rules

```
2+ skill references within 7 days     → WARM promotes to HOT (extract ≤3 lines)
30 days unreferenced                   → HOT demotes to WARM
90 days unreferenced                   → WARM demotes to COLD
```

## Staleness Protocol

| Age | Treatment |
|-----|-----------|
| ≤7 days | Current — use without caveat |
| 8–30 days | Point-in-time — verify against current state before asserting as fact |
| 31–90 days | Stale — flag for review |
| >90 days | Archive candidate |

## Durable State Files

### `memory/decisions.md`
- Major strategic choices
- Accepted tradeoffs
- Abandoned directions worth remembering

### `memory/open-loops.md`
- Unresolved blockers
- Missing evidence
- Follow-up tasks

### `memory/glossary.md`
- Project terminology
- Internal acronyms
- Shorthand labels

### `memory/entities/`
- Canonical names and entity profiles
- Only `entity-optimizer` should write canonical records here
