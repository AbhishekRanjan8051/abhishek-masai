const mongoose = require("mongoose");



//create the schema

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// connect the schema to the user collewction

const User = mongoose.model("user", userSchema);

module.exports = User;
