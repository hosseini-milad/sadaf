import StyleInput from "../../../components/Button/Input"
import env from "../../../env"
import tabletrans from "../../../translate/tables"

function CompanyImages(props){
    const content = props.content
    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>تصاویر</h4>
            <p>بنر، تصویر اصلی و لوگو</p>
          </div>
          <div className="row-box inRow">
              <div className="info-input" style={{position:"relative"}}>
                <img src={env.siteApiUrl+content.logo} 
                className="imageEdit"/>
              </div>
              <div className="info-input" style={{position:"relative"}}>
                <img src={env.siteApiUrl+content.bannerUrl} 
                className="imageEdit"/>
              </div>
              <div className="info-input" style={{position:"relative"}}>
                <img src={env.siteApiUrl+content.image1} 
                className="imageEdit"/>
              </div>
              <div className="info-input" style={{position:"relative"}}>
                <img src={env.siteApiUrl+content.image2} 
                className="imageEdit"/>
              </div>
              <div className="info-input" style={{position:"relative"}}>
                <img src={env.siteApiUrl+content.image3} 
                className="imageEdit"/>
              </div>
          </div>
        </div>
    )
}
export default CompanyImages