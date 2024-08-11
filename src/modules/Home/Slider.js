
function Slider(props){
    return(
      <section class="wf-section wf-page-header -neutral -padding-top-md -padding-bottom-md">
        <div class="wf-section-wrapper">
          <div class="wf-page-header__wrapper">
            <div class="wf-page-header__image-wrapper ">
              <img src="/img/hub/sliderMain.jpg"/>
            </div>
            <div class="wf-page-header__content-wrapper">
              <p class="wf-page-header__tagline -microheading"> </p>
              <img src="/img/hub/sliderText.png" />
             
              <div class="wf-page-header__cta-wrapper">
                <a class="
                  cl-button -primary -large wf-page-header__cta homepage-hero-cta" 
                  href="/reg-request" > 
                  ثبت تقاضای فناوری (نیازها و چالش‌ها)
                </a>
                <a class="
        cl-button -secondary -large wf-page-header__cta homepage-hero2-cta" 
        href="/report"> 
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