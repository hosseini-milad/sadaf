import SingleIdea from "../FindIdea/SingleIdea"
import ReactCardSlider from 'react-card-slider-component';
import { useEffect, useState } from "react";
import env from "../../env";
import IdeaTab from "../FindIdea/IdeaTab";

function Exchange(props){
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
const [content,setContent] = useState()
const [search,setSearch] = useState()
const [tabs,setTabs] = useState()
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
        setTabs(result.subject)

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
      <IdeaTab setSearch={setSearch} search={search} tabs={tabs}/>
      <section className="wf-section wf-product-cards -neutral -padding-top-xs -padding-bottom-md">
        <div className="wf-section-wrapper">
          {/*<ReactCardSlider slides={slides}/>*/}
          
          <div className="wf-product-cards__container">
            {content?content.map((idea,i)=>(
              <SingleIdea  data={idea} key={i}/>
            )):<></>}
            <div></div>
          </div>
        </div>
      </section>
    </div>
   )
}
export default Exchange