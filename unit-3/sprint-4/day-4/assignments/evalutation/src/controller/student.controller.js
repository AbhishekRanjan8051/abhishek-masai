const express = require("express");

const Student = require("../model/student.model");

const router = express.Router();

//---------------CRUD API for studentSchema--------------------------------

//get all students details

router.get("", async (req, res) => {
  const student = await Student.find().lean().exec();
  res.status(200).send({ student });
});

// get single student details

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id).lean().exec();
  res.status(200).send({ student });
});
//post student
router.post("", async (req, res) => {
  const student = await Student.create(req.body);
  return res.status(200).send({ student });
});
//patch or update student
router.patch("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).json({ student });
});

//delete the student

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  return res.status(200).json({ student });
});
module.exports = router;
