
function Slider(props){
    return(
      <section className="wf-section wf-page-header -neutral -padding-top-md -padding-bottom-md">
        <div className="wf-section-wrapper">
          <div className="wf-page-header__wrapper">
            <div className="wf-page-header__image-wrapper ">
              <img src="/img/sadaf/slider.jpg"/>
            </div>
            <div className="wf-page-header__content-wrapper">
              <p className="wf-page-header__tagline -microheading"> </p>
              <img src="/img/sadaf/sliderText.png" />
             <hr/>
              <div className="wf-page-header__cta-wrapper">
                
                <a style={{position:"relative"}} className="
                  cl-button -primary -large wf-page-header__cta homepage-hero-cta" 
                  href="/reg-request" >
                    <img src="/img/hub/MarketingHub_Icon_2023_Gradient_RGB_24px.svg" width="30" height="30" 
                    style={{position:"absolute",right:"0px"}} className="wf-product-cards__heading--image"></img> 
                  ثبت تقاضای فناوری (نیازها و چالش‌ها)
                </a>
                <a style={{position:"relative"}} className="
        cl-button -secondary -large wf-page-header__cta homepage-hero2-cta" 
        href="/report"> 
        <img src="/img/hub/OperationsHub_Icon_Gradient_RGB_24px.svg" width="30" height="30" 
                    style={{position:"absolute",right:"0px"}} className="wf-product-cards__heading--image"></img> 
        ثبت ایده برای حل چالش‌ها یا رفع نیازها 
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    )
}
export default Slider