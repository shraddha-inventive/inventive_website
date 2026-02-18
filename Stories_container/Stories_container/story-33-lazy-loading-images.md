# Story 33: Add Lazy Loading to All Below-Fold Images

**Epic:** Technical SEO
**Priority:** P1 — High
**Effort:** Small
**Type:** Performance Optimization

---

## Description

As a website visitor,
I should only download images that are visible on screen,
so that the initial page load is faster and data usage is reduced.

---

## Current State

No `loading="lazy"` attributes exist on any `<img>` tag. All images load immediately on page load, even those far below the fold (client logos, about section, footer).

---

## What to Change

Add `loading="lazy"` to all images EXCEPT:
- Logo in header (above fold — must load immediately)
- Hero section images (above fold)
- First visible image on each page

### Images to Lazy Load (index.html):
```html
<!-- Service icons — below fold -->
<img src="images/icon-01.png" alt="BIM Services" loading="lazy">

<!-- Client logos — below fold -->
<img src="images/1.png" alt="Bharat Petroleum" loading="lazy">

<!-- About section image — below fold -->
<img src="images/Service-Page-Header-Mobile-View_new.png" alt="..." loading="lazy">

<!-- Footer logo — below fold -->
<img src="images/logo-01.png" alt="Inventive Bizsol" loading="lazy">
```

### Images to NOT lazy load:
```html
<!-- Header logo — above fold, keep eager -->
<img src="images/logo-01.png" alt="Inventive Bizsol">
```

---

## Acceptance Criteria

- [ ] All below-fold images have `loading="lazy"` attribute
- [ ] Above-fold images (header logo, hero) do NOT have lazy loading
- [ ] Page renders correctly with no layout shift from lazy images
- [ ] Applied across all 5 HTML pages
- [ ] No visual changes to the website

---

## Files to Modify

- `index.html` — add `loading="lazy"` to ~20 images
- `about.html` — add to below-fold images
- `services.html` — add to below-fold images
- `solutions.html` — add to below-fold images
- `contact.html` — add to below-fold images

---

## Technical Notes

- Native `loading="lazy"` is supported by all modern browsers (no JS library needed)
- This is a one-line change per image tag
- Reduces initial page weight significantly (especially client logo carousel with 28 images)
- Google PageSpeed Insights specifically flags missing lazy loading
