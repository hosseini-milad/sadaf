import env from "../../../env"

function ReserveCard(props){
    const newCart = props.data=="+"
    const data = props.data
    const token = props.token
    const cancelNow=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId },
            body:JSON.stringify({reserveId:data.reserveid})
            }
        fetch(env.siteApi + "/reserve/cancel-cowork",postOptions)
        .then(res => res.json())
        .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setTimeout(()=>window.location.reload(),3000)}
        },
        (error) => {
            console.log(error)
        })
    }
    if(newCart)
    return(
      <div className="wf-product-cards__card cl-card -hoverable ">
        <div className="wf-product-cards__content">
          <div className="wf-product-cards__heading--wrapper">
            
            <h3 className="wf-product-cards__heading ">{data.title} 
            </h3>
          </div>
          <p className="wf-product-cards__description"></p>
          <div className="">
            <h4 className="wf-product-cards__feature-list--heading "></h4>
            <div className="wf-product-cards__feature-list--items">
              <ul>
                <li className="wf-product-cards__feature-list--item">
                  <a className="
                    cl-button -primary -medium wf-product-cards__cta homepage-marketing" 
                      href={`/cowork`}>ایجاد درخواست جدید
                  </a>
                </li>
                {/*<li className="wf-product-cards__feature-list--item">
                  <svg className="cl-icon" aria-hidden="true">
                    <use href="#check-circle"></use>
                  </svg> سالن جلسات: 5 ساعت
                </li>*/}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    ) 
    else
    return(
        <div className="wf-product-cards__card cl-card -hoverable ">
        <div className="wf-product-cards__content">
          <div className="wf-product-cards__heading--wrapper">
            <div className={"statusCircle "+(
              data.isPaid?
                data.active?
                "activeStatus":
                "noPayStatus":"deactiveStatus"
            )}/>
            <h3 className="wf-product-cards__heading ">{data.title} 
            </h3>
          </div>
          <p className="wf-product-cards__description">تاریخ ثبت: {new Date(data.date).toLocaleDateString('fa')}</p>
          <div className="">
            <h4 className="wf-product-cards__feature-list--heading ">تاریخ شروع: {new Date(data.sDate).toLocaleDateString('fa')}</h4>
            <div className="wf-product-cards__feature-list--items">
              <ul>
                <li className="wf-product-cards__feature-list--item">
                  {data.isPaid?<h3>{`${data.active} روز مانده`}</h3>:
                  "پرداخت نشده"}
                </li>
                {/*<li className="wf-product-cards__feature-list--item">
                  <svg className="cl-icon" aria-hidden="true">
                    <use href="#check-circle"></use>
                  </svg> سالن جلسات: 5 ساعت
                </li>*/}
              </ul>
            </div>
          </div>
          {data.status =="cancel"?<></>:
          <div className="wf-product-cards__cta-wrapper inRow">
            <a className="
              cl-button -primary -medium wf-product-cards__cta homepage-marketing" 
                href={`${env.siteApi}/payment/sadad?reserveid=${data.reserveid}&user=${data.userId}`}>تمدید رزرو
            </a>
            <div className="cl-button cancel -medium" 
              onClick={cancelNow}>×
            </div>
          </div>}
        </div>
      </div>
    )
}
export default ReserveCard