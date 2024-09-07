const color = require("../models/color")

async function CheckActive(coWorkData) {
    var isActive = 0
    var nowDate = new Date()
    if(!coWorkData||!coWorkData.isPaid){
      return(0)
    }
    var sDate = new Date(coWorkData.sDate)
    var defDate = nowDate - sDate

    if(defDate<30*24*60*60*1000)
      return(1)
    return(1)
}
module.exports =CheckActive