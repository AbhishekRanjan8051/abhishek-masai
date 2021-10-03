const express = require("express");

const Tag = require("../model/tag.model");

const router = express.Router();

// ---------- CRUD API for tags

//post  tags

router.post("", async (req, res) => {
  const tag = await Tag.create(req.body);

  return res.status(200).send({ tag });
});

//get tags

router.get("", async (req, res) => {
  const tag = await Tag.find().lean().exec();

  return res.status(200).send({ tag });
});

// get single tags

router.get("/:id", async (req, res) => {
  const tag = await Tag.findById(req.params.id).lean().exec();
  return res.status(200).send({ tag });
});

//patch / update tags

router.patch("/:id", async (req, res) => {
  const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).send({ tag });
});

//delete  tags

router.delete("/:id", async (req, res) => {
  const tag = await Tag.findByIdAndDelete(req.params.id);
  return res.status(200).send({ tag });
});

module.exports = router;
