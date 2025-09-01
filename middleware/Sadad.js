var moment = require('moment');
var ObjectID = require('mongodb').ObjectID;
const { default: fetch } = require("node-fetch");
const CreateSadadSign = require('./CreateSadadSign');
const ReserveNow = require('./Seat/reserveNow');
moment.locale('en'); 


const {SADAD_URL,SADAD_PAY_URL} = process.env

exports.pay = async (req, res) => {
    
    try{    
        var query= await CreateSadadSign("123","123000")
        console.log(query)
        var Token = "123456"
          var header = {"Content-Type":"application/json"}
    const body = {...query}
        var result =''
    try{const response = await fetch(SADAD_URL,
            {method: 'POST' ,headers:header,
        body:JSON.stringify(body)});
            
        result = await response.json();
        console.log(result)
        Token = result.Token
        } catch{}
        if(!result){
            return res.status(400).json({result,error:"Sadad errors"})
        }

    return(res.render(`sadad_payment.ejs`,
        {url:SADAD_PAY_URL+Token,error:"result.message"}))
    }
    catch(error){
        console.log("error: ",error) 
        return({error:error})
    }
    
};
exports.Reserve = async (req, res) => {
    const date = req.query.date
    const dateObject = date&&date.split('-')
    const userId = req.query.user
    try{    
        var orderData= await ReserveNow(userId,dateObject)
        const query = await CreateSadadSign(orderData.reserveid,
            orderData.price)
        var Token = "123456"
          var header = {"Content-Type":"application/json"}
    const body = {...query}
        var result =''
    try{const response = await fetch(SADAD_URL,
            {method: 'POST' ,headers:header,
        body:JSON.stringify(body)});
            
        result = await response.json();
        Token = result.Token
        } catch{}
        if(!result){
            return res.status(400).json({result,error:"Sadad errors"})
        }

    return(res.render(`sadad_payment.ejs`,
        {url:"https://reserveadmin.qomstp.ir/api/payment/gateway?token="+Token,error:"result.message"}))
    }
    catch(error){
        console.log("error: ",error) 
        return({error:error})
    }
    
};
exports.gateway= async (req, res) => {
    try{
        const token = req.query.token
        res.redirect(SADAD_PAY_URL+token); 
    }
    catch(error){
        console.log("error: ",error) 
        return({error:error})
    }
    
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
   //const faktorData = await faktor.findOne({Authority:authority})
    if(1){
        return(res.render(`sadad_correct.ejs`,{url:"/orders"}))
    }
    else{
        return(res.render(`sadad_error.ejs`,{url:"/orders"}))
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

