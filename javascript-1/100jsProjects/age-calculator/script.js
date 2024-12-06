// Hämtar referenser till HTML-elementen med id:n "btn", "birthday" och "result"
// och sparar dem i variablerna btnEl, birthdayEl och resultEl
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// Definierar funktionen calculateAge, som kommer att köras när användaren trycker på knappen
function calculateAge() {
  // Hämtar användarens inmatade födelsedatum från birthdayEl (ett <input> element)
  const birthdayValue = birthdayEl.value;

  // Om inget födelsedatum har fyllts i, visas en varning
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    // Om ett födelsedatum har fyllts i, anropar den getAge-funktionen
    // med birthdayValue som argument och beräknar åldern
    const age = getAge(birthdayValue);
    // Sätter resultatet som text i resultEl, med enhet "year" eller "years"
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Definierar getAge-funktionen som beräknar ålder baserat på birthdayValue
function getAge(birthdayValue) {
  // Skapar ett nytt Date-objekt för dagens datum och födelsedatumet
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  // Beräknar åldern genom att ta skillnaden mellan årtalen
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  // Beräknar skillnaden i månader mellan dagens datum och födelsedatumet
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  // Om månaden är tidigare på året, eller om samma månad men en tidigare dag,
  // reduceras åldern med 1 eftersom personen ännu inte fyllt år
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  // Returnerar den beräknade åldern
  return age;
}

// Lägger till en event listener på btnEl som anropar calculateAge-funktionen
// när knappen klickas på
btnEl.addEventListener("click", calculateAge);
