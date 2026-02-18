# Story 11: Add FAQPage Schema on Pages with FAQ Sections

**Epic:** Structured Data / Schema Markup
**Priority:** P0 — Critical
**Effort:** Medium
**Type:** Schema.org JSON-LD

---

## Description

As a search engine or AI agent crawling pages with FAQ sections,
I should find a `FAQPage` JSON-LD schema with structured question-answer pairs,
so that I can display FAQ rich snippets in search results and use the Q&A content to answer user queries directly.

---

## Current State

**No FAQ sections exist on any page.** This story depends on the FAQ content being added first (see Story 26 for homepage FAQ).

---

## Acceptance Criteria

- [ ] Every page that has a visible FAQ section also has a matching `FAQPage` JSON-LD
- [ ] Each question-answer pair in the schema matches the visible FAQ content exactly
- [ ] Questions contain long-tail keywords from the keyword strategy
- [ ] Schema validates on Google Rich Results Test
- [ ] Minimum 5 FAQs per page, maximum 10

---

## Implementation — Homepage FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to automate piping support drawings from Navisworks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inventive's EIT Support Extraction Platform automatically reads 3D Navisworks models, identifies electrical, instrumentation, and telecom supports, classifies them by type and discipline, and generates fabrication-ready DWG/PDF drawings — eliminating manual extraction entirely."
      }
    },
    {
      "@type": "Question",
      "name": "What is Smart P&ID and how does it reduce engineering time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart PID is an AI-powered platform that accelerates P&ID diagram creation. Process engineers define ESP configurations via a 5-step web wizard, and the system automatically generates standardized Plant 3D drawings with ISA-5.1 compliance — reducing P&ID creation time by 80%."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI automate cable tray support extraction from 3D models?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inventive's platform extracts cable tray supports from Plant 3D and Navisworks models, generating 2D support GA drawings with exact X-Y coordinates, standardized layers, and annotation styles for direct use in fabrication and site installation."
      }
    },
    {
      "@type": "Question",
      "name": "What is an Engineering Knowledge Graph for process plants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Engineering Knowledge Graph connects P&ID data, equipment specifications, instrumentation, and design parameters into an intelligent data structure. Inventive's platform uses knowledge graphs to enable AI-based change impact analysis, design validation, and cross-project learning."
      }
    },
    {
      "@type": "Question",
      "name": "How does AI reduce engineering costs in EPC projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inventive's AI automation platforms reduce engineering costs by up to 60% through automated support extraction, P&ID generation, and electrical design automation. By eliminating manual drafting, reducing rework, and enforcing standards automatically, EPC companies achieve 3x throughput increase."
      }
    },
    {
      "@type": "Question",
      "name": "Does Inventive integrate with Autodesk Plant 3D and Navisworks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inventive is an Autodesk Authorized Developer. Our platforms integrate directly with Autodesk Plant 3D for P&ID generation, Navisworks for 3D model coordination and support extraction, and Autodesk Vault for document management and version control."
      }
    }
  ]
}
```

---

## FAQ Schema Per Page

| Page | Number of FAQs | Focus Keywords |
|------|---------------|---------------|
| index.html | 6 FAQs | Core positioning, general product questions |
| smart-pid.html | 5 FAQs | Smart P&ID, P&ID automation, ESP wizard |
| enaibot.html | 5 FAQs | Electrical engineering, load lists, SLD |
| solutions.html | 4 FAQs | Support extraction, piping GA |
| faq.html | 10+ FAQs | All long-tail keywords |

---

## Files to Modify

- `index.html` — add FAQPage JSON-LD (after FAQ section is added)
- `smart-pid.html` (new) — add FAQPage JSON-LD
- `enaibot.html` (new) — add FAQPage JSON-LD
- `solutions.html` — add FAQPage JSON-LD
- `faq.html` (new) — add FAQPage JSON-LD

---

## Dependencies

- Story 26 (Homepage FAQ section) must be completed first for index.html
- Product landing pages (smart-pid.html, enaibot.html) must be created first — these are Phase 2 stories not yet documented in this set

---

## Technical Notes

- FAQPage schema enables Google FAQ rich snippets — can double the SERP real estate
- AI agents (ChatGPT, Perplexity) directly parse FAQ schema to answer conversational queries
- Questions should match real long-tail search queries verbatim
- Answers should be 50-200 words each — concise but informative
- The visible FAQ content on the page MUST match the schema content exactly
