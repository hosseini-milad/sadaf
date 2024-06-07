
import errortrans from "../translate/error"
import SafetyHeader from "../modules/Safety/SafetyHeader"
import SafetyBody from "../modules/Safety/SafetyBody"

function Safety(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            <SafetyHeader />
            <SafetyBody />
        </main>
    )
}
export default Safety