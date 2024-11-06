document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const galleryImages = document.querySelectorAll(".gallery img");
  let currentIndex;

  // Öppna modal och visa bild som klickas på
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      modalImage.src = img.src;
      modal.style.display = "block";
    });
  });

  // Stäng modal
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Bläddra till föregående bild
  document.getElementById("prevImage").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
  });

  // Bläddra till nästa bild
  document.getElementById("nextImage").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
  });

  // Stäng ner modal när man klickar utanför bilden
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Bläddra med piltangenterna
  document.addEventListener("keydown", (event) => {
    if (modal.style.display === "block") {
      if (event.key === "ArrowLeft") {
        // Föregående bild
        currentIndex =
          (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        if (currentIndex < 0) {
          currentIntex = galleryImages.length - 1;
        }
        modalImage.src = galleryImages[currentIndex].src;
      } else if (event.key === "ArrowRight") {
        // Nästa bild
        currentIndex = (currentIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentIndex].src;
      } else if (event.key === "Escape") {
        // Stäng ned modalen med Escape
        modal.style.display = "none";
      }
    }
  });
});
