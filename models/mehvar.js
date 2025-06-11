const mongoose = require("mongoose");

const mehvarSchema = new mongoose.Schema({
  title: { type: String},
  mehvarCode: { type: String},
  mehvarSubject:{ type: String},
  active:{type:Boolean},
  date:{type:Date, default:Date.now()},
  subject:{type:Array},
  description:{type:String}
});

module.exports = mongoose.model("mehvar", mehvarSchema);