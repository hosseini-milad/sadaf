function HowWorkMenu(props){
    const tab = props.tab
    return(
        <ul className="dropdown-menu" style={{display:tab===1?"block":""}}>
        <li>
          <div className="container">
            <div className="megamenu-content">
              <div className="row gx-5">
                <div className="col-sm-6 megamenu-content-col">
                  <div className="text-left">
                    <div className="megamenu-content-title megamenu-content-title-mobile"> Information for workawayers </div>
                    <div>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="megamenu-icon-list">
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/info/traveller/solo-traveller">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/solo-traveller.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text">Solo travellers</div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/info/traveller/couple">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/couple.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text">Travelling Couples</div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/info/traveller/families">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/family.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text">Travelling Families</div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/info/information-language-learners">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/language-learners.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text">Language learners</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="megamenu-icon-list">
                            <li>
                              <a href="/en/info/safety/traveladvice">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/icon-shield.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Travel safety tips </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/help-desk/workawayer">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/support.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Help &amp; Support </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/info/safety/idverification">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/icon-id-verification.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Verify by id </div>
                              </a>
                            </li>
                            <li>
                              <a className="megamenu-icon-list-link" href="/en/info/insurance">
                                <div className="megamenu-icon-list-icon">
                                  <img src="/img/gfx/icon-umbrella.svg"/>
                                </div>
                                <div className="megamenu-icon-list-text"> Insurance </div>
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
                            <a href="/en/info/how-it-works/workawayer" className="btn btn-bordered fullwidth text-crop">How it works</a>
                          </div>
                          <div className="clear20 visible-xs-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 megamenu-content-col">
                  <div className="text-left">
                    <div className="megamenu-content-title megamenu-content-title-mobile"> Information for hosts </div>
                    <div>
                      <ul className="megamenu-icon-list">
                        <li>
                          <a className="megamenu-icon-list-link" href="/en/hostinfo/ngo">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/hosttype_ngo.svg"/>
                            </div>
                            <div className="megamenu-icon-list-link-text"> NGOs &amp; Charities </div>
                          </a>
                        </li>
                        <li>
                          <a className="megamenu-icon-list-link" href="/en/hostinfo/family">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/hosttype_family.svg"/>
                            </div>
                            <div className="megamenu-icon-list-link-text"> Families &amp; Homestays </div>
                          </a>
                        </li>
                        <li>
                          <a className="megamenu-icon-list-link" href="/en/info/child-protection-guidelines">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/icon-child-protection.svg"/>
                            </div>
                            <div className="megamenu-icon-list-text"> Child protection </div>
                          </a>
                        </li>
                        <li>
                          <a className="megamenu-icon-list-link" href="/en/info/reviews">
                            <div className="megamenu-icon-list-icon">
                              <img src="/img/gfx/icon-comments-star.svg"/>
                            </div>
                            <div className="megamenu-icon-list-text"> Community feedbacks </div>
                          </a>
                        </li>
                      </ul>
                      <div className="clear15"></div>
                      <div className="clear15 hidden-xs"></div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="megamenu-btn">
                            <a href="/en/info/how-it-works/host" className="btn btn-bordered fullwidth text-crop">How it works</a>
                          </div>
                          <div className="clear20 visible-xs-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    
    )
}
export default HowWorkMenu