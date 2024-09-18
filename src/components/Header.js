import env from "../env";
import HeaderTop from "./HeaderTop"
import Menu from "./Menu"

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Header = (props)=>{
  const token = cookies.get(env.cookieName)
    return(
      <header className="hsg-nav__wrapper ">
        {/*<HeaderTop />*/}
        <Menu token={token}/>
        <div id="hsg-main-content" tabIndex="-1"></div>
      </header>
    )
}
export default Header