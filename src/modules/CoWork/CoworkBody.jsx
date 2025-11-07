import LoginHolder from "../Login/LoginHolder"
import RegStatus from "./RegStatus"

function CoworkBody(props){
  const token = props.token
    return(
    <div className="fullWidth">
        
      <div className="colSpan col90">
          {!token?<LoginHolder />:
          <RegStatus />}
          
      </div>
      
        <hr/>
      <div className="colSpan col90">
        <div className="col50">
          <img src="/img/cowork02.jpg" />
        </div>
        <div className="col50">
          <b>امكانات فضای کار اشتراکی</b>
          <ul className="liCircle">
            <li>میز کار</li>
            <li>سالن جلسات</li>
            <li>اینترنت پر سرعت</li>
            <li>پرینتر</li>
            <li>کمد وسایل</li>
            <li>مینی کافی</li>
          </ul>
        </div>
        </div>
      
    <div className="orderSpace"/>
    </div>
    
    )
}
export default CoworkBody