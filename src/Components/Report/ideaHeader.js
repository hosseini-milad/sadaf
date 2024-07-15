import env from "../../env"
import IdeaAcc from "./ideaAcc"

function IdeaHeader(props){
    const content = props.content
    return(
        <div id="hs_cos_wrapper_all_hubs_hero" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" >
            <section className="product-core-header" data-background="off-white">
                <div className="product-core-header__container right">
                <div className="product-core-header__text">
                    <p dangerouslySetInnerHTML={{__html:content.abstract}}></p>
                </div>
                <div className="product-core-header__text">
                    <strong className="product-core-header__text-intro h4">
                    <span className="sales-hub-icon" style={{backgroundImage: "url(https://www.hubspot.com/hubfs/Product_Icon_Only_Marketing_Hub%20%281%29-3.png)", width: "25px", height: "25px", backgroundSize: "100%", backgroundPosition: "center center"}}>
                        </span> عنوان اختراع </strong>
                    <h1 className="product-core-header__text-title">{content.title}</h1>
                    <div className="product-core-header__ctas ">
                    <a href={env.srcUrl+content.url} target="_blank" rel="noreferrer " 
                        className="cl-button -primary -medium  product-core-header__text-multi-cta marketing-hero"> اطلاعات مرجع
                    </a>
                    <a href="/login" className="cl-button -secondary -medium  product-core-header__text-multi-cta marketing-hero2" > 
                        تماس با مخترع
                    </a>
                    </div>
                    <div className="product-core-header__accordion-container">
                    <ul className="hsg-accordion" data-size="small" data-display-option="card">
                        <IdeaAcc title="مخترعین" data={content.inventor}/>
                        <IdeaAcc title="مالکین" data={content.malek}/>
                        <IdeaAcc title="طبقه بندی بین المللی" data={content.classInternation}/>
                        
                    </ul>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )

}
export default IdeaHeader