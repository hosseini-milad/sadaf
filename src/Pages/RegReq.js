import { useEffect, useState } from "react"
import BreadCrumb from "../Components/Breadcrumb"
import ExtraInfo from "../Components/Report/ExtraInfo"
import IdeaHeader from "../Components/Report/ideaHeader"
import env from "../env"

function RegReq(props){
   const url = document.location.pathname.split('/')[2]
   const [content,setContent] = useState()
   const [formData, setFormData] = useState();
   const [error, setError] = useState({message:"",color:""});
   const regNow=()=>{
      const postBody={
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       }
      fetch(env.siteApi + "/data/reg-req",postBody)
        .then((res) => res.json())
        .then(
          (result) => {
            if(result.error){
               setError({message:result.message,color:"brown"})
            }
            else{
               setFormData()
               setError({message:result.message,color:"green"})
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
    console.log(formData)
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <section className="offers-demo-section -neutral">
  <div className="offers-demo-section-wrapper">
    <div className="offers-demo-section-left">
      <div id="hs_cos_wrapper_demo_offers_features_list" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
        <section className="offers-features-list -neutral">
          <div className="offers-features-list__main-content">
            <h1 className="offers-features-list__title"> فرم تقاضای فناوری (نیازها و چالش‌ها)  </h1>
            <p className="offers-features-list__subtitle"> رویداد تانا (توسعه و ارتقای زیست بوم  نوآوری استان ها) استان قم در حوزه زنجیره ارزش راهبردی فناوری های تولید محتوای دیجیتال </p>
            <a className="offers-features-list__mobile-cta cta cta--primary cta--medium " href="#offers-features-list-form"> Request your demo </a>
            <div className="offers-features-list__features">
              <h2 className="offers-features-list__features-title"> موضوع  و محورهای رویداد </h2>
              
          <div className="offers-features-list__bottom-content">
            <p>
            رویداد ارزش با تمرکز بر حوزه زنجیره ارزش راهبردی فناوری های تولید محتوای دیجیتال برگزار خواهد شد. محورهای اصلی رویداد به شرح زیر است:
            </p>
          </div>
              <div className="offers-features-list__features-wrapper">
               
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title"> ایده‌پردازی و برنامه‌ریزی </h3>
                  
                </div>
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title"> تحقیق و توسعه محتوا </h3>
                  
                </div>
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title"> تولید محتوا </h3>
                  
                </div>
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title">	ویرایش و بهینه‌سازی </h3>
                  
                </div>
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title">	توزیع و انتشار </h3>
                  
                </div>
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title">	ترویج و بازاریابی </h3>
                  
                </div>
                <div className="offers-features-list__features-item">
                  <h3 className="offers-features-list__features-item--title">	مدیریت و بهبود مستمر</h3>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="offers-demo-section-right -">
      <div id="hs_cos_wrapper_csol_bam" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" >
        <section id="csol_bam" className="csol-section csol-book-a-meeting -light -padding-top-md -padding-bottom-md">
          <div className="csol-section-wrapper">
            <div className="csol-book-a-meeting-wrapper">
              <div id="csol-book-a-meeting-form-container-csol_bam" className="csol-book-a-meeting-form-container" data-query-string="" data-locale="en" data-form-id="95c7a26e-eb03-4da7-bb69-4ca3c029983b" data-portal-id="53" data-custom-submit-text="Get your free demo" data-hs-forms-root="true">
                <form >
                  <fieldset className="form-columns-2">
                    <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
                      <label id="label-firstname-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your First Name" for="firstname-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>نهاد بهره بردار</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <input name="firstname" required="" type="text" className="hs-input" 
                        value={formData&&formData.nahad}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           nahad: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
                      <label id="label-lastname-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Last Name" for="lastname-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>دسته‌بندی نیاز یا ظرفیت</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc" ></legend>
                      <div className="input">
                        <input name="lastname" required="" placeholder="" type="text" className="hs-input" inputmode="text" autocomplete="family-name"
                        value={formData&&formData.category}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           category: e.target.value,
                         }))}/>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label >
                        <span>عنوان نیاز/ چالش</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc" ></legend>
                      <div className="input">
                        <input name="email" required="" placeholder="" type="email" className="hs-input" inputmode="email" autocomplete="email"
                        value={formData&&formData.title}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           title: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label >
                        <span>تعریف نیاز/ چالش</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc" ></legend>
                      <div className="input">
                        <textarea name="email" required="" placeholder="" type="email" className="hs-input" inputmode="email" autocomplete="email"
                        value={formData&&formData.description}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           description: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label >
                        <span>اثبات نیاز/ چالش</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc" ></legend>
                      <div className="input">
                        <textarea name="email" required="" placeholder="" type="email" className="hs-input" inputmode="email" autocomplete="email"
                        value={formData&&formData.proofReq}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           proofReq: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label >
                        <span>اثبات توان بهره‌گیری</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc" ></legend>
                      <div className="input">
                        <input name="email" required="" placeholder="" type="email" className="hs-input" inputmode="email" autocomplete="email"
                        value={formData&&formData.proofUsage}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           proofUsage: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label >
                        <span>سابقه اقدام برای حل چالش</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc" ></legend>
                      <div className="input">
                        <input name="email" required="" placeholder="" type="email" className="hs-input" inputmode="email" autocomplete="email"
                        value={formData&&formData.reputation}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           reputation: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
                      <label id="label-company-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Company name" for="company-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>کنشگر رفع نیاز</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <textarea id="company-95c7a26e-eb03-4da7-bb69-4ca3c029983b" name="company" required="" placeholder="" type="text" className="hs-input" inputmode="text" autocomplete="organization"
                        value={formData&&formData.action}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           action: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    <div className="hs_website hs-website hs-fieldtype-text field hs-form-field">
                      <label id="label-website-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Website URL" for="website-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>حمایت ها</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <textarea id="website-95c7a26e-eb03-4da7-bb69-4ca3c029983b" name="website" required="" placeholder="" type="text" className="hs-input" inputmode="url"
                        value={formData&&formData.support}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           support: e.target.value,
                         }))}/>
                      </div>
                    </div>
                  </fieldset>
                  
                  <fieldset className="form-columns-1">
                    <div className="legal-consent-container">
                      <div className="hs-richtext">
                        <p> 
                            
                        </p>
                      </div>
                    </div>
                  </fieldset>
                  <div className="hs_submit hs-submit">
                     {error?<small style={{color:error.color}}>{error.message}</small>:<></>}
                  <div class="wf-page-header__cta-wrapper center">
                     <a className="
                     cl-button -primary -large wf-page-header__cta homepage-hero-cta" 
                     onClick={regNow}>ثبت تقاضای فناوری</a>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>
      </main>
   )
}
export default RegReq