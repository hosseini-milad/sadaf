
async function ReserveStatus(canReserve,isActive,reserveCode) {
  var message =''
  var buttons =[]
  if(!canReserve){
    message = "لطفا اطلاعات کاربری خود را تکمیل نمایید."
    buttons=[{
        class:"cl-button disableBtn -small -light ga_nav_link homepage-hp-nav ",
        title:"پرداخت آنلاین",
        href:"#"
    },{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"تکمیل پروفایل کاربری",
        href:"/profile"
    }]
    return({message,buttons})  
    }
  if(isActive=="noData"){
    message = "سفارش صندلی اشتراکی."
    buttons=[{
        class:"cl-button -primary -small -light ga_nav_link homepage-hp-nav ",
        title:"پرداخت آنلاین",
        href:"https://reserveadmin.qomstp.ir/api/payment/reserve-pay"
    },{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"پروفایل کاربری",
        href:"/profile"
    }]
    return({message,buttons})  
    }
    if(isActive=="notPaid"){
      message = "شما درخواست غیر فعالی دارید."
      buttons=[{
        class:"cl-button -primary -small -light ga_nav_link homepage-hp-nav ",
        title:"پرداخت آنلاین",
        href:"https://reserveadmin.qomstp.ir/api/payment/sadad?reserveid="+reserveCode
    },{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"مشاهده جزئیات رزرو",
        href:"/profile#myreserve"
    },{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"لغو رزرو قبلی",
        href:"#"
    }]
      return({message,buttons})  
    }
    else{
message = `رزرو فعال تا ${isActive} روز دیگر دارید.`
    buttons=[{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"مشاهده جزئیات رزرو",
        href:"/profile#myreserve"
    },{
        class:"cl-button -primary -small -light ga_nav_link homepage-hp-nav ",
        title:"رزرو اتاق جلسات",
        href:"#"
    }]
    return({message,buttons})  
    }
}
module.exports =ReserveStatus