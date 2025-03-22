const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const stmt = db.prepare(`
        SELECT posts.id, posts.content, users.name AS author, posts.created_at
        FROM posts
        JOIN users ON posts.user_id = users.id    
    `);

  const posts = stmt.all();
  res.json(posts);
});

router.post("/", (req, res) => {
  const { user_id, title, content } = req.body;
  if (!user_id || !title || !content) {
    return res.status(400).json({ error: "Alla fält måste vara ifyllda" });
  }

  const stmt = db.prepare(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)"
  );

  const result = stmt.run(user_id, title, content);
  res.status(201).json({ id: result.lastInsertRowid, user_id, title, content });
});

router.get("/:id", (req, res) => {
  const stmt = db.prepare(`
    SELECT posts.id, posts.title, posts.content, users_name AS author, posts.created_at 
    FROM posts 
    JOIN users ON posts.users_id = users.id 
    WHERE posts.id = ?    
`);

  const post = stmt.get(req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Posten hittades inte" });
  }

  res.json(post);
});

router.delete("/:id", (req, res) => {
  const stmt = db.prepare("DELETE FROM posts WHERE id = ?");
  const result = stmt.run(req.params.id);
  if (result.changes === 0) {
    return res.status(404).json({ error: "Posten hittades inte" });
  }

  res.json({ message: "Posten har raderats" });
});

module.exports = router;
