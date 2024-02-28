$(document).ready(function () {
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
        //objetos para cada banner
      ];

    const cardsPerPage = 9;
    let currentPage = 1;

    function generateCards(startIndex, endIndex) {
        const container = $("#bannerContainer");
        container.empty(); // Limpa o conteúdo atual

        for (let i = startIndex; i < endIndex; i++) {
            const banner = data[i];
            if (banner) {
                const card = createCard(banner);
                container.append(card);
            }
        }
    }

    function createCard(banner) {
        const card = $("<div>").addClass("col-md-4 mb-4 banner-card");
        card.html(`
            <div class="card" data-tags="${banner.tags}">
                <img src="${banner.imageUrl}" class="card-img-top" alt="${banner.altText}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${banner.title}</h5>
                    <p class="card-text">${banner.description}</p>
                    <button class="btn download-btn" data-image="${banner.imageFileName}">Download</button>
                </div>
            </div>
        `);
        return card;
    }

    function updatePagination() {
        const totalPages = Math.ceil(data.length / cardsPerPage);
        const paginationContainer = $("#paginationContainer");
        paginationContainer.empty();

        const maxButtonsToShow = 3;
        const startButton = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        const endButton = Math.min(totalPages, startButton + maxButtonsToShow - 1);

        for (let i = startButton; i <= endButton; i++) {
            const pageButton = $("<button>").addClass("btn btn-secondary mx-1").text(i);
            pageButton.click(function () {
                currentPage = i;
                updatePage();
            });

            paginationContainer.append(pageButton);
        }
    }

    function updatePage() {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        generateCards(startIndex, endIndex);
        updatePagination();

        assignDownloadButtonEvents();
    }

    function assignDownloadButtonEvents() {
        const downloadButtons = $(".download-btn");

        downloadButtons.each(function () {
            $(this).click(function () {
                const imageNumber = $(this).data("image");
                const imageFileName = `${imageNumber}`;
                const imageUrl = `./source/images/${imageFileName}`;

                downloadImage(imageUrl, imageFileName);
                showSuccessModal(imageFileName);
            });
        });
    }

    function downloadImage(imageUrl, imageFileName) {
        const link = $("<a>").attr({ href: imageUrl, download: imageFileName });
        link[0].click();
    }

    function showSuccessModal(cardTitle) {
        const successModal = new bootstrap.Modal($("#successModal"));

        const modalContent = $("#successModalContent");
        modalContent.text(`Download concluído`);

        successModal.show();
    }

    // Inicialização
    updatePage();
});