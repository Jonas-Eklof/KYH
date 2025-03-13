const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware för att hantera JSON-data

// Funktion för att läsa data från db.json
const readData = () => {
  const data = fs.readFileSync("db.json"); // Läser in filen synkront
  return JSON.parse(data); // Konverterar JSON-strängen till JavaScript-objekt
};

// Funktion för att skriva data till db.json
const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2)); // Sparar data i JSON-format med indentering
};

app.listen(PORT, () => {
  console.log(`Server active on http://localhost:${PORT}`);
});

app.get("/users", (req, res) => {
  const data = readData(); // Hämtar alla användare från JSON-filen
  res.json(data.users); // Skickar användarlistan som JSON
});

app.get("/users/:id", (req, res) => {
  const data = readData();
  const user = users.find((u) => u.id === parseInt(req.params.id)); // Leta upp användaren med det angivna ID:t
  if (!user) return res.status(404).send("Användaren hittades inte."); // Om ingen användare hittas, returnera 404
  res.json(user);
});

app.post("/users", (req, res) => {
  const data = readData();
  const newUser = {
    id: data.users.length + 1, // Ge den nya användaren ett unikt ID baserat på listans längd
    name: req.body.name, // Hämtar namnet från request-bodyn
  };
  data.users.push(newUser); // Lägger till den nya användaren i listan
  writeData(data); // Sparar ändringen i filen
  res.status(201).json(newUser); // Returnera den nya användaren med statuskod 201 (created)
});

app.put("/users/:id", (req, res) => {
  const data = readData();
  const user = data.users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("Användaren hittades inte.");
  user.name = req.body.name; // Uppdatera användarens namn
  writeData(data); // Sparar ändringen i filen
  res.json(user); // Skickar tillbaka den uppdaterade användaren
});

app.delete("/users/:id", (req, res) => {
  let data = readData();
  const userExists = data.users.some((u) => u.id === parseInt(req.params.id));
  if (!userExists) return res.status(404).send("Användaren hittades inte.");
  data.users = data.users.filter((u) => u.id !== parseInt(req.params.id));
  writeData(data);
  res.send("Användaren har tagits bort");
});
