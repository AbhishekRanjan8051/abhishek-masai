const express = require("express");

const User = require("../model/user.model");
const Post = require("../model/post.model");

const router = express.Router();

//--------------CRUD API --------------------------------

//post :- create a user and
router.post("", async (req, res) => {
  const user = await User.create(req.body);

  return res.status(201).send({ user });
});

//get :- get all users

router.get("", async (req, res) => {
  const user = await User.find().lean().exec();

  return res.status(200).send({ user });
});

// patch :- upadate :- update user

router.patch("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).send({ user });
});

//delete :- delete user

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec();

  res.status(200).send({ user });
});

// get a single user

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();

  return res.status(200).send({ user });
});

//get all post of user

router.get("/:id/posts", async (req, res) => {
  const post = await Post.findById({ author: req.params.id }).lean().exec();
  const author = await User.findById(req.params.id).lean().exec();
  return res.status(200).send({ post, author });
});

module.exports = router;
