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
const mehvar = require('../models/mehvar');
const mehvarSchedule = require('../models/mehvarSchedule');
const mehvarGoal = require('../models/mehvarGoal');
const mehvarSubject = require('../models/mehvarSubject');

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
    const activeMehvar = await mehvar.findOne({active:true})
    if(!activeMehvar){
            return res.status(400).json({error:"not active mehvar"})
        }
    req.mehvar = activeMehvar.mehvarCode
    try{
        const reqList = await ReqSchema.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد",
            id:reqList._id
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/update-req',jsonParser,auth, async (req,res)=>{
    var req=req.body
    try{
        const reqList = await ReqSchema.updateOne({_id:ObjectID(req.id)},
            {$set:req}
        )


        res.json({data:reqList,message:"اطلاعات بروز شد"})
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
        active:req.body.active?req.body.active:"فعال",
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
    const activeMehvar = await mehvar.findOne({active:true})
    if(!activeMehvar){
            return res.status(400).json({error:"not active mehvar"})
        }
    const mehvarInfo = activeMehvar.mehvarCode
    try{
        const dataList = await ReqSchema.aggregate([
            { $match :{mehvar:mehvarInfo}},
            { $match:data.title?{$or:[
                {title:new RegExp('.*' + data.title + '.*')},
                {proofUsage:new RegExp('.*' + data.title + '.*')},
                {nahad:new RegExp('.*' + data.title + '.*')},
                {proofReq:new RegExp('.*' + data.title + '.*')}]}:{}},
            //{ $match:data.active=="غیرفعال"?{}:{active:true}},
            { $match:data.category?{category:data.category}:{}},
            { $match:!data.title?{date:{$gte:new Date(data.dateFrom)}}:{}},
            { $match:!data.title?{date:{$lte:new Date(data.dateTo)}}:{}},
            { $sort: {"date":-1}},
     
        ])

        const pageData = data.category?dataList:dataList.slice(offset,
            (parseInt(offset)+parseInt(pageSize)))  
        for(var i=0;i<pageData.length;i++){
            const userData = await clients.findOne({_id:ObjectID(pageData[i].userId)})
            const ideaData = await idea.find({reqCode:pageData[i]._id}).lean()
            console.log(ideaData.length)
            for(var i=0;i<ideaData.length;i++){
                const ideaUser = ideaData[i].userId
                if(!ideaUser) continue
                console.log(ideaUser)
                var ideaUserData = await clients.findOne({_id:ObjectID(ideaUser)})
                if(!ideaUserData) continue
                ideaData[i].userData = ideaUserData
            }
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
router.post('/my-request',jsonParser,auth, async (req,res)=>{
    var userId = req.headers['userid']
    var req=req.body
    
    try{
        const reqList = await ReqSchema.find({userId:userId})


        res.json({data:reqList,message:"لیست درخواست ها"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-request',jsonParser,auth, async (req,res)=>{
    var userId = req.headers['userid']
    var id = req.body.id
    var data=req.body
    
    try{
        const reqData = await ReqSchema.findOne({_id:ObjectID(id)})
        if(reqData.closed){
            return res.status(400).json({error:true,
                message:"درخواست بسته است. لطفا به ادمین پیام دهید"
            })
        }
        const reqList = await ReqSchema.updateOne({_id:ObjectID(id)},{$set:data})


        res.json({data:reqList,message:"آپدیت درخواست ها"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/fetch-request/:id',jsonParser,auth, async (req,res)=>{
    var userId = req.headers['userid']
    var id = req.params.id
    
    try{
        const reqList = await ReqSchema.findOne({_id:ObjectID(id),userId:userId})


        res.json({data:reqList,message:"آپدیت درخواست ها"})
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

router.get('/data-subject-list',jsonParser, async (req,res)=>{
    try{
        const activeMehvar = await mehvar.findOne({active:true})
        
        if(!activeMehvar){
            return res.status(400).json({error:"not active mehvar"})
        }
        const subject = await reqcat.find({mehvar:activeMehvar&&activeMehvar.mehvarCode}).lean()
        for(var i=0;i<subject.length;i++){
            var challengeData=await ReqSchema.
                find({category:subject[i].title})
            var challengeIds = challengeData.map(item=>item._id)
            var ideaCount=await idea.
                find({reqCode:{$in:challengeIds}}).count()
            subject[i].challengeCount = challengeIds.length
            subject[i].ideaCount=ideaCount
        }
        res.json({data:subject,category:subject})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/my-idea-list',jsonParser,auth, async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)):0;
    var search = req.body.search
    var userId = req.user.user_id
    try{
        const dataList = await idea.aggregate([
            { $match:search?{$or:[
                {title:new RegExp('.*' + data.title + '.*')},
                {proofUsage:new RegExp('.*' + data.title + '.*')},
                {nahad:new RegExp('.*' + data.title + '.*')},
                {proofReq:new RegExp('.*' + data.title + '.*')}]}:{}},
            {$match:{userId:userId}},
            { $sort: {"date":-1}},
            { $addFields: { reqId: { $toObjectId: '$reqCode' } } },
            {$lookup: {
                from: 'reqs',
                localField: 'reqId',
                foreignField: '_id',
                as: 'Data',
            },
        }
        ])

        const pageData = dataList.slice(offset,
            (parseInt(offset)+parseInt(pageSize)))  

        const subject = await reqcat.find()
        res.json({data:pageData,size:dataList.length,subject})
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
                {title:new RegExp('.*' + search + '.*')},
                {category:new RegExp('.*' + search + '.*')},
                {proofUsage:new RegExp('.*' + search + '.*')},
                {nahad:new RegExp('.*' + search + '.*')},
                {description:new RegExp('.*' + search + '.*')}]}:{}},
            {$match:{active:true}},
            { $sort: {"date":-1}},
     
        ])

        const pageData = dataList.slice(offset,
            (parseInt(offset)+parseInt(pageSize)))  

        const subject = await ReqSchema.aggregate([
            {$match:{active:true}},
            {
                $group: {
                _id: { category: "$category" } // group by both fields
                }
            },
            {
                $project: {
                _id: 0,
                title: "$_id.category"
                }
            },{$sort:{title:1}}
            ])
        res.json({data:pageData,size:dataList.length,subject})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/get-req/:id',jsonParser, async (req,res)=>{
    //const userReq = req.headers['userid']
    var userId = ''
    userId = req.headers&&req.headers['userid']//userReq?userReq.user_id:''
    const url = req.url.split('/').pop()
    try{
        const dataDetail = await ReqSchema.findOne({_id:ObjectID(url)}).lean()
        const ideaData = userId?await idea.find({reqCode:url,userId:userId}):[]
        dataDetail.ideaData = ideaData
        dataDetail.ideaCount = await idea.find({reqCode:url}).count()
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
        const mehvarData = await mehvar.find()
        const activeMehvar = await mehvar.findOne({active:true})
        if(!activeMehvar){
            return res.status(400).json({error:"not active mehvar"})
        }
    try{
        const dataList = await reqcat.aggregate([
            { $match: {mehvar:activeMehvar.mehvarCode}},
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {managerName:new RegExp('.*' + data.search + '.*')},
                {regCode:new RegExp('.*' + data.search + '.*')},
                {productTitle:new RegExp('.*' + data.search + '.*')}]}:{}},
            {$lookup:{from : "mehvars", 
                localField: "mehvar", foreignField: "mehvarCode", as : "mehvarData"}},
            { $sort: {"catCode":1}},
            { $limit: 20},
        ])

        res.json({data:dataList,size:dataList.length,mehvarData})
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

router.post('/fetch-mehvar',jsonParser, async (req,res)=>{
    const mehvarId = req.body.mehvarId
    try{
        const dataList = await mehvar.findOne({_id:ObjectID(mehvarId)})
        if(!dataList){
            res.status(400).json({error:"not found"})
            return
        }
        const scheduleList = await mehvarSchedule.find({mehvarCode:dataList.mehvarCode})
        const goalList = await mehvarGoal.find({mehvarCode:dataList.mehvarCode})

        res.json({data:dataList,goalList,scheduleList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/list-mehvar',jsonParser, async (req,res)=>{
    
    var data={
        search:req.body.search
    }
    try{
        const dataList = await mehvar.aggregate([
            { $match:data.search?{$or:[
                {title:new RegExp('.*' + data.search + '.*')},
                {mehvarCode:new RegExp('.*' + data.search + '.*')},
                {reqcat:new RegExp('.*' + data.search + '.*')}]}:{}},
            
            { $sort: {"date":-1}},
            { $limit: 10},
        ])


        res.json({data:dataList,size:dataList.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/set-mehvar',jsonParser,auth, async (req,res)=>{
    
    var req=req.body
    try{
        const reqList = await mehvar.create(req)


        res.json({data:reqList,message:"اطلاعات ثبت شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-mehvar',jsonParser, async (req,res)=>{
    var catId= req.body.id
    var data=req.body
    if(!catId){
        res.status(400).json({error:"کد دسته بندی وارد نشده است"})
        return
    }
    try{
        const catData = await mehvar.findOne({_id:ObjectID(catId)})
        if(!catData){
            res.status(400).json({error:"دسته بندی پیدا نشد"})
            return
        }
        await mehvar.updateOne({_id:ObjectID(catId)},{$set:data})
        res.json({message:"اطلاعات بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-mehvar-goal',jsonParser, async (req,res)=>{
    var mehvarId= req.body.id
    var data=req.body
    
    try{
        if(!mehvarId){
            await mehvarGoal.create(data)
        }
        else{
            await mehvarGoal.updateOne({_id:ObjectID(mehvarId)},
                {$set:data}
            )
        }
        
        res.json({message:"اطلاعات بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/update-mehvar-schedule',jsonParser, async (req,res)=>{
    var mehvarId= req.body.id
    var data=req.body
    
    try{
        if(!mehvarId){
            await mehvarSchedule.create(data)
        }
        else{
            await mehvarSchedule.updateOne({_id:ObjectID(mehvarId)},
                {$set:data}
            )
        }
        
        res.json({message:"اطلاعات بروز شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/remove-mehvar',jsonParser,auth, async (req,res)=>{
    var categoryId= req.body.id
    if(!categoryId){
        res.status(400).json({error:"کد وارد نشده است"})
        return
    }
    try{
        await mehvar.deleteOne({_id:ObjectID(categoryId)})
        res.json({message:"اطلاعات حذف شد"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;