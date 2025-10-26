# Stéphane Rivaud - Academic Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-green.svg)](https://web.dev/progressive-web-apps/)
[![Performance](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen.svg)](https://developers.google.com/web/tools/lighthouse)
[![Security Headers](https://img.shields.io/badge/Security%20Headers-A%2B-brightgreen.svg)](https://securityheaders.com/)

A modern, responsive, and accessible academic portfolio website showcasing research work, publications, and professional experience in Machine Learning and AI.

🌐 **Live Site**: [https://stephane-rivaud.github.io](https://stephane-rivaud.github.io)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Performance](#performance)
- [Browser Compatibility](#browser-compatibility)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Maintenance](#maintenance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This is a professional academic portfolio website designed for researchers and academics to showcase their work, publications, and professional journey. Built with modern web standards, it offers excellent performance, accessibility, and user experience across all devices.

### Key Highlights

- **Progressive Web App (PWA)** - Installable and works offline
- **Responsive Design** - Optimized for all screen sizes
- **Dark/Light Theme** - Automatic and manual theme switching
- **Performance Optimized** - 95+ Lighthouse score
- **SEO Ready** - Comprehensive meta tags and structured data
- **Accessible** - WCAG 2.1 AA compliant
- **Secure** - A+ security headers rating

## ✨ Features

### 📱 Progressive Web App
- **Offline Support**: Full functionality even without internet connection
- **Installable**: Add to home screen on mobile and desktop
- **App-like Experience**: Native app feel with smooth transitions
- **Background Sync**: Automatic content updates when online

### 🎨 User Interface
- **Dual Theme System**: Light and dark modes with system preference detection
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Smooth Animations**: Subtle micro-interactions and transitions
- **Interactive Components**: Expandable sections, filters, and search
- **Accessibility First**: Keyboard navigation and screen reader support

### 📚 Content Sections
- **About**: Biography, research interests, skills, and academic timeline
- **News & Updates**: Latest activities and achievements
- **Publications**: Searchable and filterable research papers with citations
- **Projects**: Research projects with status indicators and tech stacks
- **Teaching**: Teaching experience and student supervision
- **Awards**: Recognition and honors
- **Contact**: Multiple contact methods and social links

### 🔍 Advanced Features
- **Publication Search**: Real-time search with multiple filters
- **Citation Management**: Copy citations and view citation counts
- **Project Filtering**: Filter by status, technology, or topic
- **Expandable Content**: Progressive disclosure for better UX
- **Scroll Spy Navigation**: Active section highlighting
- **Back to Top**: Smooth scroll navigation

### ⚡ Performance Features
- **Critical CSS Inlining**: Faster first paint
- **Resource Preloading**: Priority loading of critical assets
- **Image Optimization**: WebP with JPEG fallback
- **Lazy Loading**: Deferred loading of non-critical resources
- **Minified Assets**: Compressed CSS and optimized JavaScript
- **Intelligent Caching**: Strategic cache policies for different resources

### 🔒 Security Features
- **Content Security Policy**: XSS attack prevention
- **HTTPS Enforcement**: Strict Transport Security
- **Secure Headers**: Comprehensive security headers
- **Permission Policy**: Restricted browser features
- **Frame Protection**: Clickjacking prevention

## 🛠 Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties and Grid/Flexbox
- **JavaScript**: Vanilla JS (ES6+) with no framework dependencies
- **Bootstrap 5.3**: Responsive grid and components
- **Font Awesome 6.5**: Icon library

### Progressive Web App
- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: Installability and app configuration
- **Cache API**: Strategic caching for performance

### Performance & Optimization
- **WebP Images**: Modern image format with fallbacks
- **CSS Minification**: Reduced file sizes
- **Resource Hints**: Preload, prefetch, and preconnect
- **HTTP/2**: Optimized for modern protocols

### Development Tools
- **Git**: Version control
- **Python HTTP Server**: Local development server
- **Browser DevTools**: Testing and debugging

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100
- **PWA**: ✓ Installable

### Core Web Vitals
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### Page Metrics
- **Total Size**: ~500KB (compressed)
- **Requests**: < 20 (initial load)
- **DOM Nodes**: < 1500
- **JavaScript Execution**: < 2s

## 🌐 Browser Compatibility

### Supported Browsers
- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅
- **Opera**: 76+ ✅
- **Samsung Internet**: 14+ ✅

### Mobile Support
- **iOS Safari**: 14+ ✅
- **Chrome Mobile**: 90+ ✅
- **Firefox Mobile**: 88+ ✅

### Feature Support
- CSS Grid & Flexbox ✅
- Custom Properties ✅
- Service Workers ✅
- WebP Images (with fallback) ✅
- ES6 JavaScript ✅

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Python 3.x (for local development server) or any HTTP server
- Git (optional, for version control)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/stephane-rivaud/stephane-rivaud.github.io.git
cd stephane-rivaud.github.io
```

2. **Start a local server**

Using Python 3:
```bash
python3 -m http.server 8000
```

Using Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000
```

3. **Open in browser**
```
http://localhost:8000
```

## 💻 Development

### Project Structure
```
stephane-rivaud.github.io/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── styles.css      # Development CSS
│   │   └── styles.min.css  # Production CSS (minified)
│   ├── js/
│   │   └── main.js         # Site interactions (PWA, filters, UI)
│   └── img/                # Profile images, icons, favicons
├── service-worker.js       # PWA service worker
├── manifest.webmanifest    # PWA manifest
├── offline.html            # Offline fallback page
├── _headers               # Security and cache headers
├── robots.txt             # Search engine directives
├── sitemap.xml            # XML sitemap
├── curriculum_vitae.pdf   # CV document
├── README.md              # This file
├── CHANGELOG.md           # Version history
└── IMPROVEMENTS.md        # Technical documentation
```

### Development Workflow

1. **Make changes** to HTML, CSS, or JavaScript files
2. **Test locally** using development server
3. **Check responsiveness** using browser DevTools
4. **Test offline functionality** using Chrome DevTools
5. **Validate accessibility** using axe DevTools
6. **Run Lighthouse audit** for performance check
7. **Commit changes** with descriptive messages

### CSS Development

The site uses CSS custom properties for theming:

```css
/* Light theme (default) */
:root {
  --bg: #ffffff;
  --fg: #111111;
  --accent: #1a73e8;
  /* ... more variables */
}

/* Dark theme */
[data-theme="dark"] {
  --bg: #0b0b0c;
  --fg: #e6e6e6;
  --accent: #8ab4f8;
  /* ... more variables */
}
```

### Minifying CSS

After making changes to `assets/css/styles.css`, minify for production:

```bash
# Using online tool
# Visit: https://cssminifier.com/

# Or using Node.js
npx clean-css-cli assets/css/styles.css -o assets/css/styles.min.css

# Or using Python
pip install csscompressor
python -m csscompressor assets/css/styles.css > assets/css/styles.min.css
```

### Service Worker Updates

When updating the service worker:

1. Increment the `VERSION` constant
2. Update cache names if needed
3. Test offline functionality
4. Clear browser cache for testing

## 🌍 Deployment

### GitHub Pages Deployment

1. **Push to GitHub**
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (main)
   - Save settings

3. **Verify deployment**
   - Visit: https://[username].github.io
   - Check all features work correctly
   - Test on multiple devices

### Custom Domain Setup

1. Create `CNAME` file with your domain
2. Configure DNS settings:
   - A records: 185.199.108-111.153
   - CNAME: [username].github.io

### Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify images load correctly
- [ ] Check offline functionality
- [ ] Test theme switching
- [ ] Validate forms and interactions
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Test on different browsers
- [ ] Verify meta tags and SEO
- [ ] Check security headers

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the header section in `index.html`
2. **Publications**: Update the publications list in the publications section
3. **Projects**: Modify project cards in the projects section
4. **Contact Info**: Update contact details in header and contact section

### Theming

Customize colors in `styles.css`:

```css
:root {
  --accent: #your-color;
  --link: #your-link-color;
  /* ... other colors */
}
```

### Adding Sections

1. Create new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu
4. Test responsiveness

## 🔧 Maintenance

### Regular Updates

- **Monthly**: Update publications and news
- **Quarterly**: Review and update projects
- **Annually**: Update CV and review all content

### Performance Monitoring

- Run Lighthouse audits regularly
- Monitor Core Web Vitals
- Check browser compatibility
- Review security headers

### Backup Strategy

- Keep local copies of all files
- Use Git for version control
- Regular GitHub pushes
- Export data periodically

### Troubleshooting

**Service Worker Issues**
- Clear browser cache
- Unregister old service workers
- Check console for errors

**Theme Not Persisting**
- Check localStorage availability
- Verify JavaScript is enabled

**Offline Not Working**
- Ensure service worker is registered
- Check cache storage in DevTools
- Verify offline.html exists

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Stéphane Rivaud**
- Email: stephane.a.rivaud@inria.fr
- GitHub: [@stephane-rivaud](https://github.com/stephane-rivaud)
- LinkedIn: [Stéphane Rivaud](https://www.linkedin.com/in/st%C3%A9phane-rivaud-b87458a8/)
- Google Scholar: [Publications](https://scholar.google.fr/citations?user=wK1ARdQAAAAJ&hl=fr)

---

## 🙏 Acknowledgments

- INRIA Saclay for research support
- Open source community for tools and libraries
- Bootstrap team for the CSS framework
- Font Awesome for the icon library

---

*Last Updated: January 2025*