# Story 40: Add CSS for New Product Landing Pages

**Epic:** CSS + JS Updates
**Priority:** P1 — High
**Effort:** Medium
**Type:** Frontend Styling

---

## Description

As a developer building dedicated product landing pages (Smart PID, EnAIBot),
I need CSS styles for product hero sections, feature grids, comparison tables, workflow diagrams, and CTA sections,
so that new landing pages look professional and consistent with the existing site design.

---

## Current State

The existing `solutions.html` has styles for:
- `.sol-offering-section` — product header
- `.sol-problem-section` — problem cards
- `.sol-approach-section` — numbered steps
- `.sol-capabilities-section` — capability cards
- `.sol-io-section` — inputs/outputs

**These styles will be reused** on new landing pages. However, additional styles are needed for:
- Product-specific hero sections
- Feature deep-dive grids
- Comparison tables (Traditional vs AI workflow)
- CTA call-to-action sections
- Related products section

---

## Acceptance Criteria

- [ ] Product hero section with gradient background and product name
- [ ] Feature grid cards with icons (reuse `.sol-cap-card` pattern)
- [ ] Comparison table styled for "Traditional vs Smart PID" content
- [ ] CTA section with demo request button
- [ ] Related products section at the bottom of each landing page
- [ ] All styles responsive (1024px, 768px, 480px)
- [ ] Styles use existing CSS variables

---

## CSS to Add

### 1. Product Landing Hero

```css
/* ===== Product Landing Hero ===== */
.product-hero {
    padding: 160px 0 80px;
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, var(--primary-dark) 100%);
    color: var(--white);
    text-align: center;
}

.product-hero-label {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(14, 165, 233, 0.2);
    border: 1px solid rgba(14, 165, 233, 0.4);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--primary-light);
    margin-bottom: 20px;
    letter-spacing: 0.5px;
}

.product-hero h1 {
    font-family: var(--font-heading);
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.product-hero-desc {
    font-size: 1.15rem;
    color: #94a3b8;
    max-width: 700px;
    margin: 0 auto 30px;
    line-height: 1.7;
}

.product-hero-cta {
    display: inline-block;
    padding: 14px 36px;
    background: var(--primary-color);
    color: var(--white);
    border-radius: 6px;
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);
}

.product-hero-cta:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .product-hero { padding: 140px 0 60px; }
    .product-hero h1 { font-size: 2rem; }
}
```

### 2. Comparison Table

```css
/* ===== Comparison Table ===== */
.comparison-section {
    padding: 80px 0;
    background-color: var(--bg-darker);
}

.comparison-section h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--text-heading);
    text-align: center;
    margin-bottom: 40px;
}

.comparison-table {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    background: var(--bg-card);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
}

.comparison-table thead {
    background: var(--footer-bg);
    color: var(--white);
}

.comparison-table th {
    padding: 16px 24px;
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 600;
    text-align: left;
}

.comparison-table td {
    padding: 14px 24px;
    font-size: 0.9rem;
    color: var(--text-color);
    border-bottom: 1px solid var(--border-color);
}

.comparison-table tr:last-child td {
    border-bottom: none;
}

.comparison-table tr:hover td {
    background: #f8fafc;
}

@media (max-width: 768px) {
    .comparison-table th,
    .comparison-table td {
        padding: 10px 14px;
        font-size: 0.85rem;
    }
}
```

### 3. CTA Section

```css
/* ===== CTA Section ===== */
.cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 100%);
    text-align: center;
    color: var(--white);
}

.cta-section h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    margin-bottom: 16px;
    color: var(--white);
}

.cta-section p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.85);
}

.cta-btn {
    display: inline-block;
    padding: 16px 40px;
    background: var(--white);
    color: var(--primary-dark);
    border-radius: 6px;
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 1rem;
    transition: var(--transition);
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

### 4. Related Products Section

```css
/* ===== Related Products ===== */
.related-products {
    padding: 60px 0;
    background-color: var(--bg-dark);
}

.related-products h2 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    color: var(--text-heading);
    text-align: center;
    margin-bottom: 40px;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
}

.related-card {
    display: block;
    padding: 30px 24px;
    background: var(--bg-card);
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    text-align: center;
    transition: var(--transition);
}

.related-card:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
}

.related-card i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.related-card h3 {
    font-family: var(--font-heading);
    font-size: 1rem;
    color: var(--text-heading);
}

@media (max-width: 768px) {
    .related-grid { grid-template-columns: 1fr; }
}
```

---

## Files to Modify

- `css/style.css` — append after Story 39 styles

---

## Dependencies

- Story 39 (FAQ + definition CSS) should be added first
- Product landing pages (smart-pid.html, enaibot.html — Phase 2 stories) will use these styles

---

## Technical Notes

- Product hero uses the same dark gradient theme as the homepage hero section
- Comparison table is scrollable on mobile via `overflow-x: auto` on container
- CTA section uses primary brand gradient for visual impact
- All styles are additive — no existing styles modified
- Total addition: ~150 lines of CSS
