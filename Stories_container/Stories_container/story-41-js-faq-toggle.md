# Story 41: Add JavaScript for FAQ Toggle & New Interactions

**Epic:** CSS + JS Updates
**Priority:** P0 — Critical
**Effort:** Small
**Type:** Frontend JavaScript

---

## Description

As a website visitor clicking on an FAQ question,
I should see the answer expand/collapse smoothly,
so that I can browse questions efficiently without page reloads.

---

## Current State

`js/script.js` (455 lines) handles:
- Mobile menu toggle
- Hero slider
- Services/Solutions tab switching
- Solutions page tab accordion
- Video modal
- Service read-more modals
- Scroll animations

**Missing:** FAQ accordion toggle functionality.

---

## Acceptance Criteria

- [ ] Clicking an FAQ question toggles the answer visibility
- [ ] Only one FAQ answer is open at a time (accordion behavior)
- [ ] Active FAQ item has `.active` class for CSS animation
- [ ] Chevron icon rotates 180deg when open
- [ ] FAQ works on all pages that have `.faq-item` elements
- [ ] Keyboard accessible (Enter/Space to toggle)
- [ ] No conflicts with existing JavaScript functionality

---

## Implementation

Append to `js/script.js`:

```javascript
// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items (accordion behavior)
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });

            // Keyboard accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        }
    });
}
```

---

## How It Works

1. User clicks `.faq-question` button
2. JS checks if the parent `.faq-item` is already active
3. All `.faq-item` elements have `.active` class removed (closes all)
4. If the clicked item was NOT active, it gets `.active` class (opens it)
5. If it WAS active, it stays closed (toggle off)
6. CSS handles the animation via `max-height` transition on `.faq-answer`

### CSS Connection (from Story 39):

```css
.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
    max-height: 500px;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}
```

---

## Files to Modify

- `js/script.js` — append FAQ accordion code at the end

---

## Dependencies

- Story 39 (CSS for FAQ) must be complete for visual animation
- Story 26 (Homepage FAQ content) must be complete for elements to exist

---

## Testing Checklist

- [ ] Click FAQ question → answer expands
- [ ] Click same question again → answer collapses
- [ ] Click different question → previous closes, new one opens
- [ ] Press Enter on focused question → toggles answer
- [ ] Press Space on focused question → toggles answer
- [ ] No console errors on pages without FAQ sections
- [ ] Existing slider, tabs, and modal functionality still works

---

## Technical Notes

- The `if (faqItems.length > 0)` guard ensures no errors on pages without FAQs
- Accordion behavior (only one open at a time) is better for long FAQ lists
- The CSS `max-height: 500px` works for answers up to ~500px tall; for longer answers, increase this value
- No external libraries needed — pure vanilla JS
- Total addition: ~25 lines of JavaScript
