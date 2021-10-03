const express = require("express");

const User = require("../model/user.model");

const router = express.Router();
//---------------CRUD API for user ------------------------------

// get all users

router.get("", async (req, res) => {
  const user = await User.find().lean().exec();

  return res.status(200).json({ user });
});

//get a single user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();

  return res.status(200).json({ user });
});

// post the user
router.post("", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(200).json({ user });
});

//patch or update the user

router.patch("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).send({ user });
});

//deleate the user
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec();

  res.status(200).send({ user });
});
module.exports = router;
