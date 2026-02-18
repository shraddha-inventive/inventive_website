# Story 48: Enhance Contact Page — Real Details, Physical Address, LocalBusiness Schema

**Epic:** Entity & Knowledge Graph Signals
**Priority:** P1 — High
**Effort:** Small
**Type:** Content Enhancement

---

## Description

As an AI agent or potential customer looking for contact information,
I should find complete, structured contact details including physical addresses, phone numbers, and business hours,
so that the company appears as a legitimate, reachable business entity.

**Constraint:** Enhance existing `contact.html` — NO new page.

---

## Current State

Contact page has: contact form (service dropdown, email, message, company fields) and three office locations (Pune, Sugar Land TX, Darling Heights QLD). Missing: phone numbers, business hours, LocalBusiness schema.

---

## What to Add

### 1. Enhance Office Details
Add to each office card:
- Full street address (already partially there)
- Phone number (if available)
- Business hours
- Email for that office (if different)

### 2. LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Inventive Business Solutions Pvt Ltd",
  "url": "https://shraddha-inventive.github.io/inventive_website/",
  "email": "inquiry@inventivebizsol.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Guruganesh Complex",
    "addressLocality": "Pune",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "inquiry@inventivebizsol.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/inventive-business-solutions-pvt-ltd/",
    "https://www.youtube.com/@Inventivebizsol"
  ]
}
```

---

## Acceptance Criteria

- [ ] All office addresses are complete with street-level detail
- [ ] LocalBusiness/ProfessionalService JSON-LD added to contact.html
- [ ] Contact form remains functional and unchanged
- [ ] Schema validates on Google Rich Results Test
- [ ] No new HTML page created

---

## Files to Modify

- `contact.html` — enhance address details, add JSON-LD schema

---

## Technical Notes

- LocalBusiness schema enables Google Maps integration and local search
- Real physical address + phone number is a strong trust signal for AI agents
- Google Knowledge Panel requires consistent NAP (Name, Address, Phone) data
- Company email domain (`@inventivebizsol.com`) is already non-Gmail — this is good
