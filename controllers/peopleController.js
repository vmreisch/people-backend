const express = require("express");
const People = require("../models/People");
const router = express.Router();

// Induces
// SHOW INDEX CREATE DELETE UPDATE
// INDEX
router.get("/", async (req, res) => {
  try {
    res.json(await People.find());
  } catch (error) {
    res.status(400).json(error);
  }
});
router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    res.json(await People.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// SHOW
router.get("/:id", async (req, res) => {
  try {
    res.json(await People.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
