import errortrans from "../translate/error"
import LanguageSwitcher from "./LanguageSwitcher"

const Footer = (props)=>{
    
    return(
<footer id="site-footer" className={props.dir==="rtl"?"rtlDir":""}>
  <div className="container">
    <div className="clear40"></div>
    <div className="row">
      <div className="col-sm-3">
        <p>
          <strong>رزرواسیون</strong>
        </p>
        <a href="/cowork">رزرو صندلی اشتراکی</a>
        <br />
        
      </div>
      <div className="col-sm-3">
        <hr className="visible-xs-block" />
        <p>
          <strong>منوی2</strong>
        </p>
        <a href="/ambassador">منوی ما</a>
        <br />
      </div>
      <div className="col-sm-3">
        <hr className="visible-xs-block" />
        <p>
          <strong>اطلاعات</strong>
        </p>
        
      </div>
      <div className="col-sm-3">
        <hr className="visible-xs-block" />
        <p>
          <strong>{errortrans.language[props.lang]}</strong>
        </p>
        <a href="/de" title="deutsch" className="languageSelector" data-lang="de" data-href="/de">
          <img src="/img/gfx/de.png" />
        </a>&nbsp; <a href="/fr" title="français" className="languageSelector" data-lang="fr" data-href="/fr">
          <img src="/img/gfx/fr.png" />
        </a>&nbsp; <a href="/es" title="español" className="languageSelector" data-lang="es" data-href="/es">
          <img src="/img/gfx/es.png" />
        </a>&nbsp; <a href="/pt" title="brazil" className="languageSelector" data-lang="pt" data-href="/pt">
          <img src="/img/gfx/br.png" />
        </a>&nbsp;
      </div>
    </div>
    <div className="clear20"></div>
    <hr />
    <div className="row">
      <div className="col-md-8 col-sm-6">
        <p className="h3"></p>
        <a href="https://t.me/bijibtrip" target="_blank" className="social_circle" title="Telegram">
          <i className="fa fa-telegram fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/bijib-trip-a11959301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="social_circle" title="linkedin">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="https://youtube.com/@BijiBTrip?si=Lug37SCYxmLf4I55" target="_blank" className="social_circle" title="YouTube">
          <i className="fa fa-youtube fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/bijibtrip?igsh=MWpxMm9pa3pkMmRhOA==" target="_blank" className="social_circle" title="instagram">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <div className="clear20"></div>
      </div>
      <div className="col-md-4 col-sm-3">
        <p className="h3">تماس با ما</p>
        <div className="contactSocial">
          <a href="tel:09121212121" className="social_circle" title="Facebook">
            <i className="fa fa-phone fa-2x"></i>
          </a>
          <div className="contactNumber">
            <span className="ltrText">+9891221212</span>
            <span className="ltrText">+9893921212</span>
          </div>
        </div>
        
        <div className="clear20"></div>
      </div>
      <div className="col-md-4 col-sm-6 text-right text-left-xs"></div>
    </div>
    <div className="clear20"></div>
  </div>
</footer>
    )
}
export default Footer