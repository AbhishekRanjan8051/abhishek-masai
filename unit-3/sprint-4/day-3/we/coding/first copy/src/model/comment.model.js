const mongoose = require("mongoose");

//crete schema for commentedJSON

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// connect comment schema to collections

const Comment = mongoose.model("comment", commentSchema);
module.exports ={
    Comment: Comment,
}
