const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var ObjectID = require('mongodb').ObjectID;
const dataSchema = require('../models/data')
const auth = require("../middleware/auth");
const clients = require('../models/auth/clients');
const cowork = require('../models/cowork');
const jalali_to_gregorian = require('../middleware/DateConvert');
const CheckActive = require('../middleware/CheckActive');
const CanReserve = require('../middleware/CanReserve');
const CreateReserveID = require('../middleware/CreateReserveID');



router.get('/fetch-cowork',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    try{
        
        const userData = await clients.findOne({_id:ObjectID(userId)})
        var canReserve = await CanReserve(userData)
        const coWorkData = await cowork.findOne({userId:userId})
        const isActive = await CheckActive(coWorkData)
        res.json({user:userData,cowork:coWorkData,
            isActive,canReserve})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/set-cowork',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    var changes = req.body 
    changes.userId = userId
    changes.reserveid = await CreateReserveID("co")
    changes.price = 15000//5000000
    
    try{
        const userData = await clients.findOne({_id:ObjectID(userId)})
        if(!changes.sDate){
            res.status(400).json({message:"زمان وارد نشده است",error:true})
            return
        }
        var myDate = jalali_to_gregorian(changes.sDate.year,
            changes.sDate.month,changes.sDate.day)
        var enDate = myDate[0]+"/"+myDate[1]+"/"+myDate[2]

        changes.sDate = enDate
        const coWorkData = await cowork.create(changes)
        res.json({data:userData,coWorkData,
            reserveid:changes.reserveid})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/my-reserve',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    try{
        const userData = await clients.findOne({_id:ObjectID(userId)})
        if(!userData){
            res.status(400).json({message:"زمان وارد نشده است",error:true})
            return
        }
        const coWorkData = await cowork.find({userId:userId})
        res.json({data:userData,coWorkData})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;