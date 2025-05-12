const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const close = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  updateModalImage();
}

function updateModalImage() {
  const img = galleryImages[currentIndex];
  modalImg.src = img.src;
  caption.textContent = img.alt;
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

close.onclick = function () {
  modal.style.display = "none";
};

nextBtn.onclick = function () {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateModalImage();
};

prevBtn.onclick = function () {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateModalImage();
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
