import SingleIdea from "../FindIdea/SingleIdea"
import ReactCardSlider from 'react-card-slider-component';
import { useEffect, useState } from "react";
import env from "../../env";
import IdeaTab from "../FindIdea/IdeaTab";

function Exchange(props){
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
const [content,setContent] = useState()
const [search,setSearch] = useState()
useEffect(()=>{
  const body = {
    access: "site",
    pageSize:"6",
    search:search
  };
  const postOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  fetch(env.siteApi + "/data/data-req-list", postOptions)
    .then((res) => res.json())
    .then(
      (result) => {
        setContent("");
        setTimeout(() => setContent(result.data), 200);
      },
      (error) => {
        console.log(error);
      }
    );
},[search])
console.log(search)
   return(

    <div id="hs_cos_wrapper_homepage_product_overview" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
      <IdeaTab setSearch={setSearch} search={search}/>
      <section className="wf-section wf-product-cards -neutral -padding-top-xs -padding-bottom-md">
        <div className="wf-section-wrapper">
          {/*<ReactCardSlider slides={slides}/>*/}
          
          <div className="wf-product-cards__container">
            {content?content.map((idea,i)=>(
              <SingleIdea  data={idea} key={i}/>
            )):<></>}
            {/*
            <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/SalesHub_Icon_Gradient_RGB_24px.svg" alt="" width="30" height="30" loading="lazy" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading ">Sales Hub <span className="wf-product-cards__heading--trademark">®</span>
                  </h3>
                </div>
                <p className="wf-product-cards__description">Easy-to-adopt sales software that leverages AI to build pipelines and close deals.</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">Popular Features</h4>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Prospecting workspace
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Deal management
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Sales automation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="
      cl-button -primary -medium wf-product-cards__cta homepage-sales" href="https://www.hubspot.com/products/sales?hubs_content=www.hubspot.com&amp;hubs_content-cta=homepage-sales&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." rel="noreferrer "> Learn more <span className="visually-hidden">about Sales Hub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/ServiceHub_Icon_Gradient_RGB_24px.svg" alt="" width="30" height="30" loading="lazy" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading ">Service Hub <span className="wf-product-cards__heading--trademark">®</span>
                  </h3>
                </div>
                <p className="wf-product-cards__description">Customer service software powered by AI to scale support and drive retention.</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">Popular Features</h4>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Omni-channel help desk
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> AI chatbot
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Customer success workspace
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="
      cl-button -primary -medium wf-product-cards__cta homepage-service" href="https://www.hubspot.com/products/service?hubs_content=www.hubspot.com&amp;hubs_content-cta=homepage-service&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." rel="noreferrer "> Learn more <span className="visually-hidden">about Service Hub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="wf-product-cards__card cl-card -light -container-01 -hoverable  has-ribbon">
              <span className="wf-product-cards__ribbon">New</span>
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/Product%20Icon%20one-1.svg" alt="" width="30" height="30" loading="lazy" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading ">Content Hub <span className="wf-product-cards__heading--trademark">™</span>
                  </h3>
                </div>
                <p className="wf-product-cards__description">All-in-one, AI-powered content marketing software that helps marketers create and manage content. </p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">Popular Features</h4>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Content remix
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Brand voice
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> AI-powered content creation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="
      cl-button -primary -medium wf-product-cards__cta homepage-cms" href="https://www.hubspot.com/products/content?hubs_content=www.hubspot.com&amp;hubs_content-cta=homepage-content&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." rel="noreferrer "> Learn more <span className="visually-hidden">about Content Hub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/OperationsHub_Icon_Gradient_RGB_24px.svg" alt="" width="30" height="30" loading="lazy" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading ">Operations Hub <span className="wf-product-cards__heading--trademark">®</span>
                  </h3>
                </div>
                <p className="wf-product-cards__description">Operations software that leverages AI to help you activate and manage your data.</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">Popular Features</h4>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Data sync
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Programmable automation
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> AI-powered data quality automation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="
      cl-button -primary -medium wf-product-cards__cta homepage-operations" href="https://www.hubspot.com/products/operations?hubs_content=www.hubspot.com&amp;hubs_content-cta=homepage-operations&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." rel="noreferrer "> Learn more <span className="visually-hidden">about Operations Hub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="wf-product-cards__card cl-card -light -container-01 -hoverable ">
              <div className="wf-product-cards__content">
                <div className="wf-product-cards__heading--wrapper">
                  <img src="/img/hub/Product_Icon_Only_CommerceHub.svg" alt="" width="30" height="30" loading="lazy" className="wf-product-cards__heading--image"/>
                  <h3 className="wf-product-cards__heading ">Commerce Hub <span className="wf-product-cards__heading--trademark">™</span>
                  </h3>
                </div>
                <p className="wf-product-cards__description">B2B commerce software designed to help you collect payments and automate billing.</p>
                <div className="wf-product-cards__features">
                  <h4 className="wf-product-cards__feature-list--heading ">Popular Features</h4>
                  <div className="wf-product-cards__feature-list--items">
                    <ul>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Invoices &amp; subscriptions
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Quotes
                      </li>
                      <li className="wf-product-cards__feature-list--item">
                        <svg className="cl-icon" aria-hidden="true">
                          <use href="#check-circle"></use>
                        </svg> Payment links
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wf-product-cards__cta-wrapper">
                  <a className="
      cl-button -primary -medium wf-product-cards__cta homepage-commerce" href="https://www.hubspot.com/products/commerce?hubs_content=www.hubspot.com&amp;hubs_content-cta=homepage-commerce&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." rel="noreferrer "> Learn more <span className="visually-hidden">about Commerce Hub</span>
                  </a>
                </div>
              </div>
            </div>
            */}
            <div></div>
          </div>
        </div>
      </section>
    </div>
   )
}
export default Exchange