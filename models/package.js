const mongoose = require("mongoose");

const PackageShema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    parameter: { type: Number },
    price: { type: Number, require: true },
    originalPrice: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Package", PackageShema);
