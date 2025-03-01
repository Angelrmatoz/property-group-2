function getCurrentPage() {
    document.addEventListener('DOMContentLoaded', () => {
        let currentPage = window.location.pathname.split('/').pop();
        if (currentPage === "") { currentPage = "index.html"; }
        const menuLinks = document.querySelectorAll('.navegacion a');
        menuLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    });
}

