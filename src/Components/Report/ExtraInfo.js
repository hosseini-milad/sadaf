import env from "../../env"
import IdeaAcc from "./ideaAcc"

function ExtraInfo(props){
    const content = props.content
    return(
    <div class="wf-section-wrapper wf-link-to-content">
        <div class="wf-link-to-content-header -center">
            <h2 id="all_hubs_resources_heading" class="wf-link-to-content-header-heading h2">
                دریافت ضمایم</h2>
            <p class="wf-link-to-content-header-subheading"> (شرح و توصیف،ادعانامه،نقشه)</p>
        </div>
        <div class="wf-link-to-content-body">
            <ul class="wf-link-to-content-grid -three-columns">
            <li class="wf-link-to-content-card cl-card -light -container-02" 
                onClick={()=>window.open(content.tosif)}>
                <div class="wf-link-to-content-card-image-wrapper">
                <img class="wf-link-to-content-card-image" src="/img/hub/BookBulb.png" height="161" width="160" loading="lazy" />
                </div>
                <div class="wf-link-to-content-card-text -alignment-center">
                    <h3 class="wf-link-to-content-card-text-heading ">شرح و توصیف</h3>
                </div>
            </li>
            <li class="wf-link-to-content-card cl-card -light -container-02" 
                onClick={()=>window.open(content.edea)}>
                <div class="wf-link-to-content-card-image-wrapper">
                <img class="wf-link-to-content-card-image"  src="/img/hub/Integration3.png" height="161" width="160" loading="lazy"/>
                </div>
                <div class="wf-link-to-content-card-text -alignment-center">
                    <h3 class="wf-link-to-content-card-text-heading ">ادعانامه </h3>
                </div>
            </li>
            <li class="wf-link-to-content-card cl-card -light -container-02" 
                onClick={()=>window.open(content.plan)}>
                <div class="wf-link-to-content-card-image-wrapper">
                <img class="wf-link-to-content-card-image" src="/img/hub/plan.svg" height="161" width="160" loading="lazy" />
                </div>
                <div class="wf-link-to-content-card-text -alignment-center">
                    <h3 class="wf-link-to-content-card-text-heading ">نقشه </h3>
                </div>
            </li>
            <li class="wf-link-to-content-card cl-card -light -container-02" 
                onClick={()=>window.open(content.judge)}>
                <div class="wf-link-to-content-card-image-wrapper">
                    <img class="wf-link-to-content-card-image" src="/img/hub/ThreeBluePeople.png" height="161" width="160" loading="lazy" />
                </div>
                <div class="wf-link-to-content-card-text -alignment-center">
                    <h3 class="wf-link-to-content-card-text-heading ">گزارش داوری </h3>
                </div>
            </li>
            </ul>
        </div>
    </div>
    )

}
export default ExtraInfo