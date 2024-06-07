function CommunityMenu(props){
    const tab = props.tab
    return(
        <ul className="dropdown-menu"  style={{display:tab===4?"block":""}}>
          <li>
            <div className="container">
              <div className="megamenu-content">
                <div className="row gx-5">
                  <div className="col-sm-6 megamenu-content-col">
                    <div className="text-left">
                      <div className="megamenu-content-title megamenu-content-title-mobile"> Travel stories and advice </div>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="megamenu-icon-list">
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/workaway-news">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_news.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Workaway News </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/stories">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_stories.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Travel Stories </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/host-of-the-month">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_hom.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Host of the Month </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/workawayer-of-the-month">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_wom.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Workawayer of the Month </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="megamenu-icon-list">
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/inspiration">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_ideas.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Inspiration </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/using-workaway">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_tips.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Travelling Tips </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/using-workaway">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_usingworkaway.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Using Workaway </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/stories/category/workaway-foodie-blog-subjects">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/blog_food.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Workaway Foodie </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clear15"></div>
                      <div className="clear15 hidden-xs"></div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="megamenu-btn">
                            <a href="/en/stories" className="btn btn-bordered fullwidth text-crop"> View the workaway blog </a>
                          </div>
                          <div className="clear20 visible-xs-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 megamenu-content-col">
                    <div className="text-left">
                      <div className="megamenu-content-title megamenu-content-title-mobile"> How you can get involved? </div>
                      <ul className="megamenu-icon-list">
                        <li>
                          <a className="megamenu-icon-list-link" href="/en/community/ambassador">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/ambassadors.svg"/>
                            </div>
                            <div className="megamenu-icon-list-text"> Workaway Ambassadors </div>
                          </a>
                        </li>
                        <li>
                          <a className="megamenu-icon-list-link" href="/en/community/travel-photos">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/photo-competition.svg"/>
                            </div>
                            <div className="megamenu-icon-list-text"> Workaway photo gallery </div>
                          </a>
                        </li>
                        <li>
                          <a className="megamenu-icon-list-link" href="https://www.workaway.tv" target="_blank">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/workaway-tv.svg"/>
                            </div>
                            <div className="megamenu-icon-list-text"> Workaway.tv </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
    )
}
export default CommunityMenu