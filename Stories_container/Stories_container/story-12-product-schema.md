# Story 12: Add Product Schema on Each Landing Page

**Epic:** Structured Data / Schema Markup
**Priority:** P1 — High
**Effort:** Medium
**Type:** Schema.org JSON-LD

---

## Description

As a search engine or AI agent crawling product landing pages,
I should find `Product` JSON-LD schema with category, brand, and feature information,
so that I can display rich product results and recommend the product for relevant queries.

---

## Current State

**No Product schema exists anywhere.** Products are described in plain HTML with no structured data.

---

## Acceptance Criteria

- [ ] Each product landing page has a `Product` JSON-LD schema
- [ ] Schema includes: name, description, brand, category, image
- [ ] Schema includes `offers` with `@type: Offer` and availability
- [ ] Schema includes `aggregateRating` (if testimonials are available)
- [ ] Schema validates on Google Rich Results Test

---

## Implementation — Per Product Page

### solutions.html (EIT Support Extraction)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EIT Support Extraction Platform",
  "description": "AI-assisted platform that automatically extracts Electrical, Instrumentation, and Telecom supports from 3D Navisworks models and generates fabrication-ready engineering outputs.",
  "brand": {
    "@type": "Brand",
    "name": "Inventive"
  },
  "category": "Engineering Automation Software",
  "image": "https://shraddha-inventive.github.io/inventive_website/images/AI_solutions.jpg",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "url": "https://shraddha-inventive.github.io/inventive_website/contact.html",
    "description": "Contact us for enterprise pricing"
  }
}
```

### smart-pid.html

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Smart PID - AI P&ID Automation Platform",
  "description": "Accelerates P&ID diagram creation with a 5-step configuration wizard that generates standardized Plant 3D drawings automatically. 80% reduction in creation time.",
  "brand": {
    "@type": "Brand",
    "name": "Inventive"
  },
  "category": "P&ID Automation Software",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "url": "https://shraddha-inventive.github.io/inventive_website/contact.html"
  }
}
```

### enaibot.html

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnAIBot - AI Electrical Engineering Automation",
  "description": "B2B electrical engineering project management platform for load lists, cable schedules, single line diagrams, and instrumentation management with AI-powered automation.",
  "brand": {
    "@type": "Brand",
    "name": "Inventive"
  },
  "category": "Electrical Engineering Automation Software",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/OnlineOnly",
    "url": "https://shraddha-inventive.github.io/inventive_website/contact.html"
  }
}
```

---

## Files to Modify

- `solutions.html` — add Product schema for both existing products
- `smart-pid.html` (new) — add Product schema
- `enaibot.html` (new) — add Product schema

---

## Dependencies

- Product landing pages (smart-pid.html, enaibot.html) must be created first — these are Phase 2 stories not yet documented in this set

---

## Technical Notes

- `Product` schema is different from `SoftwareApplication` — both should be present on product pages
- Use `SoftwareApplication` for technical details (features, OS, category)
- Use `Product` for commercial details (brand, offers, availability)
- When testimonials are added later, include `aggregateRating` in Product schema
- Price can be "0" with a link to "Contact Us" page for B2B products
