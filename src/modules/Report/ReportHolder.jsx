import { useEffect, useState } from "react";
import env from "../../env";
import SingleIdea from "../FindIdea/SingleIdea";

function ReportHolder(){
    const [content,setContent] = useState()
useEffect(()=>{
  const body = {
    access: "",
  };
  const postOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  fetch(env.siteApi + "/data-list", postOptions)
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
},[])
    return(
        <section className="wf-section wf-product-cards -neutral -padding-top-xs -padding-bottom-md">
            <div className="wf-section-wrapper">
            <div className="wf-product-cards__container">
                {content?content.map((idea,i)=>(
                <SingleIdea  data={idea} key={i}/>
                )):<></>}
                </div>
            </div>
        </section>
    )
}
export default ReportHolder