const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  title: { type: String},
  managerPhone: { type: String},
  managerName: { type: String},
  productTitle: { type: String},
  productDescription: { type: String},
  productXtra: { type: Array},
  regCode: { type: String},
  abstract: { type: String},
  description: { type: String},
  work: { type: String},
  catalogue: { type: String},

  category:{ type: String },
  categoryId: { type: String},
  unit: { type: String},
  unitId:{type:String},
  licence:{type:Array, default:[]},

  phone:{ type: String},
  fax:{ type: String},
  email:{ type: String},
  website:{ type: String},
  instagram:{ type: String},
  linkedin:{ type: String},
  telegram:{ type: String},
  eita:{ type: String},
  aparat:{ type: String},
  youtube:{ type: String},
  
  address:{type:String},
  postalCode:{ type: String},


  bannerUrl:{type:String},
  bannerThumb:{type:String},
  logo:{type:String},

  image1:{type:String},
  image2:{type:String},
  image3:{type:String},
  image4:{type:String},
  image5:{type:String},

  changeId:{type:String},
  publish:{type:Boolean},
  regDate:{type:Date},
  date:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("company", companySchema);