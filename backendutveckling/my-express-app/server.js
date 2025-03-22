const express = require("express");
const { logger } = require("./middleware");
const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);

app.use("/users", usersRoutes);

app.use("/posts", postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is active at http://localhost:${PORT}`);
});
