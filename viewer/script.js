import data from './data.js';

const cardsPerPage = 9;
let currentPage = 1;

function generateCards(startIndex, endIndex) {
  const container = $("#bannerContainer");
  container.empty();

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
      <img src="${banner.imageUrl}" class="card-img-top" alt="${banner.altText}">
      <div class="card-body">
        <h4 class="card-title">${banner.title}</h4>
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

  // Adiciona botão "Primeira Página"
  const firstButton = $("<button>").addClass("btn btn-primary mx-1 fw-3").text("⇤");
  firstButton.prop("disabled", currentPage === 1);
  firstButton.click(function () {
    if (currentPage > 1) {
      currentPage = 1;
      updatePage();
      scrollToTop();
    }
  });
  paginationContainer.append(firstButton);

  // Adiciona botões numéricos
  for (let i = startButton; i <= endButton; i++) {
    const pageButton = $("<button>").addClass("btn btn-primary mx-1 fw-3").text(i);
    pageButton.prop("disabled", i === currentPage);
    pageButton.click(function () {
      currentPage = i;
      updatePage();
      scrollToTop();
    });
    paginationContainer.append(pageButton);
  }

  // Adiciona botão "Última Página"
  const lastButton = $("<button>").addClass("btn btn-primary mx-1 fw-3").text("⇥");
  lastButton.prop("disabled", currentPage === totalPages);
  lastButton.click(function () {
    if (currentPage < totalPages) {
      currentPage = totalPages;
      updatePage();
      scrollToTop();
    }
  });
  paginationContainer.append(lastButton);
}


function scrollToTop() {
  const bannersSectionTop = $("#banners").offset().top;
  $(window).scrollTop(bannersSectionTop);
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
      const imageUrl = `./viewer/source/images/${imageFileName}`;

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
