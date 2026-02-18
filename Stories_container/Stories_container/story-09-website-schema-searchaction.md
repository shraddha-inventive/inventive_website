# Story 09: Add WebSite Schema with SearchAction to Homepage

**Epic:** Structured Data / Schema Markup
**Priority:** P1 — High
**Effort:** Small
**Type:** Schema.org JSON-LD

---

## Description

As a search engine processing the website,
I should find a `WebSite` schema with a `SearchAction`,
so that I can enable sitelinks search box in search results and understand the site structure.

---

## Current State

**No WebSite schema exists.** Google cannot display a sitelinks search box for Inventive in search results.

---

## Acceptance Criteria

- [ ] `index.html` contains a `WebSite` JSON-LD schema
- [ ] Schema includes site name, URL, and publisher
- [ ] Schema includes `potentialAction` with `SearchAction` (even if search is basic)
- [ ] Schema validates on https://validator.schema.org/

---

## Implementation

Add this in `<head>` of `index.html` (can be in the same `<script>` block as Organization using `@graph`):

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Inventive Bizsol",
  "url": "https://shraddha-inventive.github.io/inventive_website/",
  "publisher": {
    "@type": "Organization",
    "name": "Inventive Business Solutions Pvt Ltd"
  }
}
```

> **Note:** A `potentialAction` with `SearchAction` should only be added after the website has actual search functionality implemented. Do NOT add SearchAction without a working search page — it will cause Google Search Console warnings.

---

## Files to Modify

- `index.html` — add JSON-LD in `<head>` section

---

## Technical Notes

- WebSite schema enables the Google sitelinks search box feature
- The `SearchAction` target can point to solutions page or a future search page
- This schema should only appear on the homepage (not on every page)
- Can be combined with Organization schema using JSON-LD `@graph` array format:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "WebSite", ... }
  ]
}
```
