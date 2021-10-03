const express = require("express");
const Post = require("../model/post.model");
const router = express.Router();

// -----------CRUD API for post

//post a new

router.post("", async (req, res) => {
  const post = await Post.create(req.body);

  return res.status(200).send({ post });
});

//get post details

router.get("/:id", async (req, res) => {
  const post = await Post.find().lean().exec();

  return res.status(200).send({ post });
});

//single post get details

router.get("", async (req, res) => {
  const post = await Post.findById(req.params.id).lean().exec();
  return res.status(200).send({ post });
});

//  update

router.patch("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).send({ post });
});

//delete a post

router.delete("/:id", async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id).lean().exec();

  return res.status(200).send({ post });
});

// get all comment from post

router.get("/:id/comments", async (req, res) => {
  const comment = await Comment.find({ post: req.params.id }).lean().exec();

  const post = await Post.findById(req.params.id);

  return res.status(200).send({ comment,post });
});

module.exports = router;
