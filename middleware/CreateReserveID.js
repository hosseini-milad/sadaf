const cow = require("../models/color");
const cowork = require("../models/cowork");

async function CreateReserveID(kind) {
  for(var i =0;i<10;i++){
    var randNumber = Math.floor(Math.random() * 89999)+10000 ;
    var reserveId=kind + randNumber
    const result = await cowork.findOne({reserveid:reserveId})
    if(result) continue
    else return(reserveId)
  }
  return('00000000')
}
module.exports =CreateReserveID