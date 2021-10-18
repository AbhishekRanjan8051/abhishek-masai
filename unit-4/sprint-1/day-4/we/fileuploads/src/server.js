const express = require("express");
const connect = require("./config/db");
const app = express();

const userController = require("./controller/user.controller");
app.use(express.json());

app.use("/users", userController);

const start = async (req, res, next) => {
  await connect();
  app.listen(2345, () => {
    console.log("listening on 2345");
  });
};

module.exports = start;
