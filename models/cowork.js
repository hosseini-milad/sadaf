const mongoose = require("mongoose");

const coWorkSchema = new mongoose.Schema({
  title: { type: String},
  userId: { type: String},
  sDate: { type: Date},
  eDate:{type:Date},
  
  status:{type:String,default:"initial"},
  isPaid:{type:Boolean,default:false},
  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("cowork", coWorkSchema);