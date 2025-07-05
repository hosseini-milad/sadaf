
import errortrans from "../translate/error"
import CoworkHeader from "../modules/CoWork/CoworkHeader"
import CoworkBody from "../modules/CoWork/CoworkBody"
import Cookies from 'universal-cookie';
import env from "../env";
const cookies = new Cookies();

function Suit(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    const token = cookies.get(env.cookieName)
    return(
        <main className={dir=="rtl"?"rtlDir ":""}>
            <div className="container">
                <h2>مهمانسرای پارک علم و فناوری استان قم</h2>
                <p className="colSpan col90">
                
        <br/>
        

                </p>
            </div>
            <div className="fullWidth">
                <div className="colSpan col90">
                    <div className="col50">
                        <b>سوئیت دو نفره</b>
                        <img src="/img/suit2.webp" className="suiteImage"/>
                        <ul className="liCircle">
                            <li>دارای ۱ عدد تخت دو نفره</li>
                            <li>حمام و سرویس بهداشتی</li>
                            <li>آشپزخانه مجهز</li>
                            <li>ورود و خروج:</li>
                            <ul className="liCircleSub">
                                <li>زمان دریافت سوئیت (ورود): ۱۴:۰۰</li>
                                <li>زمان تحویل سوئیت (خروج): ۱۲:۰۰</li>
                                
                            </ul>
                        </ul>
                    </div>
                    <div className="col50">
                        <b>سوئیت 6 نفره</b>
                        <img src="/img/suit4.jpg" className="suiteImage"/>
                        <ul className="liCircle">
                            <li>دارای ۱ اتاق خواب</li>
                            <li>دارای ۲ عدد تخت دو نفره</li>
                            <li>دارای ۲ عدد تخت تکنفره</li>
                            <li>حمام و سرویس بهداشتی</li>
                            <li>آشپزخانه مجهز</li>
                            <li>ورود و خروج:</li>
                            <ul className="liCircleSub">
                                <li>زمان دریافت سوئیت (ورود): ۱۴:۰۰</li>
                                <li>زمان تحویل سوئیت (خروج): ۱۲:۰۰</li>
                                
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Suit