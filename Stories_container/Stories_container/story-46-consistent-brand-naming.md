# Story 46: Audit & Fix Consistent Brand Naming Everywhere

**Epic:** Entity & Knowledge Graph Signals
**Priority:** P1 — High
**Effort:** Small
**Type:** Content Audit

---

## Description

As an AI agent building an entity profile for Inventive,
I should find consistent brand naming across the website, social profiles, and directory listings,
so that I can confidently identify Inventive as a single entity and not confuse it with other companies.

---

## Current State — Inconsistencies Found

| Location | Name Used |
|----------|----------|
| Website header logo alt | `Inventive Bizsol` |
| Footer tagline | No company name in tagline |
| Email domain | `inquiry@inventivebizsol.com` (uses "bizsol") |
| LinkedIn | `Inventive Business Solutions Pvt Ltd` |
| Website title | `Inventive Bizsol – Inventive With You` |
| Copyright | `Copyright Inventive 2026` (uses just "Inventive") |

Multiple name variants: "Inventive", "Inventive Bizsol", "Inventive Business Solutions Pvt Ltd"

---

## Standardization Rules

| Context | Name to Use |
|---------|------------|
| Legal / formal references | Inventive Business Solutions Pvt Ltd |
| Brand / marketing | Inventive |
| Website headers, titles, text | Inventive |
| Schema.org `name` | Inventive Business Solutions Pvt Ltd |
| Schema.org `alternateName` | Inventive Bizsol |
| Copyright line | Inventive Business Solutions Pvt Ltd |
| Email | inquiry@inventivebizsol.com (keep existing) |

---

## Acceptance Criteria

- [ ] Brand name usage is consistent within each context
- [ ] Schema.org has both `name` (legal) and `alternateName` (brand)
- [ ] Copyright uses full legal name
- [ ] All external profiles use the same company name
- [ ] No conflicting name variants that could confuse AI entity recognition

---

## Files to Modify

- All HTML files — verify copyright line consistency
- Story 08 schema — already has `name` and `alternateName` (correct)

---

## Technical Notes

- AI agents build "entity profiles" by matching names across sources
- Inconsistent naming can create multiple entity profiles instead of one strong one
- The `alternateName` field in Schema.org explicitly handles name variants
- This is mostly an audit — minimal code changes needed
