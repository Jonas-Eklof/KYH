const { Sequelize } = require("sequelize");

// Skapa en ny Sequelize-instans för SQLite
const sequelize = new Sequelize({
  dialect: "sqlite", // Använd SQLite som databas
  storage: "./database.sqlite", // Sökväg till SQLite-databasfilen
});

// Testa anslutningen till databasen
sequelize
  .authenticate()
  .then(() => console.log("SQLite ansluten"))
  .catch((err) => console.log("Kunde inte ansluta till SQLite:", err));

module.exports = sequelize;
