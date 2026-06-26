# Portfolio Build Progress
**Amit Kumar — amitkumar.dev**
Last updated: June 2026

---

## How to use this file
Read this at the start of any session to know what's done and what's next.
The single source of truth is `design-reference.html` — open it in browser to see all finalized designs.

---

## Site Structure & Status

### Main Page (single scroll)
| # | Section | Status |
|---|---|---|
| 1 | Header | ✅ Finalized |
| 2 | Hero | ✅ Design done, content pending |
| 3 | Case Studies | ✅ Design done, content pending |
| 4 | Experience + Education | ✅ Finalized |
| 5 | Skills | ✅ Finalized |
| 6 | Recommendations | ✅ Finalized |
| 7 | About | ✅ Finalized |
| 8 | Writing (LinkedIn posts) | ✅ Finalized |
| 9 | Contact | ✅ Finalized |
| 10 | Tech strip + Footer | ✅ Finalized |

### Project Pages (with Dynamic Navigation Sidebar)
- `/work/qa-automation` — ✅ Phase 1: Fully Detailed Case Study (Sanitized Hub-and-Spoke Graph)
- `/work/fracture-analysis` — ⏳ Phase 2: Sidebar injected, content pending detailed update
- `/work/on-premise-llm` — ⏳ Phase 3: Sidebar injected, content pending detailed update
- `/work/side-airbags` — ⏳ Phase 4: Sidebar injected, content pending detailed update
- `/work/3d-genai` — ⏳ Phase 5: Sidebar injected, content pending detailed update
- `/work/restaurant-pipelines` — ⏳ Phase 6: Sidebar injected, content pending detailed update
- `/work/part-failure-analytics` — ⏳ Phase 7: Sidebar injected, content pending detailed update
- `/work/object-detection` — ⏳ Phase 8: Sidebar injected, content pending detailed update
- `/work/recommendation-engine` — ⏳ Phase 9: Sidebar injected, content pending detailed update
- `/work/nokia-vi` — ⏳ Phase 10: Sidebar injected, content pending detailed update
- `/work/twilio-extraction` — ⏳ Phase 11: Sidebar injected, content pending detailed update

---

## Aligned Practices & Guidelines

### 1. 4W1H Case Study Structure (Narrative Headings)
Case studies must not use literal "Why", "What", or "How" headers. Instead, use professional narrative headings:
- **"The Challenge & Traditional Bottlenecks"** (Why)
- **"The Solution: [Sanitized Title]"** (What)
- **"System Architecture & Collaborative Logic"** (How - including Mermaid diagrams and graph node tables)
- **"Deployment Strategy & Enterprise Scope"** (Where)
- **Timeline & Metadata** (When - kept as subtitle/scope tags, not as a timeline string)

### 2. Confidentiality & Sanitization Rules (NDA Compliance)
- **Do not leak company-internal information** (like exact private folder structures, internal names, or private repositories).
- **Sanitize node names** to generic industry-standard terms (e.g., *Orchestration Agent*, *Scenario Designer*, *Page Inspector*, *Self-Healing Debugger*).
- **Anonymize client/organization references** (e.g., refer to GlobalNodes as "enterprise testing suites" or "internal platforms").

### 3. Navigation Sidebar System
- Single source of truth is `work/sidebar.html`.
- Dynamic injection script is `js/project-sidebar.js` which automatically loads it on page load and highlights the active item matching the URL.
- Responsive styling (`.container` grid) is defined inline on each page, collapsing to a horizontal scrollable menu on mobile devices (< 900px).
- Metrics must be center-aligned using `justify-content: center` on `.cs-metrics` and `text-align: center` on `.cs-metric`.

---

## Where We Left Off

**Last Completed (Current Session):**
- Restructured `work/qa-automation.html` with a detailed narrative sequence diagram, flow diagram, and nodes table.
- Created `work/sidebar.html` and `js/project-sidebar.js`.
- Automatically injected the grid container, CSS styles, and loading scripts into all other 10 project HTML files.
- Aligned metrics to the center and removed the timeline row on all pages.

**Next Action Items (Next Session):**
1. Pick **Phase 2: Fracture Analysis AI** (`work/fracture-analysis.html`).
2. Draft and approve the detailed, sanitized 4W1H content (classification and segmentation pipeline).
3. Generate relevant Mermaid diagrams showing the two-stage model pipeline (DeiT classification + UNet segmentation).
4. Update the HTML page once approved.
