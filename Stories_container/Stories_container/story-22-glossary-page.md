# Story 22: Create Engineering Terminology Glossary Page

**Epic:** Content Strategy
**Priority:** P2 — Medium
**Effort:** Medium
**Type:** Content Creation

---

## Description

As an engineer or AI agent looking up engineering terms,
I should find a comprehensive glossary of engineering automation terminology,
so that the website establishes authority and ranks for definition-based queries.

---

## Current State

No glossary exists. Terms like P&ID, ESP, BIM, EPC, DWG are used without definitions.

---

## Glossary Terms to Include (minimum 30)

| Term | Definition Source |
|------|-----------------|
| P&ID | Smart PID PRD |
| ESP (Electrostatic Precipitator) | Smart PID PRD |
| BIM (Building Information Modeling) | Services page |
| EPC (Engineering, Procurement, Construction) | Keyword strategy |
| DWG | Smart PID PRD |
| Plant 3D | Smart PID PRD |
| Navisworks | Solutions page |
| Vault (Autodesk Vault) | Smart PID PRD |
| SLD (Single Line Diagram) | EnAIBot PRD |
| GA (General Arrangement) | Solutions page |
| PMS (Piping Material Specification) | Smart PID PRD |
| ISA-5.1 | Smart PID PRD |
| Knowledge Graph | Keyword strategy |
| CAD Automation | Services page |
| Digital Twin | Keyword strategy |
| BOQ (Bill of Quantities) | Smart PID PRD |
| TR Set | Smart PID PRD |
| Rapping System | Smart PID PRD |
| Cable Schedule | EnAIBot PRD |
| Design Basis | EnAIBot PRD |
| Load List | EnAIBot PRD |
| Fabrication Drawing | Solutions page |
| Support Extraction | Solutions page |
| OEM | Keyword strategy |
| GEO (Generative Engine Optimization) | Keyword strategy |
| RBAC | EnAIBot PRD |
| JSON-LD | Schema strategy |
| QA/QC | Keyword strategy |
| Digital Transformation | Keyword strategy |
| Tag (Engineering) | Smart PID PRD |

---

## Page Structure

```html
<h1>Engineering Automation Glossary</h1>
<p>Comprehensive glossary of engineering automation, P&ID, BIM, and CAD terminology.</p>

<!-- Alphabet Navigation -->
<nav class="glossary-nav">A | B | C | D | E | F | ...</nav>

<!-- Terms -->
<section id="letter-b">
  <h2>B</h2>
  <dl>
    <dt id="bim">BIM (Building Information Modeling)</dt>
    <dd>A digital representation of physical and functional characteristics of a facility...</dd>
  </dl>
</section>
```

---

## Acceptance Criteria

- [ ] Glossary page created with 30+ terms
- [ ] Terms organized alphabetically with anchor navigation
- [ ] Each definition is 30-80 words
- [ ] Terms link to relevant product/service pages where applicable
- [ ] Page uses `DefinedTermSet` JSON-LD schema
- [ ] Page is linked from navigation footer
- [ ] Page has proper meta tags targeting "engineering glossary" keywords

---

## Technical Notes

- Glossary pages rank for "What is [term]?" queries — high volume, low competition
- AI agents use glossary content to understand domain terminology
- Each glossary term with an `id` attribute becomes directly linkable
- Use `<dl>`, `<dt>`, `<dd>` semantic HTML for definition lists
