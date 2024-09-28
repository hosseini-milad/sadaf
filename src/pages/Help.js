import HelpHeader from "../modules/Help/HelpHeader"
import HelpHowWorkAway from "../modules/Help/HelpHowWorkAway"
import HelpInclude from "../modules/Help/HelpInclude"
import HelpTab from "../modules/Help/HelpTab"
import HelpTravel from "../modules/Help/HelpTravel"
import errortrans from "../translate/error"


function Help(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
  
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            <HelpHeader lang={lang}/>
            <HelpTab/>
            <HelpHowWorkAway/>
            <HelpTravel/>
            <HelpInclude/>
        </main>
    )
}
export default Help