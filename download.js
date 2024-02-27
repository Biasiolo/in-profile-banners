document.addEventListener("DOMContentLoaded", function () {


    assignDownloadButtonEvents();

    function assignDownloadButtonEvents() {
        const downloadButtons = document.querySelectorAll(".download-btn");

        downloadButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const imageNumber = button.dataset.image;
                const imageFileName = `${imageNumber}`;
                const imageUrl = `./source/images/${imageFileName}`;
    
                // Realiza o download da imagem
                downloadImage(imageUrl, imageFileName);
    
                // Exibe o modal de sucesso
                showSuccessModal(imageFileName);
            });
        });
    }





    
    function downloadImage(imageUrl, imageFileName) {
        // Lógica para realizar o download da imagem
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = imageFileName;
        link.click();
    }

    function showSuccessModal(cardTitle) {
        // Obtém a referência ao modal
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));

        // Atualiza o conteúdo do modal com a mensagem
        const modalContent = document.getElementById('successModalContent');
        modalContent.textContent = `Download concluído`;

        // Exibe o modal
        successModal.show();
    }
});
