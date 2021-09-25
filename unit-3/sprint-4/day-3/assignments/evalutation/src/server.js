const express = require("express");

// const mongoose = require("mongoose");

const connect = require("./configs/db.js");

const app = express();

app.use(express.json());

// const User = require("./model/user.model");

// const Student = require("./model/student.model");

// const Evaluation = require("./model/evaluation.model");

const userController = require("./controller/user.controller");

const studentController = require("./controller/student.controller");

const evaluationController = require("./controller/evaluation.controller");

app.use("/users", userController);

app.use("/students", studentController);

app.use("/evaluation", evaluationController);

app.listen(2346, async function () {
  await connect();
  console.log("listining on 2346");
});
