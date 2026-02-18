# Story 29: Page Speed Optimization (<2s Load Time)

**Epic:** Technical SEO
**Priority:** P1 — High
**Effort:** Medium
**Type:** Performance Optimization

---

## Description

As a website visitor on any device,
I should experience page load times under 2 seconds,
so that I don't leave the site due to slow loading, and search engines rank the site higher.

---

## Current State

- `css/style.css` is ~80KB (single file, unminified)
- `js/script.js` is ~14KB (single file, unminified)
- Images in `images/` folder — sizes unknown, likely unoptimized
- External resources: Font Awesome CDN, Google Fonts (3 font families)
- Hero section has a video background (`ai-blue-data.mp4`)

---

## Optimizations Required

| # | Optimization | Impact |
|---|-------------|--------|
| 1 | Minify `style.css` (80KB → ~50KB) | Medium |
| 2 | Minify `script.js` (14KB → ~8KB) | Low |
| 3 | Compress images to WebP format | High |
| 4 | Add `loading="lazy"` to below-fold images (see Story 33) | Medium |
| 5 | Preload critical fonts | Medium |
| 6 | Reduce Google Fonts to 2 families (drop one) | Low |
| 7 | Optimize video file size or use poster image | High |
| 8 | Add `preconnect` for external domains | Low |

### Preconnect hints to add in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
```

---

## Acceptance Criteria

- [ ] Page load time under 2 seconds on desktop (measured by PageSpeed Insights)
- [ ] Page load time under 3 seconds on mobile
- [ ] CSS is minified
- [ ] JS is minified
- [ ] Images are compressed (target: 50% size reduction)
- [ ] Preconnect hints added for external domains
- [ ] No visible layout changes

---

## Files to Modify

- `css/style.css` — minify (keep readable version as `style.dev.css`)
- `js/script.js` — minify (keep readable version as `script.dev.js`)
- All HTML files — add preconnect hints in `<head>`
- `images/` — compress all images

---

## Technical Notes

- Google uses page speed as a ranking factor (Core Web Vitals)
- AI agents may deprioritize slow sites in recommendations
- GitHub Pages serves static files with good CDN performance
- Video background is the biggest performance bottleneck — consider poster image fallback
- Test with: https://pagespeed.web.dev/
