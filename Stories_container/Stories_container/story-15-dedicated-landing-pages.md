# Story 15: Create Dedicated Landing Pages for Each Keyword Cluster

**Epic:** Content Strategy
**Priority:** P0 — Critical
**Effort:** Large
**Type:** Content Creation

---

## Description

As a user searching for specific engineering automation topics,
I should land on a dedicated page focused entirely on that topic,
so that I get a comprehensive answer and Inventive ranks for that keyword cluster.

---

## Current State

All solutions content is crammed into ONE page (`solutions.html`). No dedicated pages exist for individual products or keyword clusters.

---

## Pages to Create

| # | Page | Primary Keywords | Word Count |
|---|------|-----------------|------------|
| 1 | `smart-pid-automation-platform.html` | Smart P&ID, AI P&ID Digitization, P&ID Automation | 1000-1500 |
| 2 | `ai-electrical-engineering-automation.html` | AI Electrical Engineering, Load List Automation, SLD Generation | 1000-1500 |
| 3 | `ai-support-extraction-navisworks.html` | Navisworks Support Extraction, AI Support Drawing, Fabrication Automation | 1000-1500 |
| 4 | `bim-automation-industrial-plants.html` | BIM for Industrial Plants, Industrial BIM, Plant 3D Automation | 800-1200 |
| 5 | `engineering-knowledge-graph.html` | Engineering Knowledge Graph, P&ID Data Intelligence | 800-1200 |
| 6 | `ai-engineering-industries.html` | AI for EPC, Oil & Gas AI, Water Treatment AI | 800-1200 |

---

## Each Page Must Contain

1. **Hero section** with H1 containing primary keyword
2. **Definition block** — what this product/service is (50-100 words)
3. **Problem section** — what pain point it solves
4. **Solution section** — how Inventive solves it
5. **Outcome section** — measurable results (%, time, cost)
6. **Key capabilities** — 4-6 feature cards
7. **FAQ section** — 4-6 long-tail keyword questions
8. **CTA section** — "Request a Demo" or "Contact Us"
9. **Related products** — links to other Inventive products
10. **JSON-LD schema** — SoftwareApplication + Product + FAQPage + Breadcrumb

---

## Acceptance Criteria

- [ ] Minimum 6 dedicated landing pages created
- [ ] Each page has 800-1500 words of unique content
- [ ] Each page targets 10-15 keywords from the keyword strategy
- [ ] Each page has full schema markup (4 JSON-LD blocks)
- [ ] Each page follows Problem → Solution → Outcome structure
- [ ] Each page has an FAQ section with long-tail keywords
- [ ] Each page has internal links to 3+ other pages
- [ ] All pages are linked from navigation, footer, and solutions.html

---

## Technical Notes

- Each page should be a standalone HTML file following the existing site template
- Reuse CSS classes from stories 39 and 40
- Each page must be added to sitemap.xml after creation
- Content should be written for both humans and AI agents — clear, structured, factual
