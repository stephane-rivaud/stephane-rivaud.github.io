# Coding Style and Conventions
- **HTML**: Single-page structure with semantic sections (`<section id="...">`). Inline JSON-LD and scripts live in `index.html`. IDs anchor navigation.
- **CSS**: Hand-authored `assets/css/styles.css` using CSS custom properties for theming (light/dark). Utility classes leverage Bootstrap 5.3 conventions; spacing/typography via CSS variables and `clamp()`. Animations defined with keyframes, transitions use easing variables. Minified counterpart `styles.min.css` manually produced.
- **JavaScript**: Vanilla ES6 in `assets/js/main.js` and inline scripts. Uses strict mode, `const/let`, event delegation, dataset attributes. No bundler or module system; global scope awareness required.
- **Accessibility**: Focus on WCAG 2.1 AA—color contrast, keyboard navigation, aria attributes on controls, minimum tap targets, smooth scrolling offset for fixed navbar.
- **PWA**: Service worker cache versioning (`sr-cache-vN`). Manifest controls icons/theme. Keep cache lists in sync when assets move.
- **Content Updates**: Publications, news, timelines maintained as static HTML lists/cards. Ensure consistent data attributes (`data-year`, `data-type`).