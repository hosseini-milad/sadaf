const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  title: { type: String},
  reqCode: { type: String},
  userId: { type: String},
  description:{type:String},

  ideaBenefit:{type:String},
  ideaStatus:{type:String},
  ideaRecommend:{type:String},
  ideaMoney:{type:String},
  ideaTime:{type:String},

  active: { type: Boolean,default:false},
  
  url: { type: String},
  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("idea", ideaSchema);