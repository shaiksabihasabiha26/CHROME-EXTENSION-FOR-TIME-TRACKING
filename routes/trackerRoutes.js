const express = require("express");
const router = express.Router();

let sampleData = [
  { id: 1, task: "Coding", duration: "2 hours" },
  { id: 2, task: "Reading", duration: "1 hour" },
];

// GET route
router.get("/", (req, res) => {
  res.json(sampleData);
});

// POST route
router.post("/", (req, res) => {
  const newRecord = req.body;
  sampleData.push(newRecord);
  res.status(201).json({ message: "Record added successfully", data: sampleData });
});

module.exports = router;
