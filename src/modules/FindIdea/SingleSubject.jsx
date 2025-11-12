import { useState } from "react"

function SingleSubject(props){
    const data = props.data
    const [showMore,setMore] = useState(0)
    return(
        <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/MarketingHub_Icon_2023_Gradient_RGB_24px.svg" width="30" height="30" 
                    className="wf-product-cards__heading--image"/>
                  <h2 className="wf-product-cards__heading boldTitle" title={data.title}>
                    {data.title}
                  </h2>
                </div>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        
                        <i className="fa fa-certificate ideaIcon" ></i>
                        {data.challengeCount} چالش ثبت شده
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        
                        <i className="fa fa-certificate ideaIcon" ></i>
                        {data.ideaCount} ایده ثبت شده
                      </li>
                    </ul>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="cl-button -primary -medium wf-product-cards__cta homepage-marketing" 
                        href={"/report?title="+data.title} //target="_blank" rel="noreferrer "
                        > مشاهده چالش ها
                  </a>
                </div>
              </div>
            </div>
    )
}
export default SingleSubject