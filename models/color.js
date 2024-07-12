const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  year: { type: String},
  color: { type: String},
  
});

module.exports = mongoose.model("color", colorSchema);