const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const dataSchema = require('../models/data')

const jalali_to_gregorian = require('../middleware/DateConvert');
const DateCat = require('../middleware/DateCat');


router.get('/report-top',jsonParser, async (req,res)=>{
    try{
        res.json({data:"pageData",size:12})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/report-main',jsonParser, async (req,res)=>{
    const search = req.body.search
    const limit = req.body.limit?req.body.limit:10000
    const rDate = req.body.date
    var nowDate = new Date().toISOString().slice(0, 10).split('-')
    var defaultDate = parseInt(nowDate[0])-2+"/"+
    nowDate[1]+"/"+nowDate[2]
    const data={
        dateFrom:
            rDate?rDate.dateFrom[0]+"/"+
            rDate.dateFrom[1]+"/"+rDate.dateFrom[2]+" "+"00:00":
            defaultDate+" 00:00",
            //new Date(nowDate.setDate(nowDate.getDate() - 1)).toISOString().slice(0, 10)+" "+"00:00",
        dateTo:
            rDate?rDate.dateTo[0]+"/"+
            rDate.dateTo[1]+"/"+rDate.dateTo[2]+" 23:59":
            new Date().toISOString().slice(0, 10)+" 23:59",
    }
    try{
        const dataList = await dataSchema.aggregate([
            { $match:{title:{$exists:true}}},
            { $match:search?{$or:[
                {title:new RegExp('.*' + search + '.*')},
                {abstract:new RegExp('.*' + search + '.*')}]}:{}},
            { $match:!search?{date:{$gte:new Date(data.dateFrom)}}:{}},
            { $match:!search?{date:{$lte:new Date(data.dateTo)}}:{}},
            { $sort: {"date":-1}},{$limit:limit}
     
        ])
        var dateCat = []
        for(var i=0;i<dataList.length;i++){
            var dateResult = await DateCat(dateCat,dataList[i])
            //placeDate
            //dateCat.push(dateResult)
        }
        res.json({data:dateCat,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;