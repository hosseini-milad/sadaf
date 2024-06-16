const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: { type: String},
  malek: { type: Array},
  malekNo: { type: Array},
  mahiat:{type:Boolean},
  inventor: { type: Array},
  inventorNo: { type: Array},
  ezharname: { type: String,unique:true},
  sabtNo: { type: String,unique:true},
  sabtDate: { type: String},
  classInternation:{ type: Array},
  etebar: { type: Boolean},
  abstract: { type: String},
  description: { type: String},
  tosif: { type: String},
  edea: { type: String},
  plan: { type: String},
  judge: { type: String},
  url: { type: String,unique:true},
  date:{type:Date}
});

module.exports = mongoose.model("data", dataSchema);