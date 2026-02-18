# Story 45: Create Downloadable Whitepapers (PDF)

**Epic:** Backlinks & Authority
**Priority:** P2 — Medium
**Effort:** Large
**Type:** Content Creation (Minimal Website Change)

---

## Description

As a technical decision-maker evaluating Inventive,
I should be able to download in-depth whitepapers about engineering automation,
so that I can review detailed technical content offline and share it with my team.

**Constraint:** Add download links to existing pages — NO new page needed. PDFs hosted in an `assets/` or `docs/` folder.

---

## Whitepapers to Create

| # | Title | Pages | Target Audience |
|---|-------|-------|----------------|
| 1 | AI-Powered Support Extraction: A Technical Guide | 5-8 | EPC Design Leads |
| 2 | Smart P&ID Automation for Process Plants | 5-8 | Engineering Managers |
| 3 | Engineering Automation ROI Calculator | 3-5 | CXOs, Project Managers |

---

## Website Integration

Add download buttons to relevant sections of existing pages:

```html
<a href="docs/whitepaper-support-extraction.pdf" class="btn-secondary" download>
    <i class="fas fa-file-pdf"></i> Download Whitepaper
</a>
```

Place on:
- `solutions.html` — in each product tab's section
- `index.html` — in the "Why Inventive" section

---

## Acceptance Criteria

- [ ] Minimum 2 whitepapers created as PDF files
- [ ] PDFs are branded with Inventive logo and design
- [ ] Download links added to relevant existing pages
- [ ] PDFs are stored in `docs/` folder in the repo
- [ ] No new HTML pages created
- [ ] Download links match existing button styling

---

## Technical Notes

- Whitepapers are the #1 lead generation tool for B2B companies
- PDFs are crawlable by Google (they appear in search results)
- Whitepapers earn backlinks when shared by industry professionals
- Optional: gate behind email capture form for lead generation (Phase 2 enhancement)
