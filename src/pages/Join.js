import JoinBody from "../modules/Join/JoinBody"
import JoinHeader from "../modules/Join/JoinHeader"
import errortrans from "../translate/error"

function Join(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
  
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            <JoinHeader />
            <JoinBody />
        </main>
    )
}
export default Join