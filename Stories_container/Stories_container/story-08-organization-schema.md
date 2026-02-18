# Story 08: Add Organization Schema to Homepage

**Epic:** Structured Data / Schema Markup
**Priority:** P0 — Critical
**Effort:** Small
**Type:** Schema.org JSON-LD

---

## Description

As an AI agent or search engine crawling the homepage,
I should find a `Organization` JSON-LD schema block,
so that I can identify Inventive as a technology company, understand its brand, and connect it to its social profiles.

---

## Current State

**No structured data exists on any page.** Zero JSON-LD, zero Microdata, zero RDFa.

AI agents like ChatGPT, Perplexity, and Google's AI Overview cannot identify Inventive as a distinct entity with specific capabilities.

---

## Acceptance Criteria

- [ ] `index.html` contains a `<script type="application/ld+json">` block with `@type: Organization`
- [ ] Schema includes: name, url, logo, description, sameAs (social links), contactPoint, address, foundingDate
- [ ] Schema validates without errors on https://validator.schema.org/
- [ ] Schema validates on Google Rich Results Test

---

## Implementation

Add this in `<head>` of `index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inventive Business Solutions Pvt Ltd",
  "alternateName": "Inventive Bizsol",
  "url": "https://shraddha-inventive.github.io/inventive_website/",
  "logo": "https://shraddha-inventive.github.io/inventive_website/images/logo-01.png",
  "description": "Inventive develops AI-powered automation platforms for EPC companies and industrial OEMs, enabling automatic extraction of fabrication drawings, intelligent P&ID structuring, and engineering knowledge graph integration.",
  "foundingDate": "2011",
  "sameAs": [
    "https://www.linkedin.com/company/inventive-business-solutions-pvt-ltd/",
    "https://www.youtube.com/@Inventivebizsol"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "inquiry@inventivebizsol.com",
    "contactType": "sales"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressCountry": "IN"
  },
  "location": [
    {
      "@type": "Place",
      "name": "Inventive India Office",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Place",
      "name": "Inventive USA Office",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sugar Land",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    },
    {
      "@type": "Place",
      "name": "Inventive Australia Office",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Darling Heights",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      }
    }
  ],
  "knowsAbout": [
    "AI Engineering Automation",
    "Smart P&ID",
    "BIM for Industrial Plants",
    "Navisworks Support Extraction",
    "Plant 3D Automation",
    "Engineering Knowledge Graph",
    "EPC Digital Transformation"
  ]
}
```

---

## Files to Modify

- `index.html` — add JSON-LD in `<head>` section

---

## Technical Notes

- `knowsAbout` is a powerful Schema.org property that directly tells AI agents what the company specializes in
- `sameAs` links help build the entity's "Knowledge Graph" across platforms
- `alternateName` helps AI agents match different name variants
- This schema enables Google's Knowledge Panel for branded searches
- JSON-LD is the preferred format (over Microdata) by Google and AI agents
