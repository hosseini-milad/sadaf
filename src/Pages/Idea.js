import BreadCrumb from "../Components/Breadcrumb"
import IdeaHeader from "../Components/Report/ideaHeader"

function Idea(props){
    
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <div className="IdeaMainHolder">
            <BreadCrumb />
            <IdeaHeader />
            Idea
         </div>   
      </main>
   )
}
export default Idea