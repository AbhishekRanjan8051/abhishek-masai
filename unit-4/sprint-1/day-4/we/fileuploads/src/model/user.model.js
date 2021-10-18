const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: "String", required: "true" },
  prices: { type: "Number", required: "true" },
  image_url: { type: "String", required: "true" },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
