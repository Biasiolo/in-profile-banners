document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".download-btn");
  
    downloadButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const imageNumber = button.dataset.image;
        const imageFileName = `${imageNumber}`;
        const imageUrl = `./source/images/${imageFileName}`;
  
        // Incrementa o contador de downloads (pode ser salvo no localStorage)
        incrementDownloadCount(imageFileName);
  
        // Realiza o download da imagem
        downloadImage(imageUrl, imageFileName);
  
        // Exibe a mensagem de sucesso em um modal (pode ser um modal Bootstrap)
        showSuccessModal();
      });
    });
  
    function incrementDownloadCount(imageFileName) {
      // Lógica para incrementar o contador de downloads (pode ser salvo no localStorage)
      let downloadCount = localStorage.getItem(imageFileName) || 0;
      downloadCount = parseInt(downloadCount) + 1;
      localStorage.setItem(imageFileName, downloadCount);
    }
  
    function downloadImage(imageUrl, imageFileName) {
      // Lógica para realizar o download da imagem
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = imageFileName;
      link.click();
    }
  
    function showSuccessModal() {
      // Lógica para exibir um modal de sucesso (pode ser um modal Bootstrap)
      // Certifique-se de adicionar a estrutura do modal ao seu HTML
      // Exemplo: $('#successModal').modal('show');
    }
  });
  