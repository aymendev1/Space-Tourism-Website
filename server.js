const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const csslink = "css/home-styles.css";
  res.render("home", { CSSLINK: csslink });
});
app.get("/destination", (req, res) => {
  const csslinkD = "css/destination-styles.css";
  res.render("destination", { CSSLINK: csslinkD });
});
app.get("/crew", (req, res) => {
  const csslinkC = "css/crew-styles.css";
  res.render("crew", { CSSLINK: csslinkC });
});
app.get("/technology", (req, res) => {
  res.render("technology");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
