import { useEffect } from "react";
import { useState } from "react";
import SoftWareMenu from "./MegaMenu/SoftwareMenu";
import ResourceMenu from "./MegaMenu/PlanMenu";

const Menu = (props)=>{
    const [tab,setTab] = useState(-1)
    return(
      <div data-fixed-element="placeholder">
      <nav className="hsg-nav-menu stickyHeader" >
        <div className="cl-page-width">
          <div className="hsg-nav__inner">
            <a href="/" className="logo">
              <img id="hsg-nav__logo-desktop" alt="sadaf" src="/img/logo_main.png"/>
              <img id="hsg-nav__logo-fixed" alt="sadaf" src="/img/logo_main.png"/>
              <img id="hsg-nav__logo-mobile" alt="sadaf" src="/img/logo_main.png"/>
              
            </a>
            <button id="hsg-nav__logo-caret" data-hs-event-72370834="1">
              
              <span id="hsg-nav__logo-caret-home">Home</span>
            </button>
            <div className="hsg-nav__group-item--search-container">
              <input type="search" className="" data-id="hsg-nav__search-input" placeholder="Search sadaf.com" data-config="{&quot;contexts&quot;:[{&quot;cx&quot;:&quot;009219321729865762236:z9gsnksfc30&quot;,&quot;id&quot;:&quot;website&quot;,&quot;label&quot;:&quot;Search sadaf.com&quot;,&quot;selected&quot;:true},{&quot;cx&quot;:&quot;009219321729865762236:fzizmixjdmi&quot;,&quot;id&quot;:&quot;blog&quot;,&quot;label&quot;:&quot;Search the blog&quot;,&quot;selected&quot;:null}],&quot;loadMoreButton&quot;:&quot;Load More Results&quot;,&quot;noResults&quot;:[&quot;That's odd...&quot;,&quot;couldn't find quite the right match.&quot;,&quot;Don't worry, try searching again up top.&quot;]}" aria-label="Search"/>
            </div>
            <div className="hsg-nav__burger-wrapper">
              <button className="hsg-nav__burger" aria-expanded="false" aria-controls="burger-submenu" data-hs-event-72370834="1">
                <span className="visually-hidden">Menu</span>
                <span className="hsg-nav__burger-label" aria-hidden="true"></span>
              </button>
            </div>
            <div id="burger-submenu" className="hsg-nav__groups-wrapper">
              <ul className="hsg-nav__group hsg-nav__group--primary">
                <li className="hsg-nav__group-item hsg-nav__group-item--order-1 hsg-nav__group-item--has-dropdown"
                onMouseOver={()=>setTab(1)} onMouseOut={()=>setTab(-1)}>
                  <div className="hsg-nav__link-wrapper">
                    <button className="hsg-nav__link" aria-expanded="false" 
                    onClick={()=>window.location.href="/report"}>
                      <span className="hsg-nav__link-label"> استعلام اختراع </span>
                    </button>
                  </div>
                  
                  <SoftWareMenu tab={tab}/>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-2 ">
                  <div className="hsg-nav__link-wrapper">
                    <a href="/reg-idea" className="ga_nav_link hsg-nav__link hsg-nav__link-active nav-pricing" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Pricing">
                      <span className="hsg-nav__link-label"> ثبت اختراع </span>
                    </a>
                  </div>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-3 hsg-nav__group-item--has-dropdown"
                  onMouseOver={()=>setTab(2)} onMouseOut={()=>setTab(-1)}>
                  <div className="hsg-nav__link-wrapper">
                    <button className="hsg-nav__link" aria-expanded="false" aria-controls="hsg-nav-submenu-3" data-hs-event-72370834="1">
                      <span className="hsg-nav__link-label"> راهنمای ثبت </span>
                    </button>
                  </div>
                  <ResourceMenu tab={tab} />
                </li>
                <li className="hsg-nav__group-item  hsg-nav__group-item--has-dropdown  hsg-nav__group-item--about-mobile">
                  <div className="hsg-nav__link-wrapper">
                    <button className="hsg-nav__link homepage-nav-about-mobile" aria-expanded="false" aria-controls="hsg-nav-about-submenu-mobile" data-hs-event-72370834="1">
                      <span className="hsg-nav__link-label"> درباره </span>
                    </button>
                  </div>
                  <ul id="hsg-nav-about-submenu-mobile" className="hsg-nav__dropdown-list hsg-nav__dropdown-cards">
                    <li className="hsg-nav__dropdown-list-title">
                      <h2 className="hsg-nav__dropdown-list-title-text">درباره</h2>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links">
                      <a href="https://www.sadaf.com/our-story?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-utility-about&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link  nav-utility-about " data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > About Us">
                        <div className="hsg-nav__header">درباره ما</div>
                      </a>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links">
                      <a href="https://www.sadaf.com/careers?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-utility-careers&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link  nav-utility-careers " data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Careers">
                        <div className="hsg-nav__header">Careers</div>
                      </a>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links">
                      <a href="https://www.sadaf.com/company/contact?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-utility-contact&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link  nav-utility-contact " data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Contact Us">
                        <div className="hsg-nav__header">Contact Us</div>
                      </a>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links">
                      <a href="https://ir.sadaf.com/?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-utility-investors&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link  nav-utility-investors " data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Investor Relations">
                        <div className="hsg-nav__header">Investor Relations</div>
                      </a>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links">
                      <a href="https://www.sadaf.com/company/management?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-utility-management&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link  nav-utility-management " data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Management Team">
                        <div className="hsg-nav__header">Management Team</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="hsg-nav__group hsg-nav__group--cta" role="none">
                <li className="hsg-nav__group-item hsg-nav__group-item--cta" role="none">
                  <div className="header-nav__ctas ">
                    <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " href="/login"> ورود به سامانه
                    </a>
                    <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav2 " href="/contact"> تماس با ما
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="hsg-nav__group hsg-nav__group--utility hsg-nav__group--has-contrast-toggle">
                <li className="hsg-nav__group-item hsg-nav__group--lang">
                  <ul className="hsg-nav__group">
                    <li className="hsg-nav__group-item hsg-nav__group-item--has-dropdown">
                      <div className="hsg-nav__link-wrapper">
                        <button aria-expanded="false" aria-controls="Language-submenu-mobile" className="hsg-nav__link" data-hs-event-72370834="1">
                          <span className="hsg-nav__link-label hsg-nav__link-label--globe">
                             English <span className="visually-hidden">: Select a language</span>
                          </span>
                        </button>
                      </div>
                      <ul id="Language-submenu-mobile" className="hsg-nav__dropdown-list">
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.sadaf.jp/?hubs_content=www.sadaf.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.sadaf.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="ja" data-ga_nav_type="header_nav" data-ga_nav_tree_text="日本語">日本語</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.sadaf.de/?hubs_content=www.sadaf.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.sadaf.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="de" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Deutsch">Deutsch</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link active " href="https://www.sadaf.com/?hubs_content=www.sadaf.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.sadaf.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav" aria-current="page" lang="en" data-ga_nav_type="header_nav" data-ga_nav_tree_text="English">English</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.sadaf.es/?hubs_content=www.sadaf.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.sadaf.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="es" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Español">Español</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://br.sadaf.com/?hubs_content=www.sadaf.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.sadaf.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav" lang="pt" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Português">Português</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.sadaf.fr/?hubs_content=www.sadaf.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.sadaf.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="fr" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Français">Français</a>
                        </li>
                      </ul>
                    </li>
                    <li className="hsg-nav__group-item hsg-nav__group-item--has-contrast-toggle">
                      <button className="a11y-contrast-toggle -small -icon-left" type="button" role="switch" aria-checked="false" data-cl-mounted="" data-hs-event-72370834="1">
                        <span className="a11y-contrast-toggle__switch" aria-hidden="true">
                          <span className="a11y-contrast-toggle__contrast-icon"></span>
                        </span>
                        <span className="a11y-contrast-toggle__label">High Contrast</span>
                      </button>
                    </li>
                    <li className="hsg-nav__group-item">
                      <div className="hsg-nav__link-wrapper">
                        <a href="https://offers.sadaf.com/contact-sales?hubs_signup-url=www.sadaf.com%2F&amp;hubs_signup-cta=nav-utility-contactsales&amp;hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-utility-contactsales&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__link  nav-utility-contactsales" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Contact Sales">
                          <span className="hsg-nav__link-label hsg-nav__link-label--contact-us">
                             تماس  </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--login">
                  <a href="https://app.sadaf.com/login?hubs_signup-url=www.sadaf.com%2F&amp;hubs_signup-cta=Log+in&amp;hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=Log+in&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;uuid=b5bb4fb5-302b-48a6-be15-b30b8df0c9c0" data-logged-in-text="done" data-logged-in-href="//app.sadaf.com/home" className="ga_nav_link" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Log in">Log in</a>
                </li>
                <li className="hsg-nav__group-item">
                  <a className="ga_nav_link hsg-nav__group-item--utility" href="https://help.sadaf.com/?_ga=2.23678194.978470726.1592315215-1192486389.1556035228&amp;hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=hsg-nav__group-item--utility&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="Customer Support">Customer Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    )
}
export default Menu