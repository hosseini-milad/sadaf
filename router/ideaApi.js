const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var ObjectID = require('mongodb').ObjectID;
const dataSchema = require('../models/data')

const jalali_to_gregorian = require('../middleware/DateConvert');
const DateCat = require('../middleware/DateCat');
const data = require('../models/data');

const auth = require("../middleware/auth");

router.get('/get-idea/:id',jsonParser, async (req,res)=>{
    const url = req.url.split('/').pop()
    console.log(url)
    try{
        const dataDetail = await data.findOne({_id:ObjectID(url)})
        if(dataDetail)
            res.status(200).json({data:dataDetail,message:"اطلاعات پیدا شد"})
        else
            res.status(400).json({error:"اطلاعات پیدا نشد"})
        
    }
    catch(error){
        res.status(400).json({error:error})
    }
})
router.post('/get-data',jsonParser,auth, async (req,res)=>{
    
    var data={
        search:StandardInput(req.body.search),
        title:StandardInput(req.body.title),
        ezharname:req.body.ezharname,
        sabtNo:req.body.sabtNo,
        malek:req.body.malek,
        year:req.body.year,
    }
    try{
        const dataList = await dataSchema.aggregate([
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {ezharname:new RegExp('.*' + data.search + '.*')},
                {sabtNo:new RegExp('.*' + data.search + '.*')},
                {abstract:new RegExp('.*' + data.search + '.*')}]}:{}},
            { $match:data.malek?{$or:[
                {malek:new RegExp('.*' + data.malek + '.*')},
                {inventor:new RegExp('.*' + data.malek + '.*')}]}:{}},
            { $match:data.year?data.year=="old"?{sabtDate:new RegExp('13.*')}:
                {sabtDate:new RegExp('.*' + data.year + '.*')}:{}},
            { $match:data.title?{title:new RegExp('.*' + data.title + '.*')}:{}},
            { $match:data.ezharname?{ezharname:new RegExp('.*' + data.ezharname + '.*')}:{}},
            { $match:data.sabtNo?{sabtNo:new RegExp('.*' + data.sabtNo + '.*')}:{}},
            { $sort: {"date":-1}},
            { $limit: 10},
        ])


        res.json({data:dataList,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
const StandardInput =(text)=>{
    if(!text) return ""
    var newText = text.replace( /ی/g, 'ي')
    newText = newText.replace( /ک/g, 'ك')
    return(newText)
}
module.exports = router;