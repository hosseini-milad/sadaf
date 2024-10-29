import { useEffect, useState } from "react"
function CompanyFilter(props){
    
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
        <div className="product-core-header__accordion-container col4">
        <div className="private-form__control-wrapper">
                 <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                    <label for="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                    <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                       <i18n-string data-locale-at-render="en-us" data-key="login.form.email">جستجو</i18n-string>
                    </span>
                    </label>
                 </div>
                 <div className="private-form__input-wrapper">
                    <input id="username" tabIndex="1" className="form-control private-form__control login-email"
                    placeholder="جستجو ..." value={search}
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
                <h3 className="hsg-accordion__label-text marketing-hero-product">حوزه فعالیت 
                <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                    <span className="hsg-accordion__icon -expand">+</span>
                    <span className="hsg-accordion__icon -collapse">_</span>
                </span>
                </h3>
            </button>
            <div className="hsg-accordion__content" id="hsg-accordion__content-0" aria-hidden="true">
                <div className="accHolder">
                    {props.catList&&props.catList.map((category,i)=>(
                        <div className={search=="ایده"?"accItem activeAcc":"accItem"}
                            onClick={(e)=>setSearch("ایده")} key={i}>
                            {category.title} </div>
                    ))}
                    
                </div>
            </div>
            </li>
            <li className={tab==1?"hsg-accordion__item active" :"hsg-accordion__item"} >
            <button className="hsg-accordion__label" 
                onClick={()=>setTab(tab==1?-1:1)}>
                <h3 className="hsg-accordion__label-text marketing-hero-pricing">واحد <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                    <span className="hsg-accordion__icon -expand">+</span>
                    <span className="hsg-accordion__icon -collapse">_</span>
                </span>
                </h3>
            </button>
            <div className="hsg-accordion__content" id="hsg-accordion__content-1" aria-hidden="true">
                <div className="accHolder">
                    {props.unitList&&props.unitList.map((unit,i)=>(
                        <div className={year=="1403"?"accItem activeAcc" :"accItem"}
                            onClick={()=>setYear("1403")} key={i}>{unit.title}</div>
                    ))}
                    
                    
                </div>
            </div>
            </li>
            <li className={tab==2?"hsg-accordion__item active" :"hsg-accordion__item"}>
            <button className="hsg-accordion__label" 
                onClick={()=>setTab(tab==2?-1:2)}>
                <h3 className="hsg-accordion__label-text marketing-hero-features">مجوزها <sup>به زودی</sup>
                    <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                        <span className="hsg-accordion__icon -expand">+</span>
                        <span className="hsg-accordion__icon -collapse">_</span>
                    </span>
                </h3>
            </button>
            <div className="hsg-accordion__content" id="hsg-accordion__content-2" aria-hidden="true">
                <div className="accHolder">
                    <div className="accItem">مجوز فناوری</div>
                    <div className="accItem">دانش بنیان</div>
                    <div className="accItem">صنایع خلاق و فرهنگی</div>
                </div>
            </div>
            </li>
        </ul>
        </div> 
    )
}
export default CompanyFilter