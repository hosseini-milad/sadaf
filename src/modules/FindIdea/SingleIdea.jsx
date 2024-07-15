function SingleIdea(props){
    const data = props.data
    return(
        <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/MarketingHub_Icon_2023_Gradient_RGB_24px.svg" alt="" width="30" height="30" loading="lazy" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading twolineText">
                    {data.title} 
                  </h3>
                </div>
                <p className="wf-product-cards__description fourlineText">{data.abstract}</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">
                    <i className="fa fa-user ideaIcon" ></i>
                    {data.malek}
                  </h4>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <i className="fa fa-calendar ideaIcon" ></i>
                        <span>{data.sabtDate}</span>
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        
                        <i className="fa fa-certificate ideaIcon" ></i>
                        {data.sabtNo}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="cl-button -primary -medium wf-product-cards__cta homepage-marketing" 
                        href={data.url} target="_blank" rel="noreferrer "> اطلاعات بیشتر
                  </a>
                </div>
              </div>
            </div>
    )
}
export default SingleIdea