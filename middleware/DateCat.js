const color = require("../models/color")

async function DateCat(outPut,data) {
    var simpleData = {
      _id:data._id,
      title:data.title,
      date:data.date
    }
    var date = data.sabtDate
    var rawDate = date.split('/')
    var year = rawDate[0]
    var month= rawDate[1]
    var yearIndex = outPut.findIndex(item=>item.year==year)
    if(yearIndex==-1){
      var colorList = await color.findOne({year:year})
      outPut.push({
        year:year,data:[{
          month:month,data:[{...simpleData}]
        }], color:colorList?colorList.color:"gray"
      })
    }
    else{
      var monthIndex= outPut[yearIndex].data.findIndex(item=>item.month==month)
      if(monthIndex==-1){
        outPut[yearIndex].data.push({
          month:month,data:[{...simpleData}]
        })
      }
      else{
        outPut[yearIndex].data[monthIndex].data.push({
          ...simpleData
        })
      }
    }
    //outPut.push({year,month})
    return("done")
}
module.exports =DateCat