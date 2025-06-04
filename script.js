// Responsive navbar toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-to-top
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) scrollTopBtn.style.display = 'block';
  else scrollTopBtn.style.display = 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation (simple)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});
