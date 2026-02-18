# Story 10: Add SoftwareApplication Schema to Each Product Page

**Epic:** Structured Data / Schema Markup
**Priority:** P0 — Critical
**Effort:** Medium
**Type:** Schema.org JSON-LD

---

## Description

As an AI agent or search engine crawling a product page,
I should find a `SoftwareApplication` JSON-LD schema,
so that I can understand the product name, category, features, and recommend it when users ask for relevant tools.

---

## Current State

**No SoftwareApplication schema exists anywhere.** AI agents have no structured way to know that Inventive offers specific software products.

---

## Acceptance Criteria

- [ ] Each product page has its own `SoftwareApplication` JSON-LD
- [ ] Schema includes: name, description, applicationCategory, operatingSystem, offers, featureList
- [ ] Schema validates on https://validator.schema.org/
- [ ] All 4 products have their own schema

---

## Implementation — Per Product

### Product 1: EIT Support Extraction Platform

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "EIT Support Extraction Platform",
  "description": "AI-assisted platform that automatically extracts Electrical, Instrumentation, and Telecom supports from 3D Navisworks models and generates fabrication-ready engineering outputs.",
  "applicationCategory": "Engineering Software",
  "applicationSubCategory": "Support Extraction Automation",
  "operatingSystem": "Windows",
  "offers": {
    "@type": "Offer",
    "category": "B2B SaaS",
    "priceCurrency": "USD",
    "availability": "https://schema.org/OnlineOnly"
  },
  "featureList": [
    "Automated support identification from 3D models",
    "Intelligent classification by discipline",
    "Fabrication-ready DWG/PDF output",
    "Change-friendly regeneration",
    "Navisworks integration"
  ],
  "creator": {
    "@type": "Organization",
    "name": "Inventive Business Solutions Pvt Ltd"
  }
}
```

### Product 2: AI Powered 2D Piping GA from Plant 3D

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI Powered 2D Piping GA from Plant 3D",
  "description": "Automated 2D GA extraction from Plant 3D piping models with integrated sanitization, quality checks, and standardized formatting. 70% faster than traditional methods.",
  "applicationCategory": "Engineering Software",
  "applicationSubCategory": "CAD Automation",
  "operatingSystem": "Windows",
  "featureList": [
    "2D Piping GA generation from Plant 3D",
    "Instrument location drawing extraction",
    "Piping support locator with X-Y coordinates",
    "Cable tray support locator",
    "Auto-tagging and annotation",
    "Built-in quality checks"
  ],
  "creator": {
    "@type": "Organization",
    "name": "Inventive Business Solutions Pvt Ltd"
  }
}
```

### Product 3: Smart PID Platform

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Smart PID - AI P&ID Automation Platform",
  "description": "Smart PID accelerates P&ID diagram creation by enhancing manual Plant 3D drafting with a guided web-based configuration wizard that generates standardized drawings automatically. 80% reduction in P&ID creation time.",
  "applicationCategory": "Engineering Software",
  "applicationSubCategory": "P&ID Automation",
  "operatingSystem": "Web",
  "featureList": [
    "5-step ESP configuration wizard",
    "Automatic P&ID generation from configuration",
    "Plant 3D and Vault integration",
    "Excel Master-driven rule engine",
    "Review and approval workflow",
    "ISA-5.1 standards compliance",
    "Auto-tagging and line numbering"
  ],
  "creator": {
    "@type": "Organization",
    "name": "Inventive Business Solutions Pvt Ltd"
  }
}
```

### Product 4: EnAIBot / EnIMAX

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "EnAIBot - AI Electrical Engineering Automation Platform",
  "description": "B2B electrical engineering project management application enabling engineers to configure electrical design parameters, generate load lists, cable schedules, single line diagrams, and manage instrumentation with AI-powered automation.",
  "applicationCategory": "Engineering Software",
  "applicationSubCategory": "Electrical Engineering Automation",
  "operatingSystem": "Web",
  "featureList": [
    "Electrical load list generation",
    "Cable schedule automation",
    "Single line diagram (SLD) generation",
    "Design basis approval workflow",
    "Cable tray configuration",
    "Earthing and lighting modules",
    "Instrumentation file management",
    "Multi-division access control"
  ],
  "creator": {
    "@type": "Organization",
    "name": "Inventive Business Solutions Pvt Ltd"
  }
}
```

---

## Files to Modify

- `solutions.html` — add schema for Product 1 and Product 2
- `smart-pid.html` (new) — add schema for Product 3
- `enaibot.html` (new) — add schema for Product 4

---

## Technical Notes

- `SoftwareApplication` schema is the most important for AI agent product discovery
- AI agents like ChatGPT and Perplexity parse `featureList` to match user queries to products
- The `description` field is what AI agents use when generating recommendations
- `applicationSubCategory` helps narrow down the product niche
- One schema per page — do not put all 4 products on one page's schema
