const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cheerio = require("cheerio")
const axios = require("axios")
const { default: fetch } = require("node-fetch");
const dataSchema = require('../models/data')
const authApi = require('./authApi');
router.use('/auth', authApi)

router.post('/data-list',jsonParser, async (req,res)=>{
    try{
        const dataList = await dataSchema.find()
        res.json({data:dataList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/add-data',jsonParser, async (req,res)=>{
    try{
        const data = req.body.data
        var fData = []
        for(var i=0;i<data.length;i++){
            var EzharCode = data[i].href.split('DecNo=')[1]
            EzharCode = EzharCode.split('&')[0]
            
            var SabtCode = data[i].href.split('RN=')[1]
            fData.push({
                url:data[i].href,
                ezharname:EzharCode,
                sabtNo:SabtCode
                })
        }
        var errorCodes=[]
        const dataAdd = await dataSchema.create(fData)
        res.json({data:fData,addResult:dataAdd})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/fetch-data',jsonParser, async (req,res)=>{
    try{
        const url = "https://ipm.ssaa.ir/"
        const data = req.body.url
        const axiosResponse = await axios.request({
                method: "GET",
                url: url+data,
                headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
                }
            })
        const testData = axiosResponse.data

        const inventorList =splitRegex(testData,"<td>نام مخترع/مخترعین : </td><td>","</td>")
        const malekList =splitRegex(testData,"<td>نام مالک/مالکین : </td><td>","</td>")
        const classInternation = splitRegex(testData,"<td>طبقه بندی بین المللی : </td><td style=\"padding-left:10px;font-family:tahoma;font-size:16px;text-align:left;direction:ltr;\">","</td>")
        const credit = splitRegex(testData,"<td>وضعیت اعتبار</td><td>","</td>")
        const title = splitRegex(testData,"<h2> پرونده اختراع -","</h2>")
        const parseData = {
            title: title?title:splitRegex(testData,"<h2>","</h2>"),
            inventor: inventorList.split(" و \r\n"),
            malek: malekList.split(" و \r\n"),
            sabtDate:splitRegex(testData,"<td>تاریخ ثبت اظهارنامه : </td><td>","</td>"),
            abstract:splitRegex(testData,"<div id=\"C_Des\" data-itm=\"des\">","</div>"),
            classInternation:notNull(classInternation.split("<br/>")),
            tosif:splitRegex(testData,"<td>شرح و توصیف : </td><td><a target=\"_blank\" href=\"","\">"),
            edea:splitRegex(testData,"<td>ادعانامه : </td><td><a target=\"_blank\" href=\"","\">"),
            plan:splitRegex(testData,"<td>نقشه : </td><td><a target=\"_blank\" href=\"","\">"),
            judge:splitRegex(testData,"<td>گزارش داوری : </td><td><a target=\"_blank\" href=\"","\">"),
            etebar:credit?credit.includes('ندارد')?false:true:false
        }
        const resultUpdate = await dataSchema.updateOne({url:req.body.url},
            {$set:parseData})
        res.json({data:parseData,url:resultUpdate})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
const splitRegex=(value,fString,lString)=>{
    var newValue = value.split(fString)[1]
    newValue = newValue?newValue.split(lString)[0]:''
    return(newValue)
  }
const notNull = (array)=>{
    if(!array) return
    var tempArray = []
    for(var i=0;i<array.length;i++){
        if(array[i])
            tempArray.push(array[i])
    }
    return(tempArray)
}

module.exports = router;