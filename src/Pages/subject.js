import { useState } from "react"
import ReportSubject from "../modules/Report/ReportSubject"

function Subject(props){
   const [filter,setFilter] = useState()
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <div className="ReportMainHolder">
            <div className="ReportHolder" style={{width:"100%"}}>
               <ReportSubject filter={filter}/>  </div> 
         </div>   
      </main>
   )
}
export default Subject