const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('section[id]'));
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

const closeMobileMenu = () => {
  if (!nav || !navToggle) return;
  nav.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileMenu();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', active);
      });
    });
  },
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

const loadScholarMetrics = async () => {
  const citationsEl = document.getElementById('metric-citations');
  const hIndexEl = document.getElementById('metric-h-index');
  const i10IndexEl = document.getElementById('metric-i10-index');
  const updatedEl = document.getElementById('scholar-last-updated');
  const profileLinkEl = document.getElementById('scholar-profile-link');

  if (!citationsEl || !hIndexEl || !i10IndexEl || !updatedEl || !profileLinkEl) {
    return;
  }

  try {
    const response = await fetch('scholar-metrics.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to load scholar metrics: ${response.status}`);
    }

    const data = await response.json();
    const metrics = data?.metrics || {};

    if (typeof metrics.citations === 'number') {
      citationsEl.textContent = String(metrics.citations);
    }
    if (typeof metrics.hIndex === 'number') {
      hIndexEl.textContent = String(metrics.hIndex);
    }
    if (typeof metrics.i10Index === 'number') {
      i10IndexEl.textContent = String(metrics.i10Index);
    }

    if (typeof data?.lastUpdated === 'string' && data.lastUpdated.trim().length > 0) {
      updatedEl.textContent = `Last updated: ${data.lastUpdated}`;
    }

    if (typeof data?.profileUrl === 'string' && data.profileUrl.startsWith('http')) {
      profileLinkEl.setAttribute('href', data.profileUrl);
    }
  } catch (error) {
    console.warn('Using fallback scholar metrics from HTML.', error);
  }
};

loadScholarMetrics();
