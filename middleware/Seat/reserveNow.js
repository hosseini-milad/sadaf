const clients = require("../../models/auth/clients")
const cowork = require("../../models/cowork")
const CreateReserveID = require("../CreateReserveID")
const jalaali = require("jalaali-js");
var ObjectID = require('mongodb').ObjectID;
const {COWORK_PRICE} = process.env

async function ReserveNow(userId,date) {
    var { gy, gm, gd } = date?jalaali.toGregorian(Number(date[0]),Number(date[1]),Number(date[2])):{}
    var newDate = date?new Date(Date.UTC(gy, gm - 1, gd)):''
    var fDate = date?newDate:new Date(Date.now()).toLocaleDateString('en')
    
    var changes = {
          sDate:fDate
      }
      changes.userId = userId
      changes.reserveid = await CreateReserveID("85")
      changes.price = COWORK_PRICE
      try{
          const userData = await clients.findOne({_id:ObjectID(userId)})
          if(!changes.sDate){
              res.status(400).json({message:"زمان وارد نشده است",error:true})
              return 
          }
          /*var myDate = jalali_to_gregorian(changes.sDate.year,
              changes.sDate.month,changes.sDate.day)
          var enDate = myDate[0]+"/"+myDate[1]+"/"+myDate[2]
          
          changes.sDate = enDate*/
          var reservePrice = (userData.group=="park")?"20000":COWORK_PRICE
          const coWorkData = await cowork.create(changes)
          return({data:userData,coWorkData,price:reservePrice,
              reserveid:changes.reserveid})
      }
      catch(error){
          return({message: error.message})
      }
    
}
module.exports =ReserveNow