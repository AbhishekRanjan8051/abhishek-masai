
const mongoose = require("mongoose");



// create schema for tag

const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//connect tag schema to collections

const Tag = mongoose.model("tag", tagSchema);
module.exports = Tag;
