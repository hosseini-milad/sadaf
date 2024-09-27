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

var storage = multer.diskStorage(
    {
        destination: '/dataset/',
        filename: function ( req, file, cb ) {
            cb( null, "Deep"+ '-' + Date.now()+ '-'+file.originalname);
        }
    }
  );
  const uploadImg = multer({ storage: storage ,
    limits: { fileSize: "5mb" }})

router.post('/upload',uploadImg.single('upload'), async(req, res, next)=>{
    const folderName = req.body.folderName?req.body.folderName:"temp"
    try{
    // to declare some path to store your converted image
    var matches = req.body.base64image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    response = {};
    if (matches.length !== 3) {
    return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer.from(matches[2], 'base64');
    let decodedImg = response;
    let imageBuffer = decodedImg.data;
    //let type = decodedImg.type;
    //let extension = mime.extension(type);
    let fileName = `QOMSTP-${Date.now().toString()+"-"+req.body.imgName}`;
   var upUrl = `/upload/${folderName}/${fileName}`
    fs.writeFileSync("."+upUrl, imageBuffer, 'utf8');
    return res.send({"status":"success",url:upUrl});
    } catch (e) {
        res.send({"status":"failed",error:e});
    }
})

module.exports = router;