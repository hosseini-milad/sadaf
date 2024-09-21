const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  title: { type: String},
  unitCode: { type: Number},

  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("unit", unitSchema);