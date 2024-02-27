document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
          imageUrl: "./source/images/1.png",
          altText: "Imagem 1",
          title: "Card 1",
          description: "Descrição do Card 1.",
          imageFileName: "1.png",
          tags: "design natureza",
        },
        {
          imageUrl: "./source/images/2.png",
          altText: "Imagem 2",
          title: "Card 2",
          description: "Descrição do Card 2.",
          imageFileName: "2.png",
          tags: "design",
        },
        // Adicione mais objetos conforme necessário
        {
          imageUrl: "./source/images/16.png",
          altText: "Imagem 3",
          title: "Card 3",
          description: "Descrição do Card 3.",
          imageFileName: "16.png",
          tags: "design",
        },
        {
            imageUrl: "./source/images/4.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "4.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/5.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "5.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/6.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "6.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/7.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "7.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/8.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "8.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/9.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "9.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/10.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "10.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/11.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "11.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/12.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "12.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/13.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "13.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/14.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "14.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/15.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "15.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/3.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "3.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/17.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "17.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/18.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "18.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/19.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "19.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/20.png",
            altText: "Imagem 3",
            title: "Card 3",
            description: "Descrição do Card 3.",
            imageFileName: "20.png",
            tags: "design",
          }
        // Continue adicionando objetos para cada banner
      ];
  
      const cardsPerPage = 9;
      let currentPage = 1;
  
      function generateCards(startIndex, endIndex) {
          const container = document.getElementById("bannerContainer");
          container.innerHTML = ""; // Limpa o conteúdo atual
  
          for (let i = startIndex; i < endIndex; i++) {
              const banner = data[i];
              if (banner) {
                  const card = createCard(banner);
                  container.appendChild(card);
              }
          }
      }
  
      function createCard(banner) {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4", "banner-card");
          card.innerHTML = `
            <div class="card" data-tags="${banner.tags}">
              <img src="${banner.imageUrl}" class="card-img-top" alt="${banner.altText}" loading="lazy">
              <div class="card-body">
                <h5 class="card-title">${banner.title}</h5>
                <p class="card-text">${banner.description}</p>
                <button class="btn btn-primary download-btn" data-image="${banner.imageFileName}">Download</button>
              </div>
            </div>
          `;
          return card;
      }
  
      function updatePagination() {
          const totalPages = Math.ceil(data.length / cardsPerPage);
          const paginationContainer = document.getElementById("paginationContainer");
          paginationContainer.innerHTML = "";
  
          const maxButtonsToShow = 3;
          const startButton = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
          const endButton = Math.min(totalPages, startButton + maxButtonsToShow - 1);
  
          for (let i = startButton; i <= endButton; i++) {
              const pageButton = document.createElement("button");
              pageButton.textContent = i;
              pageButton.classList.add("btn", "btn-secondary", "mx-1");
              pageButton.addEventListener("click", function () {
                  currentPage = i;
                  updatePage();
                  
              });
  
              paginationContainer.appendChild(pageButton);
          }
      }
  
      function updatePage() {
          const startIndex = (currentPage - 1) * cardsPerPage;
          const endIndex = startIndex + cardsPerPage;
          generateCards(startIndex, endIndex);
          updatePagination();
  
          // Reatribui os eventos de clique nos botões de download
          assignDownloadButtonEvents();
      }
  
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

    // Inicialização
    updatePage();
});