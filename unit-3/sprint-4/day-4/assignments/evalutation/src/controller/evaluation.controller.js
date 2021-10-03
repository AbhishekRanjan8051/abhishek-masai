const express = require("express");

const Evaluation = require("../model/evaluation.model");

const router = express.Router();
//---------------------CRUD API for Evaluation

//get all evaluation details
router.get("", async (req, res) => {
  const post = await Evaluation.find().lean().exec();
  return res.status(200).json({ post });
});

//get single evaluation details
router.get("/:id", async (req, res) => {
  const author = await Evaluation.findById(req.params.id).lean().exec();

  return res.status(200).json({ author });
});

//post details of evaluation

router.post("/evaluation", async (req, res) => {
  const post = await Evaluation.create(req.body);
  return res.status(201).json({ post });
});

//patch or update evaluation details
router.patch("/:id", async (req, res) => {
  const post = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json({ post });
});

//delete the evaluation details
router.delete("/:id", async (req, res) => {
  const post = await Evaluation.findByIdAndDelete(req.params.id);
  return res.status(200).json({ post });
});
