const mongoose = require("mongoose");

const mehvarSubjectSchema = new mongoose.Schema({
  title: { type: String},
  mehvarCode:{ type: String},
  description:{type:String}
});

module.exports = mongoose.model("mehvarSubject", mehvarSubjectSchema);