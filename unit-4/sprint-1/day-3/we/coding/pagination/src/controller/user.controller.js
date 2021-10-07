const express = require("express");

const router = express.Router();

const User = require("../model/user.model");

router.get("/", async (req, res) => {
  const users = await User.find({}).lean().exec();
  res.status(200).json({ users: users });
});

module.exports = router;
