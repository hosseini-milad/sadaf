import { useState } from "react"
import errortrans from "../translate/error"
import Footer from "./Footer"
import Header from "./Header"
import Menu from "./Menu"
function Layout(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    
    return(<>
        <Header dir={dir} lang={lang}/>
        <main >{props.children}</main>
        <Footer dir={dir} lang={lang}/>
        </>
    )
}
export default Layout