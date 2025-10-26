# Suggested Commands
- `python3 -m http.server 8000` — run local static server (Darwin/macOS default Python).
- `npx http-server -p 8000` — alternative Node-based dev server if installed.
- `npx clean-css-cli assets/css/styles.css -o assets/css/styles.min.css` — minify CSS after updates.
- `python -m csscompressor assets/css/styles.css > assets/css/styles.min.css` — Python alternative for CSS minification.
- `git status` / `git add` / `git commit` / `git push origin <branch>` — standard Git workflow for GitHub Pages deployment.
- `npx lighthouse http://localhost:8000 --view` — audit performance/accessibility (if Lighthouse CLI installed).
- `open http://localhost:8000` — macOS command to open local site in default browser.