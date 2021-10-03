const express = require("express");

const Comment = require("../model/comment.model");

const router = express.Router();

//---------CRUD API for comment

//post

router.post("", async (req, res) => {
  const comment = await Comment.create(req.body);
  return res.status(200).send({ comment });
});

// get comment

router.get("s", async (req, res) => {
  const comment = await Comment.find().lean().exec();
  return res.status(200).send({ comment });
});

//get single comment

router.get("/:id", async (req, res) => {
  const comment = await Comment.findById(req.params.id).lean().exec();
  return res.status(200).send({ comment });
});

// delete comment

router.delete("/:id", async (req, res) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  return res.status(200).send({ comment });
});
// patch / update comment
router.patch("/:id", async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).send({ comment });
});

module.exports = router;
