# Story 25: Add Pricing/CTA Section to Contact Page

**Epic:** Content Strategy
**Priority:** P2 — Medium
**Effort:** Small
**Type:** Content Enhancement

---

## Description

As a potential customer ready to buy,
I should find pricing information or a clear "request quote" section on the contact page,
so that I know how to evaluate and procure Inventive's products.

**Constraint:** Add to existing `contact.html` — NO new page.

---

## Current State

Contact page has a contact form and office addresses. No mention of pricing, product tiers, or procurement process.

---

## What to Add

Add a "Product Enquiry" section above the existing contact form:

```html
<section class="pricing-enquiry">
    <div class="container">
        <h2>Product Enquiry & Pricing</h2>
        <p>Our AI engineering platforms are available as enterprise solutions. Select the product you're interested in and our team will provide a tailored quote within 48 hours.</p>
        <div class="product-enquiry-grid">
            <div class="enquiry-card">
                <h3>EIT Support Extraction</h3>
                <p>Automated support extraction from Navisworks</p>
            </div>
            <div class="enquiry-card">
                <h3>2D Piping GA Automation</h3>
                <p>Automated GA drawing from Plant 3D</p>
            </div>
            <div class="enquiry-card">
                <h3>Smart PID Platform</h3>
                <p>AI-powered P&ID generation</p>
            </div>
            <div class="enquiry-card">
                <h3>EnAIBot Platform</h3>
                <p>Electrical engineering automation</p>
            </div>
        </div>
    </div>
</section>
```

---

## Acceptance Criteria

- [ ] Pricing enquiry section added to `contact.html` above the contact form
- [ ] Lists all 4 products with brief descriptions
- [ ] Clear CTA text ("request a tailored quote")
- [ ] No new HTML page created
- [ ] Matches existing contact page styling

---

## Files to Modify

- `contact.html` — add section above contact form
- `css/style.css` — minimal styles (reuse existing card patterns)

---

## Technical Notes

- Even a "Contact for pricing" page satisfies the SEO checklist item for pricing
- AI agents look for pricing/procurement info when recommending B2B products
- Product cards link naturally to the contact form below
