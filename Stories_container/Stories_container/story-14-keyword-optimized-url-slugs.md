# Story 14: Keyword-Optimized URL Slugs

**Epic:** On-Page SEO Foundation
**Priority:** P1 — High
**Effort:** Medium
**Type:** SEO Enhancement

---

## Description

As a search engine or AI agent indexing the website,
I should find keyword-rich, descriptive URL slugs for every page,
so that URLs themselves signal the page topic and improve click-through rates in search results.

---

## Current State

| Page | Current URL | Problem |
|------|-----------|---------|
| index.html | `/inventive_website/` | OK — homepage |
| about.html | `/inventive_website/about.html` | Generic — no keyword |
| services.html | `/inventive_website/services.html` | Generic — no keyword |
| solutions.html | `/inventive_website/solutions.html` | Generic — no keyword |
| contact.html | `/inventive_website/contact.html` | OK — standard |

---

## Recommended URL Slugs for New Pages

| Page | Recommended Slug | Keywords in URL |
|------|-----------------|----------------|
| Smart PID page | `smart-pid-automation-platform.html` | smart-pid, automation, platform |
| EnAIBot page | `ai-electrical-engineering-automation.html` | ai, electrical, engineering, automation |
| Support Extraction | `ai-support-extraction-navisworks.html` | ai, support-extraction, navisworks |
| BIM Automation | `bim-automation-industrial-plants.html` | bim, automation, industrial |
| Knowledge Graph | `engineering-knowledge-graph.html` | engineering, knowledge-graph |
| FAQ | `engineering-automation-faq.html` | engineering, automation, faq |
| Case Studies | `ai-engineering-case-studies.html` | ai, engineering, case-studies |
| Blog | `engineering-automation-blog.html` | engineering, automation, blog |
| Glossary | `engineering-terminology-glossary.html` | engineering, terminology, glossary |
| Pricing | `ai-engineering-pricing.html` | ai, engineering, pricing |
| Industries | `ai-engineering-industries.html` | ai, engineering, industries |

---

## Acceptance Criteria

- [ ] All new pages use keyword-rich slugs (not generic names)
- [ ] Slugs use hyphens as separators (not underscores)
- [ ] Slugs are lowercase
- [ ] Slugs are 3-5 words maximum
- [ ] Primary keyword appears in every slug
- [ ] Existing pages retain current URLs to avoid broken links

---

## Technical Notes

- Google treats words in URLs as a minor ranking signal
- AI agents parse URLs to understand page topic before reading content
- Hyphens `-` are treated as word separators by search engines; underscores `_` are not
- Do NOT rename existing page URLs without setting up 301 redirects (GitHub Pages doesn't support server redirects, so use JS redirects or keep old URLs)
- For existing pages, the canonical URL + content optimization is more impactful than renaming
