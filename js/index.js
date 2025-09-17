
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Cambiar el icono del botón
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            } else {
                icon.classList.remove('ri-menu-line');
                icon.classList.add('ri-close-line');
            }
        });
        
        // Cerrar el menú al hacer clic en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.querySelector('i').classList.remove('ri-close-line');
                mobileMenuButton.querySelector('i').classList.add('ri-menu-line');
            });
        });
    });

    
    // Efecto de scroll en el header
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero-section');
        const heroHeight = hero.offsetHeight;
    
        if (window.scrollY > heroHeight - 70) { // 70 es la altura del header
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    