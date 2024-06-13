import { useState } from "react"
import AboutMenu from "./MegaMenu/AboutMenu"

function HeaderTop(){
    const [tab,setTab] = useState(0)
    return(
    <nav className="hsg-nav-bar hsg-nav-top-bar" aria-label="Utility Navigation">
        <div className="cl-page-width">
            <div className="hsg-nav__inner">
            <ul className="hsg-nav__group">
                <li className="hsg-nav__group-item hsg-nav__group-item--has-dropdown">
                <div className="hsg-nav__link-wrapper">
                    
                </div>
                <ul id="Language-submenu" className="hsg-nav__dropdown-list">
                    
                </ul>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--has-contrast-toggle">
                
                </li>
                <li className="hsg-nav__group-item">
                <div className="hsg-nav__link-wrapper">
                    
                </div>
                </li>
            </ul>
            <ul className="hsg-nav__group">
                <li className="hsg-nav__group-item hsg-nav__group-item--search">
                <input type="search" className="" data-id="hsg-nav__search-input" placeholder="جستجو..." />
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--login">
                <a className="ga_nav_link nav-utility-login" data-logged-in-text="done" >ورود</a>
                </li>
                <li className="hsg-nav__group-item">
                
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--about hsg-nav__group-item--has-dropdown"
                onMouseOver={()=>setTab(1)} onMouseOut={()=>setTab(0)}>
                <div className="hsg-nav__link-wrapper">
                    <button aria-expanded="false" aria-controls="hsg-nav-about-submenu" className="hsg-nav__link" data-hs-event-72370834="1">
                    <span className="hsg-nav__link-label"> راهنما </span>
                    </button>
                </div>
                {tab?<AboutMenu />:<></>}
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
export default HeaderTop