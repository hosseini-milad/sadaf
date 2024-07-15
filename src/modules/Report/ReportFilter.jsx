import { useState } from "react"

function ReportFilter(props){
    const [tab,setTab] = useState(-1)
    return(
        <div className="product-core-header__accordion-container">
            <div className="private-form__control-wrapper">
                     <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                        <label for="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                        <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                           <i18n-string data-locale-at-render="en-us" data-key="login.form.email">جستجو</i18n-string>
                        </span>
                        </label>
                     </div>
                     <div className="private-form__input-wrapper">
                        <input id="username" tabindex="1" className="form-control private-form__control login-email"
                        onChange={(e)=>e.target.value.length>3?
                            props.setFilter((prevState) => ({
                            ...prevState,
                            title: e.target.value,
                          })):{}}/>
                     </div>
                     <div className="private-form__meta">
                        <div className="private-form__messages"></div>
                     </div>
                  </div>


            <ul className="hsg-accordion" data-size="small" data-display-option="card">
                <li className={tab==0?"hsg-accordion__item active" :"hsg-accordion__item"}>
                <button className="hsg-accordion__label" 
                    onClick={()=>setTab(tab==0?-1:0)}>
                    <h3 className="hsg-accordion__label-text marketing-hero-product">دسته بندی 
                    <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                        <span className="hsg-accordion__icon -expand">+</span>
                        <span className="hsg-accordion__icon -collapse">_</span>
                    </span>
                    </h3>
                </button>
                <div className="hsg-accordion__content" id="hsg-accordion__content-0" aria-hidden="true">
                    <div className="accHolder">
                        <div className="accItem">فنی مهندسی</div>
                        <div className="accItem">علوم انسانی</div>
                        <div className="accItem">صنایع نظامی</div>
                    </div>
                </div>
                </li>
                <li className={tab==1?"hsg-accordion__item active" :"hsg-accordion__item"} 
                onClick={()=>setTab(tab==1?-1:1)}>
                <button className="hsg-accordion__label" aria-controls="hsg-accordion__content-1" aria-expanded="false" data-hs-event-72370834="1">
                    <h3 className="hsg-accordion__label-text marketing-hero-pricing">سال ثبت <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                        <span className="hsg-accordion__icon -expand">+</span>
                        <span className="hsg-accordion__icon -collapse">_</span>
                    </span>
                    </h3>
                </button>
                <div className="hsg-accordion__content" id="hsg-accordion__content-1" aria-hidden="true">
                    <div className="accHolder">
                        <div className="accItem">1403</div>
                        <div className="accItem">1402</div>
                        <div className="accItem">1401</div>
                        <div className="accItem">1400</div>
                    </div>
                </div>
                </li>
                <li className={tab==2?"hsg-accordion__item active" :"hsg-accordion__item"} 
                    onClick={()=>setTab(tab==2?-1:2)}>
                <button className="hsg-accordion__label" aria-controls="hsg-accordion__content-2" aria-expanded="false" data-hs-event-72370834="1">
                    <h3 className="hsg-accordion__label-text marketing-hero-features">مکان <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                        <span className="hsg-accordion__icon -expand">+</span>
                        <span className="hsg-accordion__icon -collapse">_</span>
                    </span>
                    </h3>
                </button>
                <div className="hsg-accordion__content" id="hsg-accordion__content-2" aria-hidden="true">
                    <div className="accHolder">
                        <div className="accItem">تهران</div>
                        <div className="accItem">البرز</div>
                        <div className="accItem">قم</div>
                        <div className="accItem">اصفهان</div>
                    </div>
                </div>
                </li>
            </ul>
            </div>
    )
}
export default ReportFilter