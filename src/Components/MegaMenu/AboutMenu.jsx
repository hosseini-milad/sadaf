function AboutMenu(props){
    return(
        <ul id="hsg-nav-about-submenu" className="hsg-nav__dropdown-list activeMenu">
            <li className="hsg-nav__dropdown-item">
            <a className="ga_nav_link nav-utility-about" href="/about">درباره ما</a>
            </li>
            <li className="hsg-nav__dropdown-item">
            <a className="ga_nav_link nav-utility-careers" href="/careers">موقعیت شغلی</a>
            </li>
            <li className="hsg-nav__dropdown-item">
            <a className="ga_nav_link nav-utility-contact" href="/contact">تماس با ما</a>
            </li>
            <li className="hsg-nav__dropdown-item">
            <a className="ga_nav_link nav-utility-management" href="/team">اعضای تیم</a>
            </li>
        </ul>
    )
}
export default AboutMenu