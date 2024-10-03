import env from "../env";
import Footer from "./Footer"
import Header from "./Header"
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get(env.cookieName)

function Layout(props){
    return(<>
        <Header token={token}/>
        {props.children}
        <Footer />
        </>
    )
}
export default Layout