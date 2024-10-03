import env from "../../env"
import IdeaAcc from "./ideaAcc"

function IdeaHeader(props){
    const content = props.content
    return(
        <div id="hs_cos_wrapper_all_hubs_hero" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" >
            <section className="product-core-header" data-background="off-white">
                <div className="product-core-header__container right">
                <div className="product-core-header__text">
                    <strong className="product-core-header__text-intro h4">
                    <span className={content.etebar?"sales-hub-icon activeIcon":"sales-hub-icon deactiveIcon"} 
                    title={content.etebar?"اعتبار دارد":"اعتبار ندارد"}>
                        </span> عنوان تقاضا </strong>
                    <h1 className="product-core-header__text-title">{content.title}</h1>
                    <sub className="ideaDate">
                        {content.date?
                        new Date(content.date).toLocaleDateString('fa'):
                        content.sabtDate}</sub>
                    <div className="product-core-header__ctas ">
                    <a href={env.srcUrl+content.url} target="_blank" rel="noreferrer " 
                        className="cl-button -primary -medium  product-core-header__text-multi-cta marketing-hero"> اطلاعات مرجع
                    </a>
                    <a href="/login" className="cl-button -secondary -medium  product-core-header__text-multi-cta marketing-hero2" > 
                        تماس با تقاضا دهنده
                    </a>
                    </div>
                    <div className="product-core-header__accordion-container">
                    <ul className="hsg-accordion" data-size="small" data-display-option="card">
                        <IdeaAcc title="اطلاعات تقاضا" data={[
                            "شماره اظهارنامه: "+content.ezharname,
                            "شماره ثبت :"+ content.sabtNo
                        ]}/>
                        <IdeaAcc title="تقاضا دهنده" data={content.inventor}/>
                        <IdeaAcc title="طبقه بندی" data={content.classInternation}/>
                        
                    </ul>
                    </div>
                </div>
                <div className="product-core-header__text">
                    <p dangerouslySetInnerHTML={{__html:content.abstract}}></p>
                </div>
                </div>
            </section>
        </div>
    )

}
export default IdeaHeader