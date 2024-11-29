const apiUrl =
  "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_WrGJoeEQT6Pse2u4eNbjYOMx3K23igTxxgnLbfBTbEcY4bq9U8vbYKpZKDv0ixL5";

const catContainer = document.getElementById("cat-container");

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fulfill your request");
    }
    return response.json();
  })
  .then((data) => {
    const catImg = document.getElementById("cat-image");
    // // catContainer.innerHTML = data[0].url;

    // catImg.src = data[0].url;
    // // catImg.style.width = "400px";
    // catContainer.appendChild(catImg);

    // console.log(data);
    // Iterera genom data och skapa img-element för varje bild
    data.forEach((cat) => {
      const img = document.createElement("img");
      img.src = cat.url; // Lägg till bildens URL
      img.alt = "A cute cat"; // Alt-text
      img.style.width = "400px"; // Styla bilderna

      catContainer.appendChild(img); // Lägg till bilden i containern
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
