
function Blog(props){
    
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
     <div id="container-teaser-fullwidth">
      <div className="row gutter-6">
      <div className="col-md-3 col-sm-6">
        <div className="img-teaser-wrapper">
        <img src="/img/gfx/startbox-meetup.jpg" className="img-responsive lazyload fullwidth"/>
          <div className="img-teaser-caption text-center">
            <div className="img-teaser-caption-headline">Meet other workawayers!</div>
            </div><a href="/en/community/meet-other-workawayers" className="img-teaser-overlaylink"></a>
            </div>
            <div className="clear6"></div>
      </div>
    <div className="col-md-3 col-sm-6"><div className="img-teaser-wrapper">
      <img src="/img/gfx/startbox-photocontest.jpg" className="img-responsive lazyload fullwidth"/>
        <div className="img-teaser-caption text-center"><div className="img-teaser-caption-headline">Enter the Workaway photo competition </div></div>
        <a href="/en/community/travel-photos" className="img-teaser-overlaylink"></a></div>
        <div className="clear6"></div>
        </div>
        <div className="col-md-3 col-sm-6"><div className="img-teaser-wrapper">
          <img src="/img/gfx/startbox-foundation.jpg" className="img-responsive lazyload fullwidth"/>
            <div className="img-teaser-caption text-center"><div className="img-teaser-caption-headline">Take a look at the Workaway foundation</div></div>
            <a href="https://www.workawayfoundation.org" target="_blank" className="img-teaser-overlaylink"></a></div>
            <div className="clear6"></div>
        </div>
        <div className="col-md-3 col-sm-6"><div className="img-teaser-wrapper">
              <img src="/img/gfx/startbox-blog.jpg" className="img-responsive lazyload fullwidth"/>
              <div className="img-teaser-caption text-center"><div className="img-teaser-caption-headline">Get in-depth info on the Workaway Blog</div></div>
              <a href="/en/stories" target="_blank" className="img-teaser-overlaylink"></a></div>
              <div className="clear6"></div>
          </div>
        </div>
    </div>
   )
}
export default Blog