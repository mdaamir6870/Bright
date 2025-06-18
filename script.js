const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
});

const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.querySelector('form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent!');
  form.reset();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .service-block, .testimonial').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.5s ease';
  observer.observe(el);
});
