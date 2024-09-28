function ReserveCard(props){
    const data = props.data
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
          <div className="wf-product-cards__cta-wrapper">
            <a className="
cl-button -primary -medium wf-product-cards__cta homepage-marketing" href="/upgrade">تمدید رزرو
            </a>
          </div>
        </div>
      </div>
    )
}
export default ReserveCard