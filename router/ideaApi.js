const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var ObjectID = require('mongodb').ObjectID;
const dataSchema = require('../models/data')

const jalali_to_gregorian = require('../middleware/DateConvert');
const DateCat = require('../middleware/DateCat');
const data = require('../models/data');
const ReqSchema = require('../models/request')

const auth = require("../middleware/auth");
const idea = require('../models/idea');
const clients = require('../models/auth/clients');
const reqcat = require('../models/reqcat');

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

router.post('/reg-req',jsonParser,auth, async (req,res)=>{
    var userId = req.headers['userid']
    var req=req.body
    req.userId = userId
    try{
        const reqList = await ReqSchema.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/req-list',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var nowDate = new Date().toISOString().slice(0, 10).split('-')
    var defaultDate = parseInt(nowDate[0])-1+"/"+
    nowDate[1]+"/"+nowDate[2]
     
    //console.log("def: ",defaultDate)
    var data={
        title:req.body.title,
        nahad:req.body.nahad,
        year:req.body.year,
        category:req.body.category,
        dateFrom:
            req.body.dateFrom?req.body.dateFrom[0]+"/"+
            req.body.dateFrom[1]+"/"+req.body.dateFrom[2]+" "+"00:00":
            defaultDate+" 00:00",
            //new Date(nowDate.setDate(nowDate.getDate() - 1)).toISOString().slice(0, 10)+" "+"00:00",
        dateTo:
            req.body.dateTo?req.body.dateTo[0]+"/"+
            req.body.dateTo[1]+"/"+req.body.dateTo[2]+" 23:59":
            new Date().toISOString().slice(0, 10)+" 23:59",
    }
    try{
        const dataList = await ReqSchema.aggregate([
            { $match:data.title?{$or:[
                {title:new RegExp('.*' + data.title + '.*')},
                {proofUsage:new RegExp('.*' + data.title + '.*')},
                {nahad:new RegExp('.*' + data.title + '.*')},
                {proofReq:new RegExp('.*' + data.title + '.*')}]}:{}},
            
            { $match:data.category?{category:data.category}:{}},
            { $match:!data.title?{date:{$gte:new Date(data.dateFrom)}}:{}},
            { $match:!data.title?{date:{$lte:new Date(data.dateTo)}}:{}},
            { $sort: {"date":-1}},
     
        ])

        const pageData = dataList.slice(offset,
            (parseInt(offset)+parseInt(pageSize)))  
        for(var i=0;i<pageData.length;i++){
            const userData = await clients.findOne({_id:ObjectID(pageData[i].userId)})
            const ideaData = await idea.find({reqCode:pageData[i]._id})
            pageData[i].userData = userData
            pageData[i].ideaData = ideaData
            pageData[i].ideaCount = ideaData&&ideaData.length
        }

        res.json({data:pageData,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/reg-idea',jsonParser,auth, async (req,res)=>{
    var userId = req.headers['userid']
    var req=req.body
    req.userId = userId
    
    try{
        const ideaStatus = await idea.create(req)


        res.json({data:ideaStatus,message:"ایده ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/list-idea',jsonParser,auth, async (req,res)=>{
    var userId = req.headers['userid']
    var req=req.body
    req.userId = userId
    
    try{
        const ideaStatus = await idea.create(req)


        res.json({data:ideaStatus,message:"ایده ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/data-req-list',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var search = req.body.search
    try{
        const dataList = await ReqSchema.aggregate([
            { $match:search?{$or:[
                {title:new RegExp('.*' + data.title + '.*')},
                {proofUsage:new RegExp('.*' + data.title + '.*')},
                {nahad:new RegExp('.*' + data.title + '.*')},
                {proofReq:new RegExp('.*' + data.title + '.*')}]}:{}},
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
router.get('/get-req/:id',jsonParser, async (req,res)=>{
    const url = req.url.split('/').pop()
    try{
        const dataDetail = await ReqSchema.findOne({_id:ObjectID(url)}).lean()
        const ideaData = await idea.find({reqCode:url})
        dataDetail.ideaData = ideaData
        dataDetail.ideaCount = ideaData&&ideaData.length
        if(dataDetail)
            res.status(200).json({data:dataDetail,message:"اطلاعات پیدا شد"})
        else
            res.status(400).json({error:"اطلاعات پیدا نشد"})
        
    }
    catch(error){
        res.status(400).json({error:error})
    }
})

const StandardInput =(text)=>{
    if(!text) return ""
    var newText = text.replace( /ی/g, 'ي')
    newText = newText.replace( /ک/g, 'ك')
    return(newText)
}


router.post('/list-category',jsonParser, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
    }
    try{
        const dataList = await reqcat.aggregate([
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {managerName:new RegExp('.*' + data.search + '.*')},
                {regCode:new RegExp('.*' + data.search + '.*')},
                {productTitle:new RegExp('.*' + data.search + '.*')}]}:{}},
            
            { $sort: {"date":-1}},
            { $limit: 10},
        ])


        res.json({data:dataList,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/set-category',jsonParser,auth, async (req,res)=>{
    
    var req=req.body
    try{
        const reqList = await reqcat.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-category',jsonParser, async (req,res)=>{
    try{
        res.json({data:"data"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;