# Story 52: Add Structured Data Tables to Existing Pages

**Epic:** AI/LLM Optimization
**Priority:** P2 — Medium
**Effort:** Small
**Type:** Content Enhancement

---

## Description

As an AI agent extracting factual data about Inventive's products,
I should find well-structured HTML tables with clear headers and data,
so that I can extract and cite specific capabilities, metrics, and specifications.

**Constraint:** Add tables within existing page sections — NO new pages.

---

## Current State

The website uses paragraph text and bullet points. No structured HTML tables exist. AI agents prefer tables because they provide clearly labeled, extractable data points.

---

## Tables to Add

### 1. On `solutions.html` — Product Specs Table (inside each tab)

**EIT Support Extraction:**
| Specification | Detail |
|--------------|--------|
| Input formats | PDF, DWG, scanned drawings |
| Output formats | Structured Excel, database |
| AI accuracy | 95%+ extraction rate |
| Processing speed | 15-30 min per drawing |
| Standards supported | ASME, client-specific |

**AI Powered 2D Piping GA:**
| Specification | Detail |
|--------------|--------|
| Input | 3D model, equipment list |
| Output | 2D General Arrangement drawings |
| CAD platform | AutoCAD |
| Design time reduction | 70-80% |
| Standards | Client-specific, ASME |

**Smart PID (after Story 27 adds the tab):**
| Specification | Detail |
|--------------|--------|
| Platform | Web-based application |
| Integration | Autodesk Plant 3D, Autodesk Vault |
| Workflow | 5-step ESP wizard |
| Time reduction | Up to 80% |
| Deployment | Initially Thermax Enviro Division |

**EnAIBot (after Story 27 adds the tab):**
| Specification | Detail |
|--------------|--------|
| Platform | Web-based application |
| Modules | 14 (load list, cable schedule, SLD, etc.) |
| AI capability | Design basis extraction, auto-calculation |
| Electrical standards | IS, IEC, NEC |
| Output | Reports, cable schedules, SLD drawings |

### 2. On `index.html` — Company At-a-Glance Table

Add in the about/company section:
| | |
|---|---|
| Founded | 2011 |
| Headquarters | Pune, India |
| Offices | India, USA, Australia |
| Specialization | AI-Powered Engineering Automation |
| Autodesk Status | Authorized Developer |
| Products | 4 AI/automation solutions |
| Industries Served | Oil & Gas, Power, Process, Infrastructure |

### 3. On `services.html` — Services Overview Table

| Service | Key Capability | Industries |
|---------|---------------|------------|
| BIM Services | 3D modeling, clash detection | Infrastructure, Buildings |
| Speed BIM | Rapid BIM delivery | Construction, MEP |
| Engineering | Detail engineering, FEED support | Oil & Gas, Process |
| CAD Automation | Custom automation tools | All engineering |
| Digitalization | Paper to digital conversion | Legacy plants |

---

## Acceptance Criteria

- [ ] Product specification tables added inside each solution tab
- [ ] Company at-a-glance table added to index.html
- [ ] Services overview table added to services.html
- [ ] All tables use semantic HTML (`<table>`, `<thead>`, `<th>`, `<tbody>`, `<td>`)
- [ ] Tables are responsive (horizontal scroll on mobile or stacked layout)
- [ ] No new pages created

---

## Files to Modify

- `solutions.html` — add spec tables inside each product accordion tab
- `index.html` — add company at-a-glance table in about section
- `services.html` — add services overview table
- `css/style.css` — responsive table styles (minimal, reuse existing patterns)

---

## Technical Notes

- AI agents extract data from HTML tables more reliably than from paragraphs
- Semantic `<th>` headers help AI agents understand what each column represents
- Tables also improve Google Featured Snippet eligibility
- Keep tables concise — 5-8 rows max per table for readability
- Tables must be responsive; use `overflow-x: auto` wrapper for mobile
