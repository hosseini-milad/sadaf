const { default: fetch } = require("node-fetch");
const clients = require('../models/auth/clients');
const cowork = require('../models/cowork');
const transactions = require("../models/transactions");

var ObjectID = require('mongodb').ObjectID;

const {ZIBAL_URL,ZIBAL_Merchant,RETURN_URL} = process.env

exports.pay = async (req, res) => {
    const reserveId = req.query.reserveid
    var trackId=''
    const reserveData=await cowork.findOne({reserveid:reserveId})
    
    if(!reserveData){
        res.status(400).json({message:"سفارش پیدا نشد",error:true})
        return
    }
    if(reserveData.isPaid){
        res.status(400).json({message:"سفارش پرداخت شده است",error:true})
        return
    }
    const userData = await clients.findOne({_id:ObjectID(reserveData.userId)})
    
    try{    
        const body= {
            "merchant": ZIBAL_Merchant,
            "amount": reserveData.price,
            "callbackUrl": RETURN_URL,
            "description": "OrderTest",
            "orderId": reserveId,
            "mobile": userData&&userData.phone
        }
        console.log(body)
        response = await fetch(ZIBAL_URL,
        {method: 'POST' , 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)});
    const result = await response.json();
    trackId = result.trackId
    var requestZibal = `https://gateway.zibal.ir/start/`+trackId
    

    await cowork.updateOne({reserveid:reserveId},
        {$set:{trackId:trackId}})

    return(res.render(`zibal_payment.ejs`,{url:requestZibal,error:result.message}))
    }
    catch{}
    
};
exports.callBack=async (req,res)=>{
    const reserveId = req.query.orderId
    const trackId = req.query.trackId
    const success = req.query.success
    const payCode = req.query.status
    const payMessage = findError(payCode)
    const orderData = await cowork.findOne({reserveid:reserveId})
    
    await transactions.create({
        reserveId: reserveId,
        userId: orderData&&orderData.userId,
        payMessage:payMessage,
        trackId:trackId,
        status:payCode,
        success:success,
        date:Date.now()
    })
    await cowork.updateOne({reserveid:reserveId},
        {$set:{payCode,payMessage,
            isPaid:success,trackId,date:Date.now()}}
    )
    if(success=="1"){
        return(res.render(`zibal_correct.ejs`,{url:"requestZibal"}))
    }
    else{
        return(res.render(`zibal_error.ejs`,{url:"requestZibal"}))
    }
}
const findError=(code)=>{
    const errorArray=[
        {id:"-1", message:"در انتظار پردخت"},
        {id:"-2", message:	"خطای داخلی"},
        {id:"1", message:	"پرداخت شده - تاییدشده"},
        {id:"2", message:	"پرداخت شده - تاییدنشده"},
        {id:"3", message:	"لغوشده توسط کاربر"},
        {id:"4", message:	"‌شماره کارت نامعتبر می‌باشد."},
        {id:"5", message:	"‌موجودی حساب کافی نمی‌باشد."},
        {id:"6", message:	"رمز واردشده اشتباه می‌باشد."},
        {id:"7", message:	"‌تعداد درخواست‌ها بیش از حد مجاز می‌باشد."},
        {id:"8", message:	"‌تعداد پرداخت اینترنتی روزانه بیش از حد مجاز می‌باشد."},
        {id:"9", message:	"مبلغ پرداخت اینترنتی روزانه بیش از حد مجاز می‌باشد."},
        {id:"10", message:	"‌صادرکننده‌ی کارت نامعتبر می‌باشد."},
        {id:"11", message:	"‌خطای سوییچ"},
        {id:"12", message:	"کارت قابل دسترسی نمی‌باشد."},
    ]
    const result = errorArray.find(item=>item.id==code)
    return(result&&result.message)
}

