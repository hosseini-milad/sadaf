const mongoose = require("mongoose");

const licenceSchema = new mongoose.Schema({
  title: { type: String},
  licenceCode: { type: Number},

  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("licence", licenceSchema);