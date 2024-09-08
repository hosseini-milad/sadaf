const clients = require('../models/auth/clients');
const cowork = require('../models/cowork');

var ObjectID = require('mongodb').ObjectID;

const {ZIBAL_URL,ZIBAL_Merchant,RETURN_URL} = process.env

exports.pay = async (req, res) => {
    const reserveId = req.query.reserveid
    var trackId=''
    console.log("step01")
    const reserveData=await cowork.findOne({reserveid:reserveId})
    
    if(!reserveData){
        res.status(400).json({message:"سفارش پیدا نشد",error:true})
    }
    const userData = await clients.findOne({_id:ObjectID(reserveData.userId)})
    console.log("step02")
    try{    
        response = await fetch(ZIBAL_URL,
        {method: 'POST' , 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(
            {
                "merchant": ZIBAL_Merchant,
                "amount": reserveData.price,
                "callbackUrl": RETURN_URL,
                "description": "OrderTest",
                "orderId": reserveId,
                "mobile": userData&&userData.phone
            }
        )});
        console.log("step03")
    const result = await response.json();
    trackId = result.trackId
    var requestZibal = `https://gateway.zibal.ir/start/`+trackId
    console.log("step04")

    await cowork.updateOne({reserveid:reserveId},
        {$set:{trackId:trackId}})

    return(res.render(`zibal_payment.ejs`,{url:requestZibal}))
    }
    catch{}
    
};
exports.callBack=async (req,res)=>{
    const reserveId = req.query.orderId
    const trackId = req.body.trackId
    const success = req.query.reserveid
    const payCode = req.query.status
    const payMessage = findError(payCode)
    await cowork.updateOne({reserveid:reserveId},
        {$set:{payMessage,payCode}}
    )
    if(success){
        return(res.render(`zibal_correct.ejs`,{url:requestZibal}))
    }
    else{
        return(res.render(`zibal_error.ejs`,{url:requestZibal}))
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

