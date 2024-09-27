const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  reserveId: { type: String},
  trackId:{ type: String},
  
  status:{type:String},
  success:{ type: String},
  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("transaction", TransactionSchema);