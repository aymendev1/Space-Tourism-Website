const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
