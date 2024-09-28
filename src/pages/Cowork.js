
import errortrans from "../translate/error"
import CoworkHeader from "../modules/CoWork/CoworkHeader"
import CoworkBody from "../modules/CoWork/CoworkBody"
import Cookies from 'universal-cookie';
import env from "../env";
const cookies = new Cookies();

function Cowork(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    const token = cookies.get(env.cookieName)
    return(
        <main className={dir=="rtl"?"rtlDir ":""}>
            <CoworkHeader />
            <CoworkBody token={token}/>
        </main>
    )
}
export default Cowork