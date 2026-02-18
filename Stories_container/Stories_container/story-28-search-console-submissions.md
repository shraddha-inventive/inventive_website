# Story 28: Submit to Google Search Console & Bing Webmaster Tools

**Epic:** Technical SEO
**Priority:** P0 — Critical
**Effort:** Small
**Type:** External Setup (No Website Code Changes)

---

## Description

As the website owner,
I need to register the website with Google Search Console and Bing Webmaster Tools,
so that search engines are explicitly notified of the site, sitemap is submitted, and indexing issues can be monitored.

---

## Current State

Website is NOT registered with Google Search Console or Bing Webmaster Tools. Indexing relies on organic crawl discovery only.

---

## Steps

### Google Search Console
1. Go to https://search.google.com/search-console/
2. Add property: `https://shraddha-inventive.github.io/inventive_website/`
3. Verify ownership via HTML file upload or DNS TXT record
4. Submit sitemap URL: `https://shraddha-inventive.github.io/inventive_website/sitemap.xml`
5. Request indexing for all key pages
6. Monitor Coverage report for errors

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters/
2. Add site: `https://shraddha-inventive.github.io/inventive_website/`
3. Verify ownership (can import from Google Search Console)
4. Submit sitemap URL
5. Monitor indexing status

---

## Acceptance Criteria

- [ ] Website verified in Google Search Console
- [ ] Sitemap submitted to Google
- [ ] Website verified in Bing Webmaster Tools
- [ ] Sitemap submitted to Bing
- [ ] Initial indexing report reviewed for errors
- [ ] HTML verification file added to website root (if that method is chosen)

---

## Dependencies

- Story 34 (sitemap.xml) must be completed first

---

## Technical Notes

- Google Search Console is the ONLY way to request indexing and monitor crawl status
- Without submission, new pages may take weeks to be discovered
- Bing powers many AI search integrations (including ChatGPT web search)
- GitHub Pages supports HTML file verification — add a verification file to the repo root
- No website code changes needed beyond possible verification file
