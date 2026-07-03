// Smooth scroll for in-page nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        const navList = document.querySelector('nav ul');
        if (navList && navList.classList.contains('open')) {
            navList.classList.remove('open');
            document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
        }
    });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}