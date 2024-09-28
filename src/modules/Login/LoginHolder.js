import { useEffect, useState } from "react"
import env from "../../env";
import Cookies from 'universal-cookie';
import errortrans from "../../translate/error";
import OTPLogin from "./OTPLogin";

function LoginHolder(props){
    const [user,setUser]= useState('');
    const [userLogin,setUserLogin]= useState('');
    const [pass,setPass]= useState('');
    const [error,setError] = useState({errorText:'',errorColor:"brown"})
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const [showOtp,setOTP] = useState(0)
    //console.log(user)
    const checkLogin=()=>{
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'},
          body:JSON.stringify({phone:user,password:pass})
        }
        console.log(postOptions)
      fetch(env.siteApi + "/auth/login-customer",postOptions, {mode:'cors'})
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result)
          if(result.error){
              setError({errorText:result.error,
                errorColor:"brown"})
              setTimeout(()=>setError({errorText:'',
                errorColor:"brown"}),3000)
          }
          else{
            const user = result
            const cookies = new Cookies();
              const cookieData = {
                  userId:user._id,
                  access:user.access,
                  profile:user.profile,
                  name:user.cName+" "+user.sName,
                  date:user.date,
                  token:user.token,
                  username:(user.cName+" "+result.sName)
              }
              //console.log(cookieData)
              cookies.set(env.cookieName,cookieData, { path: '/' });
              window.location.href=("/")
          }
          
      },
      (error) => {
          console.log(error)
      })
  }
  return(<>
  {showOtp?<OTPLogin setOTP={setOTP}/>:
  <div className="auth-box marketing-box">
     <div className="signup-link">
        <i18n-string data-locale-at-render="en-us" data-key="login.signupLink.text">حساب کاربری ندارید؟</i18n-string>
        <a className="private-link uiLinkWithoutUnderline m-left-1 uiLinkDark" href="/register" aria-disabled="false">
           <i18n-string data-locale-at-render="en-us" data-key="login.signupLink.ctaVariantB">به راحتی به ما ملحق شوید</i18n-string>
        </a>
     </div>
     <form style={{backgroundColor: "white"}} id="hs-login">
        <div></div>
        <div>
           <div className="private-form__set m-bottom-4">
           <div className="private-form__control-wrapper">
              <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                 <label htmlFor="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                 <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                    <i18n-string data-locale-at-render="en-us" data-key="login.form.email">شماره تماس</i18n-string>
                 </span>
                 </label>
              </div>
              <div className="private-form__input-wrapper">
                 <input id="username" className="form-control private-form__control login-email" 
                 onChange={(e)=>setUser(e.target.value)}/>
              </div>
              <div className="private-form__meta">
                 <div className="private-form__messages"></div>
              </div>
           </div>
           </div>
        </div>
        <div>
           <div className="private-form__set">
           <div className="private-form__control-wrapper">
              <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                 <label htmlFor="password" id="UIFormControl-label-4" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                 <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                    <i18n-string data-locale-at-render="en-us" data-key="login.form.password">کلمه عبور</i18n-string>
                 </span>
                 </label>
                 <small id="password-help" className="private-microcopy private-form__inlinehelp is--text--help">
                 <button aria-disabled="false" className="uiButton private-button private-button__link private-button--default" type="button">
                    <span>نمایش کلمه عبور</span>
                 </button>
                 </small>
              </div>
              <div className="private-form__input-wrapper">
                 <input id="password" type="password" className="form-control private-form__control login-password m-bottom-3" 
                 onChange={(e)=>setPass(e.target.value)}/>
              </div>
              <div className="private-form__meta">
                 <div className="private-form__messages"></div>
              </div>
              <small id="password-description" className="private-microcopy private-form__description is--text--help">
                 <a href="/login/forgot?email=&amp;useDark=">
                 <i18n-string data-locale-at-render="en-us" data-key="login.form.forgotPassword">فراموشی کلمه عبور</i18n-string>
                 </a>
              </small>
           </div>
           </div>
        </div>
        <div data-test-id="remember-me" className="ToggleInputWrapper__ToggleInputWrapperDiv-w9oafa-0 eYdGtw UICheckbox__Checkbox-opwwm3-0 fWaKAx m-bottom-4 private-checkbox">
           <label className="ToggleInputWrapper__CheckboxLabel-w9oafa-1 btnjzp">
           
           </label>
        </div>
        <div></div>
        <div></div>
        <button id="loginBtn" type="button"
          className={`uiButton private-button private-button--primary private-button--default m-bottom-4 login-submit private-button--non-link ${
            (user&&pass)?"":"disabled private-button--disabled "}`} 
            onClick={checkLogin}>
           <i18n-string data-locale-at-render="en-us" data-key="login.form.button">ورود</i18n-string>
        </button>
        <small style={{color:error.errorColor}}>
         {error.errorText}</small>
        <hr/>
        <div className="LoginOptionsstyles__ThirdPartyLoginWrapper-mv5y1z-0 AOjGZ">
           
           <button id="ssoBtn" className="uiButton private-button private-button--tertiary 
            private-button--default width-100 
            private-button--non-link" type="button">
           <span className="private-truncated-string width-100" data-content="true">
              <span className="private-truncated-string__inner">
                 <span className="private-truncated-string__reverse">
                 <span className="private-truncated-string__reverse__tail">
                    <span className="private-truncated-string__reverse__content">
                       <i18n-string onClick={()=>setOTP(1)}
                       >ورود با رمز یکبار مصرف</i18n-string>
                    </span>
                 </span>
                 </span>
              </span>
           </span>
           </button>
        </div>
     </form>
     </div>}
     </>
)
}
export default LoginHolder