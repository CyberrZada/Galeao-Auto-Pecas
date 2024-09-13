document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth <= 768) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });

        // Fechar o menu ao clicar em um link
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Ajustar visibilidade do menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'flex';
            menuToggle.style.display = 'none';
        } else {
            navLinks.style.display = 'none';
            menuToggle.style.display = 'block';
        }
    });
});