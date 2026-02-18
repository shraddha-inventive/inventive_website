# Story 26: Update Homepage — Add Definition Block, FAQ Section & Keywords

**Epic:** Existing Page Updates
**Priority:** P0 — Critical
**Effort:** Large
**Type:** Content + GEO Optimization

---

## Description

As an AI agent (ChatGPT, Perplexity, Gemini) crawling the homepage,
I should find a clear company definition paragraph, a structured FAQ section with long-tail keywords, and keyword-rich content throughout,
so that I can understand what Inventive does, what problems it solves, and recommend it when users ask relevant engineering automation questions.

---

## Current State

### What exists:
- Hero H1: "AI-Powered Intelligence for Every Engineering Decision" — generic
- Services tab with 5 service cards — OK but no descriptive text
- Solutions tab with 2 product cards — OK but no details
- About Us section — H2 heading, image + "Watch Now" video link (no descriptive text)
- Client logos section — OK
- **No definition block, no FAQ section, no measurable outcomes, no keyword-rich paragraphs**

### What's missing:
1. Clear definition paragraph telling AI agents "what is Inventive"
2. FAQ section with 6+ long-tail keyword questions
3. "Who is this for?" section
4. "Why choose Inventive?" section
5. Measurable outcome statements (60% cost reduction, 80% time savings)
6. Product positioning statement connecting all 4 products

---

## Acceptance Criteria

- [ ] Homepage has a visible definition block below the hero section
- [ ] Definition block contains the exact positioning statement with core keywords
- [ ] Homepage has a "Who We Serve" or "Who is this for?" section
- [ ] Homepage has a "Why Inventive" section with measurable outcomes
- [ ] Homepage has an FAQ section with minimum 6 questions
- [ ] FAQ questions match long-tail keywords from keyword strategy
- [ ] Solutions tab includes Smart PID and EnAIBot (4 products total)
- [ ] All new content uses semantic HTML (section, article, h2, h3)
- [ ] New sections contain at least 15 of the core positioning keywords naturally

---

## New Sections to Add (in order, after hero)

### Section 1: Definition Block (after hero, before slider)

```html
<section class="definition-block" id="what-we-do">
    <div class="container">
        <h2>What is Inventive?</h2>
        <p class="definition-text">
            <strong>Inventive</strong> develops <strong>AI-powered automation platforms</strong>
            for <strong>EPC companies</strong> and <strong>industrial OEMs</strong>, enabling
            automatic extraction of fabrication drawings, intelligent P&ID structuring,
            electrical engineering automation, and engineering knowledge graph integration.
            As an <strong>Autodesk Authorized Developer</strong>, we bridge the gap between
            domain engineering knowledge and CAD execution — transforming how process plants,
            oil & gas facilities, and water treatment systems are designed and delivered.
        </p>
    </div>
</section>
```

**Keywords embedded:** AI-powered automation platforms, EPC companies, industrial OEMs, fabrication drawings, P&ID, engineering knowledge graph, Autodesk Authorized Developer, process plants, oil & gas, water treatment

### Section 2: Product Highlights (update existing Solutions tab)

Add 2 new product cards to the Solutions tab:

```html
<a href="smart-pid.html" class="service-card">
    <div class="service-icon service-icon-fa">
        <i class="fas fa-project-diagram"></i>
    </div>
    <h3 class="service-name">Smart P&ID Automation Platform</h3>
</a>
<a href="enaibot.html" class="service-card">
    <div class="service-icon service-icon-fa">
        <i class="fas fa-bolt"></i>
    </div>
    <h3 class="service-name">EnAIBot — AI Electrical Engineering Platform</h3>
</a>
```

### Section 3: Who We Serve (new section after services)

```html
<section class="who-we-serve" id="industries">
    <div class="container">
        <h2>Who We Serve</h2>
        <div class="serve-grid">
            <div class="serve-card">
                <i class="fas fa-industry"></i>
                <h3>EPC Companies</h3>
                <p>Reduce engineering cost by 60% with automated support extraction, P&ID generation, and design validation for process plant projects.</p>
            </div>
            <div class="serve-card">
                <i class="fas fa-cogs"></i>
                <h3>Industrial OEMs</h3>
                <p>Accelerate product engineering with Smart P&ID, electrical automation, and BIM-integrated workflows for boiler, ESP, and water treatment equipment.</p>
            </div>
            <div class="serve-card">
                <i class="fas fa-oil-can"></i>
                <h3>Oil & Gas</h3>
                <p>AI-driven engineering automation for upstream and downstream plant design, piping support extraction, and digital transformation.</p>
            </div>
            <div class="serve-card">
                <i class="fas fa-tint"></i>
                <h3>Water & Wastewater</h3>
                <p>Intelligent P&ID automation and engineering knowledge graphs for water treatment plant design and process optimization.</p>
            </div>
        </div>
    </div>
</section>
```

