# Repository Structure Overview

## Purpose
This document summarizes the current layout and responsibilities of the `stephane-rivaud.github.io` repository. It captures the assets, data sources, and tooling in place so that future refactors can be scoped with awareness of existing coupling and deployment constraints.

## High-Level Layout
```
.
├── index.html               # Single-page application entry point
├── styles.css               # Source stylesheet (hand-authored)
├── styles.min.css           # Production stylesheet (minified build output)
├── service-worker.js        # PWA cache and runtime strategy
├── manifest.webmanifest     # PWA metadata (icons, theme colors, descriptions)
├── offline.html             # Offline fall-back document used by the SW
├── curriculum_vitae.pdf     # CV asset linked from the hero section
├── profile-pic.(jpg|webp)   # Hero imagery
├── icon-*.png, favicon.ico  # PWA + browser icons
├── sitemap.xml, robots.txt  # SEO configuration
├── scholar_citations_*.{json,txt} # Snapshot citation metrics (used for stats)
├── CHANGELOG.md, README.md, IMPROVEMENTS.md, plan.md # Documentation files
└── docs/                    # Planning + refactor documentation (this folder)
```

### Hidden / Tooling Folders
- `.git/` version control metadata
- `.idea/`, `.vscode/` IDE settings
- `.kilocode/`, `.serena/` Cascade orchestration data

## Application Flow
1. **`index.html`**
   - Houses the markup for all sections (Hero, About, Timeline, News, Publications, Projects, Awards, Teaching, Contact) and embeds inline JavaScript for interactive behaviours (filters, modals, search, theme toggle, tooltips, etc.).
   - Structured data (JSON-LD) and meta tags are hard-coded within the `<head>`.
   - All content (news, publications, stats) is maintained inline, leading to manual updates.

2. **Styling**
   - `styles.css` is the readable source. `styles.min.css` is the minified counterpart that the page loads in production (via preload + noscript fallback).
   - There is no build system in repository; the minified file appears to be checked in manually or produced externally.

3. **JavaScript Behaviour**
   - Inline script block at the bottom of `index.html` handles:
     - Scroll-triggered animations, intersection observers
     - Search and filter logic for publications
     - Project filter buttons
     - Dynamic tooltips and theme toggling
     - Citation copy clipboard integration
     - Modal stub for project details
   - No bundler is used; all logic shares a single global scope, which complicates testing and scaling.

4. **Progressive Web App Components**
   - `service-worker.js` precaches core assets and manages runtime caching with versioned cache names (`sr-cache-vX`).
   - `manifest.webmanifest` defines icons, description, and display mode for installation.
   - `offline.html` provides the fallback displayed when offline.

5. **Content Assets**
   - PDF CV and profile images live at the repository root. The CV is manually synced from the CV source repository.
   - `scholar_citations_data.json` and `scholar_citations_summary.txt` are snapshots that may feed statistics (current usage not wired in script but referenced by existing plan docs).

6. **Documentation / Planning**
   - `README.md` contains deployment and feature overview (GitHub Pages).
   - `CHANGELOG.md` logs website updates.
   - `IMPROVEMENTS.md` lists backlog ideas.
   - `plan.md` (existing) describes a proposed `.gitignore` layout and has stale context.
   - `docs/` now stores architectural notes and refactor planning artifacts.

## Observed Constraints & Practices
- Hosted on GitHub Pages (static site). All assets must reside in the repository and be accessible via relative paths.
- No build tooling or package manager; any refactor that introduces them will require additional configuration and deployment adjustments.
- The service worker expects key assets at fixed paths; moving files requires updating `PRECACHE_URLS`.
- Inline data structure updates rely on manual editing, creating risk of divergence from authoritative CV sources.

## Opportunities for Improvement
- Separate concerns by splitting inline JavaScript into modules within a `/assets/js/` folder.
- Introduce structured data sources (JSON/YAML) for sections like News, Publications, Teaching to simplify future updates.
- Evaluate CSS preprocessing or at least document how `styles.min.css` is generated to ensure reproducibility.
- Consolidate planning documents (`plan.md`, `IMPROVEMENTS.md`) into a coherent roadmap to avoid duplication.
