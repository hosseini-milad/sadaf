import errortrans from "../translate/error"
import LanguageSwitcher from "./LanguageSwitcher"

const Footer = (props)=>{
    
    return(
<footer id="site-footer" className={props.dir==="rtl"?"rtlDir footerClass":"footerClass"}>
  <div className="container">
    <div className="clear40"></div>
    <div className="row">
      <div className="col-sm-6">
        <p>
          <strong>پارک علم و فناوی استان قم</strong>
        </p>
        پارک علم و فناوری استان قم به عنوان نهاد سازمان حامی توسعه فناوری و اقتصاد دانش بنیان در سطح استان قم، با ساختار مصوّب و کارشناسان جوان فعالیت خود را از ابتدای سال ۱۳۹۱ آغاز کرد و مصمم است به عنوان رکن تعیین کننده فناوری و اقتصاد دانش محور استان قم تبدیل شود. با توجه به ظرفیت های این پارک در حمایت از مؤسسات و شرکت های دانش بنیان، تبدیل دانش به محصول، ارائه فناوری به بازار و صنعت، ایجاد درآمد، و گسترش اشتغال با تکیه بر تخصص و نوآوری فناوران و صنعتگران استان، میتوان پارک علم و فناوری استان قم را پیشگام در پیشرفت و تعالی استان مبتنی بر کسب و کارهای دانش بنیان و تولید فناوری تقاضا محور دانست. پارک علم و فناوری استان قم هم اکنون دارای دو مرکز رشد علوم انسانی و اسلامی و مرکز رشد واحدهای فناور و مدیریت امور موسسات است.
        <br />
        
      </div>
      <div className="col-sm-3">
        <p>
          <strong>رزرواسیون</strong>
        </p><hr/>
        <a href="/cowork">صندلی اشتراکی</a><br/>
        <a href="/suit">سوییت ها</a><br/>
        <a href="/session">سالن جلسات</a><br/>
        <br />
      </div>
      <div className="col-sm-3">
        <p>
          <strong>اطلاعات تماس</strong>
        </p>
        <hr className="visible-xs-block" />
        <p>
           آدرس: قم، پردیسان، بلوار دانشگاه، ابتدای بلوار مولوی<br/>
            کد پستی: ۳۷۴۹۱۱۳۹۱۶<br/>
            <a href="phone:02532220000">تلفن: ۰۲۵۳۲۲۲۰۲۳۰ </a><br/>
        </p>
        
      </div>
      
    </div>
  </div>
</footer>
    )
}
export default Footer