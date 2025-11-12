import { useState } from "react"
import ReportFilter from "../modules/Report/ReportFilter"
import ReportHolder from "../modules/Report/ReportHolder"

function Report(props){
   const query = new URLSearchParams(window.location.search)
   const value = query.get('title');
   const [filter,setFilter] = useState({category:value})
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <div className="ReportMainHolder">
            <div className="ReportFilter"><ReportFilter filter={filter} setFilter={setFilter}/></div>
            <div className="ReportHolder"><ReportHolder filter={filter}/>  </div> 
         </div>   
      </main>
   )
}
export default Report