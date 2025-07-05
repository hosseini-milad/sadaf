
function Slider(props){
    return(
      <section className="wf-section wf-page-header -neutral -padding-top-md -padding-bottom-md">
        <div className="wf-section-wrapper">
          <div className="wf-page-header__wrapper">
            <div className="wf-page-header__content-wrapper">
              <p className="wf-page-header__tagline -microheading">رزرو صندلی اشتراکی</p>
              <h1 className="wf-page-header__heading">فضای کار اشتراکی شتاب</h1>
              <p className="wf-page-header__description">
              فعاليت در فضایی پویا و منعطف، آشنایی با افراد متخصص، کار در فضایی تجهیرشده و دائمی
              </p>
              <div className="wf-page-header__cta-wrapper">
                <a className="
        cl-button -primary -large wf-page-header__cta homepage-hero-cta" href="/cowork" rel="noreferrer " > درخواست فضای اشتراکی
                </a>
                <a className="
        cl-button -secondary -large wf-page-header__cta homepage-hero2-cta" href="#" rel="noreferrer "> مزایای فضای اشتراکی
                </a>
              </div>
              {/*<p className="wf-page-header__disclaimer -small">پلن های شعبه</p>
              <div className="imgInline">
                <img src="/img/shared-seat-min-1.png"/>
                <img src="/img/dedicated-seat-min.png"/>
                <img src="/img/private-room-min.png"/>
              </div>*/}
            </div>
            <div className="wf-page-header__image-wrapper ">
              <img src="/img/slider1.png"/>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Slider