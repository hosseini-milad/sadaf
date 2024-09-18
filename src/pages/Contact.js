
import errortrans from "../translate/error"

function Contact(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
  
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            
        </main>
    )
}
export default Contact