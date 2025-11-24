import { useEffect, useState } from "react"
import BreadCrumb from "../Components/Breadcrumb"
import ExtraInfo from "../Components/Report/ExtraInfo"
import IdeaHeader from "../Components/Report/ideaHeader"
import env from "../env"

function Idea(props){
   const token = props.token
   const url = document.location.pathname.split('/')[2]
   const [content,setContent] = useState()
   useEffect(()=>{
      const postOptions={
            method:'get',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
        }
      fetch(env.siteApi + "/data/get-req/"+url ,postOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            setContent(result.data)
          },
          (error) => {
            console.log(error);
          }
        );
    },[])
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         {content?
            <div className="IdeaMainHolder">
               <BreadCrumb content={content}/>
               <IdeaHeader content={content}/>
               <ExtraInfo content = {content}/>
            </div>:
            env.loader
         }

      </main>
   )
}
export default Idea