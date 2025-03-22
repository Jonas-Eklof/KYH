const jwt = require("jsonwebtoken"); // För att verifiera JWT-tokens

// Middleware för att skydda routes
module.exports = (req, res, next) => {
  // Hämta token från Authorization-headern
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Åtkomst nekad" }); // Om token saknas

  try {
    // Verifiera token och hämta användarens ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Lägg till användar-ID i förfrågan
    next(); // Fortsätt till nästa middleware eller route
  } catch (error) {
    // Hantera ogiltiga token
    res.status(400).json({ error: "Ogiltig token" });
  }
};
