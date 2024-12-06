// En array med testimonial-objekt som innehåller namn, bild-URL och text.
const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

// Hämtar bild-, text- och användarnamnselement från DOM:en.
const imgEl = document.querySelector("img"); // Bilden där användarens foto ska visas
const textEl = document.querySelector(".text"); // Textområdet där testimonial-texten visas
const usernameEl = document.querySelector(".username"); // Namn som visar vem som lämnat testimonial

// Initierar en variabel för att hålla reda på aktuell testimonial.
let idx = 0;

// Funktion som uppdaterar testimonial-innehållet på sidan.
updateTestimonial();

function updateTestimonial() {
  // Destrukturerar aktuella värden (namn, bild-URL och text) från testimonial-objektet.
  const { name, photoUrl, text } = testimonials[idx];

  // Uppdaterar innehållet i DOM-elementen med data från testimonials.
  imgEl.src = photoUrl; // Sätter bildens källa till den aktuella bildens URL.
  textEl.innerText = text; // Sätter texten till testimonial-texten.
  usernameEl.innerText = name; // Sätter användarnamnet till den aktuella användarens namn.

  // Ökar indexet för att gå vidare till nästa testimonial.
  idx++;

  // Om indexet är lika med längden av arrayen, sätts det tillbaka till 0 (startar om från början).
  if (idx === testimonials.length) {
    idx = 0;
  }

  // Sätter en timer på 10 sekunder innan nästa testimonial visas.
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
