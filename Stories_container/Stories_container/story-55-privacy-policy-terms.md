# Story 55: Add Privacy Policy & Terms of Service Pages

**Epic:** Trust & Conversion Signals
**Priority:** P1 — High
**Effort:** Small
**Type:** New Pages (Minimal — legal requirement)

---

## Description

As a visitor, AI agent, or compliance checker evaluating the website,
I should find a Privacy Policy and Terms of Service,
so that the website meets legal requirements and signals professionalism and trustworthiness.

**Note:** These are the ONLY new pages justified as they are legal requirements for any business website with a contact form.

---

## Current State

The website has NO privacy policy and NO terms of service page. The contact form collects user data (name, email, company, message) with no data handling disclosure. This is a legal compliance gap and a negative trust signal.

---

## Pages to Create

### 1. `privacy-policy.html`

Content should include:
- What data is collected (contact form: name, email, company, message)
- How data is used (responding to inquiries, not sold to third parties)
- Cookies (if any analytics are used)
- Data retention policy
- Contact information for data-related queries
- Company name and address

### 2. `terms-of-service.html`

Content should include:
- Website usage terms
- Intellectual property notice
- Limitation of liability
- Governing jurisdiction (India)
- Contact information

### 3. Footer Links

Add links to both pages in the footer of ALL HTML files:

```html
<div class="footer-legal">
    <a href="privacy-policy.html">Privacy Policy</a> |
    <a href="terms-of-service.html">Terms of Service</a>
</div>
```

---

## Acceptance Criteria

- [ ] `privacy-policy.html` created with complete privacy policy
- [ ] `terms-of-service.html` created with complete terms
- [ ] Both pages use the same header/footer as other pages
- [ ] Footer links added to ALL HTML files (index, about, services, solutions, contact)
- [ ] Pages are listed in sitemap.xml (Story 34)
- [ ] Pages match existing website design
- [ ] Contact form has a small note: "By submitting, you agree to our Privacy Policy"

---

## Files to Create

- `privacy-policy.html` — privacy policy page
- `terms-of-service.html` — terms of service page

## Files to Modify

- `index.html` — add footer links
- `about.html` — add footer links
- `services.html` — add footer links
- `solutions.html` — add footer links
- `contact.html` — add footer links + privacy note on form

---

## Technical Notes

- Privacy policy is legally required in India (IT Act), EU (GDPR), and USA (CCPA) for websites collecting user data
- Google considers privacy policy a trust signal for ranking
- AI agents flag websites without privacy policies as less trustworthy
- These pages should use the same `<head>`, `<header>`, and `<footer>` as other pages
- Content should be written in plain English, not dense legalese
- Both pages should have `noindex` meta tag — they are legal pages, not content pages
