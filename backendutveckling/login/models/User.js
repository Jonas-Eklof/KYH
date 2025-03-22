const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Importera Sequelize-instans
const bcrypt = require("bcryptjs"); // För att hasha lösenord

// Definiera användarmodellen
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Automatiskt öka ID för varje ny användare
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Användarnamnet är obligatoriskt
      unique: true, // Användarnamnet måste vara unikt
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Lösenord är obligatoriskt,
    },
  },
  {
    tableName: "users", // Ange tabellnamnet explicit (valfritt)
  }
);

// Hasha lösenordet innan användaren sparas i databasen
User.beforeCreate(async (user) => {
  if (user.password) {
    // Kontrollera att lösenordet finns
    user.password = await bcrypt.hash(user.password, 10); // Hasha med 10 salt-rundor
  }
});

module.exports = User;
