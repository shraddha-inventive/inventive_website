# Story 59: SEO Monitoring & Analytics Setup

**Epic:** Continuous Optimization
**Priority:** P1 — High
**Effort:** Small
**Type:** External Setup + Minimal Code

---

## Description

As the website owner tracking SEO performance,
I should have analytics and search monitoring tools set up,
so that I can measure keyword rankings, traffic, and identify optimization opportunities.

**Constraint:** External tool setup + adding tracking scripts to existing pages — NO new pages.

---

## Current State

No analytics or monitoring tools are configured. No Google Analytics, no Search Console verification, no keyword tracking. There is no way to measure whether SEO efforts are working.

---

## Setup Tasks

### 1. Google Search Console

- Verify website ownership (HTML tag or DNS method)
- Submit sitemap.xml (from Story 34)
- Monitor: indexing status, search queries, click-through rates, coverage errors
- Set up email alerts for critical issues

### 2. Google Analytics 4 (GA4)

Add GA4 tracking script to `<head>` of ALL HTML pages:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Replace `G-XXXXXXXXXX` with actual GA4 measurement ID.**

### 3. Bing Webmaster Tools

- Verify website ownership
- Submit sitemap.xml
- Important because Bing feeds data to ChatGPT and Copilot

### 4. Keyword Rank Tracking

Set up tracking for priority keywords:
- "engineering automation software India"
- "AI piping design software"
- "P&ID automation tool"
- "BIM services India"
- "CAD automation for engineering"
- "AI support extraction engineering"
- "smart P&ID software"
- "electrical engineering automation"

Tools: Google Search Console (free), or paid tools like Ahrefs/SEMrush/Ubersuggest.

### 5. Backlink Monitoring

- Set up Google Search Console Links report
- Track new backlinks from directory submissions (Story 42)
- Monitor referring domains

---

## Acceptance Criteria

- [ ] Google Search Console verified and sitemap submitted
- [ ] GA4 tracking code added to ALL HTML pages
- [ ] Bing Webmaster Tools verified and sitemap submitted
- [ ] Priority keywords documented for tracking
- [ ] GA4 measurement ID is correct and data is flowing
- [ ] Tracking scripts do not impact page load speed (async loading)

---

## Files to Modify

- `index.html` — add GA4 script to `<head>`
- `about.html` — add GA4 script to `<head>`
- `services.html` — add GA4 script to `<head>`
- `solutions.html` — add GA4 script to `<head>`
- `contact.html` — add GA4 script to `<head>`
- Any new pages (privacy-policy.html, terms-of-service.html) — add GA4 script

---

## Technical Notes

- GA4 script must be in `<head>` with `async` attribute to avoid blocking page load
- Search Console and Bing Webmaster Tools verification can be via meta tag or DNS
- Bing data is especially important because it feeds Microsoft Copilot and ChatGPT browsing
- Track Core Web Vitals in Search Console after setup (connects to Story 31)
- Consider Google Tag Manager if multiple scripts are needed in future
- Privacy policy (Story 55) should mention Google Analytics data collection
