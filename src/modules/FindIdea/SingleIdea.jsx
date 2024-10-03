import { useState } from "react"

function SingleIdea(props){
    const data = props.data
    const [showMore,setMore] = useState(0)
    return(
        <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/MarketingHub_Icon_2023_Gradient_RGB_24px.svg" width="30" height="30" 
                    className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading twolineText" title={data.title}>
                    {data.title} <br/>
                    <sub className="subNahad">{data.category} </sub>
                  </h3>
                </div>
                <p className="wf-product-cards__description fourlineText">{data.description}</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">
                    <i className="fa fa-user ideaIcon" ></i>
                    <small>{"کاربر میهمان"}
                    </small>
                    {/*<sub onClick={()=>setMore(1)}> 
                      ({2} ایده) </sub>
                    {showMore?<div className="malekPopHolder">
                      <div className="malekPop">
                        <i className="fa fa-close malekClose"
                       onClick={()=>setMore(0)}></i>
                      {data.malek&&data.malek.map((malek,i)=>(<>
                        <i className="fa fa-user ideaIcon" ></i>
                        <small key={i}>{malek}</small><br/></>
                      ))}
                    </div>
                  </div>:<></>}*/}
                  </h4>
                 
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <i className="fa fa-calendar ideaIcon" ></i>
                        <span>{(new Date(data.date)).toLocaleDateString('fa')}</span>
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        
                        <i className="fa fa-certificate ideaIcon" ></i>
                        {data.proofUsage?data.proofUsage.length:0} ایده ثبت شده
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="cl-button -primary -medium wf-product-cards__cta homepage-marketing" 
                        href={"/report/"+data._id} //target="_blank" rel="noreferrer "
                        > اطلاعات بیشتر
                  </a>
                </div>
              </div>
            </div>
    )
}
export default SingleIdea