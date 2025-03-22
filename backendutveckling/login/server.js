const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const User = require("./models/User");

// Ladda miljövariabler från .env-filen
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware för att hantera JSON-data i förfrågningar
app.use(express.json());

// Importera och använd routes
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
app.use("/api", authRoutes); // Alla auth-relaterade routes börjar med /api
app.use("/api", profileRoutes); // Alla profil-relaterade routes börjar med /api

// Synka modellen med databasen (skapa tabellen om den inte finns)
sequelize
  .sync()
  .then(() => {
    console.log("Tabeller synkade");
  })
  .catch((error) => {
    console.error("Kunde inte synka tabeller:", error);
  });

app.listen(PORT, () =>
  console.log(`Servern är aktiv på http://localhost:${PORT}`)
);
