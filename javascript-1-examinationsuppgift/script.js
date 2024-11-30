document.addEventListener("DOMContentLoaded", () => {
  const planetId = document.querySelector(".planet-heading");
  const description = document.querySelector(".description");
  const circumference = document.querySelector(".circumference");
  const distance = document.querySelector(".distance");

  async function getApiKey() {
    try {
      let response = await fetch(
        "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
        { method: "POST" }
      );
      if (!response.ok) throw new Error("Failed to fetch API key");
      let data = await response.json();
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
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching planets:", error);
      planetId.innerText = "Unable to load planet data.";
    }
  }

  function updatePlanetInfo(planet) {
    if (!planetId || !description || !circumference || !distance) {
      console.error("One or more UI elements are missing.");
      return;
    }

    if (!planetId || !description || !circumference || !distance) {
      console.error("One or more UI elements are missing.");
      return;
    }
    if (!planet) {
      planetId.innerText = "Planet not found.";
      description.innerText = "We could not find information for this planet.";
      return;
    }
    planetId.innerText = planet.name || "Okänd planet";
    description.innerText = planet.desc || "Ingen beskrivning tillgänglig.";
    circumference.innerText = `Omkrets: ${planet.circumference || "okänd"} km`;
    distance.innerText = `Avstånd från solen: ${planet.distance || "okänd"} km`;
  }

  async function loadSolarSystemData() {
    const apiKey = await getApiKey();
    if (!apiKey) return;

    const planets = await fetchPlanets(apiKey);
    // console.log(planets.bodies[0].name);
    if (!planets || !planets.bodies) return;

    const pathname = window.location.pathname;
    const planetName = pathname.split("/").pop().replace(".html", "");

    // Kontrollera vilka planeter som finns

    const planet = planets.bodies.find(
      (p) => p.name.toLowerCase().trim() === planetName.toLowerCase().trim()
    );
    updatePlanetInfo(planet);
    // console.log(planets.bodies.map((p) => p.name));
  }

  loadSolarSystemData();

  document.querySelectorAll(".planet").forEach((planet) => {
    planet.addEventListener("click", () => {
      const planetName = planet.dataset.planet;
      if (!planetName) {
        console.error("Planet data attribute is missing.");
        console.log(planet);
        return;
      }
      window.location.href = `${planetName.toLowerCase()}.html`;
    });
  });
});

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
