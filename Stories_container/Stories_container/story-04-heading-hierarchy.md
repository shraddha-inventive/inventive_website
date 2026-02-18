# Story 04: Fix Heading Hierarchy (H1 → H2 → H3) Across All Pages

**Epic:** On-Page SEO Foundation
**Priority:** P1 — High
**Effort:** Medium
**Type:** SEO Enhancement

---

## Description

As a search engine or AI agent parsing the page structure,
I should find a proper heading hierarchy (H1 → H2 → H3) with no skipped levels,
so that I can understand the content outline and topic structure of each page.

---

## Current State — Issues Found

### index.html
- H1: `AI-Powered Intelligence for Every Engineering Decision` — OK
- H2: `Speed BIM`, `Engineering Services`, etc. (slide titles) — OK
- H2: `About Us` — OK
- **Issue:** Services section uses `<h3>` for service names but no parent `<h2>` section heading
- **Issue:** No `<h2>` for "Our Services" or "Our Solutions" above the tab content

### solutions.html
- H1: `Solutions` — generic
- H2: `Our Solutions`, `Explore Our Solutions` — OK
- H2: `EIT Support Extraction Platform`, `Problem We Solve`, etc. — OK
- H3: `Key Challenges`, `Business Impact` — OK
- **Issue:** Heading hierarchy is mostly correct but H1 lacks keywords

### about.html
- H1: `About Us` — generic, no keyword
- **Issue:** Some sections may skip heading levels

### services.html
- H1: `Services` — generic
- **Issue:** Service detail headings may not follow proper H2→H3 nesting

### contact.html
- H1: `Contact Us` — generic
- **Issue:** No H2 sub-sections

---

## Acceptance Criteria

- [ ] Every page has exactly ONE `<h1>`
- [ ] `<h2>` tags are used for major sections
- [ ] `<h3>` tags are used for sub-sections within H2 blocks
- [ ] No heading levels are skipped (no H1 → H3 without H2)
- [ ] Section headings contain relevant secondary keywords where natural
- [ ] Heading structure can be outlined as a clean table of contents

---

## Recommended Heading Structure — index.html

```
H1: AI-Powered Engineering Automation Platform for EPC & Industrial OEMs
  H2: Engineering Services & CAD Automation (slider section)
    H3: Speed BIM
    H3: Engineering Services
    H3: CAD Automation
    H3: Digitalization
  H2: Our Services
    H3: BIM Services
    H3: Speed BIM
    H3: Engineering Services
    H3: CAD Automation
    H3: Digitalization
  H2: AI-Powered Engineering Solutions
    H3: EIT Support Extraction Platform
    H3: AI Powered 2D Piping GA from Plant 3D
  H2: About Inventive
  H2: Frequently Asked Questions (NEW section)
```

---

## Files to Modify

- `index.html` — restructure heading tags
- `about.html` — restructure heading tags
- `services.html` — restructure heading tags
- `solutions.html` — restructure heading tags
- `contact.html` — restructure heading tags

---

## Technical Notes

- Proper heading hierarchy helps Google create featured snippets
- AI agents use heading structure to build content outlines for answers
- Screen readers depend on heading hierarchy for accessibility
- Use CSS classes instead of heading tags for visual styling (don't use H3 just because it's smaller)
