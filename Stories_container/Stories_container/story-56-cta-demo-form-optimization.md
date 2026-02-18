# Story 56: CTA & Demo Request Form Optimization

**Epic:** Trust & Conversion Signals
**Priority:** P1 — High
**Effort:** Small
**Type:** Content Enhancement

---

## Description

As a potential customer ready to take action,
I should find clear, compelling calls-to-action (CTAs) on every page and an easy way to request a demo,
so that I can engage with Inventive without friction.

**Constraint:** Enhance existing CTAs and contact form — NO new pages.

---

## Current State

- index.html has "Contact Us" and "Explore Services" CTAs in hero
- solutions.html has no CTAs within product tabs
- services.html has no CTAs within service descriptions
- about.html has no CTA
- Contact form exists on contact.html with generic "Service Enquiry For" dropdown
- No "Request a Demo" or "Schedule a Consultation" option

---

## Enhancements

### 1. Add CTAs to Every Page

**On `solutions.html` — After each product tab's content:**
```html
<div class="product-cta">
    <a href="contact.html?product=support-extraction" class="btn-primary">Request a Demo</a>
    <a href="contact.html" class="btn-secondary">Contact Sales</a>
</div>
```

**On `services.html` — After each service description:**
```html
<div class="service-cta">
    <a href="contact.html?service=bim" class="btn-primary">Get a Quote</a>
</div>
```

**On `about.html` — At the bottom of the page:**
```html
<section class="about-cta">
    <div class="container">
        <h2>Ready to Transform Your Engineering Workflows?</h2>
        <p>Talk to our team about how Inventive can automate your engineering processes.</p>
        <a href="contact.html" class="btn-primary">Contact Us Today</a>
    </div>
</section>
```

### 2. Enhance Contact Form

Update the "Service Enquiry For" dropdown to include specific options:
- Request a Product Demo
- Get a Quote
- Technical Consultation
- Partnership Inquiry
- General Inquiry

### 3. Sticky/Floating CTA (Optional)

Add a subtle floating "Request Demo" button that appears on scroll (after hero section):
```html
<a href="contact.html" class="floating-cta" id="floating-cta">Request Demo</a>
```

Show only after user scrolls past 50% of the page.

---

## Acceptance Criteria

- [ ] CTA buttons added to solutions.html (one per product tab)
- [ ] CTA buttons added to services.html (one per service)
- [ ] CTA section added to about.html bottom
- [ ] Contact form dropdown updated with specific inquiry types
- [ ] All CTA buttons use existing button styles (btn-primary, btn-secondary)
- [ ] CTAs link to contact.html with appropriate query parameters
- [ ] No new pages created

---

## Files to Modify

- `solutions.html` — add CTAs inside product tabs
- `services.html` — add CTAs inside service sections
- `about.html` — add CTA section at bottom
- `contact.html` — update form dropdown options
- `css/style.css` — minimal CTA positioning styles
- `js/script.js` — optional: floating CTA show/hide on scroll

---

## Technical Notes

- CTAs within product sections have 3-5x higher conversion than header/footer CTAs alone
- Query parameters (e.g., `?product=support-extraction`) allow pre-filling the contact form
- "Request a Demo" converts better than "Contact Us" for software products
- Floating CTA should not obstruct content and should be dismissible on mobile
- CTA text should be action-oriented: "Request Demo", "Get Quote", "Talk to Sales"
