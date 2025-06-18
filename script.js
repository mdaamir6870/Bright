// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

// Close mobile menu after clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks?.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Scroll-to-Top Button
const scrollBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
});

scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Handling
const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});

// Scroll Reveal Animations
const revealTargets = document.querySelectorAll('.section, .service-block, .testimonial');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Optional FAQ toggle handler
document.querySelectorAll('.faq-btn')?.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const open = content.style.maxHeight;
    document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = null);
    content.style.maxHeight = open ? null : content.scrollHeight + 'px';
  });
});
