const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.send("single");
});

router.post("/many", (req, res) => {
  res.send("multiple");
});
module.exports = router;
