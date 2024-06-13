function SoftWareMenu(props){
    const tab = props.tab
    return(
      <ul id={tab==1?"visibleMenu":""} className="hsg-nav__dropdown-list hsg-nav__dropdown-cards hsg-nav__dropdown-list--1-col 
        hsg-nav__dropdown-variant-c">
                    <li className="hsg-nav__dropdown-list-title">
                      <h2 className="hsg-nav__dropdown-list-title-text">Software</h2>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links">
                      <div className="hsg-nav__dropdown-column">
                        <div className="hsg-nav__box-link-none">
                          <div className="hsg-nav__header-container">
                            <h3 className="hsg-nav__header">بستر اختراعات</h3>
                            <p className="hsg-nav__subheader">انتخاب دسته بندی مورد نظر برای جستجوی ثبت اختراعات</p>
                          </div>
                        </div>
                        <a href="/inquiry" className="ga_nav_link hsg-nav__box-link nav-software-freecrm" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Free sadaf CRM">
                          <div className="hsg-nav__header-container">
                            <h3 className="hsg-nav__header hsg-nav__header-link">سامانه استعلام آنلاین</h3>
                            <p className="hsg-nav__subheader"></p>
                          </div>
                        </a>
                        <a href="/reg-idea" className="ga_nav_link hsg-nav__box-link nav-software-platform" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Overview of all products">
                          <div className="hsg-nav__header-container">
                            <h3 className="hsg-nav__header hsg-nav__header-link">سامانه ثبت ایده</h3>
                            <p className="hsg-nav__subheader"></p>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li className="hsg-nav__dropdown-row">
                      <p className="hsg-nav__dropdown-row-description"></p>
                      <a href="/report/engineer" className="ga_nav_link hsg-nav__box-link nav-software-marketing" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Marketing Hub">
                        <div className="hsg-nav__box-link-icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3756 8.17268L7.34098 21.7172C5.74228 23.1032 3.3231 22.932 1.93706 21.3333C0.587959 19.7776 0.70937 17.4339 2.2123 16.0267L17.2477 2.48068" fill="url(#paint0_linear_206_206)"></path>
                            <path d="M16.3654 4.67973L16.3122 14.5154C16.3023 16.3396 17.7731 17.8263 19.5972 17.8362L19.598 17.8362C21.4222 17.8461 22.9089 16.3753 22.9188 14.5511L22.972 4.71547C22.9819 2.89131 21.5111 1.40453 19.687 1.39466L19.6862 1.39466C17.862 1.38479 16.3753 2.85556 16.3654 4.67973Z" fill="url(#paint1_linear_206_206)"></path>
                            <path d="M23 4.64347C23.0007 6.46539 21.5249 7.94344 19.7023 7.9442L9.97882 7.94947C8.1569 7.95023 6.67886 6.47444 6.6781 4.65177C6.67659 2.82985 8.15313 1.3518 9.97505 1.35104L19.6985 1.34576C21.5204 1.34501 22.9985 2.8208 22.9992 4.64347H23Z" fill="url(#paint2_linear_206_206)"></path>
                            <path d="M9.86726 7.96003C11.6927 7.96003 13.1725 6.48022 13.1725 4.65478C13.1725 2.82934 11.6927 1.34953 9.86726 1.34953C8.04182 1.34953 6.56201 2.82934 6.56201 4.65478C6.56201 6.48022 8.04182 7.96003 9.86726 7.96003Z" fill="#FF5C35"></path>
                            <defs>
                              <linearGradient id="paint0_linear_206_206" x1="11.6877" y1="2.48068" x2="11.6877" y2="22.6545" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF814E"></stop>
                                <stop offset="0.82" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_206_206" x1="19.6427" y1="1.39492" x2="19.6427" y2="17.8367" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF824E"></stop>
                                <stop offset="0.45" stop-color="#FF7E4B"></stop>
                                <stop offset="0.71" stop-color="#FF7243"></stop>
                                <stop offset="0.97" stop-color="#FF5E36"></stop>
                                <stop offset="1" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_206_206" x1="19.5107" y1="-0.0336432" x2="9.25196" y2="8.94653" gradientUnits="userSpaceOnUse">
                                <stop offset="0.27" stop-color="#FF824E"></stop>
                                <stop offset="0.74" stop-color="#FFA766"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="hsg-nav__header-container">
                          <h4 className="hsg-nav__header"> فنی مهندسی </h4>
                          <p className="hsg-nav__subheader">آخرین اختراعات فنی مهندسی <br/>
                          <span className="hsg-nav__subheader-highlight">ثبت ایده</span>
                          </p>
                        </div>
                      </a>
                      <a href="/report/human-science" className="ga_nav_link hsg-nav__box-link nav-software-sales" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Sales Hub">
                        <div className="hsg-nav__box-link-icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3756 8.17268L7.34098 21.7172C5.74228 23.1032 3.3231 22.932 1.93706 21.3333C0.587959 19.7776 0.70937 17.4339 2.2123 16.0267L17.2477 2.48068" fill="url(#paint0_linear_206_206)"></path>
                            <path d="M16.3654 4.67973L16.3122 14.5154C16.3023 16.3396 17.7731 17.8263 19.5972 17.8362L19.598 17.8362C21.4222 17.8461 22.9089 16.3753 22.9188 14.5511L22.972 4.71547C22.9819 2.89131 21.5111 1.40453 19.687 1.39466L19.6862 1.39466C17.862 1.38479 16.3753 2.85556 16.3654 4.67973Z" fill="url(#paint1_linear_206_206)"></path>
                            <path d="M23 4.64347C23.0007 6.46539 21.5249 7.94344 19.7023 7.9442L9.97882 7.94947C8.1569 7.95023 6.67886 6.47444 6.6781 4.65177C6.67659 2.82985 8.15313 1.3518 9.97505 1.35104L19.6985 1.34576C21.5204 1.34501 22.9985 2.8208 22.9992 4.64347H23Z" fill="url(#paint2_linear_206_206)"></path>
                            <path d="M9.86726 7.96003C11.6927 7.96003 13.1725 6.48022 13.1725 4.65478C13.1725 2.82934 11.6927 1.34953 9.86726 1.34953C8.04182 1.34953 6.56201 2.82934 6.56201 4.65478C6.56201 6.48022 8.04182 7.96003 9.86726 7.96003Z" fill="#FF5C35"></path>
                            <defs>
                              <linearGradient id="paint0_linear_206_206" x1="11.6877" y1="2.48068" x2="11.6877" y2="22.6545" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF814E"></stop>
                                <stop offset="0.82" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_206_206" x1="19.6427" y1="1.39492" x2="19.6427" y2="17.8367" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF824E"></stop>
                                <stop offset="0.45" stop-color="#FF7E4B"></stop>
                                <stop offset="0.71" stop-color="#FF7243"></stop>
                                <stop offset="0.97" stop-color="#FF5E36"></stop>
                                <stop offset="1" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_206_206" x1="19.5107" y1="-0.0336432" x2="9.25196" y2="8.94653" gradientUnits="userSpaceOnUse">
                                <stop offset="0.27" stop-color="#FF824E"></stop>
                                <stop offset="0.74" stop-color="#FFA766"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="hsg-nav__header-container">
                          <h4 className="hsg-nav__header"> علوم انسانی </h4>
                          <p className="hsg-nav__subheader">آخرین اختراعات علوم انسانی <br/>
                          <span className="hsg-nav__subheader-highlight">ثبت ایده</span>
                          </p>
                        </div>
                      </a>
                      <a href="/report/military" className="ga_nav_link hsg-nav__box-link nav-software-service" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Service Hub">
                        <div className="hsg-nav__box-link-icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3756 8.17268L7.34098 21.7172C5.74228 23.1032 3.3231 22.932 1.93706 21.3333C0.587959 19.7776 0.70937 17.4339 2.2123 16.0267L17.2477 2.48068" fill="url(#paint0_linear_206_206)"></path>
                            <path d="M16.3654 4.67973L16.3122 14.5154C16.3023 16.3396 17.7731 17.8263 19.5972 17.8362L19.598 17.8362C21.4222 17.8461 22.9089 16.3753 22.9188 14.5511L22.972 4.71547C22.9819 2.89131 21.5111 1.40453 19.687 1.39466L19.6862 1.39466C17.862 1.38479 16.3753 2.85556 16.3654 4.67973Z" fill="url(#paint1_linear_206_206)"></path>
                            <path d="M23 4.64347C23.0007 6.46539 21.5249 7.94344 19.7023 7.9442L9.97882 7.94947C8.1569 7.95023 6.67886 6.47444 6.6781 4.65177C6.67659 2.82985 8.15313 1.3518 9.97505 1.35104L19.6985 1.34576C21.5204 1.34501 22.9985 2.8208 22.9992 4.64347H23Z" fill="url(#paint2_linear_206_206)"></path>
                            <path d="M9.86726 7.96003C11.6927 7.96003 13.1725 6.48022 13.1725 4.65478C13.1725 2.82934 11.6927 1.34953 9.86726 1.34953C8.04182 1.34953 6.56201 2.82934 6.56201 4.65478C6.56201 6.48022 8.04182 7.96003 9.86726 7.96003Z" fill="#FF5C35"></path>
                            <defs>
                              <linearGradient id="paint0_linear_206_206" x1="11.6877" y1="2.48068" x2="11.6877" y2="22.6545" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF814E"></stop>
                                <stop offset="0.82" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_206_206" x1="19.6427" y1="1.39492" x2="19.6427" y2="17.8367" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF824E"></stop>
                                <stop offset="0.45" stop-color="#FF7E4B"></stop>
                                <stop offset="0.71" stop-color="#FF7243"></stop>
                                <stop offset="0.97" stop-color="#FF5E36"></stop>
                                <stop offset="1" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_206_206" x1="19.5107" y1="-0.0336432" x2="9.25196" y2="8.94653" gradientUnits="userSpaceOnUse">
                                <stop offset="0.27" stop-color="#FF824E"></stop>
                                <stop offset="0.74" stop-color="#FFA766"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="hsg-nav__header-container">
                          <h4 className="hsg-nav__header"> صنایع نظامی </h4>
                          <p className="hsg-nav__subheader">آخرین اختراعات صنایع نظامی <br/>
                             <span className="hsg-nav__subheader-highlight">ثبت ایده</span>
                          </p>
                        </div>
                      </a>
                      <a href="https://www.sadaf.com/products/content?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-software-content&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link nav-software-content" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Content Hub">
                        <div className="hsg-nav__box-link-icon" aria-hidden="true">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00055 22.4011L20.2042 14.7714C21.7325 13.8883 22.2561 11.9324 21.3738 10.4027C20.4914 8.8731 18.5371 8.34901 17.0088 9.23215L3.80519 16.8618C2.27687 17.7449 1.75323 19.7008 2.6356 21.2305C3.51798 22.7601 5.47223 23.2842 7.00055 22.4011Z" fill="#FF5C35"></path>
                            <path d="M8.60181 19.6297L8.60181 4.37046C8.60181 2.6042 7.17119 1.17236 5.40644 1.17236C3.6417 1.17236 2.21108 2.6042 2.21108 4.37046L2.21108 19.6297C2.21108 21.396 3.6417 22.8278 5.40644 22.8278C7.17119 22.8278 8.60181 21.396 8.60181 19.6297Z" fill="url(#paint0_linear_18_51)"></path>
                            <path d="M20.2038 9.22869L7.00018 1.59905C5.47186 0.715919 3.5176 1.24001 2.63523 2.76963C1.75285 4.29926 2.2765 6.25519 3.80481 7.13832L17.0084 14.768C18.5368 15.6511 20.491 15.127 21.3734 13.5974C22.2558 12.0677 21.7321 10.1118 20.2038 9.22869Z" fill="url(#paint1_linear_18_51)"></path>
                            <path d="M18.6101 15.2148C20.379 15.2148 21.813 13.7796 21.813 12.0092C21.813 10.2387 20.379 8.80347 18.6101 8.80347C16.8411 8.80347 15.4071 10.2387 15.4071 12.0092C15.4071 13.7796 16.8411 15.2148 18.6101 15.2148Z" fill="#FF5C35"></path>
                            <defs>
                              <linearGradient id="paint0_linear_18_51" x1="8.67259" y1="2.08068" x2="2.12767" y2="21.9162" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF824E"></stop>
                                <stop offset="0.42" stop-color="#FF7747"></stop>
                                <stop offset="0.82" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_18_51" x1="9.2377" y1="-0.252881" x2="14.78" y2="16.6178" gradientUnits="userSpaceOnUse">
                                <stop offset="0.27" stop-color="#FF824E"></stop>
                                <stop offset="0.74" stop-color="#FFA766"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="hsg-nav__header-container">
                          <h4 className="hsg-nav__header"> علوم کامپیوتر </h4>
                          
                          <p className="hsg-nav__subheader">آخرین اختراعات  <br/>
                             <span className="hsg-nav__subheader-highlight">ثبت ایده</span>
                          </p>
                        </div>
                      </a>
                      <a href="https://www.sadaf.com/products/operations?hubs_content=www.sadaf.com%2F&amp;hubs_content-cta=nav-software-operations&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link nav-software-operations" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Operations Hub">
                        <div className="hsg-nav__box-link-icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00055 22.4011L20.2042 14.7714C21.7325 13.8883 22.2561 11.9324 21.3738 10.4027C20.4914 8.8731 18.5371 8.34901 17.0088 9.23215L3.80519 16.8618C2.27687 17.7449 1.75323 19.7008 2.6356 21.2305C3.51798 22.7601 5.47223 23.2842 7.00055 22.4011Z" fill="#FF5C35"></path>
                            <path d="M8.60181 19.6297L8.60181 4.37046C8.60181 2.6042 7.17119 1.17236 5.40644 1.17236C3.6417 1.17236 2.21108 2.6042 2.21108 4.37046L2.21108 19.6297C2.21108 21.396 3.6417 22.8278 5.40644 22.8278C7.17119 22.8278 8.60181 21.396 8.60181 19.6297Z" fill="url(#paint0_linear_18_51)"></path>
                            <path d="M20.2038 9.22869L7.00018 1.59905C5.47186 0.715919 3.5176 1.24001 2.63523 2.76963C1.75285 4.29926 2.2765 6.25519 3.80481 7.13832L17.0084 14.768C18.5368 15.6511 20.491 15.127 21.3734 13.5974C22.2558 12.0677 21.7321 10.1118 20.2038 9.22869Z" fill="url(#paint1_linear_18_51)"></path>
                            <path d="M18.6101 15.2148C20.379 15.2148 21.813 13.7796 21.813 12.0092C21.813 10.2387 20.379 8.80347 18.6101 8.80347C16.8411 8.80347 15.4071 10.2387 15.4071 12.0092C15.4071 13.7796 16.8411 15.2148 18.6101 15.2148Z" fill="#FF5C35"></path>
                            <defs>
                              <linearGradient id="paint0_linear_18_51" x1="8.67259" y1="2.08068" x2="2.12767" y2="21.9162" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF824E"></stop>
                                <stop offset="0.42" stop-color="#FF7747"></stop>
                                <stop offset="0.82" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_18_51" x1="9.2377" y1="-0.252881" x2="14.78" y2="16.6178" gradientUnits="userSpaceOnUse">
                                <stop offset="0.27" stop-color="#FF824E"></stop>
                                <stop offset="0.74" stop-color="#FFA766"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="hsg-nav__header-container">
                          <h4 className="hsg-nav__header"> مهندسی شیمی </h4>
                          
                          <p className="hsg-nav__subheader">آخرین اختراعات  <br/>
                             <span className="hsg-nav__subheader-highlight">ثبت ایده</span>
                          </p>
                        </div>
                      </a>
                      <a href="https://www.sadaf.com/products/commerce?hubs_content=www.sadaf.com&amp;hubs_content-cta=nav-software-commerce&amp;hubs_post=blog.sadaf.com%25252F&amp;hubs_post-cta=null&amp;_gl=1*zbxus2*_ga*MTY2MjYyMTg5Mi4xNzE2OTA4NDUz*_ga_LXTM6CQ0XK*MTcxNjkwODQ1MS4xLjEuMTcxNjkwOTQzOS4yMi4wLjA." className="ga_nav_link hsg-nav__box-link nav-software-commerce" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > Commerce Hub">
                        <div className="hsg-nav__box-link-icon" aria-hidden="true">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3756 8.17268L7.34098 21.7172C5.74228 23.1032 3.3231 22.932 1.93706 21.3333C0.587959 19.7776 0.70937 17.4339 2.2123 16.0267L17.2477 2.48068" fill="url(#paint0_linear_206_206)"></path>
                            <path d="M16.3654 4.67973L16.3122 14.5154C16.3023 16.3396 17.7731 17.8263 19.5972 17.8362L19.598 17.8362C21.4222 17.8461 22.9089 16.3753 22.9188 14.5511L22.972 4.71547C22.9819 2.89131 21.5111 1.40453 19.687 1.39466L19.6862 1.39466C17.862 1.38479 16.3753 2.85556 16.3654 4.67973Z" fill="url(#paint1_linear_206_206)"></path>
                            <path d="M23 4.64347C23.0007 6.46539 21.5249 7.94344 19.7023 7.9442L9.97882 7.94947C8.1569 7.95023 6.67886 6.47444 6.6781 4.65177C6.67659 2.82985 8.15313 1.3518 9.97505 1.35104L19.6985 1.34576C21.5204 1.34501 22.9985 2.8208 22.9992 4.64347H23Z" fill="url(#paint2_linear_206_206)"></path>
                            <path d="M9.86726 7.96003C11.6927 7.96003 13.1725 6.48022 13.1725 4.65478C13.1725 2.82934 11.6927 1.34953 9.86726 1.34953C8.04182 1.34953 6.56201 2.82934 6.56201 4.65478C6.56201 6.48022 8.04182 7.96003 9.86726 7.96003Z" fill="#FF5C35"></path>
                            <defs>
                              <linearGradient id="paint0_linear_206_206" x1="11.6877" y1="2.48068" x2="11.6877" y2="22.6545" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF814E"></stop>
                                <stop offset="0.82" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_206_206" x1="19.6427" y1="1.39492" x2="19.6427" y2="17.8367" gradientUnits="userSpaceOnUse">
                                <stop offset="0.18" stop-color="#FF824E"></stop>
                                <stop offset="0.45" stop-color="#FF7E4B"></stop>
                                <stop offset="0.71" stop-color="#FF7243"></stop>
                                <stop offset="0.97" stop-color="#FF5E36"></stop>
                                <stop offset="1" stop-color="#FF5C35"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_206_206" x1="19.5107" y1="-0.0336432" x2="9.25196" y2="8.94653" gradientUnits="userSpaceOnUse">
                                <stop offset="0.27" stop-color="#FF824E"></stop>
                                <stop offset="0.74" stop-color="#FFA766"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="hsg-nav__header-container">
                          <h4 className="hsg-nav__header"> مهندسی شیلات </h4>
                          
                          <p className="hsg-nav__subheader">آخرین اختراعات صنایع دریایی <br/>
                             <span className="hsg-nav__subheader-highlight">ثبت ایده</span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="hsg-nav__dropdown-row hsg-nav__dropdown-row--links hsg-nav__dropdown-row--links-horizontal">
                      <div className="hsg-nav__dropdown-column">
                        <a href="/contact" className="ga_nav_link hsg-nav__box-link nav-software-ai" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > sadaf AI">
                          <h3 className="hsg-nav__header">مشاوره حضوری</h3>
                          <p className="hsg-nav__subheader">راهنمای حضوری برای تسریع ثبت اختراع <br/>
                          <span className="hsg-nav__subheader-highlight">تماس با ما</span>
                          </p>
                        </a>
                      </div>
                      <div className="hsg-nav__dropdown-column">
                        <a href="/industry" className="ga_nav_link hsg-nav__box-link nav-software-marketplace" data-ga_nav_type="header_nav" data-ga_nav_tree_text="Software > App Marketplace">
                          <h3 className="hsg-nav__header">ثبت تجاری ایده</h3>
                          <p className="hsg-nav__subheader">ایده خود را به راحتی تجاری سازی نمایید. <br/>
                          <span className="hsg-nav__subheader-highlight">ارتباط با صنعت</span>
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
    )
}
export default SoftWareMenu