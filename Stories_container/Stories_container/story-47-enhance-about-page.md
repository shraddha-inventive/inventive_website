# Story 47: Enhance About Page — Founder Profile, Company Details, About Schema

**Epic:** Entity & Knowledge Graph Signals
**Priority:** P1 — High
**Effort:** Medium
**Type:** Content Enhancement

---

## Description

As an AI agent or visitor wanting to understand who Inventive is,
I should find detailed company information, founder/leadership profiles, and structured About schema,
so that the company is recognized as a real, credible entity.

**Constraint:** Enhance existing `about.html` — NO new page.

---

## Current State

About page has: company mission, Vimeo video, Autodesk partner badge, values cards, client logos. Missing: founder info, founding story, team size, detailed company description, structured schema.

---

## Sections to Add/Enhance

### 1. Detailed Company Description (expand existing text)
Add after current about text:
- Founded in 2011 in Pune, India
- Autodesk Authorized Developer
- Offices in India, USA, Australia
- Number of engineers/employees (approximate)
- Key specialties and technology focus

### 2. Leadership Section
```html
<section class="leadership-section">
    <div class="container">
        <h2>Our Leadership</h2>
        <div class="leader-card">
            <h3>[Founder Name]</h3>
            <p class="leader-role">Founder & CEO</p>
            <p>Brief bio — engineering background, vision for AI in engineering, years of experience.</p>
        </div>
    </div>
</section>
```

### 3. Person Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Inventive Business Solutions Pvt Ltd",
    "foundingDate": "2011",
    "foundingLocation": "Pune, India",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "founder": {
      "@type": "Person",
      "name": "[Founder Name]"
    }
  }
}
```

---

## Acceptance Criteria

- [ ] About page has expanded company description (100+ more words)
- [ ] Leadership/founder section added
- [ ] AboutPage + Organization JSON-LD schema added
- [ ] Founding date, location, and specialties mentioned
- [ ] No new HTML page created
- [ ] Section fits within existing page design

---

## Files to Modify

- `about.html` — add leadership section, expand company description, add JSON-LD
- `css/style.css` — minimal styles for leader card (reuse existing card pattern)

---

## Technical Notes

- Founder/leadership pages are a strong entity signal for AI Knowledge Graphs
- Google's Knowledge Panel pulls founder info from structured data
- `AboutPage` schema type specifically tells crawlers this is the company's about page
- Placeholder `[Founder Name]` must be replaced with actual name
