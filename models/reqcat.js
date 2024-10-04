const mongoose = require("mongoose");

const reqcatSchema = new mongoose.Schema({
  title: { type: String},
  catCode: { type: Number},
  catSubject:{ type: String},
  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("reqcat", reqcatSchema);