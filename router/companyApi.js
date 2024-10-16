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
            const unitList = await unit.find()
            
            if(companyChange){
                var cCat = companyChange&&companyChange.category&&
                catList.find(item=>item._id == companyChange.category)
                companyChange.catName = cCat?cCat.title:""
                var cUnit = companyChange&&companyChange.unit&&
                unitList.find(item=>item._id == companyChange.unit)
            
                companyChange.unitName = cUnit?cUnit.title:""
            }
            if(companyDetail){
                var cCat = companyDetail&&companyDetail.category&&
                catList.find(item=>item._id == companyDetail.category)
                companyDetail.catName = cCat?cCat.title:""
                var cUnit = companyDetail&&companyDetail.unit&&
                unitList.find(item=>item._id == companyDetail.unit)
            
                companyDetail.unitName = cUnit?cUnit.title:""
            }
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
        const companyDetail = await company.findOne({_id:ObjectID(url)}).lean()
        if(companyDetail){
            
            var unitData = await unit.findOne({_id:ObjectID(companyDetail.unit)})
            var catData = await category.findOne({_id:ObjectID(companyDetail.category)})
            companyDetail.unitData = unitData
            companyDetail.catData = catData
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
    var catId= req.body.id
    var data=req.body
    if(!catId){
        res.status(400).json({error:"کد دسته بندی وارد نشده است"})
        return
    }
    try{
        const catData = await category.findOne({_id:ObjectID(catId)})
        if(!catData){
            res.status(400).json({error:"دسته بندی پیدا نشد"})
            return
        }
        await category.updateOne({_id:ObjectID(catId)},{$set:data})
        res.json({message:"اطلاعات بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/remove-category',jsonParser,auth, async (req,res)=>{
    var categoryId= req.body.id
    if(!categoryId){
        res.status(400).json({error:"کد وارد نشده است"})
        return
    }
    try{
        await category.deleteOne({_id:ObjectID(categoryId)})
        res.json({message:"اطلاعات حذف شد"})
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
router.post('/update-unit',jsonParser,auth, async (req,res)=>{
    var unitId= req.body.id
    var data=req.body
    if(!unitId){
        res.status(400).json({error:"کد دسته بندی وارد نشده است"})
        return
    }
    try{
        const unitData = await unit.findOne({_id:ObjectID(unitId)})
        if(!unitData){
            res.status(400).json({error:" پیدا نشد"})
            return
        }
        await unit.updateOne({_id:ObjectID(unitId)},{$set:data})
        res.json({message:"اطلاعات بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/remove-unit',jsonParser,auth, async (req,res)=>{
    var unitId= req.body.id
    if(!unitId){
        res.status(400).json({error:"کد وارد نشده است"})
        return
    }
    try{
        await unit.deleteOne({_id:ObjectID(unitId)})
        res.json({message:"اطلاعات حذف شد"})
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
router.post('/update-licence',jsonParser,auth, async (req,res)=>{
    var licenceId= req.body.id
    var data=req.body
    if(!licenceId){
        res.status(400).json({error:"کد  وارد نشده است"})
        return
    }
    try{
        const licenceData = await licence.findOne({_id:ObjectID(licenceId)})
        if(!licenceData){
            res.status(400).json({error:"پیدا نشد"})
            return
        }
        await licence.updateOne({_id:ObjectID(licenceId)},{$set:data})
        res.json({message:"اطلاعات بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/remove-licence',jsonParser,auth, async (req,res)=>{
    var licenceId= req.body.id
    if(!licenceId){
        res.status(400).json({error:"کد وارد نشده است"})
        return
    }
    try{
        await licence.deleteOne({_id:ObjectID(licenceId)})
        res.json({message:"اطلاعات حذف شد"})
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
            companyList[i].unitData = unitData
            companyList[i].catData = catData

        }
        res.json({data:companyList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;