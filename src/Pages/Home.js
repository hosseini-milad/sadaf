import Slider from "../modules/Home/Slider"
import Host from "../modules/Home/Host"
import Exchange from "../modules/Home/Exchange"
import WorkAway from "../modules/Home/WorkAway"
import FindIdea from "../modules/Home/FindIdea"
import BottomPart from "../modules/Home/BottomPart"
import Plan from "../modules/Home/Plan"
import Content from "../modules/Home/Content"
import Goal from "../modules/Home/Goal"

function Home(props){
    
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <Slider />
         
         <div className="footerSlider">
            <img src="/img/hub/sliderFooter.jpg" />
         </div>
         <Host/>
         <Plan />
         <Goal/>
         <Content />
         <Exchange />
         <BottomPart />
    </main>
   )
}
export default Home