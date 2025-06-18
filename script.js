// Mobile menu toggle
document.querySelector('.menu-btn').onclick = () => document.querySelector('.nav-links').classList.toggle('active');

// Scroll button
const scrollBtn = document.getElementById('scrollTop');
window.onscroll = () => scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// FAQ toggle
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.onclick = () => {
    const content = btn.nextElementSibling;
    const open = content.style.maxHeight;
    document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = null);
    content.style.maxHeight = open ? null : content.scrollHeight + 'px';
  };
});
