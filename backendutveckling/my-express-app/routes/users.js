const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  try {
    const users = db.prepare("SELECT * FROM users").all();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const user = db
      .prepare("SELECT * FROM users WHERE id = ?")
      .get(req.params.id);

    if (!user) return res.status(404).json({ error: "Användare hittasi inte" });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Namn och e-post krävs" });

  try {
    const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    const result = stmt.run(name, email);

    res
      .status(201)
      .json({ message: "Användare skapad", userId: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const stmt = db.prepare("DELETE FROM users WHERE id = ?");
    const result = stmt.run(req.params.id);

    if (result.changes === 0)
      return res.status(404).json({ error: "Användaren hittades inte" });

    res.json({ message: "Användare borttagen", changes: result.changes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
