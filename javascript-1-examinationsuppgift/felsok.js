let planetId = document.querySelector(".planet-id");

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
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
}

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

  const planetList = document.getElementById("planet-list");

  planets.bodies.forEach((body) => {
    console.log(body.desc);
    const listItem = document.createElement("li");

    listItem.innerHTML = `
    <h2>${body.name}</h2>
    <p>Type: ${body.type}</p>
    <p>${body.desc}</p>
    `;

    planetList.appendChild(listItem);
  });
}

loadSolarSystemData();
