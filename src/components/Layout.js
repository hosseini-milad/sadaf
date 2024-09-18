import { useEffect, useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import HeaderLogin from "./HeaderLogin";
import env from "../env";
import SideBarAccordion from "./SideBarAccordion";
import { PostReq } from "./PostReq";
const lang = JSON.parse(localStorage.getItem(env.cookieLang));

function Layout(props){
    const [pinMenu,setPinMenu] = useState(0)
    
  useEffect(()=>{initial()},[])
  const initial=async()=>{
    var result = await PostReq(
      {method:"GET",url:"/user/welcome",body:{}})
      console.log(result)
      if(result.error){
        //cookies.remove(env.cookieName, { path: "/" });
        //setTimeout(() => (document.location.reload(), 500));
      }
  }
    return(
        <div className={`holder g-sidenav-show bg-gray-200 ${pinMenu?" g-sidenav-pinned":""}
        ${lang.dir==="rtl"?" rtl":""}`}>
            <SideBarAccordion setPinMenu={setPinMenu} lang={lang}/>
            <main className="main-content position-relative h-100 border-radius-lg main-pad">{/* ps ps--active-y">*/}
                <Header lang={lang} setPinMenu={setPinMenu} pinMenu={pinMenu} />
                {props.children}
                <Footer class="footer py-2 w-100"/>
            </main>
        </div>
    )
}
export default Layout