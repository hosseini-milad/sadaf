import ReportFilter from "../modules/Report/ReportFilter"
import ReportHolder from "../modules/Report/ReportHolder"

function Report(props){
    
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <div className="ReportMainHolder">
            <div className="ReportFilter"><ReportFilter /></div>
            <div className="ReportHolder"><ReportHolder />  </div> 
         </div>   
      </main>
   )
}
export default Report