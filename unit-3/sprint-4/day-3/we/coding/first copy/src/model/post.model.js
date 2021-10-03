const mongoose = require("mongoose");

// create schema for post

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tags: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//connect post to collection

const Post = mongoose.model("post", postSchema);
module.exports = Post;
