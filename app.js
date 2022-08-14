const express = require("express");
const mongoose = require("mongoose");
const packageRouter = require("./routes/package");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/healthapi")
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/package", packageRouter);

app.listen(5000, () => {
  console.log("Listning on port 5000");
});
