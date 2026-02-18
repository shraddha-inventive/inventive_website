# Story 02: Add Meta Descriptions to All Pages

**Epic:** On-Page SEO Foundation
**Priority:** P0 — Critical
**Effort:** Small
**Type:** SEO Enhancement

---

## Description

As a search engine or AI agent crawling the website,
I should find a unique, keyword-rich `<meta name="description">` on every page (150-160 characters),
so that I can display an accurate snippet in search results and understand the page content for recommendations.

---

## Current State

**No `<meta name="description">` exists on any page.** All 5 pages have zero meta descriptions.

Google and AI agents currently generate their own snippets from page content, which may not represent the company accurately.

---

## Acceptance Criteria

- [ ] Every HTML page has a unique `<meta name="description">` tag
- [ ] Each description is 150-160 characters
- [ ] Each description contains 1-2 primary keywords for that page
- [ ] Each description includes a clear value proposition or call to action
- [ ] Descriptions read naturally (not keyword stuffed)

---

## Recommended Meta Descriptions

| Page | Meta Description |
|------|-----------------|
| index.html | `Inventive builds AI-powered engineering automation platforms for EPC companies. Smart P&ID, support extraction, BIM automation & knowledge graphs.` |
| about.html | `Inventive is an AI engineering technology company and Autodesk Authorized Developer. Founded in 2011, we automate engineering design for EPC & OEMs.` |
| services.html | `BIM services, CAD automation, Speed BIM, engineering services & digitalization. Inventive delivers AI-driven design automation for industrial plants.` |
| solutions.html | `Explore AI-powered solutions: EIT support extraction, 2D piping GA, Smart P&ID automation & electrical engineering platforms for EPC companies.` |
| contact.html | `Contact Inventive for AI-powered engineering automation. Offices in India, USA & Australia. Request a demo of our Smart P&ID or support extraction tools.` |

---

## Files to Modify

- `index.html` — add after line 5 (after `<meta name="viewport">`)
- `about.html` — add after line 5
- `services.html` — add after line 5
- `solutions.html` — add after line 5
- `contact.html` — add after line 5

---

## Implementation Example

```html
<meta name="description" content="Inventive builds AI-powered engineering automation platforms for EPC companies. Smart P&ID, support extraction, BIM automation & knowledge graphs.">
```

---

## Technical Notes

- Meta descriptions are NOT a direct ranking factor for Google, but they significantly impact click-through rate
- AI agents (ChatGPT, Perplexity) DO use meta descriptions to understand page content
- Each description must be unique — duplicate descriptions confuse crawlers
