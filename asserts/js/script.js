const navLinks = document.getElementById('navLinks');
const hamBurger = document.getElementById('hamburger-icon');
const navItems = document.querySelectorAll('.nav_links li a');
const sections = document.querySelectorAll('section');

hamBurger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= 150 && rect.bottom >= 150;
};

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav_links li a[href="#${id}"]`);
        if (isElementInViewport(section)) {
            navItems.forEach(item => item.classList.remove('active'));
            if (link) link.classList.add('active');
        }
    });
});

const yearChange = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearChange.textContent = currentYear;
