function ExchangeItem(props){
    const data=props.data
    return(
        <div className="col-md-4 col-sm-6">
        <div className="img-teaser-wrapper">
          <img src={data.imageUrl} className="img-responsive lazyload"/>
          <div className="img-teaser-caption text-center">
            <div className="img-teaser-caption-headline">{data.title}</div>
            <div className="img-teaser-caption-text">{data.content}</div>
          <div className="btn btn-sm btn-bordered btn-bordered-white">Show hosts</div>
          </div>
          <a href="en/hosttype/ngo" className="img-teaser-overlaylink"></a>
        </div>
        <div className="clear30 hidden-xs"></div>
        <div className="clear6 visible-xs-block"></div>
      </div>
    )
}
export default ExchangeItem