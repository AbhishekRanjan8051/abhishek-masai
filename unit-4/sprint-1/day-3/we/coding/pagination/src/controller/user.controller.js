const express = require("express");

const router = express.Router();

const User = require("../model/user.model");

router.get("/", async (req, res) => {
  const page = +req.query.page || 1;
  const size = +req.query.limit || 10;

  const offset = (page - 1) * size;

  // console.log("req query", req.query);
  console.log("page,size", page, size);

  const users = await User.find({ gender: { $eq: "Female" } })
    .skip(offset)
    .limit(size)
    .lean()
    .exec();

  const totalPages = Math.ceil(
    (await User.find({ gender: { $eq: "Female" } })
      .countDocuments()
      .lean()
      .exec()) / size
  );

  // console.log("total pages", totalPages);
  res.status(200).json({ data: { users, totalPages } });
});

module.exports = router;
