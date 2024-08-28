const express = require("express");
const app = express.Router();
const model = require("../model/index");

app.get("/track", (req, res) => {
  res.send("iam running on the current track");
});

app.post("/movies", async (req, res) => {
  try {
    const newData = new model(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all data
app.get("/movies", async (req, res) => {
  try {
    const data = await model.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific entry by ID
app.get("/movies/:id", async (req, res) => {
  try {
    const data = await model.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Data not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a specific entry by ID
app.put("/movies/:id", async (req, res) => {
  try {
    const updatedData = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });
    if (!updatedData)
      return res.status(404).json({ message: "Data not found" });
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a specific entry by ID
app.delete("/movies/:id", async (req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Data not found" });
    res.json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
