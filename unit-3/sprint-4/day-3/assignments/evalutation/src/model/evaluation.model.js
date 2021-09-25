const mongoose = require("mongoose");


//create schema for evalutation

const evalutationShema = new mongoose.Schema(
  {
    instructor: { type: String, required: true },
    topic_name: { type: String, required: true },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//create collection of evalutationShema

const Evaluation = mongoose.model("evaluation", evalutationShema);
module.exports = Evaluation;
