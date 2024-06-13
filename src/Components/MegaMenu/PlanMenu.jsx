function ResourceMenu(props){
    const tab = props.tab
    return(
      <ul id={tab==2?"visibleMenu":""} className="hsg-nav__dropdown-list hsg-nav__dropdown-cards">
      <li className="hsg-nav__dropdown-list-title">
        <h2 className="hsg-nav__dropdown-list-title-text">Resources</h2>
      </li>
      <li className="hsg-nav__link-section">
        <div className="hsg-nav__link-section-icon-wrapper">
          <img className="hsg-nav__link-section-icon hsg-nav__box-link-icon" src="//53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/1-icon.svg" alt=""/>
        </div>
        <div className="hsg-nav__header-container">
          <h3 className="h4 hsg-nav__header"> آموزش </h3>
          <a href="/blog" className="ga_nav_link hsg-nav__box-link nav-resources-blog" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Blog">
            <p className="hsg-nav__subheader"> بلاگ </p>
          </a>
          <a href="/ebook" className="ga_nav_link hsg-nav__box-link nav-resources-ebooks" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Ebooks, Guides &amp; More">
            <p className="hsg-nav__subheader"> کتابچه الکترونیکی </p>
          </a>
          <a href="/free-cource" className="ga_nav_link hsg-nav__box-link nav-resources-academy" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Free Courses &amp; Certifications">
            <p className="hsg-nav__subheader"> دوره های رایگان </p>
          </a>
        </div>
      </li>
      <li className="hsg-nav__link-section">
        <div className="hsg-nav__link-section-icon-wrapper">
          <img className="hsg-nav__link-section-icon hsg-nav__box-link-icon" src="//53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/2-icon.svg" alt=""/>
        </div>
        <div className="hsg-nav__header-container">
          <h3 className="h4 hsg-nav__header"> مزایای صدف </h3>
          <a href="#" className="ga_nav_link hsg-nav__box-link nav-resources-casestudies" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Case Studies">
            <p className="hsg-nav__subheader"> آموزش ایده پردازی </p>
          </a>
          <a href="#" className="ga_nav_link hsg-nav__box-link nav-resources-wch" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Why Choose HubSpot?">
            <p className="hsg-nav__subheader"> جامعیت پایگاه داده </p>
          </a>
          <a href="#" className="ga_nav_link hsg-nav__box-link nav-resources-spotlight" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Spotlight: Product Updates">
            <p className="hsg-nav__subheader"> بروز بوده داده ها </p>
          </a>
        </div>
      </li>
      <li className="hsg-nav__link-section">
        <div className="hsg-nav__link-section-icon-wrapper">
          <img className="hsg-nav__link-section-icon hsg-nav__box-link-icon" src="//53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/3-icon.svg" alt=""/>
        </div>
        <div className="hsg-nav__header-container">
          <h3 className="h4 hsg-nav__header"> خدمات صدف </h3>
          <a href="/services" className="ga_nav_link hsg-nav__box-link nav-resources-services" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Onboarding &amp; Consulting Services">
            <p className="hsg-nav__subheader"> خدمات مشاوره </p>
          </a>
          <a href="/help" className="ga_nav_link hsg-nav__box-link nav-resources-providers" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Hire a Service Provider">
            <p className="hsg-nav__subheader"> دریافت گواهی </p>
          </a>
        </div>
      </li>
      <li className="hsg-nav__link-section">
        <div className="hsg-nav__link-section-icon-wrapper">
          <img className="hsg-nav__link-section-icon hsg-nav__box-link-icon" src="//53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/4-icon.svg" alt=""/>
        </div>
        <div className="hsg-nav__header-container">
          <h3 className="h4 hsg-nav__header"> منابع کاربر </h3>
          <a href="/news" className="ga_nav_link hsg-nav__box-link nav-resources-new" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > What's New">
            <p className="hsg-nav__subheader"> آخرین مطالب </p>
          </a>
          <a href="/company" className="ga_nav_link hsg-nav__box-link nav-resources-partner" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Partner Programs">
            <p className="hsg-nav__subheader"> برنامه همکاری </p>
          </a>
          <a href="/tools" className="ga_nav_link hsg-nav__box-link nav-resources-devtools" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Developer Tools">
            <p className="hsg-nav__subheader"> ابزار توسعه </p>
          </a>
          <a href="/community" className="ga_nav_link hsg-nav__box-link nav-resources-community" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Resources > Community">
            <p className="hsg-nav__subheader"> جامعه ما </p>
          </a>
        </div>
      </li>
    </ul>
    )
}
export default ResourceMenu