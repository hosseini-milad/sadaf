import { useEffect, useState } from "react";
import env from "../../env";
import SingleIdea from "../FindIdea/SingleIdea";

function ReportHolder(props){
    const [content,setContent] = useState()
useEffect(()=>{
  setContent("");
  const postOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...props.filter,pageSize:12}),
  };
  fetch(env.siteApi + "/data/req-list", postOptions)
    .then((res) => res.json())
    .then(
      (result) => {
        setTimeout(() => setContent(result.data), 200);
      },
      (error) => {
        console.log(error);
      }
    );
},[props.filter])
    return(
        <section className="wf-section wf-product-cards -neutral -padding-top-xs -padding-bottom-md">
            <div className="wf-section-wrapper">
            <div className="wf-product-cards__container">
                {content?content.map((idea,i)=>(
                <SingleIdea  data={idea} key={i}/>
                )):env.loader}
                </div>
            </div>
        </section>
    )
}
export default ReportHolder