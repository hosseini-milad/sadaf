import { useEffect, useState } from "react";
import env from "../../env";

function Content(props){
  const [subject,setSubject] = useState('')
    useEffect(()=>{
      const postOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(env.siteApi + "/data/data-req-list", postOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            setSubject(result.subject)
          },
          (error) => {
            console.log(error);
          }
        );
    },[])
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
    <section className="container" id="content">
  <section className="academy-learn" data-background="off-white">
      <h2 className="headline-main">
        <i className="fa fa-book btnIcon"></i>موضوع  و محورهای رویداد
      </h2>
  </section> 
  <div className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
    <section className="hsg-multi-col" data-background="off-white">
      <div className="hsg-multi-col__wrapper hs-page-width-module">
      <p className="P60">موضوع اصلی رویداد، فناوری و نوآوری های هنر صنعتی فرش دستباف است. محورهای اصلی رویداد به شرح  زیر است:</p>
      </div>
      <div className="hsg-multi-col__wrapper hs-page-width-module">
        {subject?subject.map((subject,i)=>(
        <div className="hsg-multi-col__item" key={i}>
          <div className="hsg-multi-col-item__text-content">
            <h3 className="hsg-multi-col__name">{subject.title}</h3>
            <div className="hsg-multi-col__description">
              <p>
                <span>{subject.description}</span>
              </p>
            </div>
          </div>
        </div>
        )):<></>}
        
      </div>
    </section>
  </div>
</section>
   )
}
export default Content