const clients = require("../../models/auth/clients")
const cowork = require("../../models/cowork")
const CreateReserveID = require("../CreateReserveID")
var ObjectID = require('mongodb').ObjectID;
const {COWORK_PRICE} = process.env

async function ReserveNow(userId) {
    var changes = {
          sDate:new Date(Date.now()).toLocaleDateString('en')
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
          const coWorkData = await cowork.create(changes)
          return({data:userData,coWorkData,price:COWORK_PRICE,
              reserveid:changes.reserveid})
      }
      catch(error){
          return({message: error.message})
      }
    
}
module.exports =ReserveNow