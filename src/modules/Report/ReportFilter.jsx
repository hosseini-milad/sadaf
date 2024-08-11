import { useEffect, useState } from "react"

function ReportFilter(props){
    const [search,setSearch] = useState('')
    
    const [year,setYear] = useState('')
    const [tab,setTab] = useState(-1)
    useEffect(()=>{
        if(search.length<3) return
        const timeOutId = setTimeout(() => 
            props.setFilter((prevState) => ({
                ...prevState,
                title: search,
              })), 1000);
        return () => clearTimeout(timeOutId);
    },[search])
    useEffect(()=>{
        props.setFilter((prevState) => ({
            ...prevState,
            year: year,
            }))
        
    },[year])
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
                        placeholder="عبارت، شماره ثبت یا ..." value={search}
                        onChange={(e)=>
                            setSearch(e.target.value)}/>
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
                        <div className={search=="ایده"?"accItem activeAcc":"accItem"}
                        onClick={(e)=>setSearch("ایده")}>
                                ایده‌پردازی و برنامه‌ریزی </div>
                        <div className={search=="تحقیق"?"accItem activeAcc":"accItem"}
                        onClick={(e)=>setSearch("تحقیق")}>
                                تحقیق و توسعه محتوا </div>
                        <div className={search=="محتوا"?"accItem activeAcc":"accItem"}
                        onClick={(e)=>setSearch("محتوا")}>
                                تولید محتوا </div>
                        <div className={search=="ویرایش"?"accItem activeAcc":"accItem"}
                        onClick={(e)=>setSearch("ویرایش")}>
                            ویرایش و بهینه‌سازی </div>
                        <div className={search=="انتشار"?"accItem activeAcc":"accItem"}
                        onClick={(e)=>setSearch("انتشار")}>
                            توزیع و انتشار</div>
                    </div>
                </div>
                </li>
                <li className={tab==1?"hsg-accordion__item active" :"hsg-accordion__item"} >
                <button className="hsg-accordion__label" 
                    onClick={()=>setTab(tab==1?-1:1)}>
                    <h3 className="hsg-accordion__label-text marketing-hero-pricing">سال ثبت <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                        <span className="hsg-accordion__icon -expand">+</span>
                        <span className="hsg-accordion__icon -collapse">_</span>
                    </span>
                    </h3>
                </button>
                <div className="hsg-accordion__content" id="hsg-accordion__content-1" aria-hidden="true">
                    <div className="accHolder">
                        <div className={year=="1403"?"accItem activeAcc" :"accItem"}
                        onClick={()=>setYear("1403")}>1403</div>
                        <div className={year=="1402"?"accItem activeAcc" :"accItem"}
                        onClick={()=>setYear("1402")}>1402</div>
                        <div className={year=="1401"?"accItem activeAcc" :"accItem"}
                        onClick={()=>setYear("1401")}>1401</div>
                        <div className={year=="1400"?"accItem activeAcc" :"accItem"}
                        onClick={()=>setYear("1400")}>1400</div>
                        <div className={year=="old"?"accItem activeAcc" :"accItem"}
                        onClick={()=>setYear("old")}>قبل از 1400</div>
                    </div>
                </div>
                </li>
                <li className={tab==2?"hsg-accordion__item active" :"hsg-accordion__item"}>
                <button className="hsg-accordion__label" 
                    onClick={()=>setTab(tab==2?-1:2)}>
                    <h3 className="hsg-accordion__label-text marketing-hero-features">موقعیت جغرافیایی <sup>به زودی</sup>
                        <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
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