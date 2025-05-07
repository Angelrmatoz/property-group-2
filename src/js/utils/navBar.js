export function navBar() {
    const navBar = document.querySelector('.navegacion');
    const mainContent = document.querySelector('.contenido-principal');
    const navLinks = document.querySelectorAll('.navegacion a');
    let _lastScrollTop = 0;

    // Agregar una clase para la versión transparente (inicial)
    navBar.classList.add('navegacion--transparente');

    window.addEventListener('scroll', function () {
        // Obtener la posición actual del scroll
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Obtener la posición del inicio del main
        const mainPosition = mainContent.offsetTop;

        // Si el scroll está por debajo del main, cambiar a fondo blanco
        if (scrollTop >= mainPosition) {
            // Cambiar a fondo blanco
            navBar.classList.remove('navegacion--transparente');
            navBar.classList.add('navegacion--blanco');

            // Cambiar color de los enlaces a negro directamente desde JS
            navLinks.forEach(link => {
                if (!link.querySelector('img')) { // No aplicar a enlaces que contienen imágenes
                    link.style.color = 'black';
                    link.style.fontWeight = '500';
                    link.style.textShadow = 'none';
                }
            });
        }
        // Solo volver al diseño transparente cuando estemos por encima del main
        else if (scrollTop < mainPosition) {
            // Volver al diseño transparente
            navBar.classList.remove('navegacion--blanco');
            navBar.classList.add('navegacion--transparente');

            // Restaurar color de los enlaces a blanco
            navLinks.forEach(link => {
                if (!link.querySelector('img')) { // No aplicar a enlaces que contienen imágenes
                    link.style.color = 'white';
                    link.style.fontWeight = '400';
                    link.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
                }
            });
        }

        // Guardar la posición actual para la próxima vez
        _lastScrollTop = scrollTop;
    });

    // Agregar evento hover para los enlaces
    navLinks.forEach(link => {
        if (!link.querySelector('img')) { // No aplicar a enlaces que contienen imágenes
            link.addEventListener('mouseenter', function () {
                if (navBar.classList.contains('navegacion--blanco')) {
                    this.style.color = '#c9a227'; // Color dorado
                } else {
                    this.style.borderBottom = '0.2rem solid #edc531'; // Saffron border
                }
            });

            link.addEventListener('mouseleave', function () {
                if (navBar.classList.contains('navegacion--blanco')) {
                    this.style.color = 'black';
                } else {
                    this.style.borderBottom = '0.2rem solid transparent';
                }
            });
        }
    });
}
