# Story 34: Create sitemap.xml with All Pages

**Epic:** Technical SEO
**Priority:** P0 — Critical
**Effort:** Small
**Type:** Technical SEO

---

## Description

As a search engine crawler or AI agent bot,
I should find a valid `sitemap.xml` at the root of the website,
so that I can discover and index all pages efficiently.

---

## Current State

**No sitemap.xml exists.** Crawlers must follow internal links to discover pages, which means orphan pages or new pages may never be indexed.

---

## Acceptance Criteria

- [ ] `sitemap.xml` exists at the website root
- [ ] All HTML pages are listed with full URLs
- [ ] Each URL has a `<lastmod>` date
- [ ] Each URL has a `<priority>` value (1.0 for homepage, 0.8 for product pages, 0.6 for others)
- [ ] Each URL has a `<changefreq>` value
- [ ] XML is valid and well-formed

---

## Implementation

Create `sitemap.xml` in the root directory:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <!-- Homepage -->
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>

    <!-- About -->
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/about.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>

    <!-- Services -->
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/services.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Solutions -->
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/solutions.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>

    <!-- Contact -->
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/contact.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>

    <!--
        IMPORTANT: Add the entries below ONLY after each page is created and deployed.
        Including non-existent URLs will cause 404 errors in Google Search Console.
        Uncomment each entry when the corresponding page goes live.
    -->

    <!-- Smart PID Product Page — uncomment after smart-pid.html is created
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/smart-pid.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    -->

    <!-- EnAIBot Product Page — uncomment after enaibot.html is created
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/enaibot.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    -->

    <!-- Support Extraction Page — uncomment after support-extraction.html is created
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/support-extraction.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    -->

    <!-- BIM Automation Page — uncomment after bim-automation.html is created
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/bim-automation.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    -->

    <!-- Knowledge Graph Page — uncomment after knowledge-graph.html is created
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/knowledge-graph.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    -->

    <!-- FAQ Page — uncomment after faq.html is created
    <url>
        <loc>https://shraddha-inventive.github.io/inventive_website/faq.html</loc>
        <lastmod>2026-02-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    -->

</urlset>
```

---

## Files to Create

- `sitemap.xml` — in website root directory

---

## Technical Notes

- GitHub Pages automatically serves `sitemap.xml` from the root
- Update `<lastmod>` dates whenever a page is modified
- Submit sitemap URL to Google Search Console and Bing Webmaster Tools
- AI crawlers (GPTBot, PerplexityBot) also use sitemaps for discovery
- Only include pages that should be indexed (not error pages or redirects)
- Maximum 50,000 URLs per sitemap (not a concern here)
