# Story 32: Clean HTML Audit & Crawlable Content Verification

**Epic:** Technical SEO
**Priority:** P1 — High
**Effort:** Small
**Type:** Quality Assurance

---

## Description

As a search engine or AI agent crawling the website,
I should find clean, valid HTML with all important content in the DOM (not hidden behind JavaScript),
so that I can index all content accurately.

---

## Current State

- HTML is mostly clean but has not been formally validated
- Some content is inside JS-toggled tabs (solutions page) — need to verify crawlers can see it
- No duplicate content issues identified yet

---

## Audit Checklist

- [ ] Run HTML Validator (https://validator.w3.org/) on all 5 pages
- [ ] Fix any validation errors (unclosed tags, missing attributes, deprecated elements)
- [ ] Verify all tab/accordion content is in the DOM (not JS-generated)
- [ ] Verify no content is hidden with `display:none` permanently (only toggle states)
- [ ] Check for duplicate `<title>` or `<meta>` tags
- [ ] Check for duplicate `id` attributes
- [ ] Verify no `<iframe>` blocks critical content
- [ ] Verify all text content is in HTML (not rendered via JS `innerHTML`)

---

## Acceptance Criteria

- [ ] All 5 pages pass W3C HTML validation with zero errors
- [ ] All product content in solutions.html tabs is present in HTML source (not JS-injected)
- [ ] No duplicate content across pages
- [ ] No hidden text that could be flagged as cloaking
- [ ] AI agent crawlers can see all content without JavaScript execution

---

## Files to Modify

- Any HTML file with validation errors — fix invalid markup

---

## Technical Notes

- Google can execute JavaScript but AI agents (GPTBot, PerplexityBot) often cannot
- All important content must be in server-rendered HTML, not dynamically injected
- Current solutions.html tabs use `display:none` toggling which is fine — content is in the DOM
- Hidden FAQ answers (max-height:0) are in the DOM — crawlers can see them. This is correct behavior.
