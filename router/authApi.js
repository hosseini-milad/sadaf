const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
var ObjectID = require('mongodb').ObjectID;
const jsonParser = bodyParser.json();
const router = express.Router()
const auth = require("../middleware/auth");
const User = require("../models/auth/users");
var Kavenegar = require('kavenegar');
const clients = require('../models/auth/clients');
const SMSSend = require('../middleware/SMSSend');
var api = Kavenegar.KavenegarApi({
  apikey: process.env.SMS_API
});

router.post('/login',jsonParser, async (req,res)=>{
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
          res.status(400).json({error:"All input is required"});
          return;
        }
        // Validate if user exist in our database
        const user = await User.findOne({username: username });
        //console.log(user)
        if(!user){
          res.status(400).json({error:"user not found"});
          return;
        }
        if(!user.password){
          res.status(400).json({error:"password not set"});
          return;
        }
        if(user.active==="false"){
          res.status(400).json({error:"user not active"});
          return;
        }
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {expiresIn: "72h",}
          );
          user.token = token;
          res.status(200).json(user);
          return;
        }
        if (user && password===user.password){
          const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {expiresIn: "12h",}
          );
          user.token = token;
          res.status(200).json(user);
          return;
        }
        else{
          res.status(400).json({error:"Invalid Password"}); 
        }
        } 
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/login-customer',jsonParser, async (req,res)=>{
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
          res.status(400).json({error:"All input is required"});
          return;
        }
        // Validate if user exist in our database
        const user = await User.findOne({username: username });
        //console.log(user)
        if(!user){
          res.status(400).json({error:"user not found"});
          return;
        }
        if(!user.password){
          res.status(400).json({error:"password not set"});
          return;
        }
        if(user.active==="false"){
          res.status(400).json({error:"user not active"});
          return;
        }
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {expiresIn: "72h",}
          );
          user.token = token;
          res.status(200).json(user);
          return;
        }
        if (user && password===user.password){
          const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {expiresIn: "12h",}
          );
          user.token = token;
          res.status(200).json(user);
          return;
        }
        else{
          res.status(400).json({error:"Invalid Password"}); 
        }
        } 
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/send-OTP',jsonParser, async (req,res)=>{
  try {
      const { phone } = req.body;
      if(!phone){
        res.status(400).json({error:"شماره تماس وارد نشده است"});
        return;
      }
      const user = await clients.findOne({phone: phone }).lean()
      
      var otpValue = Math.floor(Math.random() * 8999)+1000 ;
      if(user){
        await clients.updateOne(
          {phone:phone},{$set:{otp:otpValue}});
        const token = jwt.sign(
          { user_id: user._id, phone },
          process.env.TOKEN_KEY,
          {expiresIn: "72h",}
        );
        user.token = token;
        await SMSSend(phone,`کد ورود: ${otpValue}\n\r
          سامانه رزرو پارک علم و فناوری استان قم`)
        res.status(200).json({...user,otp:otpValue});
        return;
      }
      else{
        await clients.create(
          {phone:phone,otp:otpValue});
        const newUser = await clients.findOne({phone:phone}).lean()
        const token = jwt.sign(
          { user_id: newUser._id, phone },
          process.env.TOKEN_KEY,
          {expiresIn: "72h",}
        );
        newUser.token = token;
        res.status(200).json({...newUser,otp:otpValue,message:"new user"});
        return;
      }
      
      } 
  catch(error){
      res.status(500).json({message: error.message})
  }
})
router.post('/login-OTP',jsonParser, async (req,res)=>{
  try {
    // Get user input
    const data ={ phone, otp } = req.body;

    // Validate user input
    if (!(phone && otp)) {
      res.status(400).send("All input is required");
      return;
    }
    // Validate if user exist in our database
    const user = await clients.findOne({phone: phone }).lean()
    
    ////console.log((user , phone)
    if (user && otp===user.otp) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, phone },
        process.env.TOKEN_KEY,
        {
          expiresIn: "48h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
      return;
    }
    if(user && otp!==user.otp){
      res.status(400).json({
        "error":"wrong otp"
      });
    }
    //res.status().send("Invalid Credentials");
  } catch (err) {
    //console.log((err);
  }
})
module.exports = router;