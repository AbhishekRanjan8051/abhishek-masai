const express = require("express");

const connect = require("./config/db");

const app = express();

const userController = require("./controller/user.controller");
app.use("/users", userController);

const start = async () => {
  await connect;

  app.listen(2346, () => {
    console.log("listening on port 2346");
  });
};

module.exports = start;
