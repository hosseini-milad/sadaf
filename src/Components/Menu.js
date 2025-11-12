import { useEffect } from "react";
import { useState } from "react";
import SoftWareMenu from "./MegaMenu/SoftwareMenu";
import ResourceMenu from "./MegaMenu/PlanMenu";

const Menu = (props)=>{
    const [tab,setTab] = useState(-1)
    let width = window.innerWidth;
    const [showMenu,setShowMenu] = useState(width<900?0:1)
    const token = props.token
    return(
      <div data-fixed-element="placeholder">
      <nav className="hsg-nav-menu stickyHeader" >
        <div className="cl-page-width">
          <div className="hsg-nav__inner">
            <a href="\" className="logo">
              <img id="hsg-nav__logo-desktop" alt="sadaf" src="/img/sadaf/logoText.webp"/>
              <img id="hsg-nav__logo-fixed" alt="sadaf" src="/img/sadaf/logoText.webp"/>
              <img id="hsg-nav__logo-mobile" alt="sadaf" src="/img/sadaf/logoText.webp"/>
              
            </a>
            <button id="hsg-nav__logo-caret" data-hs-event-72370834="1">
              
              <span id="hsg-nav__logo-caret-home">Home</span>
            </button>
            <div className="hsg-nav__group-item--search-container">
              <input type="search" className="" data-id="hsg-nav__search-input" placeholder="Search sadaf.com" aria-label="Search"/>
            </div>
            <div className="hsg-nav__burger-wrapper">
              <button className="hsg-nav__burger" aria-expanded="false" aria-controls="burger-submenu"
                onClick={()=>setShowMenu(!showMenu)}>
                <span className="visually-hidden">Menu</span>
                {showMenu?<span style={{fontSize:"25px"}}>×</span>:
                <span className="hsg-nav__burger-label" aria-hidden="true"></span>}
              </button>
            </div>
            {showMenu?
            <div id="burger-submenu" className="hsg-nav__groups-wrapper">
              <ul className="hsg-nav__group hsg-nav__group--primary">
                <li className="hsg-nav__group-item hsg-nav__group-item--order-1 hsg-nav__group-item--has-dropdown"
                onMouseOver={()=>setTab(1)} onMouseOut={()=>setTab(-1)}>
                  <div className="hsg-nav__link-wrapper">
                    <button className="hsg-nav__link" aria-expanded="false" 
                    onClick={()=>window.location.href="/"}>
                      <span className="hsg-nav__link-label"> صفحه اصلی </span>
                    </button>
                  </div>
                  
                  {/*<SoftWareMenu tab={tab}/>*/}
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-2 ">
                  <div className="hsg-nav__link-wrapper">
                    <a href="/report" className="ga_nav_link hsg-nav__link hsg-nav__link-active nav-pricing" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Pricing">
                      <span className="hsg-nav__link-label"> ثبت ایده </span>
                    </a>
                  </div>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-3 hsg-nav__group-item--has-dropdown"
                  onMouseOver={()=>setTab(2)} onMouseOut={()=>setTab(-1)}>
                  <div className="hsg-nav__link-wrapper"
                  onClick={()=>window.location.href="/subject"}>
                    <button className="hsg-nav__link">
                      <span className="hsg-nav__link-label"> چالش ها </span>
                    </button>
                  </div>
                  {/*<ResourceMenu tab={tab} />*/}
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-3 hsg-nav__group-item--has-dropdown"
                  onMouseOver={()=>setTab(3)} onMouseOut={()=>setTab(-1)}>
                  <div className="hsg-nav__link-wrapper"
                  onClick={()=>window.location.href="/reg-request"}>
                    <button className="hsg-nav__link homepage-nav-about-mobile" >
                      <span className="hsg-nav__link-label"> ثبت چالش </span>
                    </button>
                  </div>
                </li>
              </ul>
              <ul className="hsg-nav__group hsg-nav__group--cta" role="none">
                <li className="hsg-nav__group-item hsg-nav__group-item--cta" role="none">
                  <div className="header-nav__ctas ">
                    {token?<a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " href="/profile"> پروفایل کاربری
                    </a>:
                    <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " href="/login"> ورود به سامانه
                    </a>}
                    <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav2 " href="/contact"> تماس با ما
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="hsg-nav__group hsg-nav__group--utility hsg-nav__group--has-contrast-toggle">
                <li className="hsg-nav__group-item hsg-nav__group--lang">
                  <ul className="hsg-nav__group">
                    <li className="hsg-nav__group-item hsg-nav__group-item--has-contrast-toggle">
                      
                    </li>
                    
                  </ul>
                </li>
              </ul>
            </div>:<></>}
          </div>
        </div>
      </nav>
    </div>
    )
}
export default Menu