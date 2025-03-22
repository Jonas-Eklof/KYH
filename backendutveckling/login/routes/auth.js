const express = require("express");
const User = require("../models/User"); // Importera användarmodellen
const jwt = require("jsonwebtoken"); // För att skapa JWT-tokens
const bcrypt = require("bcryptjs"); // För att jämföra hashade lösenord
const router = express.Router();

// Route för att registrera en ny användare
router.post("/register", async (req, res) => {
  const { username, password } = req.body; // Hämta användarnamnet och lösenordet från bodyn på förfrågan (request)

  if (!username || !password) {
    return res.status(400).json({ error: "Användarnamn och lösenord krävs" });
  }

  try {
    // Skapa en ny användare i databasen
    const user = await User.create({ username, password });
    res.status(201).json({ message: "Användare registrerad", user });
  } catch (error) {
    // Hantera fel (t.ex. om användarnamnet redan finns)
    console.error("Registration error:", error); // Logga felet för felsökning
    res.status(400).json({ error: error.message });
  }
});

// Route för att logga in
router.post("/login", async (req, res) => {
  const { username, password } = req.body; // Hitta användarnamn och lösenord i bodyn på förfrågan (request)

  try {
    // Hitta användaren i databasen
    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error("Användaren finns inte");

    // Jämför det angivna lösenordet med det hashade lösenordet i databasen
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Ogiltigt lösenord");

    // Skapa en JWT-token som innehåller användarens ID
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token }); // Skicka tillbaka token till klienten
  } catch (error) {
    console.error("Login error:", error); // Logga felet för felsökning
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
