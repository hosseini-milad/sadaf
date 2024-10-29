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
          <strong>معرفی شرکت ها</strong>
        </p>
        <a href="/">شرکت های پارک علم و فناوری استان قم</a>
        <br />
        
      </div>
      <div className="col-sm-3">
        <hr className="visible-xs-block" />
        <p>
          <strong></strong>
        </p>
        <a href="/"> </a>
        <br />
      </div>
      <div className="col-sm-3">
        <hr className="visible-xs-block" />
        <p>
          <strong> </strong>
        </p>
        
      </div>
      <div className="col-sm-3">
      </div>
    </div>
    <div className="clear20"></div>
    <hr />
    <div className="row">
      <div className="col-md-8 col-sm-6">
        <p className="h3"></p>
        <a href="mailto:pr.qomstp@gmail.com" target="_blank" className="social_circle" title="Telegram">
          <i className="fa fa-telegram fa-2x"></i>
        </a>
        <a href="mailto:pr.qomstp@gmail.com" target="_blank" className="social_circle" title="linkedin">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:pr.qomstp@gmail.com" target="_blank" className="social_circle" title="YouTube">
          <i className="fa fa-youtube fa-2x"></i>
        </a>
        <a href="mailto:pr.qomstp@gmail.com" target="_blank" className="social_circle" title="instagram">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <div className="clear20"></div>
      </div>
      <div className="col-md-4 col-sm-3">
        <p className="h3">تماس با ما</p>
        <div className="contactSocial">
          <div className="social_circle" title="Facebook">
            <i className="fa fa-map-pin"></i>
            قم، پردیسان، بلوار دانشگاه، ابتدای بلوار شهید مولوی، پارک علم و فناوری استان قم، روابط عمومی و امور بین‌الملل
          </div>
          <div className="social_circle" title="Facebook">
            <i className="fa fa-map-signs"></i>
            3749113916
          </div>
          <a href={"tel:02532220101"}
          className="social_circle" title="Facebook">
            <i className="fa fa-phone"></i>
            025-32220101
          </a>
          <a href={"tel:09104474641"}
          className="social_circle" title="Facebook">
            <i className="fa fa-mobile"></i>
            09104474641
          </a>
          <a href={"mailto:pr.qomstp@gmail.com"}
          className="social_circle" title="Facebook">
            <i className="fa fa-envelope"></i>
            pr.qomstp@gmail.com
          </a>
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