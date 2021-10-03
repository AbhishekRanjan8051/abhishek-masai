const mongoose = require("mongoose");

// create schema of students

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: String, required: true },
    current_batch: { type: String, required: true },
    evaluation_id: {
      type: mongoose.Schema.ObjectId,
      ref: "evaluation",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//create  collection of studentSchema

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
