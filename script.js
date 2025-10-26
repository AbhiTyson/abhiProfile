// Basic interactivity: year + smooth scrolling + simple form submit UX
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Basic form submit UX feedback
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      // let actual POST happen (Formspree) — but show immediate feedback
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
      }
      // After some time, re-enable (if Formspree redirects, this won't run)
      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Send Message';
        }
      }, 3000);
    });
  }
});
