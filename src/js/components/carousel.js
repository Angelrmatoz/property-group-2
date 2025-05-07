/**
 * Módulo para manejar la funcionalidad del carrusel de imágenes
 */

export function initializeCarousel() {
    console.log('Inicializando carrusel...');

    const carousel = document.querySelector('.hero-2__carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    const prevButton = carousel.querySelector('.carousel-arrow--prev');
    const nextButton = carousel.querySelector('.carousel-arrow--next');

    let currentSlide = 0;
    let autoplayInterval;

    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        // Ocultar todas las diapositivas
        slides.forEach(slide => slide.classList.remove('active'));

        // Asegurarse de que el índice esté dentro del rango
        currentSlide = (index + slides.length) % slides.length;

        // Mostrar la diapositiva actual
        slides[currentSlide].classList.add('active');
    }

    // Mostrar la primera imagen
    showSlide(0);

    // Función para ir a la siguiente diapositiva
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Función para ir a la diapositiva anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Iniciar el autoplay
    function startAutoplay() {
        stopAutoplay(); // Detener cualquier intervalo existente
        autoplayInterval = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
    }

    // Detener el autoplay
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Agregar eventos de clic a los botones
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            stopAutoplay(); // Detener autoplay al interactuar manualmente
            startAutoplay(); // Reiniciar autoplay después de la interacción
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            stopAutoplay(); // Detener autoplay al interactuar manualmente
            startAutoplay(); // Reiniciar autoplay después de la interacción
        });
    }

    // Iniciar autoplay
    startAutoplay();
}