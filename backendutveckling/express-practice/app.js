const express = require("express");
const fs = require("fs");
const path = require("path"); // importerar path-modulen för att hantera filvägar

const app = express(); // skapar en instans av en express-server

const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware för att hantera inkommande json-data
app.use(express.static("public")); // server statiska filer från "public"-mappen (t.ex. css, bilder osv)

//GET-endpoint för att läsa data från db.json
app.get("/colors", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    // felhantering om filen inte kan läsas
    if (err) return res.status(500).json({ message: "Error reading database" });
    //konverterar JSON till JS-object
    res.json(JSON.parse(data).colors);
  });
});

// PUT-endpoint
app.put("/colors/:id", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    // felhantering om filen inte kan läsas
    if (err) return res.status(500).json({ message: "Error reading database" });

    const db = JSON.parse(data);

    const color = db.colors.find((c) => c.id == req.params.id); // hittar färg baserat på id
    if (!color) return res.status(404).json({ message: "Color not found." });
    color.name = req.body.color; // uppdaterar färgen

    fs.writeFile("db.json", JSON.stringify(db, null, 2), () => res.json(color));
  });
});

// GET-endpoint för att serva index.html vid rot-endpoint "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// DELETE-endpoint för att ta bort en färg från db.json baserat på id

app.delete("/colors/:id", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    // Läser innehållet i db.json
    if (err) return res.status(500).json({ message: "Error reading database" });
    const db = JSON.parse(data); // Omvandlar JSON-strängen till ett JavaScript-objekt
    const index = db.colors.findIndex((c) => c.id == req.params.id); // Hittar index för färgen baserat på id. req.params.id är ett sätt att hämta parametrar från URL:en i en Express-applikation.
    if (index === -1)
      return res.status(404).json({ message: "Color not found" }); // Om färgen inte finns, returnera 404
    db.colors.splice(index, 1); // Tar bort färgen från listan

    fs.writeFile("db.json", JSON.stringify(db, null, 2), () =>
      res.json({ message: "Deleted" })
    ); // Skriver tillbaka den uppdaterade listan till filen
  });
});

//startar servern och lyssnar på angiven port
app.listen(PORT, () => {
  console.log(
    `My first express app - listening on port ${PORT}! http://localhost:3000`
  );
});
