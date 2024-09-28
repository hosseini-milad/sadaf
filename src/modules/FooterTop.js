import errortrans from "../translate/error"

function FooterTop(props){
    
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
    <div className="footer-secondary">
      <div className="container">
        <div className="clear40"></div>
        <div className="row flex-sm align-items-center">
          <div className="col-lg-7 col-sm-8">
            <p className="h3 white-text">{errortrans.advantureToday[props.lang]}</p>
            <p className="white-text">{errortrans.advantureTodayText[props.lang]}</p>
          </div>
          <div className="col-lg-3 col-lg-offset-2 col-sm-4 text-right text-left-xs">
            <div className="clear15 visible-xs-block"></div>
            <a href="https://www.workaway.info/en/signup/workawayer" 
            className="btn btn-lg btn-block btn-join"><strong>{errortrans.joinNow[props.lang]}</strong></a>
            </div>
        </div>
        <div className="clear40"></div>
        </div>
    </div>
   )
}
export default FooterTop