function HeaderTop(){
    return(
    <nav className="hsg-nav-bar hsg-nav-top-bar" aria-label="Utility Navigation">
        <div className="cl-page-width">
            <div className="hsg-nav__inner">
            <ul className="hsg-nav__group">
                <li className="hsg-nav__group-item">
                <div className="hsg-nav__link-wrapper">
                    <a href="tel:+989123456789" className="ga_nav_link hsg-nav__link  nav-utility-contactsales" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Contact Sales">
                    <span className="hsg-nav__link-label hsg-nav__link-label--contact-us">
                        پشتیبانی </span>
                    </a>
                </div>
                </li>
            </ul>
            <ul className="hsg-nav__group">
                <li className="hsg-nav__group-item hsg-nav__group-item--search">
                <input type="search" className="" data-id="hsg-nav__search-input" placeholder="search..." data-config="{&quot;contexts&quot;:[{&quot;cx&quot;:&quot;009219321729865762236:z9gsnksfc30&quot;,&quot;id&quot;:&quot;website&quot;,&quot;label&quot;:&quot;Search HubSpot.com&quot;,&quot;selected&quot;:true},{&quot;cx&quot;:&quot;009219321729865762236:fzizmixjdmi&quot;,&quot;id&quot;:&quot;blog&quot;,&quot;label&quot;:&quot;Search the blog&quot;,&quot;selected&quot;:null}],&quot;loadMoreButton&quot;:&quot;Load More Results&quot;,&quot;noResults&quot;:[&quot;That's odd...&quot;,&quot;couldn't find quite the right match.&quot;,&quot;Don't worry, try searching again up top.&quot;]}" aria-label="Search" />
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--login">
                <a className="ga_nav_link nav-utility-login" data-logged-in-text="done" data-logged-in-href="//app.hubspot.com/home" href="https://app.hubspot.com/login?hubs_signup-url=www.hubspot.com%2F&amp;hubs_signup-cta=nav-utility-login&amp;hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-login&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA.&amp;uuid=b5bb4fb5-302b-48a6-be15-b30b8df0c9c0" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Log in">Log in</a>
                </li>
                <li className="hsg-nav__group-item">
                <a className="hsg-nav__group-item--utility ga_nav_link nav-utility-support" href="https://help.hubspot.com/?_ga=2.23678194.978470726.1592315215-1192486389.1556035228&amp;hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-support&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="Customer Support">Customer Support</a>
                </li>
                <li className="hsg-nav__group-item hsg-nav__group-item--about hsg-nav__group-item--has-dropdown">
                <div className="hsg-nav__link-wrapper">
                    <button aria-expanded="false" aria-controls="hsg-nav-about-submenu" className="hsg-nav__link" data-hs-event-72370834="1">
                    <span className="hsg-nav__link-label"> About </span>
                    </button>
                </div>
                <ul id="hsg-nav-about-submenu" className="hsg-nav__dropdown-list">
                    <li className="hsg-nav__dropdown-item">
                    <a className="ga_nav_link nav-utility-about" href="https://www.hubspot.com/our-story?hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-about&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > About Us">About Us</a>
                    </li>
                    <li className="hsg-nav__dropdown-item">
                    <a className="ga_nav_link nav-utility-careers" href="https://www.hubspot.com/careers?hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-careers&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Careers">Careers</a>
                    </li>
                    <li className="hsg-nav__dropdown-item">
                    <a className="ga_nav_link nav-utility-contact" href="https://www.hubspot.com/company/contact?hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-contact&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Contact Us">Contact Us</a>
                    </li>
                    <li className="hsg-nav__dropdown-item">
                    <a className="ga_nav_link nav-utility-investors" href="https://ir.hubspot.com/?hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-investors&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Investor Relations">Investor Relations</a>
                    </li>
                    <li className="hsg-nav__dropdown-item">
                    <a className="ga_nav_link nav-utility-management" href="https://www.hubspot.com/company/management?hubs_content=www.hubspot.com%2F&amp;hubs_content-cta=nav-utility-management&amp;hubs_post=blog.hubspot.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." data-ga_nav_type="header_nav" data-ga_nav_tree_text="About > Management Team">Management Team</a>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
export default HeaderTop