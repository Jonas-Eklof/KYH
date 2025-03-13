const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index"));
indexRouter.get("/:authorId", (req, res) => {
  const { index } = req.params;
  res.send(`Index: ${index}`);
});

module.exports = indexRouter;
