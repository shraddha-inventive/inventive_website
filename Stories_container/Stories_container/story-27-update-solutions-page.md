# Story 27: Update Solutions Page — Add Smart PID & EnAIBot Tabs

**Epic:** Existing Page Updates
**Priority:** P0 — Critical
**Effort:** Large
**Type:** Content + SEO

---

## Description

As a visitor exploring Inventive's product offerings,
I should see all 4 products on the Solutions page with expandable detail sections,
so that I can understand the full range of AI engineering platforms Inventive offers.

As an AI agent crawling the solutions page,
I should find structured Problem → Solution → Outcome content for each product,
so that I can recommend the right product when users ask about specific engineering problems.

---

## Current State

Solutions page (`solutions.html`) currently has 2 product tabs:
1. EIT Support Extraction Platform
2. AI Powered 2D Piping GA from Plant 3D

**Missing products:**
3. Smart PID — P&ID Automation Platform (from smart-pid-frontend PRD)
4. EnAIBot / EnIMAX — Electrical Engineering Automation (from enaibot-frontend PRD)

---

## Acceptance Criteria

- [ ] Solutions page has 4 product tabs (2 existing + 2 new)
- [ ] Each new product tab has the same structure: Offering, Problem, Approach, Capabilities, I/O
- [ ] Smart PID tab contains content derived from the Smart PID PRD
- [ ] EnAIBot tab contains content derived from the EnAIBot AS-BUILT PRD
- [ ] Each tab links to its dedicated landing page ("Learn More" button)
- [ ] Meta title and description are updated with new keywords
- [ ] Page has SoftwareApplication schema for all 4 products
- [ ] Intro text mentions all 4 products

---

## New Tab 3: Smart PID — AI P&ID Automation Platform

### Offering Section
```
Category: AI-Powered Engineering Platforms
Name: Smart PID — AI P&ID Automation Platform
Description: A web-based configuration wizard that accelerates P&ID diagram creation
(initially deployed for Thermax Enviro Division, with broader applicability to EPC and
industrial OEM process plants) by enabling non-CAD users to define engineering parameters
and automatically generate standardized Plant 3D drawings with ISA-5.1 compliance.
```

### Problem We Solve
```
Key Challenges:
- P&ID creation requires specialized CAD skills and extensive training
- Manual drafting takes 40%+ of engineering hours in EPC projects
- High error rate due to manual symbol placement and tag assignment
- Inconsistent standards compliance across different CAD operators
- Revision tracking is manual and error-prone

Business Impact:
- Delayed project timelines
- Over-reliance on scarce CAD experts
- Rework costs from standards violations
- Knowledge loss when experienced engineers leave
```

### Our Solution Approach
```
01 → Process engineers define ESP configuration via guided 5-step web wizard
02 → System compiles configuration into validated JSON using Excel Master rules
03 → Plant 3D .NET automation generates standardized DWG drawings from templates
04 → Auto check-in to Autodesk Vault with correct metadata and revision control
```

### Key Capabilities
```
1. 5-Step ESP Configuration Wizard
   Non-CAD users define what to build; system handles how to build it in Plant 3D.

2. Excel Master-Driven Rule Engine
   Validation rules, module definitions, and symbol mappings are admin-configurable
   via Excel uploads. System behavior adapts without code changes.

3. Automated Standards Compliance
   ISA-5.1 instrumentation symbols, company-specific tag formats, and line numbering
   enforced automatically via pre-approved templates.

4. Review & Approval Workflow
   PDF preview, in-portal comments, digital approval, revision tracking — no email-based
   offline review needed.
```

### Inputs & Outputs
```
Inputs:
- ESP configuration from 5-step wizard
- Excel Master files (modules, options, validation rules, symbol mapping)
- Pre-approved DWG templates (PFD block drawings)

Outputs:
- Standardized P&ID drawings (DWG/PDF)
- Automatic tagging and line numbering
- Vault-managed revision history
- Audit trail and compliance reports
```

### Measurable Outcomes
```
- 80% reduction in P&ID creation time
- 3x throughput increase per engineer
- 50% reduction in rework errors
- >70% first-time approval rate
```

---

## New Tab 4: EnAIBot — AI Electrical Engineering Platform

