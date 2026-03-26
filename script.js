const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('section[id]'));

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
