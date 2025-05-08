const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/companies", () => {});

app.post("/companies/id", () => {});

app.delete("/companies/id", () => {});

app.put("/companies/id", () => {});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
