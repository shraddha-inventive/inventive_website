# Story 21: Create Blog Section

**Epic:** Content Strategy
**Priority:** P1 — High
**Effort:** Large
**Type:** Content Creation

---

## Description

As a visitor or AI agent looking for fresh, authoritative engineering automation content,
I should find a blog section with regular technical articles,
so that the website demonstrates ongoing expertise and freshness signals for search ranking.

---

## Current State

No blog exists. Zero articles, no blog listing page, no blog template.

---

## What to Create

### 1. Blog Listing Page (`blog.html`)
- Grid of blog post cards (title, excerpt, date, category)
- Filter by category: AI Engineering, P&ID, BIM, Support Extraction, Case Studies
- Pagination support

### 2. Blog Post Template (`blog-post-template.html`)
- Article hero with title, date, author, category
- Article body with proper heading hierarchy
- Related articles section
- CTA section
- Author bio

### 3. Initial Blog Posts (minimum 5)

| # | Title | Keywords | Words |
|---|-------|----------|-------|
| 1 | How AI is Transforming P&ID Creation in EPC Projects | AI P&ID, EPC, automation | 800-1200 |
| 2 | Automating Support Extraction from Navisworks: A Complete Guide | Navisworks, support extraction | 1000-1500 |
| 3 | The Role of Engineering Knowledge Graphs in Plant Design | knowledge graph, plant design | 800-1000 |
| 4 | Why EPC Companies Need BIM Automation for Industrial Plants | BIM, EPC, industrial | 800-1000 |
| 5 | Reducing Engineering Costs by 60% with AI Automation | cost reduction, AI, engineering | 800-1200 |

---

## Acceptance Criteria

- [ ] Blog listing page created with responsive card grid
- [ ] Blog post template created with proper semantic HTML
- [ ] Minimum 5 initial blog posts written
- [ ] Each post is 800-1500 words
- [ ] Each post has proper meta tags, OG tags, and JSON-LD (Article schema)
- [ ] Blog posts are linked from homepage and navigation
- [ ] Blog is added to sitemap.xml

---

## Technical Notes

- Blog posts are the #1 driver of long-tail keyword ranking
- AI agents heavily reference blog-style educational content when answering questions
- Use `Article` JSON-LD schema on blog posts (not generic WebPage)
- Fresh content signals (new blog posts) improve overall site ranking
- Minimum publishing cadence: 2 posts per month
