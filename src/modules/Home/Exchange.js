import { useEffect, useState } from "react"
import env from "../../env"

function Exchange(props){
  const [catList,setCatList] = useState()
  const [unitList,setUnitList] = useState()
  const [companyList,setCompanyList] = useState()
  const [tab,selectTab] = useState(0)
  useEffect(()=>{
    const postOptions={
        method:'get',
        headers: {'Content-Type': 'application/json'}
    }
    fetch(env.siteApi + "/company/list-home",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
              setCatList(result.categoryList	)
              setUnitList(result.unitList)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    useEffect(()=>{
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({catId:tab})
      }
      fetch(env.siteApi + "/company/company-filter",postOptions)
      .then(res => res.json())
      .then(
          (result) => {
              if(result.error){
                  console.log(result.error)
              }
              else{
                setCompanyList(result.data	)
              }
          },
          (error) => {
              console.log(error)
          })
      },[tab])
   return(
    <div id="hs_cos_wrapper_homepage_product_overview" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
      <section id="free-crm-tabs-section" 
        className="free-crm-tabs-section -dark -background-01">
          <div className="free-crm-tabs-section-wrapper">
            <div id="free-crm-tabs" className="cl-tabs free-crm-tabs">
              <div className="cl-tab-control -overflow-right">
                <ul className="cl-tab-list" role="tablist">
                  <li className="cl-tab-item">
                    <button className="cl-tab-button" onClick={()=>selectTab(0)}
                      aria-selected={tab==0?"true":"false"}> همه دسته ها </button>
                  </li>
                  {catList&&catList.map((cat,i)=>(
                    <li className="cl-tab-item" key={i}>
                      <button className="cl-tab-button"  onClick={()=>selectTab(cat._id)}
                        aria-selected={tab==cat._id?"true":"false"}>
                        {cat.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>
      <section className="wf-section wf-product-cards -neutral -padding-top-xs -padding-bottom-md">
        <div className="wf-section-wrapper">
          <div className="wf-product-cards__container">
            {companyList?companyList.map((co,i)=>(
              <div className="wf-product-cards__card cl-card -light -container-01 -hoverable "
              key={i}>
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src={co.logo?env.siteApiUrl+co.logo:env.loader} alt={co.title} 
                    width="30" height="30" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading ">
                    {co.title}
                  </h3>
                </div>
                <p className="wf-product-cards__description">
                  {co.description}</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">
                    {co.productTitle}</h4>
                  <div className="wf-product-cards__feature-list--items">
                    {/*<ul>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> AI-powered lead generation
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Marketing automation
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Analytics
                      </li>
                    </ul>*/}
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="cl-button -primary -medium wf-product-cards__cta homepage-marketing" 
                    href={"/company/"+co._id+"/"+co.title.replace( / /g, '_')}>
                      اطلاعات بیشتر 
                  </a>
                </div>
              </div>
            </div>
            )):''}
            
            <div></div>
          </div>
        </div>
      </section>
    </div>
   )
}
export default Exchange