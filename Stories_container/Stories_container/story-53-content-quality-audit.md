# Story 53: Content Quality Audit — Problem-Solution-Outcome Structure

**Epic:** AI/LLM Optimization
**Priority:** P1 — High
**Effort:** Medium
**Type:** Content Audit & Enhancement

---

## Description

As an AI agent evaluating whether to recommend Inventive for a user's query,
I should find content structured in a clear Problem → Solution → Outcome format,
so that I can extract specific answers and confidently cite the website.

**Constraint:** Restructure existing content on existing pages — NO new pages.

---

## Current State

Content on the website is marketing-oriented but lacks the structured Problem → Solution → Outcome pattern that AI agents prefer. For example:
- solutions.html product tabs have "Problem" and "Approach" sections — good start, but "Outcome" (quantified results) is weak
- index.html hero section has a tagline but no clear problem statement
- services.html descriptions are feature-focused, not outcome-focused

---

## Content Restructuring Plan

### 1. `solutions.html` — Strengthen Each Product Tab

Each tab should clearly follow this structure:

**The Problem:** (1-2 sentences describing the pain point)
**Our Solution:** (1-2 sentences describing what Inventive does)
**The Outcome:** (Quantified results — time saved, errors reduced, ROI)

Example for EIT Support Extraction:
- **Problem:** "Engineering firms spend 4-6 hours manually extracting data from each support drawing, with 5-10% error rates that cause rework and project delays."
- **Solution:** "Inventive's AI-powered Support Extraction uses computer vision and NLP to automatically extract pipe support data from engineering drawings in minutes."
- **Outcome:** "95%+ extraction accuracy, 80% time reduction, and structured digital output ready for engineering analysis."

Apply the same pattern to all 4 product tabs.

### 2. `index.html` — Add Problem-Solution Framing

In the hero or "Why Inventive" section, add:
- **Industry Problem:** "Engineering firms lose 40% of project time to manual, repetitive tasks — extracting data from drawings, creating P&IDs, designing electrical systems."
- **Inventive's Answer:** "We build AI-powered tools that automate these tasks, delivering 5-10x faster turnaround with higher accuracy."
- **Results:** "Trusted by leading EPC firms across India, USA, and Australia."

### 3. `services.html` — Add Outcomes to Each Service

Each service description should end with a concrete outcome statement:
- BIM: "Delivering clash-free 3D models that reduce construction rework by 30%"
- Engineering: "Accelerating detail engineering delivery by 40-60%"
- CAD Automation: "Custom tools that eliminate hours of repetitive CAD tasks daily"

### 4. Content Quality Checklist

Audit every page for:
- [ ] Every claim has a specific metric or data point
- [ ] No vague language ("best", "leading", "innovative") without supporting evidence
- [ ] Each product/service section has at least one quantified outcome
- [ ] Sentences are concise (under 25 words average)
- [ ] Paragraphs are short (3-4 sentences max)
- [ ] Technical accuracy verified against PRDs

---

## Acceptance Criteria

- [ ] All 4 product tabs on solutions.html follow Problem → Solution → Outcome structure
- [ ] index.html has clear problem-solution framing
- [ ] services.html has outcome statements for each service
- [ ] At least 8 specific metrics/data points across the website
- [ ] No vague superlatives without supporting evidence
- [ ] All claims are technically accurate per product PRDs
- [ ] No new pages created

---

## Files to Modify

- `solutions.html` — restructure product tab content
- `index.html` — add problem-solution framing
- `services.html` — add outcome statements

---

## Technical Notes

- AI agents (ChatGPT, Perplexity, Gemini) strongly prefer citable content with specific data points
- Problem → Solution → Outcome is the exact structure that appears in AI-generated recommendations
- Quantified results ("80% time reduction") are cited more often than qualitative claims ("much faster")
- This story should be implemented AFTER Story 51 (terminology enrichment) for best results
