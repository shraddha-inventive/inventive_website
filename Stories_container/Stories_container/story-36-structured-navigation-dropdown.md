# Story 36: Add Structured Navigation Dropdown Under Solutions

**Epic:** Technical SEO
**Priority:** P1 — High
**Effort:** Medium
**Type:** Navigation Enhancement

---

## Description

As a website visitor looking for a specific product,
I should see a dropdown under "Solution" in the navigation with links to each product section,
so that I can navigate directly to the product I need.

**Constraint:** Modify existing nav — NO new pages needed. Dropdown links to anchors within `solutions.html`.

---

## Current State

Navigation has 5 flat links: Home | About Us | Services | Solution | Contact Us. "Solution" links to `solutions.html` with no dropdown. Users must scroll and click tabs to find specific products.

---

## What to Change

Add a CSS dropdown under the "Solution" nav item:

```html
<li class="nav-item nav-dropdown">
    <a href="solutions.html" class="nav-link">Solution</a>
    <ul class="dropdown-menu">
        <li><a href="solutions.html#eit">EIT Support Extraction</a></li>
        <li><a href="solutions.html#piping-ga">2D Piping GA Automation</a></li>
        <li><a href="solutions.html#smart-pid">Smart PID Platform</a></li>
        <li><a href="solutions.html#enaibot">EnAIBot Platform</a></li>
    </ul>
</li>
```

Also update mobile menu with same links.

---

## Acceptance Criteria

- [ ] Desktop: Dropdown appears on hover over "Solution" nav item
- [ ] Desktop: Dropdown disappears when mouse leaves
- [ ] Mobile: Solutions sub-links appear in mobile menu
- [ ] All dropdown links work (navigate to correct section)
- [ ] Dropdown styling matches existing nav design (dark transparent background)
- [ ] No layout shift when dropdown appears

---

## Files to Modify

- `index.html` — update nav and mobile menu
- `about.html` — update nav and mobile menu
- `services.html` — update nav and mobile menu
- `solutions.html` — update nav and mobile menu
- `contact.html` — update nav and mobile menu
- `css/style.css` — add dropdown CSS (~30 lines)

---

## Technical Notes

- CSS-only dropdown (no JS needed) using `:hover` and `visibility/opacity` transition
- The existing `style.css` already has dropdown-related placeholder styles
- Dropdown provides internal links that help search engines understand site structure
- Mobile menu should show sub-items as indented links (no hover on touch devices)
