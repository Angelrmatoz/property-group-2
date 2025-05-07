// Archivo JavaScript principal

import { updateYear } from './utils/updateYear.js';
import { getCurrentPage } from './utils/currentPage.js';
import { navBar } from './utils/navBar.js';
import { initializeTabs } from './components/tabs.js';
import { initializeCarousel } from './components/carousel.js';

updateYear();
getCurrentPage();
navBar();

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    initializeTabs();
    initializeCarousel();
});