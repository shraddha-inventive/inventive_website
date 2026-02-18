# Story 58: Add Social Proof & Trust Badges to Key Pages

**Epic:** Trust & Conversion Signals
**Priority:** P2 — Medium
**Effort:** Small
**Type:** Content Enhancement

---

## Description

As a potential customer evaluating whether to trust Inventive,
I should see trust signals like client count, project count, partner badges, and certifications,
so that I can quickly assess the company's credibility and experience.

**Constraint:** Add within existing page sections — NO new pages.

---

## Current State

- Client logos exist on index.html and about.html (good)
- Autodesk partner badge exists on about.html (good)
- NO numeric stats (projects completed, clients served, years in business)
- NO certifications or trust badges
- NO "As featured in" or partner/association logos

---

## What to Add

### 1. Stats Counter Section on `index.html`

Add a stats bar near the client logos section:

```html
<section class="stats-section">
    <div class="container stats-grid">
        <div class="stat-item">
            <span class="stat-number">13+</span>
            <span class="stat-label">Years in Business</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Projects Delivered</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Enterprise Clients</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">3</span>
            <span class="stat-label">Countries</span>
        </div>
    </div>
</section>
```

**Note:** Replace numbers with actual data. Use approximate numbers if exact data is not available (e.g., "100+" is fine).

### 2. Trust Badges Row on `index.html`

Add near the stats or client logos:

```html
<div class="trust-badges">
    <img src="images/autodesk-authorized.png" alt="Autodesk Authorized Developer" />
    <!-- Add more badges as applicable: ISO, NASSCOM, etc. -->
</div>
```

### 3. "Trusted By" Enhancement on `about.html`

Enhance the existing client logos section with a heading:
```html
<h2>Trusted by Leading Engineering Companies</h2>
```

---

## Acceptance Criteria

- [ ] Stats counter section added to index.html with 3-4 key metrics
- [ ] Stats numbers are accurate or reasonably approximated
- [ ] Trust badges displayed prominently on index.html
- [ ] Client logos section on about.html has a trust-focused heading
- [ ] Stats section is responsive (2x2 grid on mobile, 4-column on desktop)
- [ ] No new HTML pages created
- [ ] Design matches existing website look and feel

---

## Files to Modify

- `index.html` — add stats section and trust badges
- `about.html` — enhance client logos heading
- `css/style.css` — stats counter styles and badge layout

---

## Technical Notes

- Stats counters are a proven conversion optimization element (increase trust by 15-25%)
- Numbers should be conservative and defensible — overstating metrics damages trust
- Autodesk Authorized Developer badge is a strong trust signal for the target audience
- Stats section can optionally have a count-up animation using existing JS patterns
- AI agents extract numeric data from stats sections as company credibility indicators
- Placeholder numbers must be replaced with actual company data before deployment
