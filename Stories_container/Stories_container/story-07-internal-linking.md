# Story 07: Build Internal Linking Structure Between Pages

**Epic:** On-Page SEO Foundation
**Priority:** P1 — High
**Effort:** Medium
**Type:** SEO Enhancement

---

## Description

As a search engine crawling the website,
I should find contextual internal links between related pages,
so that I can discover all pages, understand their relationships, and distribute page authority.

As an AI agent analyzing the site,
I should find clear link paths between products, services, and information pages,
so that I can understand the full scope of what Inventive offers.

---

## Current State — Issues Found

### Linking Analysis

| From Page | Links To | Missing Links |
|-----------|---------|---------------|
| index.html | services.html, solutions.html, about.html, contact.html | No links to individual product pages |
| solutions.html | Footer/nav links only — no contextual body links to services | No body links to Smart PID, EnAIBot, case studies |
| services.html | No links to solutions | No links to related product pages |
| about.html | Has nav/footer links only | No contextual body links to services or solutions |
| contact.html | Has nav/footer links only | No contextual body links to services or solutions |

**Key problems:**
- Solutions tab on homepage links to `solutions.html` only — not individual product pages
- No contextual links within page content (e.g., "Learn more about our Smart P&ID platform")
- Footer has links but they all point to the same `solutions.html`
- No cross-linking between related services and products

---

## Acceptance Criteria

- [ ] Homepage links to each individual product landing page
- [ ] Solutions page links to individual product pages
- [ ] Services page links to related solutions
- [ ] Each product page links back to related services and other products
- [ ] Footer includes links to all product pages
- [ ] Anchor text uses relevant keywords (not "click here")
- [ ] Contextual links are embedded naturally within content paragraphs

---

## Recommended Internal Link Map

```
index.html
├── → smart-pid.html (from Solutions tab + definition block)
├── → enaibot.html (from Solutions tab + definition block)
├── → solutions.html#eit (from Solutions tab)
├── → solutions.html#piping-ga (from Solutions tab)
├── → services.html#bim-services (from Services tab)
├── → about.html (from About section)
├── → contact.html (from CTA buttons)
└── → faq.html (from FAQ section "See all FAQs")

solutions.html
├── → smart-pid.html (new tab link)
├── → enaibot.html (new tab link)
├── → services.html#cad-automation (contextual link)
├── → contact.html (CTA: "Request a demo")
└── → index.html (breadcrumb)

services.html
├── → solutions.html (contextual: "See our AI solutions")
├── → smart-pid.html (from CAD Automation service)
├── → contact.html (Enquire Now buttons)
└── → index.html (breadcrumb)

smart-pid.html (NEW)
├── → solutions.html (breadcrumb)
├── → enaibot.html (related product)
├── → services.html#cad-automation (related service)
├── → contact.html (CTA)
└── → index.html (breadcrumb)

enaibot.html (NEW)
├── → solutions.html (breadcrumb)
├── → smart-pid.html (related product)
├── → services.html#engineering-services (related service)
├── → contact.html (CTA)
└── → index.html (breadcrumb)
```

---

## Implementation Approach

### 1. Contextual Links in Content
Add keyword-rich links within paragraph text:
```html
<p>Our <a href="smart-pid.html">Smart P&ID automation platform</a> reduces
P&ID creation time by 80% for EPC companies.</p>
```

### 2. Related Products Section
Add a "Related Solutions" section at the bottom of each product page:
```html
<section class="related-solutions">
    <h2>Explore More Solutions</h2>
    <a href="enaibot.html">AI Electrical Engineering Automation</a>
    <a href="solutions.html#eit">EIT Support Extraction Platform</a>
</section>
```

### 3. Footer Update
Update footer "Solutions" column to include all product pages.

---

## Files to Modify

- `index.html` — add contextual links in content sections
- `solutions.html` — add cross-links to product pages
- `services.html` — add links to related solutions
- `about.html` — add links to services and solutions
- `contact.html` — add links to product pages
- All new product pages — include full internal link structure

---

## Technical Notes

- Internal links distribute "link equity" (PageRank) across the site
- AI agents follow internal links to discover and understand site structure
- Anchor text should be descriptive keywords, not "click here" or "learn more"
- Each page should have at least 3-5 internal links to other pages
- Avoid orphan pages (pages with no incoming internal links)
