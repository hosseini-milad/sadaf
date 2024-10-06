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
const company = require('../models/company/company');
const category = require('../models/company/category');
const unit = require('../models/company/unit');
const licence = require('../models/company/licence');
const clients = require('../models/auth/clients');
const coChange = require('../models/company/coChange');

router.get('/get-my-company',jsonParser,auth, async (req,res)=>{
    const clientData = await clients.findOne({_id:ObjectID(req.headers['userid'])})
    if(!clientData){
        res.status(400).json({error:"کاربر پیدا نشد"})
            return
    }
    try{
        const companyDetail = await company.findOne({managerPhone:clientData.phone}).lean()
        const companyChange = await coChange.findOne({managerPhone:clientData.phone}).lean()
        if(companyDetail||companyChange){
            const catList = await category.find()
            var cCat = companyChange&&companyChange.category&&
                catList.find(item=>item._id == companyChange.category)
            if(companyChange)
                companyChange.catName = cCat?cCat.title:""
            const unitList = await unit.find()
            var cUnit = companyChange&&companyChange.unit&&
                unitList.find(item=>item._id == companyChange.unit)
            if(companyChange)
                companyChange.unitName = cUnit?cUnit.title:""
            res.status(200).json({data:companyDetail,catList,unitList,
                change:companyChange,message:"اطلاعات پیدا شد"})
            return
        }
        else{
            res.status(200).json({data:{},message:"کاربر صفحه ندارد"})
            return
        }
        
    }
    catch(error){
        res.status(400).json({error:error})
    }
})
router.get('/fetch-company/:id',jsonParser, async (req,res)=>{
    const url = req.url.split('/').pop()
    console.log(url)
    try{
        const companyDetail = await company.findOne({_id:ObjectID(url)})
        if(companyDetail){
            res.status(200).json({data:companyDetail,message:"اطلاعات پیدا شد"})
            return
        }
        else{
            res.status(400).json({error:"اطلاعات پیدا نشد"})
            return
        }
        
    }
    catch(error){
        res.status(400).json({error:error})
    }
})
router.post('/list-company',jsonParser, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
        banner:req.body.banner
    }
    try{
        const dataList = await company.aggregate([
            {$match:{publish:true}},
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {managerName:new RegExp('.*' + data.search + '.*')},
                {regCode:new RegExp('.*' + data.search + '.*')},
                {productTitle:new RegExp('.*' + data.search + '.*')}]}:{}},
            {$match:data.banner?{bannerUrl:{$exists:true}}:{}},
            { $sort: {"date":-1}},
            { $sample: { size: 1 } }
        ])


        res.json({data:dataList,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/list-company-admin',jsonParser,auth, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
        id:req.body.id,
        banner:req.body.banner
    }
    try{
        const dataList = await company.aggregate([
            {$match: data.id?{_id:ObjectID(data.id)}:{}},
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {managerName:new RegExp('.*' + data.search + '.*')},
                {regCode:new RegExp('.*' + data.search + '.*')},
                {productTitle:new RegExp('.*' + data.search + '.*')}]}:{}},
            {$match:data.banner?{bannerUrl:{$exists:true}}:{}},

            { $sort: {"date":-1}},
            { $limit: 10},
        ])
        for(var i=0;i<dataList.length;i++){
            const change = await coChange.findOne({managerPhone:dataList[i].managerPhone})
            dataList[i].change = change
        }

        res.json({data:dataList,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/list-change-admin',jsonParser,auth, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
        banner:req.body.banner
    }
    try{
        const dataList = await coChange.aggregate([
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {managerName:new RegExp('.*' + data.search + '.*')},
                {regCode:new RegExp('.*' + data.search + '.*')},
                {productTitle:new RegExp('.*' + data.search + '.*')}]}:{}},
            {$match:data.banner?{bannerUrl:{$exists:true}}:{}},

            { $sort: {"date":-1}},
            { $limit: 10},
        ])
        for(var i=0;i<dataList.length;i++){
            const origin = await company.findOne({managerPhone:dataList[i].managerPhone})
            dataList[i].origin = origin
        }

        res.json({data:dataList,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/accept-edit',jsonParser,auth, async (req,res)=>{
    
    var data={
        managerPhone:req.body.managerPhone
    }
    try{
        const changeList = await coChange.findOne({managerPhone:data.managerPhone}).lean()
        const dataList = await company.findOne({managerPhone:data.managerPhone})
        
        if(!changeList){
            res.status(400).json({error:"تغییرات پیدا نشد"})
            return
        }
        delete changeList._id
        dataList?await company.updateOne({managerPhone:data.managerPhone},
            {$set:changeList}):
            await company.create(changeList)
        await coChange.deleteOne({managerPhone:data.managerPhone})
        res.json({data:dataList,message:"اطلاعات شرکت بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/set-company',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    //const companyId = req.body.companyId
    var req=req.body
    const clientData = userId&&await clients.findOne({_id:ObjectID(userId)})
    if(!clientData){
        res.status(400).json({error:"کاربر پیدا نشد"})
            return
    }
    const oldChange = await coChange.findOne({managerPhone:clientData.phone})
    
    req.managerPhone = clientData.phone
    try{
        const reqList = oldChange?
            await coChange.updateOne({managerPhone:clientData.phone},{$set:req}):
            await coChange.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-company',jsonParser,auth, async (req,res)=>{
    const managerId = req.headers['userid']
    const managerPhone = req.body.managerPhone
    if(!managerPhone){
        res.status(400).json({error:"کاربر انتخاب نشد"})
            return
    }
    var publish = req.body.publish?req.body.publish:false
    const clientData = await clients.findOne({phone:managerPhone})
    if(!clientData){
        res.status(400).json({error:"کاربر پیدا نشد"})
            return
    }
    try{
        const dataList = await company.findOne({managerPhone:managerPhone})
        if(!dataList){
            res.status(400).json({error:"کاربر صفحه ندارد"})
                return
        }
        await company.updateOne({managerPhone:managerPhone},
            {$set:{publish:publish}}
        )


        res.json({message:"اطلاعات بروز شدند"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/list-category',jsonParser, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
    }
    try{
        const dataList = await category.aggregate([
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
        const reqList = await category.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-category',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var nowDate = new Date().toISOString().slice(0, 10).split('-')
    var defaultDate = parseInt(nowDate[0])-1+"/"+
    nowDate[1]+"/"+nowDate[2]
    
    //console.log("def: ",defaultDate)
    var data={
        title:StandardInput(req.body.title),
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


        res.json({data:pageData,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/list-unit',jsonParser, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
    }
    try{
        const dataList = await unit.aggregate([
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

router.post('/set-unit',jsonParser,auth, async (req,res)=>{
    
    var req=req.body
    try{
        const reqList = await unit.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-unit',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var nowDate = new Date().toISOString().slice(0, 10).split('-')
    var defaultDate = parseInt(nowDate[0])-1+"/"+
    nowDate[1]+"/"+nowDate[2]
    
    //console.log("def: ",defaultDate)
    var data={
        title:StandardInput(req.body.title),
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


        res.json({data:pageData,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/list-licence',jsonParser, async (req,res)=>{
    
    var data={
        search:req.body.search,
        title:req.body.title,
    }
    try{
        const dataList = await licence.aggregate([
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

router.post('/set-licence',jsonParser,auth, async (req,res)=>{
    
    var req=req.body
    try{
        const reqList = await licence.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-licence',jsonParser, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var nowDate = new Date().toISOString().slice(0, 10).split('-')
    var defaultDate = parseInt(nowDate[0])-1+"/"+
    nowDate[1]+"/"+nowDate[2]
    
    //console.log("def: ",defaultDate)
    var data={
        title:StandardInput(req.body.title),
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


        res.json({data:pageData,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/list-home',jsonParser, async (req,res)=>{
    try{
        const categoryList = await category.find({title:{$exists:true}})
        const unitList = await unit.find()
        const licenceList = await licence.find()
        res.json({categoryList,unitList,licenceList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/company-filter',jsonParser, async (req,res)=>{
    const catFilter = req.body.catId
    try{
        const companyList = await company.aggregate([
            {$match:catFilter?
            {category:catFilter}:{}}, 
            {$match:{publish:true}},
            {$limit:9}
        ])
        for(var i=0;i<companyList.length;i++){
            var unitData = await unit.findOne({_id:ObjectID(companyList[i].unit)})
            var catData = await category.findOne({_id:ObjectID(companyList[i].category)})
            companyList.unitData = unitData
            companyList.catData = catData

        }
        res.json({data:companyList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;