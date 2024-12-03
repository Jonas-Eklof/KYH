document.addEventListener("DOMContentLoaded", () => {
  // Gör att javascript-koden laddas efter att html-dokumentet har laddats och parsats helt

  // Variabler ---------------------------------------------

  const planetId = document.querySelector(".planet-heading");
  const latinName = document.querySelector(".latin-name");
  const description = document.querySelector(".description");
  const circumference = document.querySelector(".circumference");
  const distance = document.querySelector(".distance");
  const nightTemp = document.querySelector(".night-temp");
  const dayTemp = document.querySelector(".day-temp");

  // Funktion för att hämta API-nyckel ----------------------
  async function getApiKey() {
    try {
      let response = await fetch(
        "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", // Hämtar api-nyckel via POST-metoden
        { method: "POST" } // POST används för att skicka/begära data/resurs som kräver autentisering
      );
      if (!response.ok) throw new Error("Failed to fetch API key"); // Om responsen inte är .ok så slängs ett error
      let data = await response.json(); // Konverterar den mottagna datan till json-format

      return data.key; // API nyckel
    } catch (error) {
      console.error("Error fetching API key:", error);
    }
  }

  async function fetchPlanets(apiKey) {
    // API-nyckeln ges som parameter i denna funktion för att kunna användas som variabel för API-nyckeln i funktionen
    try {
      let response = await fetch(
        "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
        {
          method: "GET", // GET används för att begära/hämta data.
          headers: { "x-zocom": apiKey }, // Använder API-nyckeln för att autentisera och tillåta begäran om data om planeterna.
        }
      );
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json(); // Konverterar den mottagna datan till json-format
      //   console.log(data);
      return data; // Returnerar datan när funktionen kallas
    } catch (error) {
      console.error("Error fetching planets:", error);
      planetId.innerText = "Unable to load planet data.";
    }
  }

  // Funktion för att fylla html-sidorna för planeterna med info från APIn.
  function updatePlanetInfo(planet) {
    if (
      !planetId ||
      !description ||
      !circumference ||
      !distance ||
      !latinName
    ) {
      return; // Avsluta funktionen om elementen saknas // Detta gäller enbart på index.html så resterande kod i funktionen inte körs i onödan.
    }
    if (!planet) {
      planetId.innerText = "Planet not found."; // Meddelar användaren på sidan om planeten/informationen inte kunde hittas.
      description.innerText = "We could not find information for this planet.";
      return;
    }

    // Uppdaterar textinnehållet på html-sidorna.
    planetId.innerText = planet.name || "Okänd planet";
    description.innerText = planet.desc || "Ingen beskrivning tillgänglig.";
    circumference.innerText = `Omkrets: ${planet.circumference || "okänd"} km`;
    distance.innerText = `Avstånd från solen: ${planet.distance || "okänd"} km`;
    latinName.innerText = `${planet.latinName}`;
    nightTemp.innerText = `Temperaturen under natten är: ${planet.temp.night}°C`;
    dayTemp.innerText = `Temperaturen under dagen är: ${planet.temp.day}°C`;
  }

  async function loadSolarSystemData() {
    // Denna funktion hämtar data om solsystemets planeter
    const apiKey = await getApiKey(); // Hämtar API-nyckeln och sparar den till en variabel
    if (!apiKey) return; // Avslutar funktionen om API-nyckeln inte hämtas korrekt.

    const planets = await fetchPlanets(apiKey); // Använder API-nyckeln som argument när funktionen "fetchPlanets" kallas för att hämta info om solsystemets planeter
    // console.log(planets.bodies[0].name);  // En console.log() som användes för debugging av koden
    if (!planets || !planets.bodies) return;

    // Tar ut namnet från URL, utan '.html' för att veta vilken planets info som ska visas.
    const pathname = window.location.pathname;
    const planetName = pathname.split("/").pop().replace(".html", ""); // Delar upp URLen med .split() och hämtar det sista elementet med .pop(), tar bort filändelsen ".html" och byter ut det mot "" vilket är en tom sträng

    // Hittar planet baserat på namnet, om namnet matchar namnet i URLen så visas informationen om planeten
    const planet = planets.bodies.find(
      (p) => p.name.toLowerCase().trim() === planetName.toLowerCase().trim()
    );
    updatePlanetInfo(planet); // Uppdaterar html-sidan med info om planeten
    // console.log(planets.bodies.map((p) => p.name)); // console.log() som användes för debugging
  }

  loadSolarSystemData(); // Kallar på funktionen som laddar in relevant data till sidan beroende på vilken planetsida som visas

  document.querySelectorAll(".planet").forEach((planet) => {
    // Hämtar alla element med en .planet-class och lägger till en klick-händelse på dem
    planet.addEventListener("click", () => {
      const planetName = planet.dataset.planet; // Varje planet har ett data-attribut i index.html, dataset.planet hämtar det värdet för planeten som man klickar på
      if (!planetName) {
        //  Kollar om planetens namn finns, om den inte finns så loggas det ut till console och funktionen avslutas med "return;"
        console.error("Planet data attribute is missing.");
        console.log(planet);
        return;
      }
      window.location.href = `${planetName.toLowerCase()}.html`; // Navigerar till planetens sida. om till exempel planetName-värder är venus så blir användaren skickad till venus.html
    });
  });

  // Sökfunktion ----------------------------------

  const searchInput = document.querySelector("#search-input");
  const noResultsMessage = document.createElement("h2"); // Skapar ett nytt h2-element
  noResultsMessage.innerText =
    "Det finns ingen planet som matchar din sökning."; // Meddelandetext
  noResultsMessage.style.display = "none"; // Dölj meddelandet som standard
  noResultsMessage.style.textAlign = "center"; // Förbättrar visningen
  noResultsMessage.style.color = "red"; // Gör texten mer framträdande

  const container = document.querySelector(".solar-system");
  if (container) {
    container.appendChild(noResultsMessage); // Lägg till meddelandet i container-elementet för planeterna
  }

  if (searchInput) {
    // Om sökfäljtet finns tillgänglig på sidan, utför följande kod - annars avslutas funktionen med "return;"
    searchInput.addEventListener("keyup", (event) => {
      // Hämtar ut ett HTML-element med ID search-input och lyssnar efter eventet "keyup"
      const searchTerm = event.target.value.toLowerCase(); // Tar värdet från input-fältet som användaren skriver i, konverterar texten till små bokstäver för att göra sökningen case-insensitive
      const planets = document.querySelectorAll(".planet"); // Hämtar alla element med .planet-class, querySelectorAll gör det till en NodeList som kan loopas igenom

      let hasVisiblePlanets = false; // Håll koll på om någon planet visas

      planets.forEach((planet) => {
        // Itererar genom alla element i NodeList som skapades innan
        const planetName = planet.querySelector("h2").innerText.toLowerCase(); // Hämtar varje planets h2-text, vilket är deras namn och gör texten till lowercase
        if (planetName.includes(searchTerm)) {
          // Kollar om någon planets namn innehåller texten från sökfältet
          planet.style.display = "block"; // Planeten visas om texten i sökfältet matchar planetens namn
          hasVisiblePlanets = true; // Minst en planet visas
        } else {
          planet.style.display = "none"; // Om namnet inte matchar något av texten i sökfältet så döljs planeten
        }
      });

      if (hasVisiblePlanets) {
        noResultsMessage.style.display = "none"; // Dölj meddelandet om det finns synliga planeter
      } else {
        noResultsMessage.style.display = "block"; // Visa meddelandet om inga planeter matchar
      }
    });
  }
});
