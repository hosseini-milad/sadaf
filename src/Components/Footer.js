
const Footer = (props)=>{
    
    return(
      <footer className="hsg-footer">
        <div className="hsg-footer__layout">
          <nav className="hsg-footer__nav">
            <div className="hsg-footer__nav-left">
              <section className="hsg-footer__nav-column hsg-footer__nav-column-left">
                <h2 className="hsg-footer__nav-heading">
                  <button className="hsg-footer__nav-toggle" >تماس با ما</button>
                </h2>
                <p>
                  قم- شهرك پرديسان- بلوار دانشگاه- ابتداي بلوار شهید مولوي- 
                  پارك علم و فناوري استان قم
                  <br/>
                  كدپستي 3749113916
                  <br/>
                  تلفن : 32220000-025

                </p>
              </section>
            </div>
            
            <div className="hsg-footer__nav-right">
              <div className="hsg-footer__nav-full">
                <section className="hsg-footer__nav-column ">
                  <h2 className="hsg-footer__nav-heading">
                    <button className="hsg-footer__nav-toggle" >محورهای رویداد</button>
                  </h2>
                  <ul>
                    <li className="hsg-footer__nav-item" data-order="0">
                      <a className="ga_nav_link " href="#"> دوره های آموزشی</a>
                    </li>
                    <li className="hsg-footer__nav-item" data-order="0">
                      <a className="ga_nav_link " href="#"> ثبت نام دوره</a>
                    </li>
                    <li className="hsg-footer__nav-item" data-order="0">
                      <a className="ga_nav_link " href="#"> راهنمای سایت</a>
                    </li>
                    
                  </ul>
                </section>
              </div>
              <div className="hsg-footer__nav-full">
                <section className="hsg-footer__nav-column ">
                  <h2 className="hsg-footer__nav-heading">
                    <button className="hsg-footer__nav-toggle">درباره ما</button>
                  </h2>
                  <ul>
                    <li className="hsg-footer__nav-item" data-order="0">
                      <a className="ga_nav_link " href="#">درباره تانا</a>
                    </li>
                    <li className="hsg-footer__nav-item" data-order="1">
                      <a className="ga_nav_link " href="#"> موقعیت های شغلی</a>
                    </li>
                    <li className="hsg-footer__nav-item" data-order="2">
                      <a className="ga_nav_link " href="#"> آشنایی با تیم ما</a>
                    </li>
                    <li className="hsg-footer__nav-item" data-order="3">
                      <a className="ga_nav_link " href="#"> مزیت های تانا</a>
                    </li>
                  </ul>
                </section>
              </div>
              
            </div>
          </nav>
        </div>
        <section className="hsg-footer__contact-links social-cl">
          <ul className="hsg-footer__social">
            <li>
              <a href="https://www.facebook.com/sadaf?hubs_content=www.sadaf.ir/products/crm&amp;hubs_content-cta=hstc_facebook" target="_blank" className="ga_nav_link hstc_facebook" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Facebook">
                <i className="fa fa-facebook socialIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sadaf/?hubs_content=www.sadaf.ir/products/crm&amp;hubs_content-cta=hstc_instagram" target="_blank" className="ga_nav_link hstc_instagram" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Instagram">
              <i className="fa fa-instagram socialIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/user/sadaf?hubs_content=www.sadaf.ir/products/crm&amp;hubs_content-cta=hstc_youtube" target="_blank" className="ga_nav_link hstc_youtube" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Youtube">
              <i className="fa fa-youtube socialIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/sadaf?hubs_content=www.sadaf.ir/products/crm&amp;hubs_content-cta=hstc_twitter" target="_blank" className="ga_nav_link hstc_twitter" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Twitter">
              <i className="fa fa-paper-plane socialIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/sadaf?hubs_content=www.sadaf.ir/products/crm&amp;hubs_content-cta=hstc_linkedin" target="_blank" className="ga_nav_link hstc_linkedin" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Linkedin">
              <i className="fa fa-linkedin socialIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@sadaf?hubs_content=www.sadaf.ir/products/crm&amp;hubs_content-cta=hstc_medium" target="_blank" className="ga_nav_link hstc_medium" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Medium">
              <i className="fa fa-whatsapp socialIcon"></i>
              </a>
            </li>
          </ul>
        </section>
        <section className="hsg-footer__bottom">
          <div className="hsg-footer__logo">
            <a href="/" className="ga_nav_link" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="sadaf Logo">
              <img loading="lazy" src="/Wordmark-White.svg" alt="event-value"/>
            </a>
            <p>تمامی حقوق سایت متعلق به 
              <a href="www.qomstp.ir"> پارک علم و فناوری استان قم </a>
              است.
            </p>
          </div>
          
        </section>
      </footer>
    )
}
export default Footer