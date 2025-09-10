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
    text=tahodText
    abstract=tahodAbstract
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
    return({message,buttons,text,abstract,calendar})  
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

var tahodText = `ضوابط و مقررات استفاده از فضای کار اشتراکی شتاب <br/>
<ul class="bullotText">
<li>حفظ و رعایت شئونات اخلاقی و رفتاری بر اساس ارزش‌ها و مبانی اسلامی الزامی است.</li>
<li>حداکثر زمان استفاده رایگان از اتاق جلسات در روز 3 ساعت و در ماه 20 ساعت  می باشد و مازاد بر این زمان مستلزم پرداخت هزینه (هر ساعت 100 هزار تومان) می باشد.</li>
<li>استفاده از اتاق جلسات صرفا با رزرو و درج اطلاعات شخص و روز و ساعت در فایل مربوطه امکان پذیر می باشد(لینک درج اطلاعات و رزرو بر روی درب اتاق جلسات می باشد)</li>
<li>به هیچ عنوان از اتاق جلسات برای صرف نهار استفاده ننمایید</li>
<li>قرار دادن جعبه و هر وسیله اضافی در زمان خروج یا عدم حضور در فضای کار اشتراکی ممنوع است.</li>
<li>استفاده از کیس و مانیتور ممنوع می باشد.</li>
<li>رزرو دوره بعدی پیش از انقضای دوره فعلی بایستی انجام شود.</li>
<li>در صورت عدم تمایل به رزرو دوره بعدی، به مرکز نوآوری اطلاع دهید.</li>
<li>صرفا شخص رزرو کننده که اطلاعات ایشان ثبت شده امکان استفاده از فضای کار اشتراکی را دارد.</li>
<li>عدم استعمال دخانیات در فضاهای سرپوشیده الزامی است</li>
<li>ایجاد آلودگی صوتی و استفاده از تلفن همراه (مکالمه) در فضای کار اشتراکی ممنوع است.</li>
<li>رعایت نظافت و بهداشت در فضای کار اشتراکی مورد تاکید است</li>
<li>عدم حضور افراد اضافی در محل فضای کار اشتراکی الزامی است</li>
<li>تردد در فضای کار اشتراکی صرفا در زمان های قید شده و اطلاع رسانی شده می باشد </li>
<li>پارک هیچ‌گونه مسئولیتی در قبال محافظت از تجهیزات و وسایل موجود در فضای کار اشتراکی ندارد و مسئولیت مراقبت از وسایل به عهده خود فرد می باشد.</li>
<li>حضور خبرنگار و یا نماینده اصحاب رسانه برای فیلم‌برداری و یا ثبت گزارش در محل پارک فقط با هماهنگی قبلی با واحد روابط عمومی پارک امکان پذیر است.</li>
<li>هیچ گونه نامه یا بسته پستی توسط نگهبانی پارک دریافت نخواهد شد. </li>
<li>به منظور برگزاری جلسات مهم و رسمی با حضور مسئولین محترم استانی و ملی، حداقل یک هفته قبل از تاریخ برگزاری به صورت کتبی به واحد روابط عمومی و امور بین الملل پارک اعلام و هماهنگ شود.</li>
<li>صرفا شخص رزرو کننده که اطلاعات ایشان ثبت شده است امکان استفاده از صندلی را در طول دوره رزرو دارد </li>
</ul>
در صورت عدم رعایت موارد فوق، رزرو دوره های بعدی امکان پذیر نیست`
var tahodAbstract=`ضوابط و مقررات استفاده از فضای کار اشتراکی شتاب <br/>
<ul class="bullotText">
<li>حفظ و رعایت شئونات اخلاقی و رفتاری بر اساس ارزش‌ها و مبانی اسلامی الزامی است.</li>
<li>حداکثر زمان استفاده رایگان از اتاق جلسات در روز 3 ساعت و در ماه 20 ساعت  می باشد و مازاد بر این زمان مستلزم پرداخت هزینه (هر ساعت 100 هزار تومان) می باشد.</li>
<li>استفاده از اتاق جلسات صرفا با رزرو و درج اطلاعات شخص و روز و ساعت در فایل مربوطه امکان پذیر می باشد(لینک درج اطلاعات و رزرو بر روی درب اتاق جلسات می باشد)</li>
</ul>
...`