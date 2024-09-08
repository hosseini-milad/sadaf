const mongoose = require("mongoose");

const coWorkSchema = new mongoose.Schema({
  title: { type: String},
  userId: { type: String},
  reserveid:{ type: String , unique:true},
  sDate: { type: Date},
  eDate:{type:Date},
  kind:{ type: String},
  price:{ type: Number},
  discount:{ type: Number},
  trackId:{ type: String},
  
  status:{type:String,default:"initial"},
  payCode:{ type: String},
  payMessage:{ type: String},
  isPaid:{type:Boolean,default:false},
  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("cowork", coWorkSchema);