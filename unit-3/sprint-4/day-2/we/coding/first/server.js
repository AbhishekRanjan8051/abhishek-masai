const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web11");
};

//create the schema

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  email: { type: String, required: true },
  gender: { type: String, required: true },
});

// connect the schema to the user collewction

const User = mongoose.model("user", userSchema);

const app = express();

app.use(express.json());

//--------------CRUD API --------------------------------

//post :- create a user and
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);

  return res.status(201).send({ user });
});

//get :- get all users

app.get("/users", async (req, res) => {
  const user = await User.find().lean().exec();

  return res.status(200).send({ user });
});

// patch :- upadate :- update user

app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).send({ user });
});

//delete :- delete user

app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec();

  res.status(200).send({ user });
});

// get a single user

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();

  return res.status(200).send({ user });
});

app.listen(2346, async function () {
  await connect();
  console.log("listining on 2346");
});
