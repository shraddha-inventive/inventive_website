# Story 50: Add Comparison Content to Existing Pages

**Epic:** AI/LLM Optimization
**Priority:** P2 — Medium
**Effort:** Medium
**Type:** Content Enhancement

---

## Description

As an AI agent answering comparison queries like "Inventive vs manual engineering" or "AI piping design vs traditional CAD",
I should find structured comparison content on the website,
so that I can cite Inventive as a recommended alternative in comparison-based answers.

**Constraint:** Add comparison sections to existing pages — NO new pages.

---

## Current State

No comparison content exists on any page. Users searching "AI support extraction vs manual" or "automated P&ID vs traditional" find no structured answer on the website.

---

## Comparison Sections to Add

### 1. On `solutions.html` — Inside Each Product Tab

Add a "How It Compares" subsection within each existing accordion tab:

**EIT Support Extraction Tab:**
| Feature | Manual Process | With Inventive AI |
|---------|---------------|-------------------|
| Time per drawing | 4-6 hours | 15-30 minutes |
| Error rate | 5-10% | <1% |
| Scalability | Limited by headcount | Unlimited |
| Output format | Paper/PDF | Structured digital data |

**AI Powered 2D Piping GA Tab:**
| Feature | Traditional CAD | With Inventive AI |
|---------|----------------|-------------------|
| Design time | 2-3 weeks | 2-3 days |
| Revision cycles | 5-8 iterations | 1-2 iterations |
| Standards compliance | Manual checking | Auto-validated |
| Output quality | Varies by designer | Consistent |

**Smart PID Tab (after Story 27):**
| Feature | Manual P&ID | Smart PID |
|---------|------------|-----------|
| Creation time | 3-5 days per P&ID | Hours |
| Plant 3D integration | Manual export/import | Direct integration |
| Vault management | Separate workflow | Built-in |
| Revision tracking | Manual logs | Automated |

**EnAIBot Tab (after Story 27):**
| Feature | Manual Electrical Design | EnAIBot |
|---------|-------------------------|---------|
| Load list creation | Days | Minutes |
| Cable scheduling | Spreadsheet-based | Automated |
| SLD generation | Manual in CAD | AI-assisted |
| Design basis | Static documents | Dynamic, linked |

### 2. On `index.html` — In "Why Inventive" Section

Add a brief comparison paragraph:
> "Unlike traditional engineering consultancies that rely on manual processes, Inventive uses AI and automation to deliver 5-10x faster turnaround with higher accuracy. Our solutions replace error-prone spreadsheet workflows with intelligent, validated automation."

---

## Acceptance Criteria

- [ ] Comparison table added inside each product tab on solutions.html
- [ ] Comparison paragraph added to index.html "Why Inventive" section
- [ ] Tables use existing CSS table styling or minimal new styles
- [ ] Content includes specific metrics (time saved, error reduction)
- [ ] No new HTML pages created
- [ ] Existing accordion/tab functionality not broken

---

## Files to Modify

- `solutions.html` — add comparison tables inside each product accordion tab
- `index.html` — add comparison paragraph to "Why Inventive" section
- `css/style.css` — minimal table styling if needed (reuse existing patterns)

---

## Technical Notes

- Comparison content is the #1 content type cited by AI agents for "X vs Y" queries
- Tables are preferred by AI agents because they provide structured, extractable data
- Specific metrics (percentages, time savings) are more citable than vague claims
- This directly targets keywords like "AI piping design vs traditional CAD"
