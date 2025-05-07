/**
 * Módulo para manejar la funcionalidad de las pestañas de Bootstrap
 */

export function initializeTabs() {
    console.log('Inicializando pestañas...'); // Para verificar si la función se ejecuta

    const triggerTabList = [].slice.call(document.querySelectorAll('#ventajasTab button'));

    triggerTabList.forEach(function (triggerEl) {
        const tabTrigger = new bootstrap.Tab(triggerEl);

        triggerEl.addEventListener('click', function (event) {
            event.preventDefault();
            tabTrigger.show();
        });
    });

    // Activar la primera pestaña si no hay ninguna activa
    if (!document.querySelector('#ventajasTab .active')) {
        const firstTab = document.querySelector('#ventajasTab button:first-child');
        if (firstTab) {
            const tab = new bootstrap.Tab(firstTab);
            tab.show();
        }
    }
}