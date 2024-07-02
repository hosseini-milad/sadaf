const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cheerio = require("cheerio")
const axios = require("axios")
const { default: fetch } = require("node-fetch");
const dataSchema = require('../models/data')
const authApi = require('./authApi');
const jalali_to_gregorian = require('../middleware/DateConvert');
router.use('/auth', authApi)

router.post('/data-list',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var data={
        title:req.body.title,
        malek:req.body.malek,
        fill:req.body.fill,
        dateFrom:
            req.body.dateFrom?req.body.dateFrom[0]+"/"+
            req.body.dateFrom[1]+"/"+req.body.dateFrom[2]+" "+"00:00":
            new Date().toISOString().slice(0, 10)+" 00:00",
            //new Date(nowDate.setDate(nowDate.getDate() - 1)).toISOString().slice(0, 10)+" "+"00:00",
        dateTo:
            req.body.dateTo?req.body.dateTo[0]+"/"+
            req.body.dateTo[1]+"/"+req.body.dateTo[2]+" 23:59":
            new Date().toISOString().slice(0, 10)+" 23:59",
    }
    try{
        const dataList = await dataSchema.aggregate([
            { $match:data.title?{$or:[
                {title:new RegExp('.*' + data.title + '.*')},
                {abstract:new RegExp('.*' + data.title + '.*')}]}:{}},
            { $match:data.fill?{title:{$exists:data.fill=="فعال"?true:false}}:{}},
            { $match:!data.title?{date:{$gte:new Date(data.dateFrom)}}:{}},
            { $match:!data.title?{date:{$lte:new Date(data.dateTo)}}:{}},
            { $sort: {"date":-1}},
     
        ])

        const pageData = dataList.slice(offset,
            (parseInt(offset)+parseInt(pageSize)))  


        res.json({data:pageData,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/data-web-list',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var search = req.body.search
    try{
        const dataList = await dataSchema.aggregate([
            { $match:search?{$or:[
                {title:new RegExp('.*' + search + '.*')},
                {abstract:new RegExp('.*' + search + '.*')}]}:{}},
            { $sort: {"date":-1}},
     
        ])

        const pageData = dataList.slice(offset,
            (parseInt(offset)+parseInt(pageSize)))  


        res.json({data:pageData,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/date-update',jsonParser, async (req,res)=>{
    const updateList = await dataSchema.find({date:{$exists:false}}).limit(200)
    var convertDate = []
    for(var i=0;i<updateList.length;i++){
    if(!updateList[i].sabtDate) continue
    var dateEn = updateList[i].sabtDate.split('/')
    var convertToENDate = jalali_to_gregorian(
        parseInt(dateEn[0]),
        parseInt(dateEn[1]),
        parseInt(dateEn[2]))
        convertDate.push(updateList[i].sabtNo)
        await dataSchema.updateOne({sabtNo:updateList[i].sabtNo},
            {$set:{date:convertToENDate}}
        )
    }
    res.json({result:convertDate.length})
})
router.post('/fill-front',jsonParser, async (req,res)=>{
    const url = req.body.url
    var data=req.body
    console.log(data)
    return
    try{
        const dataUpdate = await dataSchema.updateOne(
            {url:req.body.url},{$set:data}) 


        res.json({data:dataUpdate})
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

router.get('/fetch-data',jsonParser, async (req,res)=>{
    const NAData = await dataSchema.find({title:{$exists:false}}).limit(process.env.FETCH_LIMIT)
    //console.log(NAData)
    //var counter = 0
    start(NAData,0)
    //await myLoop(NAData,20)
    res.status(200).json({message: "all Done"})
    
})
router.post('/fetch-url',jsonParser, async (req,res)=>{
    const url = req.body.url
    const result = await fetchUrl({url:url});
    res.status(200).json({message: result})
    
})
function start(data,counter){
    if(counter < data.length){
      setTimeout(function(){
        fetchUrl(data[counter]);
        console.log(counter)
        counter++; 
        start(data,counter);
      }, 2000);
    }
  }
const fetchUrl=async(mainURL)=>{
    if(!mainURL)return
    try{
        const url = "https://ipm.ssaa.ir/"
        const axiosResponse = await axios.request({
                method: "GET",
                url: url+mainURL.url,
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
        const resultUpdate = await dataSchema.updateOne({url:mainURL.url},
            {$set:parseData})
         
        setTimeout(()=>{},Math.floor(Math.random()*(5000-1000))+1000)
        return({success:parseData,data:testData})
    }
    catch(error){
        return({message: error})
    }
}
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