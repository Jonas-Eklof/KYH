const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:authorId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book: ${bookId}`);
});

module.exports = bookRouter;
