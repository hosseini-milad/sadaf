const mongoose = require("mongoose");

const mehvarGoalSchema = new mongoose.Schema({
  title: { type: String},
  mehvarCode:{ type: String},
  description:{type:String}
});

module.exports = mongoose.model("mehvarGoal", mehvarGoalSchema);