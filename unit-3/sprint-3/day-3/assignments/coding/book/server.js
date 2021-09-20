const express = require("express");

const app = express();

const users = require("./book.json");

app.use(express.json());

app.use(adding);

app.listen(2345, (req, res) => {
  console.log("listining on 2345");
});

app.get("/", (req, res) => {
  res.send(users);
});

app.post("/books", (req, res) => {
  res.send({
    name: "abhishek",
    age: 21,
  });
});

function adding(req, res, next) {
  console.log("adding before");
  next();
}
