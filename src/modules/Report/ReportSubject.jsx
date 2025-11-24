import { useEffect, useState } from "react";
import env from "../../env";
import SingleSubject from "../FindIdea/SingleSubject";

function ReportSubject(props){
  const col = props.col?props.col:3
    const [content,setContent] = useState()
useEffect(()=>{
  setContent("");
  const postOptions = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    }
  };
  fetch(env.siteApi + "/data/data-subject-list", postOptions)
    .then((res) => res.json())
    .then(
      (result) => {
        setTimeout(() => setContent(result.category), 200);
      },
      (error) => {
        console.log(error);
      }
    );
},[])
    return(
        <section className="wf-section wf-product-cards -neutral -padding-top-xs -padding-bottom-md">
            <div className="wf-section-wrapper">
            <div className="wf-product-cards__container col4">
                {content?content.map((idea,i)=>(
                <SingleSubject  data={idea} key={i}/>
                )):env.loader}
                </div>
            </div>
        </section>
    )
}
export default ReportSubject