### Offering Section
```
Category: AI-Powered Engineering Platforms
Name: EnAIBot (EnIMAX) — AI Electrical Engineering Automation Platform
Description: A B2B web application that enables electrical engineers to create projects,
configure design parameters, generate load lists, cable schedules, single line diagrams,
and manage instrumentation files — all within an intelligent automation framework with
approval workflows and multi-division access control.
```

### Problem We Solve
```
Key Challenges:
- Electrical design basis configuration is repetitive and error-prone
- Load list and cable schedule creation requires manual calculations
- SLD generation depends on experienced CAD operators
- No centralized system for instrumentation file management
- Revision tracking across multiple engineering disciplines is fragmented

Business Impact:
- Delayed electrical engineering deliverables
- Inconsistent design outputs across divisions
- High dependency on senior electrical engineers
- Lost design knowledge between projects
```

### Our Solution Approach
```
01 → Engineers create projects and configure design basis via web portal
02 → System generates electrical load lists and cable schedules from design parameters
03 → Automated SLD generation per panel with switchgear selection logic
04 → Built-in approval workflow (7 states) with email notifications and audit trail
```

### Key Capabilities
```
1. Design Basis & Approval Workflow
   Multi-section configuration form with 7-state approval workflow. When Design Basis
   is released, it unlocks SLD, Cable Tray, Earthing, Lighting, and Instrumentation modules.

2. Electrical Load List & Cable Schedule
   Spreadsheet-based editors with automatic cable sizing calculations based on design
   parameters. Supports revision copy and JSON blob storage.

3. Single Line Diagram (SLD) Generation
   Generates SLD per panel by combining Design Basis, Load List, Cable Schedule, and
   Panel data. Division-aware switchgear selection logic.

4. Instrumentation Management
   File management for 5 file types with Excel-level change detection (cell-by-cell
   comparison) and batch-grouped change history.
```

### Inputs & Outputs
```
Inputs:
- Project information and team assignments
- Design basis parameters (motor, cable, component specs)
- Panel configuration (MCC, PCC, TRCC)
- Instrumentation files (DWG, Excel)

Outputs:
- Electrical load lists
- Cable schedules with auto-sizing
- Single line diagrams per panel
- Cable tray configurations
- Earthing and lighting layouts
- Revision-controlled documentation
```

---

## Tab Button Updates

Add to the `.sol-tabs` container:

```html
<button class="sol-tab" data-tab="smart-pid">
    <span>Smart PID — AI P&ID Automation</span>
    <i class="fas fa-chevron-down sol-tab-icon"></i>
</button>
<button class="sol-tab" data-tab="enaibot">
    <span>EnAIBot — Electrical Engineering Automation</span>
    <i class="fas fa-chevron-down sol-tab-icon"></i>
</button>
```

---

## Updated Intro Text

Replace the current intro paragraph with:

```html
<p>At Inventive Bizsol, we deliver cutting-edge <strong>AI-powered engineering automation platforms</strong>
that transform how <strong>EPC companies</strong> and <strong>industrial OEMs</strong> design and deliver
projects. From <strong>support extraction</strong> and <strong>2D piping GA generation</strong> to
<strong>Smart P&ID automation</strong> and <strong>electrical engineering platforms</strong>, our solutions
reduce engineering costs by up to 60% while achieving 3x throughput increase.</p>
```

---

## Files to Modify

- `solutions.html` — add 2 new tab buttons, 2 new tab content sections, update intro text, add meta tags, add JSON-LD

---

## Dependencies

- Story 01 (title tags) — update solutions page title
- Story 02 (meta descriptions) — add meta description
- Story 05 (Open Graph) — add OG tags
- Story 10 (SoftwareApplication schema) — add for all 4 products
- Story 41 (JS) — existing tab toggle JS already supports new tabs (data-tab attribute pattern)

---

## Technical Notes

- The existing JS tab toggle code in `script.js` (lines 283-306) uses `data-tab` attributes and works dynamically — no JS changes needed for new tabs
- New tab content sections follow the exact same HTML structure as existing tabs
- Content for Smart PID is derived from `/smart-pid-frontend/_bmad-output/planning-artifacts/prd.md`
- Content for EnAIBot is derived from `/enaibot-frontend/docs/PRD-AS-BUILT.md`
- Marketing language should be added around the technical PRD content to make it customer-facing
