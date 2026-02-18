# Story 13: Add BreadcrumbList Schema on All Inner Pages

**Epic:** Structured Data / Schema Markup
**Priority:** P1 — High
**Effort:** Small
**Type:** Schema.org JSON-LD

---

## Description

As a search engine displaying the website in results,
I should find `BreadcrumbList` JSON-LD schema on every inner page,
so that I can display breadcrumb navigation in search results showing the page hierarchy.

As a user navigating the website,
I should see visual breadcrumb navigation on inner pages,
so that I can understand my location within the site and navigate back easily.

---

## Current State

**No breadcrumb navigation or schema exists on any page.** Users and crawlers have no way to understand page hierarchy.

---

## Acceptance Criteria

- [ ] Every inner page (not homepage) has a `BreadcrumbList` JSON-LD schema
- [ ] Schema matches the visible breadcrumb navigation on the page
- [ ] Breadcrumb path starts with "Home" and ends with the current page
- [ ] Each breadcrumb item has a name and URL
- [ ] Schema validates on Google Rich Results Test

---

## Breadcrumb Paths

| Page | Breadcrumb Path |
|------|----------------|
| about.html | Home > About Us |
| services.html | Home > Services |
| solutions.html | Home > Solutions |
| contact.html | Home > Contact Us |
| smart-pid.html | Home > Solutions > Smart PID Platform |
| enaibot.html | Home > Solutions > EnAIBot Platform |
| support-extraction.html | Home > Solutions > Support Extraction |
| bim-automation.html | Home > Solutions > BIM Automation |
| knowledge-graph.html | Home > Solutions > Knowledge Graph |
| faq.html | Home > FAQ |

---

## Implementation — Example for solutions.html

### JSON-LD Schema (in `<head>`):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shraddha-inventive.github.io/inventive_website/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Solutions",
      "item": "https://shraddha-inventive.github.io/inventive_website/solutions.html"
    }
  ]
}
```

### Example for smart-pid.html (3-level):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shraddha-inventive.github.io/inventive_website/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Solutions",
      "item": "https://shraddha-inventive.github.io/inventive_website/solutions.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Smart PID Platform",
      "item": "https://shraddha-inventive.github.io/inventive_website/smart-pid.html"
    }
  ]
}
```

### Visible HTML Breadcrumb (add below header on each inner page):

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="solutions.html">Solutions</a></li>
        <li aria-current="page">Smart PID Platform</li>
    </ol>
</nav>
```

---

## Files to Modify

- `about.html` — add schema + visible breadcrumb
- `services.html` — add schema + visible breadcrumb
- `solutions.html` — add schema + visible breadcrumb
- `contact.html` — add schema + visible breadcrumb
- All new product pages — add schema + visible breadcrumb

---

## CSS Required

New breadcrumb styles needed (see Story 40 for CSS details):
- `.breadcrumb` — container below header
- `.breadcrumb-list` — horizontal list with separators
- `.breadcrumb-list li` — inline items with `>` separator

---

## Technical Notes

- Breadcrumb schema enables breadcrumb display in Google search results
- AI agents use breadcrumbs to understand site hierarchy and page relationships
- The last item in the breadcrumb should NOT have a link (it's the current page)
- Use `aria-current="page"` on the last breadcrumb item for accessibility
- Only the homepage should NOT have breadcrumbs
