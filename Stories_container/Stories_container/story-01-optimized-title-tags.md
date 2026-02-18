# Story 01: Add Optimized Title Tags to All Pages

**Epic:** On-Page SEO Foundation
**Priority:** P0 — Critical
**Effort:** Small
**Type:** SEO Enhancement

---

## Description

As a website visitor or AI search crawler,
I should see a unique, keyword-rich `<title>` tag on every page (max 60 characters),
so that search engines and AI agents can understand each page's purpose and rank it appropriately.

---

## Current State

All pages currently have generic or non-optimized titles:

| Page | Current Title |
|------|--------------|
| index.html | `Inventive Bizsol – Inventive With You` |
| about.html | `About Us – Inventive Bizsol` |
| services.html | `Services – Inventive Bizsol` |
| solutions.html | `Solutions – Inventive Bizsol` |
| contact.html | `Contact Us – Inventive Bizsol` |

**Problem:** No target keywords in any title. AI agents and Google cannot identify the company's domain expertise from these titles.

---

## Acceptance Criteria

- [ ] Every existing HTML page has a unique `<title>` tag
- [ ] Each title is max 60 characters
- [ ] Each title contains the primary target keyword for that page
- [ ] Brand name "Inventive" appears in every title
- [ ] New product landing pages (when created) follow the same pattern

---

## Recommended Titles

| Page | New Title |
|------|----------|
| index.html | `AI-Powered Engineering Automation Platform \| Inventive` |
| about.html | `About Inventive \| AI Engineering Technology Company` |
| services.html | `BIM & CAD Automation Services \| Inventive` |
| solutions.html | `AI Engineering Solutions for EPC & OEM \| Inventive` |
| contact.html | `Contact Inventive \| AI Engineering Services` |
| smart-pid.html | `Smart P&ID Automation Platform \| Inventive` |
| enaibot.html | `AI Electrical Engineering Automation \| Inventive` |
| support-extraction.html | `AI Support Extraction from Navisworks \| Inventive` |
| bim-automation.html | `BIM Automation for Industrial Plants \| Inventive` |
| knowledge-graph.html | `Engineering Knowledge Graph Platform \| Inventive` |

---

## Files to Modify

- `index.html` — line 6
- `about.html` — line 6
- `services.html` — line 6
- `solutions.html` — line 6
- `contact.html` — line 6

---

## Technical Notes

- Title format: `Primary Keyword | Brand`
- Keep under 60 chars to avoid truncation in Google SERPs
- The `|` separator is preferred over `-` for brand separation
