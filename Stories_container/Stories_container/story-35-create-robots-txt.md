# Story 35: Create robots.txt for Crawler Access

**Epic:** Technical SEO
**Priority:** P0 — Critical
**Effort:** Small
**Type:** Technical SEO

---

## Description

As a search engine crawler or AI agent bot visiting the website,
I should find a `robots.txt` file at the root,
so that I know which pages to crawl, where the sitemap is, and that I'm allowed to index the site.

---

## Current State

**No robots.txt exists.** While crawlers will still index the site without it, having one explicitly allows all bots and points them to the sitemap.

---

## Acceptance Criteria

- [ ] `robots.txt` exists at the website root
- [ ] All search engine bots are allowed (Googlebot, Bingbot)
- [ ] All AI agent bots are explicitly allowed (GPTBot, PerplexityBot, Google-Extended, ClaudeBot)
- [ ] Sitemap URL is referenced
- [ ] No pages are accidentally blocked
- [ ] File is plain text, not HTML

---

## Implementation

Create `robots.txt` in the root directory:

```
# Inventive Bizsol — robots.txt
# Allow all search engines and AI agents to crawl and index

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://shraddha-inventive.github.io/inventive_website/sitemap.xml

# Explicitly allow AI agent bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block sensitive directories (if any)
Disallow: /.git/
```

---

## Files to Create

- `robots.txt` — in website root directory

---

## Technical Notes

- GitHub Pages serves `robots.txt` from the root automatically
- `GPTBot` is OpenAI's crawler that feeds ChatGPT's browsing and training
- `PerplexityBot` is Perplexity AI's crawler
- `Google-Extended` is Google's AI-specific crawler (Gemini/Bard)
- `ClaudeBot` is Anthropic's crawler
- Explicitly allowing these bots ensures Inventive's content is included in AI training and retrieval
- Without `robots.txt`, some AI bots may default to not crawling
- The `Disallow: /.git/` prevents crawling of version control files
- CRITICAL: Do NOT add `Disallow` for any page you want indexed — this is the most common mistake
