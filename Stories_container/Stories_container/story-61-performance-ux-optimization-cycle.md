# Story 61: Performance & UX Continuous Optimization Cycle

**Epic:** Continuous Optimization
**Priority:** P2 — Medium
**Effort:** Ongoing
**Type:** Process + Technical (Periodic)

---

## Description

As the development team maintaining the website,
I should have a defined process for ongoing performance and UX optimization,
so that the website maintains excellent Core Web Vitals, fast load times, and good user experience over time.

---

## Optimization Cycle

### Phase 1: Measure (Monthly)

Run these audits monthly:

| Tool | What It Measures | Target Score |
|------|-----------------|--------------|
| Google Lighthouse | Performance, Accessibility, SEO, Best Practices | 90+ all categories |
| Google PageSpeed Insights | Core Web Vitals (LCP, FID, CLS) | Green for all metrics |
| WebPageTest | Load waterfall, TTFB, render timeline | TTFB <600ms |
| Google Search Console | Core Web Vitals report | No "poor" URLs |

### Phase 2: Identify Issues

Common issues to watch for:
- **LCP regression:** New images added without optimization (Story 33)
- **CLS shifts:** New sections causing layout shifts on load
- **JS blocking:** New scripts added without `async`/`defer`
- **CSS bloat:** New styles increasing file size (Story 39)
- **Broken links:** Internal or external links that return 404
- **Mobile issues:** New content not responsive

### Phase 3: Fix

Priority order for fixes:
1. Core Web Vitals failures (affects Google ranking directly)
2. Broken links (affects crawling and user experience)
3. Accessibility issues (affects compliance and AI agent parsing)
4. Performance regressions (affects user bounce rate)

### Phase 4: Validate

After fixes:
- Re-run Lighthouse to confirm improvement
- Check Google Search Console for crawl errors
- Verify schema with Google Rich Results Test
- Test on mobile devices (real devices, not just responsive mode)

---

## Monitoring Checklist

### Weekly Quick Check
- [ ] Google Search Console: any new crawl errors?
- [ ] Site loads correctly on mobile?
- [ ] Contact form working?

### Monthly Audit
- [ ] Run Lighthouse on all 5+ pages
- [ ] Check PageSpeed Insights for Core Web Vitals
- [ ] Review GA4 for traffic trends and bounce rates
- [ ] Check for broken links (use a free broken link checker)
- [ ] Verify all JSON-LD schemas still valid

### Quarterly Deep Dive
- [ ] Full accessibility audit (WAVE tool or Lighthouse)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Image optimization check (no new uncompressed images)
- [ ] CSS/JS file size check against baseline
- [ ] Mobile usability report from Search Console

---

## Acceptance Criteria

- [ ] Monitoring process documented with frequency and tools
- [ ] Baseline Lighthouse scores recorded for all pages
- [ ] Monthly audit checklist created
- [ ] Quarterly deep dive checklist created
- [ ] Team knows who is responsible for each audit task

---

## Files to Modify

- None initially — this is a process documentation story
- Fixes identified during audits will create new stories/tasks as needed

---

## Technical Notes

- Core Web Vitals are a Google ranking factor since 2021
- Performance regressions happen gradually — regular monitoring catches them early
- Lighthouse CI can be integrated into GitHub Actions for automated checks (future enhancement)
- Target: all pages score 90+ on Lighthouse Performance, Accessibility, SEO, Best Practices
- Keep a log of Lighthouse scores over time to track trends
