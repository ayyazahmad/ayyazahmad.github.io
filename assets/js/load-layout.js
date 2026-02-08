(function () {
    // Function to load scripts sequentially
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Load Header and Footer
    Promise.all([
        fetch('components/header.html').then(response => response.text()),
        fetch('components/footer.html').then(response => response.text())
    ]).then(([headerHtml, footerHtml]) => {
        // Inject Header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHtml;
        }

        // Inject Footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHtml;
        }

        // Highlight Active Menu Item
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar-nav li a');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
                link.classList.add('active'); // Add active class to <a>
                link.closest('li').classList.add('active'); // Add active class to <li>
            }
        });

        // Load Template Scripts in Order
        // validnavs.js must run before main.js usually, or main.js might rely on it
        loadScript('assets/js/validnavs.js')
            .then(() => loadScript('assets/js/main.js'))
            .then(() => {
                // Re-init specific plugins if needed (usually main.js handles it on load)
                console.log('Layout loaded and scripts initialized');
            })
            .catch(err => console.error('Error loading scripts:', err));

    }).catch(err => console.error('Failed to load layout components:', err));
})();
