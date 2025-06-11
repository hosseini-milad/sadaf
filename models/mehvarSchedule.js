const mongoose = require("mongoose");

const mehvarSheduleSchema = new mongoose.Schema({
  title: { type: String},
  order: { type: Number},
  date:{ type: String},
  person:{type:Boolean},
  mehvarCode:{ type: String},
  description:{type:String}
});

module.exports = mongoose.model("mehvarSchedule", mehvarSheduleSchema);