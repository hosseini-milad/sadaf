import { useEffect, useState } from "react"
import env from "../env"
import LoginHolder from "../modules/Login/LoginHolder";

function RegReq(props){
  const token = props.token
   const [formData, setFormData] = useState();
   const [userData, setUserData] = useState();
   const [subject, setSubject] = useState();
   const [showBtn,setShowBtn] = useState(0)
   const [error, setError] = useState({message:"",color:""});
   const regNow=()=>{
      const postBody={
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           'x-access-token':token&&token.token,'userid':token&&token.userId
         },
         body: JSON.stringify(formData),
       }
      fetch(env.siteApi + "/data/reg-req",postBody)
        .then((res) => res.json())
        .then(
          (result) => {
            if(result.error){
               setError({message:result.message,color:"brown"})
               setTimeout(()=>setError({message:"",color:""}),5000)
            }
            else{
               setFormData()
               setShowBtn(result.id)
               setError({message:result.message,color:"green"})
               setTimeout(()=>setError({message:"",color:""}),3000)
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  useEffect(()=>{
    const postBody={
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'x-access-token':token&&token.token,'userid':token&&token.userId
      }
    }
   fetch(env.siteApi + "/user/fetch-client",postBody)
     .then((res) => res.json())
     .then(
       (result) => {
         if(result.error){
            setError({message:result.message,color:"brown"})
         }
         else{
            setUserData(result.data)
            setError({message:result.message,color:"green"})
         }
       },
       (error) => {
         console.log(error);
       }
     );
  },[])
  useEffect(()=>{
    const postBody={
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
   fetch(env.siteApi + "/data/data-subject-list",postBody)
     .then((res) => res.json())
     .then(
       (result) => {
            setSubject(result.data)
       },
       (error) => {
         console.log(error);
       }
     );
  },[])
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <section className="offers-demo-section -neutral">
  <div className="offers-demo-section-wrapper">
    <div className="offers-demo-section-left">
      <div id="hs_cos_wrapper_demo_offers_features_list" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
        <section className="offers-features-list -neutral">
          <div className="offers-features-list__main-content">
            <h1 className="offers-features-list__title"> فرم تقاضای فناوری (نیازها و چالش‌ها)  </h1>
            {/*<p className="offers-features-list__subtitle">این فرم برای افرادی (مانند تولیدکنندگان، طراحان، صادرکنندگان، یا فعالان صنعت فرش) طراحی می‌شود که مشکلات یا نیازهای مشخصی در این صنعت دارند. هدف، جمع‌آوری چالش‌های واقعی است که بتوان برای آن‌ها راه‌حل‌های نوآورانه ارائه داد.</p>*/}
            <div className="offers-features-list__features">
              {/*<h2 className="offers-features-list__features-title"> پوستر رویداد </h2>*/}
              
          <div className="offers-features-list__bottom-content">
            <img src="/img/sadaf/rug.jpg" className="formImage"/>
            {/*<p>
            رویداد ارزش با تمرکز بر حوزه زنجیره ارزش راهبردی فناوری های تولید محتوای دیجیتال برگزار خواهد شد. محورهای اصلی رویداد به شرح زیر است:
            </p>*/}
          </div>
              {/*<div className="offers-features-list__features-wrapper">
               
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
              </div>*/}
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="offers-demo-section-right -">
      <div id="hs_cos_wrapper_csol_bam" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" >
        {token?(userData&&userData.cName)?
        <section id="csol_bam" className="csol-section csol-book-a-meeting -light -padding-top-md -padding-bottom-md">
          <div className="csol-section-wrapper">
            <div className="csol-book-a-meeting-wrapper">
              <div id="csol-book-a-meeting-form-container-csol_bam" className="csol-book-a-meeting-form-container" data-query-string="" data-locale="en" data-form-id="95c7a26e-eb03-4da7-bb69-4ca3c029983b" data-portal-id="53" data-custom-submit-text="Get your free demo" data-hs-forms-root="true">
                {!showBtn?<form >
                  <fieldset className="form-columns-2">
                    <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
                      <label id="label-firstname-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your First Name" for="firstname-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>عنوان چالش</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <input name="firstname" required="" type="text" className="hs-input" 
                        value={formData&&formData.title}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           title: e.target.value,
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
                        <select className="formSelect"
                          onChange={(e)=>setFormData((prevState) => ({
                            ...prevState,
                            category: e.target.value,
                          }))}>
                          <option value="" disabled>انتخاب دسته بندی...</option>
                          {subject&&subject.map((subject, index) => (
                            <option key={index} value={subject.title}>
                              {subject.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </fieldset>
                  
                  <fieldset className="form-columns-2">
                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label >
                        <span>تعریف چالش</span>
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
                        <span>این مشکل در چه بخشی از زنجیره ارزش فرش دستباف وجود دارد؟</span>
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
                        <span>تأثیر این مشکل بر کسب ‌وکار یا صنعت چیست؟</span>
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
                        <span>آیا این مشکل برای کل صنعت است یا مختص کسب‌وکار شما؟ </span>
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
                        <span>دامنه تأثیر(محلی، ملی یا بین‌المللی)</span>
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
                        <span>اولویت‌بندی(1 تا 4)</span>
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
                  <fieldset className="form-columns-2">
                    <div className="hs_company hs-company hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label id="label-company-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Company name" for="company-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>راه‌حل‌های قبلی</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <textarea id="company-95c7a26e-eb03-4da7-bb69-4ca3c029983b" name="company" required="" placeholder="" type="text" className="hs-input" inputmode="text" autocomplete="organization"
                        value={formData&&formData.pre}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           pre: e.target.value,
                         }))}/>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_website hs-website hs-fieldtype-text field hs-form-field
                    fullWidth">
                      <label id="label-website-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Website URL" for="website-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>آیا برای حل این مشکل به فناوری، سرمایه‌گذاری، تخصص خاص، یا همکاری با نهاد خاصی نیاز است؟</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <textarea id="website-95c7a26e-eb03-4da7-bb69-4ca3c029983b" name="website" required="" placeholder="" type="text" className="hs-input" inputmode="url"
                        value={formData&&formData.investigate}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           investigate: e.target.value,
                         }))}/>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-columns-2">
                    <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
                      <label id="label-company-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Company name" for="company-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>مزایای رفع چالش</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <textarea id="company-95c7a26e-eb03-4da7-bb69-4ca3c029983b" name="company" required="" placeholder="" type="text" className="hs-input" inputmode="text" autocomplete="organization"
                        value={formData&&formData.advantage}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           advantage: e.target.value,
                         }))}/>
                      </div>
                    </div>
                    <div className="hs_website hs-website hs-fieldtype-text field hs-form-field">
                      <label id="label-website-95c7a26e-eb03-4da7-bb69-4ca3c029983b" className="" placeholder="Enter your Website URL" for="website-95c7a26e-eb03-4da7-bb69-4ca3c029983b">
                        <span>بازه زمانی مورد انتظار برای حل مشکل؟</span>
                        <span className="hs-form-required">*</span>
                      </label>
                      <legend className="hs-field-desc"></legend>
                      <div className="input">
                        <textarea id="website-95c7a26e-eb03-4da7-bb69-4ca3c029983b" name="website" required="" placeholder="" type="text" className="hs-input" inputmode="url"
                        value={formData&&formData.time}
                        onChange={(e)=>setFormData((prevState) => ({
                           ...prevState,
                           time: e.target.value,
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
                  <div className="wf-page-header__cta-wrapper center"
                  style={{display:"flex",gap:"10px"}}>
                     <a className="
                     cl-button -primary -large wf-page-header__cta homepage-hero-cta" 
                     onClick={regNow}>ثبت تقاضای فناوری</a>
                     
                  </div>
                  </div>
                </form>:<></>}
                {showBtn?<><a className="
                     cl-button -warning wf-page-header__cta homepage-hero-cta" 
                     href={"/edit-request/"+showBtn}>مشاهده تقاضای ثبت شده</a>
                <a style={{marginRight:"20px"}} className="
                    cl-button -primary wf-page-header__cta homepage-hero2-cta" 
                    href="/reg-request">ثبت چالش جدید</a>
                    </>:<></>}
              </div>
            </div>
          </div>
        </section>:
        <section id="csol_bam" className="csol-section csol-book-a-meeting -light -padding-top-md -padding-bottom-md">
        <div className="fill">
          لطفا اطلاعات کاربری خود را تکمیل نمایید
          <br/>
          <a href="/profile">تکمیل اطلاعات کاربری</a>
        </div>
      </section>:
        <section id="csol_bam" className="csol-section csol-book-a-meeting -light -padding-top-md -padding-bottom-md">
          <LoginHolder />
        </section>}
      </div>
    </div>
  </div>
</section>
      </main>
   )
}
export default RegReq