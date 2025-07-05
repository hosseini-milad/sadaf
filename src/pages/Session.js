
import errortrans from "../translate/error"
import CoworkHeader from "../modules/CoWork/CoworkHeader"
import CoworkBody from "../modules/CoWork/CoworkBody"
import Cookies from 'universal-cookie';
import env from "../env";
const cookies = new Cookies();

function Session(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    const token = cookies.get(env.cookieName)
    return(
        <main className={dir=="rtl"?"rtlDir ":""}>
            <div className="container">
                <h2>رزرو سالن جلسات</h2>
                <p className="colSpan col90">
                
        <br/>
        

                </p>
            </div>
            <div className="fullWidth">
                <div className="colSpan col90">
                    <div className="col50">
                        <b>سالن جلسات</b>
                        <img src="/img/jalase.jpg" />
                        <ul className="liCircle">
                            <li>ظرفیت: ۳۵ تا ۴۵ نفر</li>
                            <li>هزینه مصوب (به ازای هرساعت): ۳۵۰ هزار تومان</li>
                            <li>تجهیزات:</li>
                            <ul className="liCircleSub">
                                <li>تلویزیون ۷۵ اینچ (با قابلیت اتصال به کامپیوتر)</li>
                                <li>نمایشگر</li>
                                <li>نور</li>
                                <li>سیستم صوت</li>
                                <li>سیستم سرمایش/گرمایش</li>
                                <li>پرچم</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="col50">
                        <b>سالن اجتماعات شهید فخری زاده</b>
                        <img src="/img/ejtemaat.jpg" />
                        <ul className="liCircle">
                            <li>ظرفیت: ۱۲۰ نفر</li>
                            <li>هزینه مصوب (به ازای هر دو ساعت): ۱،۴۰۰،۰۰۰هزار تومان</li>
                            <li>تجهیزات:</li>
                            <ul className="liCircleSub">
                                <li>تلویزیون ۷۵ اینچ (با قابلیت اتصال به کامپیوتر)</li>
                                <li>تلویزیون۴۲ اینچ</li>
                                <li>تریبون</li>
                                <li>اتاق فرمان</li>
                                <li>سیستم صوت</li>
                                <li>سیستم سرمایش/گرمایش</li>
                                <li>پرچم</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Session