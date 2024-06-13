import Slider from "../modules/Home/Slider"
import Host from "../modules/Home/Host"
import Exchange from "../modules/Home/Exchange"

function Home(props){
    
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <Slider />
         <Exchange />
         <Host/>
    
    </main>
   )
}
export default Home