const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const jsonParser = bodyParser.json();
var ObjectID = require('mongodb').ObjectID;
const dataSchema = require('../models/data')
const auth = require("../middleware/auth");
const clients = require('../models/auth/clients');

router.get('/welcome',jsonParser,auth, async (req,res)=>{
    res.json({auth:true})
})

router.get('/fetch-client',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    try{
        
        const userData = await clients.findOne({_id:ObjectID(userId)})
        res.json({data:userData})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-client',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    const changes = req.body
    try{
        const userData = await clients.updateOne({_id:ObjectID(userId)},
        {$set:changes})
        res.json({data:userData})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/list-client',jsonParser,auth, async (req,res)=>{
    const userId = req.headers["userid"]
    try{
        
        const userData = await clients.find({})
        res.json({data:userData})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router;