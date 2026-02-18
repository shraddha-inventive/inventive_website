# Story 57: Add Newsletter Signup & Security Statement to Footer

**Epic:** Trust & Conversion Signals
**Priority:** P2 — Medium
**Effort:** Small
**Type:** Content Enhancement

---

## Description

As a visitor who wants to stay updated on Inventive's products,
I should find a newsletter signup option in the footer,
so that I can subscribe to updates without navigating to a separate page.

As a security-conscious visitor,
I should see a security/data protection statement,
so that I know the website and company take data security seriously.

**Constraint:** Add to existing footer — NO new pages.

---

## Current State

Footer contains: logo, tagline, navigation links, social media links, copyright. No newsletter signup. No security or data protection statement.

---

## What to Add

### 1. Newsletter Signup in Footer

Add a simple email signup form in the footer (all HTML pages):

```html
<div class="footer-newsletter">
    <h4>Stay Updated</h4>
    <p>Get engineering automation insights delivered to your inbox.</p>
    <form class="newsletter-form" action="#" method="post">
        <input type="email" placeholder="Your email address" required>
        <button type="submit" class="btn-primary">Subscribe</button>
    </form>
</div>
```

**Implementation note:** The form can initially be a mailto link or integrate with a service like Mailchimp/SendGrid in Phase 2. For Phase 1, the form should capture the email and either:
- Send via the same mechanism as the contact form, OR
- Store as a simple mailto link

### 2. Security/Trust Statement in Footer

Add a brief security statement in the footer:

```html
<div class="footer-security">
    <p><i class="fas fa-shield-alt"></i> Your data is secure. We never share your information with third parties. <a href="privacy-policy.html">Privacy Policy</a></p>
</div>
```

### 3. Trust Badges (Optional)

If applicable, add small trust badges:
- SSL Secured
- Autodesk Authorized Developer
- ISO certification (if applicable)

---

## Acceptance Criteria

- [ ] Newsletter email signup form added to footer on ALL HTML pages
- [ ] Security/trust statement added to footer on ALL HTML pages
- [ ] Newsletter form has email validation (HTML5 required + type="email")
- [ ] Footer layout remains clean and organized
- [ ] Responsive on mobile (form stacks vertically)
- [ ] No new HTML pages created
- [ ] Form action connects to a working endpoint or mailto fallback

---

## Files to Modify

- `index.html` — update footer
- `about.html` — update footer
- `services.html` — update footer
- `solutions.html` — update footer
- `contact.html` — update footer
- `css/style.css` — newsletter form styles (minimal, reuse existing input/button styles)

---

## Technical Notes

- Newsletter signup is a lead generation channel and engagement signal
- Footer newsletter forms have 1-3% conversion rate — small but consistent
- Security statements reduce form abandonment by 10-15%
- The newsletter form should match existing form styling on contact.html
- All footer changes must be replicated across all 5+ HTML pages (consider using includes or template system in future)
- Email integration (Mailchimp, SendGrid) is a Phase 2 enhancement
