$(document).ready(function () {
    const data = [
        {
          imageUrl: "./source/images/1.png",
          altText: "Imagem 1",
          title: "Here Comes the Night",
          description: "Biasiolo",
          imageFileName: "1.png",
          tags: "design",
        },
        {
          imageUrl: "./source/images/16.png",
          altText: "Imagem 3",
          title: "Back-End Matrix",
          description: "Biasiolo",
          imageFileName: "16.png",
          tags: "design",
        },
        {
          imageUrl: "./source/images/24.png",
          altText: "Imagem 3",
          title: "Wave",
          description: "Biasiolo",
          imageFileName: "24.png",
          tags: "design",
        },
        {
            imageUrl: "./source/images/4.png",
            altText: "Imagem 3",
            title: "Javascript",
            description: "Biasiolo",
            imageFileName: "4.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/19.png",
            altText: "Imagem 3",
            title: "Bright Birds",
            description: "Biasiolo",
            imageFileName: "19.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/5.png",
            altText: "Imagem 3",
            title: "Red Code",
            description: "Pixellers Studio",
            imageFileName: "5.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/6.png",
            altText: "Imagem 3",
            title: "Techs",
            description: "Biasiolo",
            imageFileName: "6.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/7.png",
            altText: "Imagem 3",
            title: "Saturated Desktop",
            description: "Biasiolo",
            imageFileName: "7.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/8.png",
            altText: "Imagem 3",
            title: "Water Fly",
            description: "Pixellers Studio",
            imageFileName: "8.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/9.png",
            altText: "Imagem 3",
            title: "Summer in the City",
            description: "Loving Spoonfull",
            imageFileName: "9.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/10.png",
            altText: "Imagem 3",
            title: "The Black Hole",
            description: "Biasiolo",
            imageFileName: "10.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/2.png",
            altText: "Imagem 2",
            title: "Neural",
            description: "Pixellers Studio",
            imageFileName: "2.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/11.png",
            altText: "Imagem 3",
            title: "Maggie May",
            description: "R. Stewart",
            imageFileName: "11.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/12.png",
            altText: "Imagem 3",
            title: "Yellow Brick",
            description: "Elton",
            imageFileName: "12.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/13.png",
            altText: "Imagem 3",
            title: "Flash",
            description: "Biasiolo",
            imageFileName: "13.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/14.png",
            altText: "Imagem 3",
            title: "Upstairs",
            description: "Pixellers Studio",
            imageFileName: "14.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/15.png",
            altText: "Imagem 3",
            title: "Green Storm",
            description: "Pixellers Studio",
            imageFileName: "15.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/3.png",
            altText: "Imagem 3",
            title: "Sunday Morning",
            description: "L. Reed",
            imageFileName: "3.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/17.png",
            altText: "Imagem 3",
            title: "Cantarola",
            description: "Pixellers Studio",
            imageFileName: "17.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/18.png",
            altText: "Imagem 3",
            title: "Centurion",
            description: "Biasiolo",
            imageFileName: "18.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/20.png",
            altText: "Imagem 3",
            title: "Transform",
            description: "Biasiolo",
            imageFileName: "20.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/21.png",
            altText: "Imagem 3",
            title: "World",
            description: "Pixellers Studio",
            imageFileName: "21.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/22.png",
            altText: "Imagem 3",
            title: "A Cidade",
            description: "Biasiolo",
            imageFileName: "22.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/23.png",
            altText: "Imagem 3",
            title: "Life is Good",
            description: "Pixellers Studio",
            imageFileName: "23.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/25.png",
            altText: "Imagem 3",
            title: "Optical",
            description: "Biasiolo",
            imageFileName: "25.png",
            tags: "design",
          },
          {
            imageUrl: "./source/images/26.png",
            altText: "Imagem 3",
            title: "Hieróglifo",
            description: "Pixellers Studio",
            imageFileName: "26.png",
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
            <div class="card card22" data-tags="${banner.tags}">
                <img src="${banner.imageUrl}" class="card-img-top" alt="${banner.altText}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${banner.title}</h5>
                    <p class="card-text"><i class="bi bi-person-fill-up"></i> ${banner.description}</p>
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
            const pageButton = $("<button>").addClass("btn btn-primary mx-1 fw-3").text(i);
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