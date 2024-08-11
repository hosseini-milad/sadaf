import HeaderTop from "./HeaderTop"
import Menu from "./Menu"

const Header = (props)=>{
  
    return(
      <header className="hsg-nav__wrapper ">
        {/*<HeaderTop />*/}
        <Menu />
        <div id="hsg-main-content" tabIndex="-1"></div>
      </header>
    )
}
export default Header