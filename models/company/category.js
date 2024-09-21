const mongoose = require("mongoose");

const cocatSchema = new mongoose.Schema({
  title: { type: String},
  catCode: { type: Number},

  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("cocat", cocatSchema);