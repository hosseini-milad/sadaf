const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  cName: { type: String},
  sName:{ type: String},
  phone: { type: String , required : true, unique:true},
  password: { type: String },
  email: { type: String},
  access:{ type:String },
  group: { type:String },
  credit: { type: String },
  token: { type: String },
  otp:{ type: String , default: null },
  mobile: { type: String },
  classes:{ type: Array },
  profile:{ type: String },
  address:{ type: String },
  meliCode:{ type: String },

  active:{type:String},
  inPark:{type:String},
  work:{type:String},
  date:{type:Date}
});

module.exports = mongoose.model("client", clientSchema);