# Story 38: Add Canonical URLs to All Pages

**Epic:** Technical SEO
**Priority:** P1 — High
**Effort:** Small
**Type:** Technical SEO

---

## Description

As a search engine processing the website,
I should find a `<link rel="canonical">` tag on every page,
so that I know the preferred URL for each page and avoid indexing duplicate content.

---

## Current State

**No canonical URLs exist on any page.** This can cause issues if the same page is accessible via multiple URLs (with/without trailing slash, www vs non-www, HTTP vs HTTPS).

---

## Acceptance Criteria

- [ ] Every HTML page has a `<link rel="canonical">` tag in the `<head>`
- [ ] Canonical URL uses the full absolute URL (not relative)
- [ ] Canonical URL uses HTTPS
- [ ] Canonical URL matches the page's actual URL exactly
- [ ] No two pages point to the same canonical URL

---

## Implementation

Add to each page's `<head>`:

| Page | Canonical URL |
|------|--------------|
| index.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/">` |
| about.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/about.html">` |
| services.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/services.html">` |
| solutions.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/solutions.html">` |
| contact.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/contact.html">` |
| smart-pid.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/smart-pid.html">` |
| enaibot.html | `<link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/enaibot.html">` |

### Example:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="canonical" href="https://shraddha-inventive.github.io/inventive_website/">
    <title>AI-Powered Engineering Automation Platform | Inventive</title>
    ...
</head>
```

---

## Files to Modify

- `index.html` — add canonical in `<head>`
- `about.html` — add canonical in `<head>`
- `services.html` — add canonical in `<head>`
- `solutions.html` — add canonical in `<head>`
- `contact.html` — add canonical in `<head>`
- All new pages — add canonical in `<head>`

---

## Technical Notes

- Canonical URLs prevent Google from splitting page authority across duplicate URLs
- Always use absolute URLs (with `https://`), not relative paths
- The canonical URL should be the same URL users see in their browser
- If the site later moves to a custom domain, all canonical URLs must be updated
- Canonical tags are self-referencing — each page's canonical points to itself
