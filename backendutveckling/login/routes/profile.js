const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Importera middleware för JWT-verifiering
const User = require("../models/User"); // Importera användarmodellen
const router = express.Router();

// Skyddad route för att hämta användarprofilen
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // Hitta användaren i databasen (exkluderar lösenordet från svaret)
    const user = await User.findByPk(req.userId, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ error: "Användaren hittades inte" });
    }
    res.json(user); // Skicka tillbaka användarinformation
  } catch (error) {
    // Hantera fel (t.ex. om användaren inte finns)
    console.error("Profile error:", error); // Logga felet för felsökning
    req.status(400).json({ error: error.message });
  }
});

module.exports = router;
