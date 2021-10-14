const express = require("express");

const transporter = require("../config/mail");

const router = express.Router();

const User = require("../model/user.model");
router.get("", async function (req, res) {
  const page = +req.query.page || 1;
  const size = +req.query.size || 10;

  const offset = (page - 1) * size; // skiping

  const users = await User.find().skip(offset).limit(size).lean().exec();

  const totalUserCount = await User.find().countDocuments();

  const totalPages = Math.ceil(totalUserCount / size);

  var message = {
    from: "abhishek_nj2_070@masai.school",
    to: "arpit@masai.school",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<h1>HTML version of the message</h1>",
  };

  transporter.sendMail(message);

  return res.send({ users, totalPages });
});
module.exports = router;
