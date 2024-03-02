// analytics.js
(function () {
    document.addEventListener('click', function (event) {
        const target = event.target;

        // Verifica se o elemento clicado é um botão de download
        if (target.classList.contains('download-btn')) {
            const imageFileName = target.getAttribute('data-image');

            // Rastreia o evento de clique no botão de download
            gtag('event', 'download', {
                event_category: 'imagem',
                event_label: imageFileName,
            });
        }
    });
})();