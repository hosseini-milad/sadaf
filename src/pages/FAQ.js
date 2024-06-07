
import { useState } from "react"
import errortrans from "../translate/error"

function FAQ(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    const [open,setOpen] = useState(-1)
    const data=[
        {   id:"1",
            q:"بیجیب تریپ چطور کار میکنه?",
            a:"زمانی که به عنوان یک «بیجیب تریپر» ثبت نام میکنید، میتوانید به مدت اشتراک به لیست میزبان ها دسترسی داشته باشید. شما میتوانید مستقیما با خانواده های میزبان و پروژه های اجتماعی تماس بگیرید تا همکاری خود را آغاز کنید"   
        },
        {   id:"2",
            q:"چطور میتونم به بیجیب تریپ اعتماد کنم؟",
            a:"مطالعه دقیق امنیت در بیجیب تریپ",
            link:"/safety"
        },
        {   id:"3",
            q:"من بعنوان بیجیب تریپر باید چیکار کنم؟",
            a:"بطور کلی از شما انتظار می رود در ازای محل اقامت و غذا، حدود ۵ساعت در روز کمک کنید. شرایط و توافقات ممکن است بسته به مهارت هایی که میتوانید ارائه دهید و نیازهای هر میزبان  متفاوت است. مهم است که قبل از شروع سفر، حتما با میزبان خود درمورد تمامی موارد توافق کنید",
            
        },
        {   id:"4",
            q:"آیا میزبان ها میتوانند من را جستجو کنند؟",
            a:"بله، میزبان های میتوانند بیجیب تریپرها را بر اساس مهارت ها و در دسترس بودن لحظه آخری و همچنین مقصد و مبدا جستجو کنند و با آنها ارتباط برقرار کنند. به همین دلیل ضروری است که اطلاعات دقیقی درمورد مهارت های خود وهمچنین تاریخ ها و مکان هایی که به آن سفر میکنید ارائه دهید",
            
        },
        {   id:"5",
            q:"آیا در سفر از من حمایت میکنید؟ ",
            a:"تلاش خوبی بود، اما نه!  با این حال اگر شما ایده ای درمورد چگونگی ترویج بیجیب تریپ دارید ما همیشه گوش خواهیم داد. پس تخیلی خود را بکار بگیرید و به ما پیشنهاد بدید",
            
        },
        {   id:"6",
            q:"حداقل سن برای بیجیب تریپر شدن چندساله؟ ",
            a:"برای ثبت پروفایل باید ۱۸سال سن داشته باشید",
            
        },
    ]
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            <div>
                <div className="container">
                    <div className="clear40"></div>
                    <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h2 className="headline-main text-center">سوالات متداول</h2>
                        <div className="clear20"></div>
                        <div className="panel-group panel-group-basic" id="accordion_faq" role="tablist" aria-multiselectable="true">
                            {data&&data.map((faq,i)=>(
                                <div className="panel panel-default" key={i} onClick={()=>setOpen(open==i?-1:i)}>
                                <div className="panel-heading" role="tab" id="faq_heading_43">
                                <h3 className="panel-title">
                                    <a className="collapsed" role="button">
                                        {faq.q} </a>
                                </h3>
                                </div>
                                <div id="faq_item_43" role="tabpanel" aria-labelledby="faq_heading_43"
                                className={open==i?"panel-collapse collapse in":"panel-collapse collapse"} >
                                <div className="panel-body"> {faq.a}</div>
                                </div>
                            </div>
                            ))}
                        
                        </div>
                    </div>
                    </div>
                    <div className="clear20"></div>
                    <div className="text-center">
                    <a href="/en/info/faq" className="btn btn-info btn-lg text-wrap"> سوالات بیشتر </a>
                    </div>
                    <div className="clear40"></div>
                </div>
                </div>
        </main>
    )
}
export default FAQ