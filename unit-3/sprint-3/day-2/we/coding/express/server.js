const express = require("express");

const app = express();

const users = require("./express.json");

app.listen(2346, (req, res) => {
  console.log("hello world");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
  res.send(users);
});
