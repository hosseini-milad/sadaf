const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  title: { type: String},
  reqCode: { type: String},
  userId: { type: String},
  description:{type:String},
  active: { type: Boolean,default:false},
  
  url: { type: String},
  date:{type:Date}
});

module.exports = mongoose.model("idea", ideaSchema);