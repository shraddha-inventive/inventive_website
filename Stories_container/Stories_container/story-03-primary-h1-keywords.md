# Story 03: Add Primary H1 with Target Keyword on Every Page

**Epic:** On-Page SEO Foundation
**Priority:** P0 — Critical
**Effort:** Small
**Type:** SEO Enhancement

---

## Description

As a search engine or AI agent parsing the page,
I should find exactly one `<h1>` tag per page containing the primary target keyword,
so that I can clearly identify the main topic of each page.

---

## Current State

| Page | Current H1 | Keyword Present? |
|------|-----------|-----------------|
| index.html | `AI-Powered Intelligence for Every Engineering Decision` | Partial — generic |
| about.html | `About Us` | NO — no keyword |
| services.html | `Services` (in hero) | NO — no keyword |
| solutions.html | `Solutions` (in hero) | NO — no keyword |
| contact.html | `Contact Us` (in hero) | NO — no keyword |

**Problem:** Most H1 tags are generic labels with no target keywords. AI agents cannot determine what the company specializes in from these headings.

---

## Acceptance Criteria

- [ ] Every page has exactly ONE `<h1>` tag
- [ ] Each `<h1>` contains the page's primary target keyword
- [ ] H1 reads naturally and is user-friendly (not keyword stuffed)
- [ ] No page has multiple `<h1>` tags
- [ ] H1 is visible to users (not hidden)

---

## Recommended H1 Tags

| Page | New H1 |
|------|--------|
| index.html | `AI-Powered Engineering Automation Platform for EPC & Industrial OEMs` |
| about.html | `About Inventive — AI Engineering Technology Company` |
| services.html | `BIM Services, CAD Automation & Engineering Digitalization` |
| solutions.html | `AI-Powered Engineering Solutions for Process Plant Design` |
| contact.html | `Contact Inventive — AI Engineering Automation Experts` |

---

## Files to Modify

- `index.html` — line 83 (`.solutions-hero-heading`)
- `about.html` — hero section `<h1>`
- `services.html` — hero section `<h1>`
- `solutions.html` — hero section `<h1>`
- `contact.html` — hero section `<h1>`

---

## Technical Notes

- Google treats H1 as the strongest on-page signal for topic relevance
- AI agents weight H1 heavily when categorizing page content
- Only ONE H1 per page — use H2/H3 for sub-sections
- The current `index.html` H1 is good but can be more specific with product keywords
