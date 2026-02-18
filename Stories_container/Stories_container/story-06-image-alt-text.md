# Story 06: Optimize All Image Alt Text with Keywords

**Epic:** On-Page SEO Foundation
**Priority:** P1 — High
**Effort:** Medium
**Type:** SEO Enhancement

---

## Description

As a search engine crawling images on the website,
I should find descriptive, keyword-rich `alt` attributes on every `<img>` tag,
so that images can rank in Google Image Search and contribute to page SEO.

As a screen reader user,
I should hear meaningful descriptions for all images,
so that the website is accessible.

---

## Current State — Issues Found

Many images have generic or brand-only alt text:

| Image | Current Alt | Problem |
|-------|-----------|---------|
| `logo-01.png` | `Inventive Bizsol` | OK but could add "AI Engineering" |
| `icon-01.png` | `BIM Services` | OK |
| `icon-02.png` | `Speed BIM` | OK |
| `icon-03.png` | `Engineering Services` | OK |
| `icon-04.png` | `CAD Automation` | OK |
| `icon-05.png` | `Digitalization` | OK |
| `1.png` | `Bharat Petroleum` | OK — client logo |
| `11.png` | `Autodesk Authorized Developer` | OK |
| `Service-Page-Header-Mobile-View_new.png` | `About Inventive` | Too generic |
| `SPEED-BIM-MOBILE-VIEW-1.png` | None (used as CSS background) | Background images have no alt |
| `AI_solutions.jpg` | None (used as CSS background) | Background images have no alt |

**Key issues:**
- Background images (`style="background-image"`) have no alt text — need hidden text or `aria-label`
- Hero section images have no descriptive text
- About section image alt is too generic

---

## Acceptance Criteria

- [ ] Every `<img>` tag has a descriptive `alt` attribute
- [ ] Alt text includes relevant keywords where natural
- [ ] Alt text is 5-15 words (not too short, not stuffed)
- [ ] Decorative images use `alt=""` (empty alt)
- [ ] Background images with meaningful content have `aria-label` on their container
- [ ] Client logo images retain client company names as alt text

---

## Recommended Alt Text Updates

| Image | Current Alt | Recommended Alt |
|-------|-----------|----------------|
| `logo-01.png` | `Inventive Bizsol` | `Inventive Bizsol - AI Powered Engineering Automation Company` |
| `Service-Page-Header-Mobile-View_new.png` | `About Inventive` | `AI-powered engineering automation platform dashboard by Inventive` |
| `icon-01.png` | `BIM Services` | `BIM Services for Industrial Plants - Inventive` |
| `icon-02.png` | `Speed BIM` | `Speed BIM Accelerated Modeling Service` |
| `icon-03.png` | `Engineering Services` | `AI-Driven Engineering Design Services` |
| `icon-04.png` | `CAD Automation` | `CAD Automation and Drawing Generation` |
| `icon-05.png` | `Digitalization` | `Industrial Engineering Digitalization` |
| `favicon.png` | N/A | Not visible — no change needed |

### Background Images — Add aria-label

| Element | Background Image | Add aria-label |
|---------|-----------------|---------------|
| `.slide` (Speed BIM) | `SPEED-BIM-MOBILE-VIEW-1.png` | `aria-label="Speed BIM - Accelerated 3D Modeling Service"` |
| `.slide` (Engineering) | `Engineering-Services.png` | `aria-label="AI-Powered Engineering Design Services"` |
| `.slide` (CAD) | `CAD-Automation.png` | `aria-label="Automated CAD Drawing Generation Platform"` |
| `.slide` (Digital) | `Digitalization.png` | `aria-label="Industrial Engineering Digitalization Solutions"` |
| `.about-hero-bg` | `AI_solutions.jpg` | `aria-label="AI Engineering Solutions by Inventive"` |

---

## Files to Modify

- `index.html` — update ~15 img alt attributes + add aria-labels
- `about.html` — update img alt attributes
- `services.html` — update img alt attributes
- `solutions.html` — update img alt attributes
- `contact.html` — update img alt attributes

---

## Technical Notes

- Google Image Search drives ~20% of all web traffic — good alt text directly impacts visibility
- AI agents parse alt text to understand visual content on the page
- `alt=""` (empty) is correct for decorative images — it tells screen readers to skip them
- Do NOT start alt text with "Image of" or "Picture of" — just describe the content
