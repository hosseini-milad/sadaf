const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var ObjectID = require('mongodb').ObjectID;
const dataSchema = require('../models/data')

const jalali_to_gregorian = require('../middleware/DateConvert');
const DateCat = require('../middleware/DateCat');
const data = require('../models/data');


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


module.exports = router;