const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Webbserver active on http://localhost:${PORT}`);
});

app.use((err, req, res) => {
  throw new Error("OH NO!");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

app.get("/:username/", (req, res) => {
  console.log("Params", req.params);
  console.log("Query", req.query);
  res.send(`<h1>Hello there, ${req.params.username}</h1>`);
  res.end();
});
