# Refactor Roadmap

This roadmap outlines a staged refactor to improve maintainability, content governance, and deployment ergonomics for `stephane-rivaud.github.io`.

## 1. Objectives
- **Separation of Concerns:** Decouple content, presentation, and behaviour currently embedded in `index.html`.
- **Content Maintainability:** Centralise structured data (news, publications, teaching) to minimise manual HTML edits.
- **Build Reproducibility:** Establish clear processes for generating minified assets and future automation.
- **PWA Integrity:** Preserve offline capability and caching strategy while reorganising assets.
- **Documentation:** Keep contributors aligned through updated README and changelog practices.

## 2. Target Structure (Proposed)
```
.
├── index.html               # Slimmed shell, pulls content via includes/scripts
├── assets/
│   ├── css/
│   │   ├── styles.css       # Source stylesheet
│   │   └── styles.min.css   # Generated output (document build step)
│   ├── js/
│   │   ├── main.js          # Initialised behaviours (entry point)
│   │   ├── publications.js  # Search/filter logic
│   │   ├── projects.js      # Filter + modal logic
│   │   └── utils/
│   │       └── dom.js       # Shared helpers (tooltips, toggles)
│   └── img/                 # Profile pictures, icons
├── data/
│   ├── news.json            # Events + metadata (badges, links)
│   ├── publications.json    # Conference papers, arXiv, patent, thesis
│   ├── projects.json        # Project cards, status, links
│   ├── teaching.json        # Teaching timeline & supervision counts
│   └── site-meta.json       # Hero stats, quick metrics, update timestamp
├── docs/                    # Architecture + roadmap documentation
├── service-worker.js        # Updated to precache new asset paths
├── manifest.webmanifest
├── offline.html
├── sitemap.xml
├── robots.txt
└── curriculum_vitae.pdf
```

> **Note:** GitHub Pages can serve subdirectories without config. Ensure relative URLs (`/assets/...`) remain valid.

## 3. Work Packages

### WP1 – Asset Reorganisation
1. Create `assets/css`, `assets/js`, `assets/img` directories.
2. Move existing CSS & images; update references in `index.html`, `manifest.webmanifest`, `service-worker.js`.
3. Extract inline JS into `assets/js/main.js` while preserving behaviour. Ensure `defer` or `module` loading.

### WP2 – Data Externalisation
1. Create `data/` JSON files using current content as seed.
2. Refactor sections (news, publications, projects, teaching) to render from JSON via JS.
3. Provide graceful fallback for no-JS (e.g., pre-render or noscript message) if feasible.

### WP3 – Build & Tooling Documentation
1. Document CSS minification process (e.g., `npm scripts`, `esbuild`, or manual instructions) in README.
2. Optionally adopt lightweight build pipeline (`npm init`, `package.json`) for minifying CSS/JS; ensure GitHub Pages compatibility (build via GitHub Actions or local prebuild).
3. Add `.gitignore` aligned with `docs/repo-structure-overview.md` recommendations.

### WP4 – Testing & QA
1. Update `service-worker.js` precache list and runtime matching to new paths.
2. Validate offline behaviour, navigation, and caching via Lighthouse/Audit.
3. Verify SEO assets (sitemap, robots) continue to reference correct URLs.
4. Run HTML validator to ensure new templates render correctly.

### WP5 – Documentation & Change Management
1. Update `README.md` with new structure, build instructions, and content editing workflow.
2. Record changes in `CHANGELOG.md` and summarise next steps in `IMPROVEMENTS.md`.
3. Consider consolidating planning documents (`plan.md` → docs folder) or retiring once roadmap is adopted.

## 4. Dependencies & Risks
- **Service Worker Cache:** Moving assets without updating cache lists will break offline mode. Sequence updates carefully.
- **Inline Script Removal:** Ensure DOMContentLoaded behaviour remains consistent when JS is externalised; check for dependencies on inline scope.
- **GitHub Pages Build:** Introducing tooling requires either a GitHub Actions workflow or local prebuild; confirm which path the maintainer prefers.
- **Data JSON Authoring:** Non-technical edits should remain simple—document expected format and provide schema examples.

## 5. Suggested Timeline
| Phase | Scope | Effort | Notes |
|------|-------|--------|-------|
| 1 | Assets reorganisation & path updates | Medium | Keep SW in sync |
| 2 | Data externalisation for dynamic sections | High | Potential for incremental rollout per section |
| 3 | Build tooling & documentation | Medium | Evaluate automation needs |
| 4 | QA & PWA validation | Medium | Run Lighthouse, manual testing |
| 5 | Docs & housekeeping | Low | Finalise README, remove stale files |

## 6. Deliverables
- Restructured repository mirroring target layout.
- JSON-driven content modules with leaner `index.html`.
- Documented build and content update workflow.
- Updated service worker & manifest reflecting new paths.
- Updated documentation set under `docs/`.
