import { useState } from "react"

function HelpTab(){
  const [tab,setTab]=useState(0)
    return(
        <div className="container">
        <div className="clear40"></div>
        <div className="text-center">
          <ul className="nav nav-tabs nav-tabs-howitworks" role="tablist">
            <li className={tab==0?"active":""} onClick={()=>setTab(0)}>
              <a > مسافرکار </a>
            </li>
            <li className={tab==1?"active":""} onClick={()=>setTab(1)}>
              <a > میزبان </a>
            </li>
          </ul>
        </div>
        <div className="clear40"></div>
        {tab==0?<div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <p className="text-center lead">
              <strong>اگه بیجیب تریپر هستی:</strong>
             <br/>
    برای استفاده از سایت باید یه پروفایل دقیق بسازی.هرپروژه ای که به مهارت تو نیاز داشته باشه رو میتونی با یه جستجو تو بخش میزبان ها پیدا کنی و به میزبان مورد نظرت پیام بدی تا سفرت رو شروع کنی یادت باشه که تو بعنوان بیجیب تریپر درقبال محل اسکان و غذا باید مهارتت رو بصورت رایگان ارایه میدی و میتونی بعد از توافق در مورد ساعت کار روزانه ات بقیه ی روزت رو داخل بوم منطقه سفر کنی.به همین راحتی!
    <br/><br/>
    <div class="text-center">
                <a href="/join" className="btn btn-info btn-lg text-wrap"> ثبت نام مسافرکار </a></div>
            </p>
          </div>
        </div>:<></>}
        {tab==1?<div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <p className="text-center lead">
            <strong>اگه میزبان هستی:</strong><br/>
    برای استفاده از سایت باید یه پروفایل دقیق بسازی .هرپروژه ای که توش نیاز به نیروی کار ماهر داری رو میتونی تو بخش پروژه های من ثبت کنی. بعد تریپرهایی که مهارت موردنیاز تو رو دارن پیدات میکنن و بهت پیام میدن .تو بعنوان میزبان باید برای تریپرهایی که پذیرش کردی در قبال کاری که برات انجام میده محل اسکان و غذا در نظر بگیری و تامام 
    <br/><br/>
            <div class="text-center">
                <a href="/join" className="btn btn-info btn-lg text-wrap"> ثبت نام میزبان </a></div>

            </p>
          </div>
        </div>:<></>}
        <div className="clear40"></div>
      </div>
    )
}
export default HelpTab