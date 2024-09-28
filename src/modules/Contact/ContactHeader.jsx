function ContactHeader(){
    return(
    <div className="pos_relative" style={{zIndex: "2", background: "#000"}}>
    <div className="slider-header-transparency" style={{opacity: "1"}}>
        <div style={{overflow: "hidden"}}>
        <div className="slider-header slider-basic">
            <video 
                playsinline="" loop="" preload="auto" muted="" autoplay="" poster="/gfx/teaser-how-it-works-poster.jpg">
            <source src="/gfx/teaser-how-it-works.mp4" type="video/mp4"/>
            </video>
        </div>
        </div>
    </div>
    <div className="header-caption-landingpage">
        <div className="header-caption-landingpage-inner">
        <div className="container">
            <h1 className="section-bg-headline nomargin">
            <strong> How it works </strong>
            </h1>
            <div className="clear20"></div>
            <div className="section-bg-subline"> New to Workaway? Here you'll find all you need to know about our unique community. </div>
            <div className="clear20"></div>
            <div className="cookieconsent-optin-marketing">
            <a className="btn btn-bordered btn-bordered-white btn-lg text-uppercase" href="#" data-toggle="modal" data-target="#modalFullVideo">
                <i className="fa fa-play"></i>&nbsp;&nbsp; <strong>Watch video</strong>
            </a>
            <div className="clear20"></div>
            </div>
            <div className="cookieconsent-optout-marketing">
            <div style={{cursor: "not-allowed"}}>
                <a className="btn btn-bordered btn-bordered-white btn-lg text-uppercase disabled">
                <i className="fa fa-play"></i>&nbsp;&nbsp; <strong>Watch video</strong>
                </a>
            </div>
            <div className="clear-10 clearfix"></div>
            <p className="white-text"> Please <a href="javascript:Cookiebot.renew()" style={{color: "#fff"}}>
                <u>accept marketing-cookies</u>
                </a> to watch this video. </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}
export default ContactHeader