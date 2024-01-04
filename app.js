const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //render view/index.ejs
  res.render("index");
});

app.get("/greet/:name", (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
