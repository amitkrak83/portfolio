# CLAUDE.md - Development & Style Guidelines

This file outlines commands, directory structure, and development practices for the Portfolio codebase.

## Development Commands
*   **Run Local Dev Server**: Since this is a static HTML/CSS/JS site, you can open `index.html` directly in a browser, or run a simple local web server:
    ```bash
    # Python 3
    python -m http.server 8000
    ```

## Style Guidelines
*   **Grid Layout**: Project pages use a responsive two-column grid (`.container`):
    *   Left column (240px): Dynamic sticky sidebar.
    *   Right column (flex): Case study text wrapper (`.wrap` max-width 850px).
*   **Color Palette**: Primary text `#0F0D0C`, background `#FFFFFF`, accents `#E85D0C` (orange), secondary texts `#5A5856`.
*   **Dynamic Navigation**: Nav bar list is sourced dynamically from `/work/sidebar.html` and loaded using `/js/project-sidebar.js`.
*   **NDA Compliance**: Anonymize organization names and use generic names for agent graphs or private structures (e.g. *Orchestration Agent*, *Scenario Designer*).
*   **Mermaid Integration**: Load Mermaid.js via CDN (`https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs`) and use container tags:
    ```html
    <div class="mermaid-container">
      <pre class="mermaid">
        <!-- Diagram content -->
      </pre>
    </div>
    ```
