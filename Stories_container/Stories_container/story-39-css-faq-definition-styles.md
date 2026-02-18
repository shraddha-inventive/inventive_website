# Story 39: Add CSS for FAQ Accordion, Definition Block & New Sections

**Epic:** CSS + JS Updates
**Priority:** P0 — Critical
**Effort:** Medium
**Type:** Frontend Styling

---

## Description

As a developer implementing new SEO/GEO sections on the website,
I need CSS styles for the FAQ accordion, definition block, "Who We Serve" grid, "Why Inventive" outcomes, and breadcrumb navigation,
so that new content sections match the existing site design and are visually polished.

---

## Current State

`css/style.css` (~80KB) has styles for all existing components but **no styles for:**
- FAQ accordion (expand/collapse)
- Definition/positioning block
- "Who We Serve" industry cards
- "Why Inventive" outcome statistics
- Breadcrumb navigation
- Product highlight cards for new landing pages

---

## Acceptance Criteria

- [ ] FAQ items collapse/expand with smooth animation
- [ ] FAQ question rows have hover and active states
- [ ] Definition block stands out visually (background, border, or highlight)
- [ ] "Who We Serve" grid is responsive (4 cols → 2 cols → 1 col)
- [ ] "Why Inventive" outcome numbers are large and prominent
- [ ] Breadcrumb navigation is styled inline with `>` separators
- [ ] All new styles use existing CSS variables (--primary-color, --text-color, etc.)
- [ ] All new sections are responsive (1024px, 768px, 480px breakpoints)
- [ ] New styles are appended to the end of `style.css` with clear section comments

---

## CSS to Add

### 1. Definition Block

```css
/* ===== Definition Block ===== */
.definition-block {
    padding: 60px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-bottom: 3px solid var(--primary-color);
}

.definition-block h2 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    color: var(--text-heading);
    margin-bottom: 20px;
}

.definition-text {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--text-color);
    max-width: 900px;
}

.definition-text strong {
    color: var(--primary-dark);
}
```

### 2. Who We Serve Grid

```css
/* ===== Who We Serve ===== */
.who-we-serve {
    padding: 80px 0;
    background-color: var(--bg-dark);
}

.who-we-serve h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--text-heading);
    text-align: center;
    margin-bottom: 50px;
}

.serve-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.serve-card {
    text-align: center;
    padding: 40px 25px;
    background: var(--bg-card);
    border-radius: 12px;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.serve-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.serve-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.serve-card h3 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: var(--text-heading);
    margin-bottom: 12px;
}

.serve-card p {
    font-size: 0.95rem;
    color: var(--text-light);
    line-height: 1.6;
}

@media (max-width: 1024px) {
    .serve-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
    .serve-grid { grid-template-columns: 1fr; }
}
```

### 3. Why Inventive — Outcomes

```css
/* ===== Why Inventive Outcomes ===== */
.why-inventive {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--footer-bg) 0%, #0f172a 100%);
    color: var(--white);
}

.why-inventive h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 50px;
    color: var(--white);
}

.outcomes-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.outcome-card {
    text-align: center;
    padding: 40px 20px;
}

.outcome-number {
    display: block;
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--primary-light);
    margin-bottom: 15px;
}

.outcome-card p {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.6;
}

@media (max-width: 1024px) {
    .outcomes-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
    .outcomes-grid { grid-template-columns: 1fr; }
    .outcome-number { font-size: 2.5rem; }
}
```

### 4. FAQ Accordion

```css
/* ===== FAQ Section ===== */
.faq-section {
    padding: 80px 0;
    background-color: var(--bg-darker);
}

.faq-section h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--text-heading);
    text-align: center;
    margin-bottom: 50px;
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: var(--bg-card);
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-heading);
    text-align: left;
    transition: var(--transition);
}

.faq-question:hover {
    color: var(--primary-color);
}

.faq-question i {
    font-size: 0.85rem;
    color: var(--primary-color);
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 15px;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.active .faq-answer {
    max-height: 500px;
    padding: 0 24px 20px;
}

.faq-answer p {
    font-size: 0.95rem;
    color: var(--text-color);
    line-height: 1.7;
}
```

### 5. Breadcrumb Navigation

```css
/* ===== Breadcrumb Navigation ===== */
.breadcrumb {
    padding: 15px 0;
    background-color: var(--bg-darker);
    border-bottom: 1px solid var(--border-color);
    margin-top: 120px;
}

.breadcrumb-list {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
}

.breadcrumb-list li {
    font-size: 0.85rem;
    color: var(--text-light);
}

.breadcrumb-list li a {
    color: var(--primary-color);
    text-decoration: none;
}

.breadcrumb-list li a:hover {
    text-decoration: underline;
}

.breadcrumb-list li + li::before {
    content: ">";
    margin-right: 8px;
    color: var(--text-light);
}

.breadcrumb-list li[aria-current="page"] {
    color: var(--text-heading);
    font-weight: 500;
}
```

---

## Files to Modify

- `css/style.css` — append all new styles at the end with section comments

---

## Dependencies

- Story 26 (Homepage definition + FAQ) needs these styles
- Story 13 (Breadcrumb schema) needs breadcrumb styles
- Product landing pages (smart-pid.html, enaibot.html — Phase 2 stories) will reuse these styles

---

## Technical Notes

- All styles use existing CSS variables for consistency
- Responsive breakpoints match existing site: 1024px, 768px, 480px
- FAQ animation uses `max-height` transition (no JavaScript height calculation needed)
- Styles are additive — no existing styles are modified
- Total addition: ~200 lines of CSS
