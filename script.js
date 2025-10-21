// ========== Mobile Menu ==========
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', String(isActive));
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ========== Scroll-to-Top ==========
const scrollBtn = document.getElementById('scrollTop');

let ticking = false;
window.addEventListener('scroll', () => {
  if (!scrollBtn) return;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
      ticking = false;
    });
    ticking = true;
  }
});

scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Contact Form Handling ==========
// Hybrid: Validate + show feedback, then allow FormSubmit.co to proceed
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  // Client-side validation
  const name = form.querySelector('#name')?.value.trim();
  const email = form.querySelector('#email')?.value.trim();
  const message = form.querySelector('#message')?.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out Name, Email, and Message.');
    return;
  }
  // Optionally show a toast or spinner here
  // Do not preventDefault to let FormSubmit.co send the form
});

// ========== Scroll Reveal ==========
const revealTargets = document.querySelectorAll('.section, .service-block, .industry-block, .proj-item, .gallery-grid img');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

revealTargets.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// ========== Optional FAQ (if added later) ==========
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const open = content?.style.maxHeight;
    document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = null);
    if (content) content.style.maxHeight = open ? null : content.scrollHeight + 'px';
  });
});
