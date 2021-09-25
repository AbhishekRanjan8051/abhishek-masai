const mongoose = require("mongoose");
// create schema for user

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    date_of_birth: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//ceate collection of userSchema

const User = mongoose.model("user", userSchema);

module.exports = User;