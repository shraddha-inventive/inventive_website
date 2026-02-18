# Story 05: Add Open Graph + Twitter Card Meta Tags to All Pages

**Epic:** On-Page SEO Foundation
**Priority:** P1 — High
**Effort:** Small
**Type:** SEO Enhancement

---

## Description

As a user sharing the website on LinkedIn, Twitter, or messaging apps,
I should see a rich preview card with title, description, and image,
so that the shared link looks professional and drives clicks.

As an AI agent crawling the website,
I should find Open Graph metadata to understand the page content,
so that I can accurately represent the page in recommendations.

---

## Current State

**Zero Open Graph or Twitter Card tags exist on any page.**

When someone shares `https://shraddha-inventive.github.io/inventive_website/` on LinkedIn or Twitter, it shows a plain text link with no image preview.

---

## Acceptance Criteria

- [ ] Every page has `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Every page has `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] OG image is at least 1200x630px
- [ ] OG descriptions match meta descriptions
- [ ] All tags are in the `<head>` section

---

## Implementation — index.html Example

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="AI-Powered Engineering Automation Platform | Inventive">
<meta property="og:description" content="Inventive builds AI-powered engineering automation platforms for EPC companies. Smart P&ID, support extraction, BIM automation & knowledge graphs.">
<meta property="og:image" content="https://shraddha-inventive.github.io/inventive_website/images/og-inventive.png">
<meta property="og:url" content="https://shraddha-inventive.github.io/inventive_website/">
<meta property="og:site_name" content="Inventive Bizsol">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AI-Powered Engineering Automation Platform | Inventive">
<meta name="twitter:description" content="Inventive builds AI-powered engineering automation platforms for EPC companies. Smart P&ID, support extraction, BIM automation & knowledge graphs.">
<meta name="twitter:image" content="https://shraddha-inventive.github.io/inventive_website/images/og-inventive.png">
```

---

## OG Tags Per Page

| Page | og:type | og:title |
|------|---------|----------|
| index.html | website | AI-Powered Engineering Automation Platform \| Inventive |
| about.html | website | About Inventive \| AI Engineering Technology Company |
| services.html | website | BIM & CAD Automation Services \| Inventive |
| solutions.html | website | AI Engineering Solutions for EPC & OEM \| Inventive |
| contact.html | website | Contact Inventive \| AI Engineering Services |

---

## Files to Modify

- `index.html` — add in `<head>`
- `about.html` — add in `<head>`
- `services.html` — add in `<head>`
- `solutions.html` — add in `<head>`
- `contact.html` — add in `<head>`

---

## Dependencies

- Need to create an OG image (`images/og-inventive.png`) — 1200x630px with Inventive logo and tagline
- If no OG image available yet, use the existing logo as fallback

---

## Technical Notes

- LinkedIn, WhatsApp, Slack, Discord all use Open Graph tags for previews
- Twitter uses its own `twitter:` meta tags but falls back to OG tags
- AI agents (Perplexity, ChatGPT with browsing) parse OG tags for content understanding
- OG image should be hosted on the same domain for reliability
