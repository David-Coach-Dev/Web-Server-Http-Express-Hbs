//require
require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
//
const app = express();
const port = process.env.PORT;
//handlebars en espress
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//servir contenido estatico
app.use(express.static("public"));
//rutas
app.get("/", (req, res) => {
  res.render("home", {
    name: "Dc Dev",
    title: "Developer",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Dc Dev",
    title: "Developer",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Dc Dev",
    title: "Developer",
  });
});
app.get("/a", (req, res) => {
  res.sendFile(__dirname + "/public/angular-app/");
  });
app.get("/r", (req, res) => {
  res.sendFile(__dirname + "/public/react/");
});
app.get("/*", (req, res) => {
  res.render("404", {
    name: "Dc Dev",
    title: "Developer",
  });
});
app.listen(port, () => {
  console.log(
    `Example app listenimg al http://localhost:${port}`
  );
});
