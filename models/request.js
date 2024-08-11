const mongoose = require("mongoose");

const ReqSchema = new mongoose.Schema({
  title: { type: String,unique:true,require:true},
  nahad: { type: String},
  category: { type: String},
  categoryId:{type:String},
  proofReq: { type: String,unique:true},
  proofUsage: { type: String},
  reputation: { type: String},
  description: { type: String},
  action: { type: String},
  support: { type: String},

  userId: { type: String},
  phone: { type: String},
  
  date:{type:Date,default:Date.now()}
});

module.exports = mongoose.model("req", ReqSchema);