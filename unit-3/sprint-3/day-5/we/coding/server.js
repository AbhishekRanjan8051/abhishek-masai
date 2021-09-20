const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/preclass", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  ip_address: String,
  age: Number,
});

const User = mongoose.model("user", userSchema);

app.get("/users", async (req, res) => {
  const user = await User.find().lean().exec();
  res.status(200).json({ data: user });
});
const start = async () => {
  await connect();

  app.listen(2245, () => {
    console.log("listening on 2345");
  });
};

start();
