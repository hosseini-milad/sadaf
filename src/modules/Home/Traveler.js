import ReactCardSlider from 'react-card-slider-component';
import errortrans from '../../translate/error';
function Traveler(props){
  const sliderClick=(event)=>{
    console.log(event)
  }
  const slides = [
    {image:"/img/gfx/traveler01.jpg",title:"Liliane",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
    {image:"/img/gfx/traveler02.jpg",title:"Rachel",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
    {image:"/img/gfx/traveler03.jpg",title:"Lola",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
    {image:"/img/gfx/traveler04.jpg",title:"Samir",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
    {image:"/img/gfx/traveler05.jpg",title:"Smith",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
    {image:"/img/gfx/traveler01.jpg",title:"Johnas",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
    {image:"/img/gfx/traveler02.jpg",title:"Ester",description:"Last activity : about 10 seconds ago",clickEvent:sliderClick},
]
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
    <div className="container">
      <div className="text-center hidden">
        <a className="text-center link-scrolldown" >
          <i className="fa fa-angle-down"></i>
        </a>
        <div id="section-top"></div>
        <div className="clear40"></div>
      </div>
      <h2 className="headline-main text-center">
        <a href="/en/community/travelbuddy">{errortrans.connectTraveller[props.lang]}</a>
      </h2>
      <div className="clear20"></div>
      <ReactCardSlider slides={slides}/>
      
      <div className="clear15 visible-xs-block"></div>
      <div className="text-center">
        <a href="/en/community/travelbuddy" className="btn btn-bordered">{errortrans.moreTravellers[props.lang]}</a>
      </div>
      <div className="clear40"></div>
    </div>
   )
}
export default Traveler