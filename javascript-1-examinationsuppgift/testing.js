let planetId = document.querySelector(".planet-heading");
let description = document.querySelector(".description");
let circumference = document.querySelector(".circumference");
let distance = document.querySelector(".distance");

// API-inställningar -------------------------------------

async function getApiKey() {
  try {
    let response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch API key");
    }
    let data = await response.json();
    // console.log("Response from /keys:", data.key);
    return data.key;
  } catch (error) {
    console.error("Error fetching API key:", error);
  }
}

async function fetchPlanets(apiKey) {
  try {
    let response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom": apiKey },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    document.querySelector(".planet-id").innerText =
      "Unable to load planet data.";
  }
}

// Data för solsystemet

async function loadSolarSystemData() {
  const apiKey = await getApiKey();

  if (!apiKey) {
    console.error("Failed to retrieve API key. Cannot continue.");
    return;
  }

  const planets = await fetchPlanets(apiKey);
  if (!planets || !planets.bodies) {
    console.error("Planets data is missing or malformed.");
    return;
  }

  console.log("Planets data:", planets.bodies);

  const sun = planets.bodies[0];
  const mercury = planets.bodies[1];
  const venus = planets.bodies[2];
  const earth = planets.bodies[3];
  const mars = planets.bodies[4];
  const jupiter = planets.bodies[5];
  const saturn = planets.bodies[6];
  const uranus = planets.bodies[7];
  const neptune = planets.bodies[8];

  //   planetId.innerText = earth.name;

  //   console.log(earth.temp.night);

  //   planetId.innerText = `${earth.name}`;
  //   description.innerText = earth.desc;
  //   circumference.innerText = `Jordens omkretsen är: ${earth.circumference}km`;
  //   distance.innerText = `Jordens distans från solen är: ${earth.distance}km`;
}

// Funktion för att uppdatera UI baserat på planetens data
function updatePlanetInfo(planet) {
  if (!planet) {
    console.error("No planet data provided");
    return;
  }
  planetId.innerText = planet.name;
  description.innerText = planet.desc || "Ingen beskrivning tillgänglig.";
  circumference.innerText = `Omkrets: ${planet.circumference || "okänd"} km`;
  distance.innerText = `Avstånd från solen: ${planet.distance || "okänd"} km`;
}

// Huvudfunktion för att ladda och visa data
async function loadSolarSystemData() {
  const apiKey = await getApiKey();

  if (!apiKey) {
    console.error("Failed to retrieve API key. Cannot continue.");
    return;
  }

  const planets = await fetchPlanets(apiKey);
  if (!planets || !planets.bodies) {
    console.error("Planets data is missing or malformed.");
    return;
  }

  // Hämta planetens namn från URL
  const pathname = window.location.pathname; // Ex: "/earth.html"
  const planetName = pathname.split("/").pop().replace(".html", ""); // Ex: "earth"

  // Hitta planetens data
  const planet = planets.bodies.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );

  if (!planet) {
    console.error(`No data found for planet: ${planetName}`);
    return;
  }

  // Uppdatera UI med planetens data
  updatePlanetInfo(planet);
}

loadSolarSystemData();

// Sökfunktion ----------------------------------

document.querySelector("#search-input").addEventListener("keyup", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const planets = document.querySelectorAll(".planet");

  planets.forEach((planet) => {
    const planetName = planet.querySelector("h2").innerText.toLowerCase();
    if (planetName.includes(searchTerm)) {
      planet.style.display = "block";
    } else {
      planet.style.display = "none";
    }
  });
});

// Länkning till sidor ------------------------

document.querySelectorAll(".planet").forEach((planet) => {
  planet.addEventListener("click", () => {
    const planetName = planet.querySelector("h2").innerText.toLowerCase();
    window.location.href = `${planetName}.html`;
  });
});
