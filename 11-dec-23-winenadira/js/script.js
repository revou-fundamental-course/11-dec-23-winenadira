document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navItems = document.querySelector('.nav-items');

    menuBtn.addEventListener('click', () => {
        navItems.classList.toggle('mobile-menu');
    });

    document.querySelectorAll('.nav-items a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                if (navItems.classList.contains('mobile-menu')) {
                    navItems.classList.remove('mobile-menu');
                }
            }
        });
    });
});