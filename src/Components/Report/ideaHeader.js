import { useState } from "react"
import env from "../../env"
import IdeaAcc from "./ideaAcc"
import IdeaReg from "./ideaReg"

function IdeaHeader(props){
    const content = props.content
    const regUrl = 0
    const [showIdea,setIdea] = useState(regUrl)
    return(
        <div id="hs_cos_wrapper_all_hubs_hero" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" >
            <section className="product-core-header" data-background="off-white">
                <div className="product-core-header__container right">
                <div className="product-core-header__text">
                    <strong className="product-core-header__text-intro h4">
                    <span className={content.etebar?"sales-hub-icon activeIcon":"sales-hub-icon deactiveIcon"} 
                    title={content.etebar?"اعتبار دارد":"اعتبار ندارد"}>
                        </span> عنوان چالش </strong>
                    <h1 className="product-core-header__text-title">{content.title}</h1>
                    <sub className="ideaDate">
                        {content.date?
                        new Date(content.date).toLocaleDateString('fa'):
                        content.sabtDate}</sub>
                    <div className="product-core-header__ctas ">
                    <a onClick={()=>setIdea(1)}
                        className="cl-button -primary -medium  product-core-header__text-multi-cta marketing-hero">
                         ثبت ایده برای چالش    
                    </a>
                    <a href={"#"} 
                        className="cl-button -secondary -medium  product-core-header__text-multi-cta marketing-hero2 borderHero" > 
                        ایده های ثبت شده ({content.ideaCount?content.ideaCount:0})
                    </a>
                    </div>
                    <div className="product-core-header__accordion-container">
                    <ul className="hsg-accordion" data-size="small" data-display-option="card">
                        
                        {showIdea?
                            <IdeaReg title="ثبت ایده" reqCode={content._id}/>:
                            <></>}
                        <IdeaAcc title="اطلاعات تقاضا" data={[
                           "دسته بندی :"+ content.category,
                            "دامنه تاثیر: "+content.action,
                            "اولویت: "+ content.support,
                            "بازه زمانی مورد انتظار : "+ content.time
                        ]}/>
                        <IdeaAcc title="ایده ها" data={
                            content.ideaData.map((idea,i)=>(
                                <small key={i}>
                                    {"ایده " +idea.description}
                                    <hr/>
                                </small>
                            ))
                        }/>
                        
                    </ul>
                    </div>
                </div>
                <div className="product-core-header__text"><hr/>
                    <p dangerouslySetInnerHTML={{__html:content.description}}></p>
                    <hr/>
                    جایگاه زنجیره ارزش فرش دستباف :<br/>
                    <p>{content.proofReq}</p>
                    <hr/>
                    تاثیر بر صنعت:<br/>
                    <p>{content.proofUsage}</p>
                    <hr/>
                    راه‌حل‌های قبلی:<br/>
                    <p>{content.pre}</p>
                    <hr/>
                    نیاز به فناوری، سرمایه‌گذاری، تخصص خاص:<br/>
                    <p>{content.investigate}</p>
                    <hr/>
                    مزایای رفع چالش:<br/>
                    <p>{content.advantage}</p>
                    <hr/>
                </div>
                </div>
            </section>
        </div>
    )

}
export default IdeaHeader