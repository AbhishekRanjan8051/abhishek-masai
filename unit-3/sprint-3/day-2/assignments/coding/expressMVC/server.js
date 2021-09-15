const express = require("express");

const app = express();

const users = require("./express.json")

app.listen(2345, (req, res) => {
  console.log("listening on 2345");
});

app.get("/", (req, res) => {
  res.send("welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send(users);
});
