document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const galleryImages = document.querySelectorAll(".gallery img");
  let currentIndex;

  // Funktion för att öppna modalen
  function openModal(index) {
    currentIndex = index;
    modalImage.src = galleryImages[currentIndex].src;
    modal.classList.add("open");
    document.addEventListener("keydown", handleKeyDown); // Lägg till keydown-händelsen
  }

  // Funktion för att stänga modalen
  function closeModal() {
    modal.classList.remove("open");
    document.removeEventListener("keydown", handleKeyDown); // Ta bort keydown-händelsen
  }

  // Hantera tangenttryckningar
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowLeft") {
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Gör så att den undviker att hamna på ett negativt värde, och med modulo-operatorn (%) så gör det att modalen loopar och inte stoppar på sista bilden.
      modalImage.src = galleryImages[currentIndex].src;
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      modalImage.src = galleryImages[currentIndex].src;
    }
  }

  // Öppna modal och visa bild som klickas på
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  // Stäng modal när man klickar på stäng-knappen
  document.querySelector(".close").addEventListener("click", closeModal);

  // Stäng modal när man klickar utanför bilden
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
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
});

function filterGallery(category) {
  const images = document.querySelectorAll(".gallery img");

  // Sortering av bilderna i galleriet
  images.forEach((img) => {
    // Kollar om kategorin "Alla" är vald, kollar annars om bilden har en class som tillhör vald kategori
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });

  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach((button) => button.classList.remove("active")); // Tar bort "active"-klassen från alla knappar

  // Lägg till "active"-klassen på den knapp som klickas på
  const activeButton = document.querySelector(
    `button[onclick="filterGallery('${category}')"]`
  );
  activeButton.classList.add("active");
}