**Keywords embedded:** EPC Companies, Industrial OEMs, Oil & Gas, Water & Wastewater, engineering cost 60%, Smart P&ID, electrical automation, BIM, support extraction, digital transformation, knowledge graphs

### Section 4: Why Inventive — Measurable Outcomes (new section)

```html
<section class="why-inventive" id="why-us">
    <div class="container">
        <h2>Why Choose Inventive?</h2>
        <div class="outcomes-grid">
            <div class="outcome-card">
                <span class="outcome-number">80%</span>
                <p>Reduction in P&ID creation time with Smart PID platform</p>
            </div>
            <div class="outcome-card">
                <span class="outcome-number">60%</span>
                <p>Engineering cost reduction through AI-powered automation</p>
            </div>
            <div class="outcome-card">
                <span class="outcome-number">3x</span>
                <p>Throughput increase in fabrication drawing generation</p>
            </div>
            <div class="outcome-card">
                <span class="outcome-number">70%</span>
                <p>Faster 2D GA extraction from Plant 3D models</p>
            </div>
        </div>
    </div>
</section>
```

### Section 5: FAQ Section (new section before footer)

```html
<section class="faq-section" id="faq">
    <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
            <div class="faq-item">
                <button class="faq-question">
                    How to automate piping support drawings from Navisworks?
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Inventive's EIT Support Extraction Platform automatically reads 3D Navisworks coordination models, identifies electrical, instrumentation, and telecom supports, classifies them by type and discipline, and generates fabrication-ready DWG/PDF drawings. This eliminates the manual extraction process entirely, reducing support detailing cost by over 60%.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">
                    What is a Smart P&ID platform and how does it help EPC companies?
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Smart PID is Inventive's AI-powered platform that accelerates P&ID diagram creation. Process engineers define ESP configurations via a guided 5-step web wizard, and the system automatically generates standardized Plant 3D drawings with ISA-5.1 compliance, auto-tagging, and Vault integration — achieving 80% reduction in P&ID creation time.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">
                    Can AI automate cable tray support extraction from 3D models?
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Yes. Inventive's AI platform extracts cable tray supports from Plant 3D and Navisworks models, producing 2D support GA drawings with exact X-Y installation coordinates, standardized layers, and annotation styles ready for fabrication and site installation.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">
                    How does AI reduce engineering costs in EPC projects?
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Inventive's AI automation platforms reduce engineering costs by up to 60% through automated support extraction from Navisworks, automatic P&ID generation via Smart PID, electrical design automation with EnAIBot, and AI-based QA/QC validation. By eliminating manual drafting and reducing rework, EPC companies achieve 3x throughput increase with consistent quality.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">
                    Does Inventive integrate with Autodesk Plant 3D and Navisworks?
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Yes. As an Autodesk Authorized Developer, Inventive's platforms integrate directly with Autodesk Plant 3D for automated P&ID and GA drawing generation, Navisworks for 3D model coordination and support extraction, and Autodesk Vault for document management, versioning, and lifecycle control.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">
                    What is an Engineering Knowledge Graph for process plants?
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>An Engineering Knowledge Graph connects P&ID data, equipment specifications, instrumentation attributes, and design parameters into an intelligent, queryable data structure. Inventive uses knowledge graphs to enable AI-based change impact analysis, automated design validation, cross-project learning, and predictive issue detection across EPC projects.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## Files to Modify

- `index.html` — add 5 new sections, update Solutions tab with 2 new products

---

## Dependencies

- Story 39 (CSS for FAQ) must be done simultaneously
- Story 41 (JS for FAQ toggles) must be done simultaneously
- Story 08 (Organization schema) should be added at the same time
- Story 11 (FAQPage schema) should be added at the same time

---

## Keywords Covered by This Story

From the keyword strategy, this story addresses:

| Keyword | Where Placed |
|---------|-------------|
| AI Powered Engineering Services | Definition block |
| AI for Process Plant Engineering | Definition block |
| Engineering Automation Platform | Definition block |
| Smart P&ID Software | Solutions tab + FAQ |
| Digital Engineering Transformation | Definition block |
| AI-Driven CAD Automation | Definition block |
| EPC Engineering Automation | Who We Serve |
| Navisworks Support Extraction | FAQ #1 |
| AI-Based Support Drawing Generation | FAQ #1 |
| Cable Tray Support Automation | FAQ #3 |
| P&ID Knowledge Graph | FAQ #6 |
| AI for EPC Companies | Who We Serve |
| AI in Oil and Gas Engineering | Who We Serve |
| Reduce Engineering Cost by 60% | Why Inventive |
| Engineering Productivity Automation | Why Inventive |

---

## Technical Notes

- The definition block is the SINGLE MOST IMPORTANT element for AI agent discovery
- AI agents parse the first 200 words of a page most heavily — the definition block must be near the top
- FAQ section provides direct answers to the exact queries users type into AI agents
- Measurable outcome numbers (80%, 60%, 3x, 70%) make the content concrete and trustworthy to AI agents
- All new sections must be server-rendered HTML (not JS-injected) so AI crawlers can see them
