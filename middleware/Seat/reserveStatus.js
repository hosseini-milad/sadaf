
async function ReserveStatus(canReserve,isActive,reserveCode,userId) {
  var message =''
  var calendar = false
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
    calendar=true
    buttons=[{
        class:"cl-button -primary -small -light ga_nav_link homepage-hp-nav ",
        title:"پرداخت آنلاین",
        acceptDate:true,
        href:"https://reserveadmin.qomstp.ir/api/payment/reserve-pay?user="+userId
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
        acceptDate:true,
        href:"https://reserveadmin.qomstp.ir/api/payment/sadad?reserveid="+reserveCode+
            "&user="+userId
    },{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"مشاهده جزئیات رزرو",
        href:"/profile#myreserve"
    },{
        class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
        title:"لغو رزرو قبلی",
        href:"/profile#myreserve"
    }]
      return({message,buttons})  
    }
    else if(isActive){
        message = `رزرو فعال تا ${isActive} روز دیگر دارید.`
        calendar=true
        buttons=[{
            class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
            title:"مشاهده جزئیات رزرو",
            href:"/profile#myreserve"
        },{
            class:"cl-button -primary -small -light ga_nav_link homepage-hp-nav ",
            title:"رزرو اتاق جلسات",
            acceptDate:true,
            href:"#"
        }]
    return({message,buttons})  
    }
    else{
        message = `رزرو شما منقضی شده است `
        calendar=true
        buttons=[{
            class:"cl-button -secondary -small -light ga_nav_link homepage-hp-nav",
            title:"مشاهده جزئیات رزرو",
            href:"/profile#myreserve"
        },{
            class:"cl-button -primary -small -light ga_nav_link homepage-hp-nav ",
            title:"تمدید رزرو",
            acceptDate:true,
            href:"https://reserveadmin.qomstp.ir/api/payment/reserve-pay?user="+userId
        }]
    return({message,buttons,calendar}) 
    }
}
module.exports =ReserveStatus