# Task Completion Checklist
- Update `assets/css/styles.css` then re-minify to `assets/css/styles.min.css` before commit.
- Verify responsive behaviour via browser DevTools (mobile/desktop) and test dark/light themes.
- Run Lighthouse or similar accessibility/contrast checks when UI changes.
- Confirm service worker cache (`PRECACHE_URLS`) includes any new assets. Bump `VERSION` if modifying SW.
- Ensure CV link points to latest `curriculum_vitae.pdf` and update if replaced.
- After changes, `git status` to confirm intended files, commit with descriptive message, push branch, open PR.