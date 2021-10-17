const express = require("express");
const router = express.Router();
const sendMail = require("../utils/sendmail");
const User = require("../model/user.model");

router.get("", async function (req, res) {
  const users = await User.find().lean().exec();
  return res.send(users);
});
router.post("/", async function (req, res) {
  const users = await User.create(req.body);
  const admin = await User.find({ role: "Admin" }).lean().exec();

  sendMail({
    from: "abhishek_nj2_070@masai.school",
    to: req.body.email,
    subject: `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
    text: `Hi ${req.body.first_name}, Please confirm your email address`,
  });

  for (let i = 0; i < 4; i++) {
    sendMail({
      from: "abhishek_nj2_070@masai.school",
      to: admin[i].email,
      subject: `${req.body.first_name} ${req.body.last_name} has registered with us`,
      text: `Please Welcome ${req.body.first_name} ${req.body.last_name}`,
    });
  }

  return res.send(users);
});

module.exports = router;
