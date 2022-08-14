const router = require("express").Router();
const Package = require("../models/package");

router.post("/", async (req, res) => {
  const package = new Package(req.body);
  try {
    const savedPackage = await package.save();
    res.status(200).json(savedPackage);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Package.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatePackage = await Package.findByIdAndUpdate(
      req.params.id,

      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatePackage);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.status(200).json("Package has been deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
