import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({ message: "All fields required" });
  }
  const student = await Student.create(req.body);
  res.json(student);
});

// READ
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student Deleted" });
});

export default router;
