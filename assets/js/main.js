'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => console.log('SW registered'))
        .catch(error => console.log('SW failed:', error));
    });
  }

  // Theme Management
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (themeToggle) {
    if (storedTheme) {
      root.setAttribute('data-theme', storedTheme);
      themeToggle.checked = storedTheme === 'dark';
    } else if (prefersDark) {
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      const theme = themeToggle.checked ? 'dark' : 'light';
      root.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  // Enhanced Smooth Scrolling (respects reduced motion)
  const navbar = document.querySelector('.navbar');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const targetSelector = anchor.getAttribute('href');
      if (!targetSelector || targetSelector === '#') {
        return;
      }

      const target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }

      event.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPos = target.offsetTop - navHeight - 20;
      window.scrollTo({
        top: targetPos,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  // Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const updateActiveLink = () => {
    const scrollY = window.scrollY;
    const navHeight = navbar ? navbar.offsetHeight : 0;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 50;
      const sectionBottom = sectionTop + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        if (link) {
          link.classList.add('active');
        }
      }
    });

    if (scrollY < 100) {
      navLinks.forEach(navLink => navLink.classList.remove('active'));
    }
  };

  let scrollTimer;
  window.addEventListener('scroll', () => {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(updateActiveLink, 10);
  });
  updateActiveLink();

  // Back to Top Button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  // Publication Search and Filter
  const pubSearch = document.getElementById('pub-search');
  const pubTypeFilter = document.getElementById('pub-type-filter');
  const pubYearFilter = document.getElementById('pub-year-filter');
  const pubTopicFilter = document.getElementById('pub-topic-filter');
  const clearFilters = document.getElementById('clear-filters');
  const noPubResults = document.getElementById('no-pub-results');

  const filterPublications = () => {
    const searchTerm = pubSearch.value.toLowerCase();
    const typeFilter = pubTypeFilter.value;
    const yearFilter = pubYearFilter.value;
    const topicFilter = pubTopicFilter.value;

    const publications = document.querySelectorAll('.publication-item');
    let visibleCount = 0;

    publications.forEach(publication => {
      const text = publication.textContent.toLowerCase();
      const type = publication.dataset.type;
      const year = publication.dataset.year;
      const topics = publication.dataset.topics;

      let show = true;

      if (searchTerm && !text.includes(searchTerm)) {
        show = false;
      }
      if (typeFilter && type !== typeFilter) {
        show = false;
      }
      if (yearFilter && year !== yearFilter) {
        show = false;
      }
      if (topicFilter && !(topics || '').includes(topicFilter)) {
        show = false;
      }

      publication.style.display = show ? 'block' : 'none';
      if (show) {
        visibleCount += 1;
      }
    });

    if (noPubResults) {
      noPubResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  if (pubSearch && pubTypeFilter && pubYearFilter && pubTopicFilter) {
    pubSearch.addEventListener('input', filterPublications);

    [pubTypeFilter, pubYearFilter, pubTopicFilter].forEach(dropdown => {
      dropdown.addEventListener('click', event => {
        if (dropdown.size === 1) {
          event.stopPropagation();
        }
      });

      dropdown.addEventListener('change', filterPublications);

      dropdown.addEventListener('focus', () => {
        dropdown.setAttribute('aria-expanded', 'true');
      });

      dropdown.addEventListener('blur', () => {
        dropdown.setAttribute('aria-expanded', 'false');
      });
    });

    if (clearFilters) {
      clearFilters.addEventListener('click', () => {
        pubSearch.value = '';
        pubTypeFilter.value = '';
        pubYearFilter.value = '';
        pubTopicFilter.value = '';
        filterPublications();
      });
    }
  }

  // Expand/Collapse Abstracts with smooth animation
  document.querySelectorAll('.btn-expand-abstract').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const pubId = button.dataset.pubId;
      const abstract = document.getElementById(`abstract-${pubId}`);
      const icon = button.querySelector('i');

      if (!abstract || !icon) {
        return;
      }

      if (abstract.style.display === 'none' || !abstract.style.display) {
        abstract.style.display = 'block';
        abstract.style.maxHeight = prefersReducedMotion ? 'none' : '0';
        abstract.style.overflow = prefersReducedMotion ? 'visible' : 'hidden';
        abstract.style.transition = prefersReducedMotion ? 'none' : 'max-height 0.3s ease-out, padding 0.3s ease-out';
        abstract.style.padding = prefersReducedMotion ? '1rem' : '0';

        if (!prefersReducedMotion) {
          abstract.offsetHeight; // force reflow
          abstract.style.maxHeight = `${abstract.scrollHeight}px`;
          abstract.style.padding = '1rem';

          setTimeout(() => {
            abstract.style.maxHeight = 'none';
            abstract.style.overflow = 'visible';
          }, 300);
        }

        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        if (!prefersReducedMotion) {
          abstract.style.maxHeight = `${abstract.scrollHeight}px`;
          abstract.style.overflow = 'hidden';
          abstract.style.transition = 'max-height 0.3s ease-out, padding 0.3s ease-out';

          abstract.offsetHeight; // force reflow

          abstract.style.maxHeight = '0';
          abstract.style.padding = '0';

          setTimeout(() => {
            abstract.style.display = 'none';
            abstract.style.maxHeight = '';
            abstract.style.overflow = '';
            abstract.style.padding = '';
          }, 300);
        } else {
          abstract.style.display = 'none';
        }

        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });
  });

  // Mobile Menu Behavior
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    document.addEventListener('click', event => {
      if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }

  // Citation Copy Functionality
  const citationById = {
    pub2: 'Rivaud, S., Fournier, L., Pumir, T., Belilovsky, E., Eickenberg, M., & Oyallon, E. (2025). PETRA: Parallel End-to-end Training with Reversible Architectures. In International Conference on Learning Representations (ICLR).'
  };

  document.querySelectorAll('.btn-cite').forEach(button => {
    button.addEventListener('click', () => {
      const pubId = button.dataset.pubId;
      const citation = citationById[pubId];
      if (!citation) {
        return;
      }
      navigator.clipboard.writeText(citation).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      });
    });
  });
}
);
