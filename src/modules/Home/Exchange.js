import { useEffect, useState } from "react"
import env from "../../env"
import CompanyFilter from "../Company/CompanyFilter"

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
    <div id="hs_cos_wrapper_homepage_product_overview " 
      className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module max1280">
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
      <section className="wf-section wf-product-cards -padding-top-xs -padding-bottom-md">
        <div className="wf-section-wrapper" style={{display: "flex", gap: "10px"}}>
          <CompanyFilter setFilter={()=>{}} unitList={unitList} catList={catList}/>
          <div className="wf-product-cards__container col8">
            {companyList?companyList.map((co,i)=>(
              <div className="wf-product-cards__card cl-card cartHolder -light -container-01 -hoverable "
              key={i}>
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src={co.logo?env.siteApiUrl+co.logo:env.loader} alt={co.title} 
                    width="30" height="30" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading twolineText">
                    {co.title}
                  </h3>
                </div>
                <h4 className="wf-product-cards__feature-list--heading twolineText">
                    <img src="/img/product.png" className="productIcon"/>
                    {co.productTitle}</h4>
                <p className="wf-product-cards__description fourlineText">
                {co.productDescription}</p>
                <div className="wf-product-cards__features">
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                         <small>حوزه فعالیت: </small>
                         <div className="boxTextPlace">{co.catData?
                        co.catData.title:'-'}</div>
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                         <small>واحد: </small>
                        <div className="boxTextPlace">{co.unitData?
                        co.unitData.title:'-'}</div>
                      </li>
                    </ul>
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