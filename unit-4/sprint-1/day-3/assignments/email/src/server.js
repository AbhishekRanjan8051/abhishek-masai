const express = require("express");

const userController = require("./controller/user.controller");
const app = express();

app.use(express.json());

app.use("/users", userController);

const connect = require("./config/db");

app.listen(2346, async () => {
  await connect();
  console.log("listening on 2346");
});
