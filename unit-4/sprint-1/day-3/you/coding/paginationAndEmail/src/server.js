const express = require("express");

const mongoose = require("mongoose");

const connect = require("./config/db");
const app = express();

app.use(express.json());

app.listen(2345, async (req, res) => {
  await connect();
  console.log("listening on 2345");
});
