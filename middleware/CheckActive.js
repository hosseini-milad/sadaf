
function CheckActive(coWorkData) {
    var isActive = 0
    var nowDate = new Date()
    if(!coWorkData||!coWorkData.isPaid){
      return(0)
    }
    var sDate = new Date(coWorkData.sDate)
    var defDate = nowDate - sDate

    var defDay = parseInt(defDate/(24*60*60*1000))
    if(defDay<30)
      return(30-defDay)
    return(0)
}
module.exports =CheckActive