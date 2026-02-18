# Story 37: SSL Certificate Validation

**Epic:** Technical SEO
**Priority:** P0 — Critical
**Effort:** Small
**Type:** External Verification (No Code Changes)

---

## Description

As a search engine or browser evaluating site security,
I should find a valid SSL certificate (HTTPS),
so that the site is trusted, ranked properly, and doesn't show browser warnings.

---

## Current State

GitHub Pages provides automatic SSL via Let's Encrypt for `*.github.io` domains. The site loads on `https://shraddha-inventive.github.io/inventive_website/`. SSL is likely already valid.

---

## Verification Steps

1. Visit the site and check for padlock icon in browser
2. Check certificate details: issuer, expiry date, domain match
3. Test with: https://www.ssllabs.com/ssltest/
4. Verify no mixed content (HTTP resources loaded on HTTPS page)
5. Verify all internal links use relative paths (not hardcoded `http://`)

---

## Mixed Content Check

Search all HTML files for `http://` references that should be `https://`:
- External CSS/JS CDN links
- Image sources
- Video sources
- iFrame sources (Vimeo video)

---

## Acceptance Criteria

- [ ] SSL certificate is valid and not expired
- [ ] SSL Labs test shows A or A+ grade
- [ ] No mixed content warnings in browser console
- [ ] All external resources loaded over HTTPS
- [ ] No hardcoded `http://` links in any HTML file

---

## Files to Modify

- Only if mixed content issues found — update `http://` to `https://` in affected files

---

## Technical Notes

- GitHub Pages handles SSL automatically — no manual certificate management needed
- Google has confirmed HTTPS as a ranking signal since 2014
- Mixed content (loading HTTP resources on HTTPS page) triggers browser warnings and hurts trust
- If the site later moves to a custom domain, SSL must be configured separately
