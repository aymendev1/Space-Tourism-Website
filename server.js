const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
// require data from json file
const data = require("./data.json");
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
app.get("/destination/data", (req, res) => {
  const DestinationData = data.destinations;
  res.send(DestinationData);
});
app.get("/crew", (req, res) => {
  const csslinkC = "css/crew-styles.css";
  res.render("crew", { CSSLINK: csslinkC });
});
app.get("/technology", (req, res) => {
  const csslinkT = "css/Technology-styles.css";
  res.render("technology", { CSSLINK: csslinkT });
});
app.get("/data", (req, res) => {
  let response = fetch("../data.json");
  let data = response.text();
  console.log(data);
  res.send(data);
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
