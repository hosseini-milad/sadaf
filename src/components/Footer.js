import LanguageSwitcher from "./LanguageSwitcher"

const Footer = (props)=>{
    
    return(
        <footer className={props.class}>
              <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-12 col-md-6 my-auto">
                    <div className="copyright text-center text-sm text-lg-start">
                      © 2023,
                      made by
                      <a href="https://deepware.ir" className="font-weight-bold " target="_blank"> Deepware </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                      <li className="nav-item">
                        <a href="https://deepware.ir" className="nav-link" target="_blank">Deepware</a>
                      </li>
                      <li className="nav-item">
                        <a href="https://deepware.ir/about" className="nav-link" target="_blank">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a href="https://deepware.ir/blog" className="nav-link" target="_blank">Blog</a>
                      </li>
                      <li className="nav-item">
                        <LanguageSwitcher theme="dark"/>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </footer>
    )
}
export default Footer