# Story 24: Add Feature Deep-Dive Sections to Existing Solutions Page

**Epic:** Content Strategy
**Priority:** P2 — Medium
**Effort:** Medium
**Type:** Content Enhancement

---

## Description

As a technical evaluator exploring Inventive's products,
I should find detailed feature breakdowns within each product tab on the solutions page,
so that I understand specific capabilities without needing a separate page.

**Constraint:** Expand existing product tabs in `solutions.html` — NO new pages.

---

## Current State

Each product tab in solutions.html has: Offering, Problem, Approach, Capabilities (brief), Inputs/Outputs. But capabilities are only 1-2 sentences each — too thin for SEO and AI ranking.

---

## What to Add

Expand each capability card inside existing tabs with 3-4 more sentences of technical detail. Add a "Read More" inline expand (not modal) for each capability.

Example — expand the existing "Automated Support Identification" card:

**Current (2 sentences):**
> Automatically detects electrical, instrumentation, and telecom supports from 3D models and coordination data.

**Enhanced (5-6 sentences):**
> Automatically detects electrical, instrumentation, and telecom supports from 3D Navisworks coordination models. The AI engine reads model geometry, metadata, and spatial relationships to identify support members attached to cable trays, instrument tubing, and conduit runs. Classification is performed by type (bracket, channel, strut), discipline (E, I, T), and configuration. Supports multi-discipline models with overlapping routing. Handles design revisions by re-scanning only changed model regions.

---

## Acceptance Criteria

- [ ] Each product tab has 200+ more words of technical detail
- [ ] Details are added inline within existing capability cards (not new pages)
- [ ] Expanded content maintains existing card layout
- [ ] Content includes technical terminology (Navisworks, Plant 3D, DWG, ISA-5.1)
- [ ] No new HTML pages created
- [ ] No visual layout changes to the page structure

---

## Files to Modify

- `solutions.html` — expand text content within existing tab sections

---

## Technical Notes

- Google rewards in-depth content on a single page over thin content spread across many pages
- Expanding existing pages is better than creating thin new pages
- Aim for 800+ total words per product tab after expansion
