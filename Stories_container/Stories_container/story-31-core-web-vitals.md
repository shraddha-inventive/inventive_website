# Story 31: Core Web Vitals Optimization

**Epic:** Technical SEO
**Priority:** P1 — High
**Effort:** Medium
**Type:** Performance Optimization

---

## Description

As Google ranking algorithm evaluating the website,
I should find good Core Web Vitals scores (LCP, FID, CLS),
so that the website is not penalized in search rankings due to poor user experience metrics.

---

## Current State

Core Web Vitals have never been measured for this website.

---

## Target Metrics

| Metric | What It Measures | Target | How to Fix |
|--------|-----------------|--------|------------|
| **LCP** (Largest Contentful Paint) | Time to render largest visible element | < 2.5 seconds | Optimize hero images/video, preload fonts |
| **FID** (First Input Delay) | Time to respond to first user interaction | < 100ms | Minimize JS blocking, defer non-critical scripts |
| **CLS** (Cumulative Layout Shift) | Visual stability (elements jumping around) | < 0.1 | Set explicit image dimensions, reserve space for dynamic content |

---

## Optimizations

### LCP Fixes:
- Add `width` and `height` attributes to hero images
- Add `fetchpriority="high"` to above-fold images
- Preload hero video poster image
- Use `font-display: swap` for Google Fonts

### FID Fixes:
- Add `defer` attribute to `script.js`: `<script src="js/script.js" defer></script>`
- Move Font Awesome to async loading

### CLS Fixes:
- Add explicit `width` and `height` to all `<img>` tags
- Set min-height on slider container to prevent layout shift
- Reserve space for client logo carousel

---

## Acceptance Criteria

- [ ] LCP under 2.5 seconds on mobile
- [ ] FID under 100ms
- [ ] CLS under 0.1
- [ ] All metrics measured via PageSpeed Insights
- [ ] No visible design changes
- [ ] Script loading changed to `defer`

---

## Files to Modify

- All HTML files — add `defer` to script tag, add image dimensions
- `css/style.css` — add min-heights for dynamic containers

---

## Technical Notes

- Core Web Vitals are a confirmed Google ranking factor since 2021
- Measure at: https://pagespeed.web.dev/
- The biggest LCP issue is likely the hero video — consider a static poster image for mobile
- `defer` on script tag prevents JS from blocking page render
