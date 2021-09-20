const express = require("express");

const app = express();

app.use(express.json());

// app.use(logger);

const users = require("./express.json");

app.get("/", logger, (req, res) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", logger, (req, res) => {
  console.log("inside the handler");
  console.log("name", req.name);
  console.log(req.body);

  res.send(req.body);
  // res.send(users);
});

function logger(req, res, next) {
  // req.name = "abhishek";
  console.log("before");
  if (req.query.name === "abhishek") {
    next();
  } else {
    res.send("wrong person,you are not allowed to login in");
  }
  // next();
  console.log("after");
}

app.listen(2346, (req, res) => {
  console.log("hello world");
});
