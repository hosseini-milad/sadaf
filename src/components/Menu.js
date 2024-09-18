import { useEffect } from "react";
import { useState } from "react";
import SoftWareMenu from "./MegaMenu/SoftwareMenu";
import ResourceMenu from "./MegaMenu/PlanMenu";

const Menu = (props)=>{
  const token = props.token
    const [tab,setTab] = useState(-1)
    return(
      <div data-fixed-element="placeholder">
      <nav className="hsg-nav-menu stickyHeader" >
        <div className="cl-page-width">
          <div className="hsg-nav__inner">
            <a href="https://qomstp.ir" id="hsg-nav__logo" aria-label="HubSpot" className="ga_nav_link logo-utility-nav">
              <img id="hsg-nav__logo-desktop" alt="HubSpot" src="/img/logo.webp"/>
              <img id="hsg-nav__logo-fixed" alt="HubSpot" src="/img/logo.webp"/>
              <img id="hsg-nav__logo-mobile" alt="HubSpot" src="/img/logo.webp"/>
            </a>
            <div className="hsg-nav__burger-wrapper">
              <button className="hsg-nav__burger" aria-expanded="false" aria-controls="burger-submenu" data-hs-event-72370834="1">
                <span className="visually-hidden">Menu</span>
                <span className="hsg-nav__burger-label" aria-hidden="true"></span>
              </button>
            </div>
            <div id="burger-submenu" className="hsg-nav__groups-wrapper">
              <ul className="hsg-nav__group hsg-nav__group--primary">
                <li className="hsg-nav__group-item hsg-nav__group-item--order-1">
                  <div className="hsg-nav__link-wrapper">
                    <a href="/session" className="ga_nav_link hsg-nav__link hsg-nav__link-active nav-pricing" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Pricing">
                      <span className="hsg-nav__link-label"> سالن جلسات </span>
                    </a>
                  </div>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-2 ">
                  <div className="hsg-nav__link-wrapper">
                    <a href="/suit" className="ga_nav_link hsg-nav__link hsg-nav__link-active nav-pricing" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Pricing">
                      <span className="hsg-nav__link-label"> سوییت ها </span>
                    </a>
                  </div>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--order-1">
                  <div className="hsg-nav__link-wrapper">
                    <a href="/cowork" className="ga_nav_link hsg-nav__link hsg-nav__link-active nav-pricing" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Pricing">
                      <span className="hsg-nav__link-label"> فضای کار اشتراکی </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="hsg-nav__group hsg-nav__group--cta" role="none">
                {!token?<li className="hsg-nav__group-item hsg-nav__group-item--cta" role="none">
                  <div className="header-nav__ctas ">
                    <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                    href="/login" > ورود 
                    </a>
                    <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav2 " 
                    href="/register">ثبت نام
                    </a>
                  </div>
                </li>:
                <li>
                  <div className="header-nav__ctas ">
                    <i className="fa fa-bell"/>
                    <i className="fa fa-envelope"/>
                    <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                    href="/my-page" > صفحه شرکت
                    </a>
                    <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                    href="/profile" > حساب کاربری 
                    </a>
                  </div>
                </li>}
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
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.hubspot.jp/?hubs_content=www.hubspot.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.hubspot.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="ja" data-ga_nav_type="header_nav" data-ga_nav_tree_text="日本語">日本語</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.hubspot.de/?hubs_content=www.hubspot.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.hubspot.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="de" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Deutsch">Deutsch</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link active " href="https://www.hubspot.com/?hubs_content=www.hubspot.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.hubspot.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav" aria-current="page" lang="en" data-ga_nav_type="header_nav" data-ga_nav_tree_text="English">English</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.hubspot.es/?hubs_content=www.hubspot.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.hubspot.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="es" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Español">Español</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://br.hubspot.com/?hubs_content=www.hubspot.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.hubspot.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav" lang="pt" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Português">Português</a>
                        </li>
                        <li className="hsg-nav__dropdown-item">
                          <a className="ga_nav_link hsg-nav__dropdown-country-link" href="https://www.hubspot.fr/?hubs_content=www.hubspot.com%2Ffree-business-tools&amp;hubs_post-cta=null&amp;hubs_post=blog.hubspot.com%252F&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;hubs_content-cta=logo-utility-nav&amp;__hstc=20629287.anon-d75a0b5ff8bfab37a120d8e63af.1716908448213.1716908448213.1716908448213.1&amp;__hssc=20629287.9.1716908448213&amp;__hsfp=666383793" lang="fr" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Français">Français</a>
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
                        <a href="https://offers.hubspot.com/contact-sales?hubs_signup-url=www.hubspot.com%2F&amp;hubs_signup-cta=nav-utility-contactsales&amp;hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-contactsales&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__link  nav-utility-contactsales" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Contact Sales">
                          <span className="hsg-nav__link-label hsg-nav__link-label--contact-us">
                             Contact Sales </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--login">
                  <a href="https://app.hubspot.com/login?hubs_signup-url=www.hubspot.com%2F&amp;hubs_signup-cta=Log+in&amp;hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=Log+in&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;uuid=b5bb4fb5-302b-48a6-be15-b30b8df0c9c0" data-logged-in-text="done" data-logged-in-href="//app.hubspot.com/home" className="ga_nav_link" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Log in">Log in</a>
                </li>
                <li className="hsg-nav__group-item">
                  <a className="ga_nav_link hsg-nav__group-item--utility" href="https://help.hubspot.com/?_ga=2.23678194.978470726.1592315215-1192486389.1556035228&amp;hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=hsg-nav__group-item--utility&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="Customer Support">Customer Support</a>
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