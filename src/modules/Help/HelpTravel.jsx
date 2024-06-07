function HelpTravel(){
    return(
      <div id="how-it-works-wa-travelling" className="container text-center">
        <div className="clear40"></div>
        <h2 className="headline-main"> How are you travelling? </h2>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <p className="lead"> Are you a solo traveller or looking to share your adventures with someone else? </p>
          </div>
        </div>
        <div className="clear30"></div>
        <div className="row">
          <div className="col-sm-4">
            <img src="/gfx/menu/badges.jpg" alt="" className="img-responsive img-circle center-block"/>
            <h3>Solo traveller</h3>
            <div className="box-howtotravel">
              <div className="icon-howtotravel">
                <img src="/gfx/2015/icons/howitworks/single.svg" alt="" className="img-responsive center-block"/>
              </div>
              <p>
                <strong>Sign up for a single profile</strong>
                <br/>For people travelling individually. You can contact hosts just for yourself from a single profile.
              </p>
              <p>
                <a href="/en/signup/workawayer">
                  <i className="fa fa-angle-right"></i> Sign up now </a>
              </p>
            </div>
            <div className="clear10"></div>
            <div className="box-howtotravel">
              <div className="icon-howtotravel">
                <img src="/gfx/2015/icons/howitworks/connect-chain.svg" alt="" className="img-responsive center-block"/>
              </div>
              <p>
                <strong>Connect with a travel buddy</strong>
                <br/>If you'd like to meet up with other travellers and share your journey, use the travel buddy feature and connect your profiles.
              </p>
              <p>
                <a data-action="showSignupInfoPopover" href="javascript:;">
                  <i className="fa fa-angle-right"></i> Connect profiles </a>
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img src="/gfx/menu/find-language-buddy.jpg" alt="" className="img-responsive img-circle center-block"/>
            <h3>Travelling as a pair</h3>
            <div className="box-howtotravel">
              <div className="icon-howtotravel">
                <img src="/gfx/2015/icons/howitworks/couple.svg" alt="" className="img-responsive center-block"/>
              </div>
              <p>
                <strong>Sign up or upgrade to a couple profile</strong>
                <br/>Designed for either friends, couples or those that always travel and apply to hosts together.
              </p>
              <p>
                <a href="/en/signup/workawayer">
                  <i className="fa fa-angle-right"></i> Sign up now </a>
              </p>
            </div>
            <div className="clear10"></div>
            <div className="box-howtotravel">
              <div className="icon-howtotravel">
                <img src="/gfx/2015/icons/howitworks/connect-chain.svg" alt="" className="img-responsive center-block"/>
              </div>
              <p>
                <strong>Connect with a travel buddy</strong>
                <br/> If you are travelling on single accounts, you can connect them to apply to hosts together.
              </p>
              <p>
                <a data-action="showSignupInfoPopover" href="javascript:;">
                  <i className="fa fa-angle-right"></i> Connect profiles </a>
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img src="/gfx/menu/find-travelbuddy.jpg" alt="" className="img-responsive img-circle center-block"/>
            <h3>Travelling with others</h3>
            <div className="box-howtotravel">
              <div className="icon-howtotravel">
                <img src="/gfx/2015/icons/howitworks/kids.svg" alt="" className="img-responsive center-block"/>
              </div>
              <p>
                <strong>Travelling with kids</strong>
                <br/>Sign up as two adults (couple account) or a single account for a single parent. Kids under 18 can be included in your account.
              </p>
              <p>
                <a href="/en/signup/workawayer">
                  <i className="fa fa-angle-right"></i> Sign up now </a>
              </p>
            </div>
            <div className="clear10"></div>
            <div className="box-howtotravel">
              <div className="icon-howtotravel">
                <img src="/gfx/2015/icons/howitworks/group.svg" alt="" className="img-responsive center-block"/>
              </div>
              <p>
                <strong>Travelling as a group</strong>
                <br/>All group members must have a completed profile. Connect your accounts to contact hosts together.
              </p>
              <p>
                <a data-action="showSignupInfoPopover" href="javascript:;">
                  <i className="fa fa-angle-right"></i> Connect profiles </a>
              </p>
            </div>
          </div>
        </div>
        <div className="clear40"></div>
      </div>
    )
}
export default HelpTravel