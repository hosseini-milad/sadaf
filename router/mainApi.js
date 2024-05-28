const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
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
        const data = req.body
        
        const dataAdd = await dataSchema.create(data)
        console.log(dataAdd)
        res.json({data:dataAdd})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router;