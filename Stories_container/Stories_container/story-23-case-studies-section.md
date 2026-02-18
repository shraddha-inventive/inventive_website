# Story 23: Add Case Studies Section to About Page

**Epic:** Content Strategy
**Priority:** P2 — Medium
**Effort:** Medium
**Type:** Content Enhancement

---

## Description

As a potential customer evaluating Inventive,
I should see real project case studies with measurable outcomes,
so that I trust Inventive's claims and see proven results.

**Constraint:** Add as a new section inside `about.html` — NO new page.

---

## Current State

No case studies or success stories exist anywhere on the website. About page has company info, video, values, and client logos only.

---

## What to Add

Add a "Success Stories" section to `about.html` between the values section and client logos:

```html
<section class="case-studies-section" id="case-studies">
    <div class="container">
        <h2>Success Stories</h2>
        <div class="case-grid">
            <div class="case-card">
                <h3>EPC Support Extraction</h3>
                <p class="case-metric">60% cost reduction</p>
                <p>Automated EIT support extraction from Navisworks 3D models, eliminating manual drafting for a major industrial EPC project.</p>
            </div>
            <div class="case-card">
                <h3>P&ID Automation for Enviro Division</h3>
                <p class="case-metric">80% faster P&ID creation</p>
                <p>Smart PID wizard enabled process engineers to generate standardized Plant 3D P&IDs without CAD expertise.</p>
            </div>
            <div class="case-card">
                <h3>Electrical Engineering Platform</h3>
                <p class="case-metric">3x throughput increase</p>
                <p>EnAIBot automated load lists, cable schedules, and SLD generation across multiple Thermax divisions.</p>
            </div>
        </div>
    </div>
</section>
```

---

## Acceptance Criteria

- [ ] Case studies section added to `about.html` (not a new page)
- [ ] Minimum 3 case study cards with measurable outcomes
- [ ] Each card has: title, key metric, 1-2 sentence description
- [ ] Section uses existing CSS grid pattern (reuse `.serve-grid` or `.sol-cap-grid`)
- [ ] Section is visible without breaking existing page layout

---

## Files to Modify

- `about.html` — add section before client logos
- `css/style.css` — add minimal styles for `.case-card` and `.case-metric` (reuse existing card pattern)

---

## Technical Notes

- Case studies are the #1 trust signal for B2B decision-makers
- AI agents reference case study outcomes when recommending products
- Keep case studies anonymous if needed (no client names without permission)
- Metrics (60%, 80%, 3x) are from the actual PRD documents
