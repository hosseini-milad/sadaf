import { useEffect, useState } from "react"
import env from "../../../env"

function ChangePass(props){
   const token = props.token
    const [phone,setPhone] = useState()
    const [reqOtp,setReqOtp] = useState()
    const [password,setPassword] = useState()
    const [otp,setOTP] = useState()

    const [error,setError] = useState({errorText:'',errorColor:"brown"})
    const changePassword=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
               'x-access-token':token&&token.token,'userid':token&&token.userId },
            body:JSON.stringify({password:password})
          }
          console.log(postOptions)
        fetch(env.siteApi + "/auth/change-password",postOptions, {mode:'cors'})
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
            
        },
        (error) => {
            console.log(error)
        })
    }
    return(
      <div className="auth-box marketing-box">
         <div className="signup-link">
            <i18n-string data-locale-at-render="en-us" data-key="login.signupLink.text">تغییر رمز عبور</i18n-string>
            
         </div>
         <form style={{backgroundColor: "white"}} id="hs-login">
            <div></div>
            <div>
               <div className="private-form__set m-bottom-4">
               <div className="private-form__control-wrapper">
                  <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                     <label htmlFor="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                     <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                        <i18n-string data-locale-at-render="en-us" data-key="login.form.email">رمزعبور جدید</i18n-string>
                     </span>
                     </label>
                  </div>
                  <div className="private-form__input-wrapper">
                     <input id="username" className="form-control private-form__control login-email" 
                     onChange={(e)=>setPassword(e.target.value)} type="password"/>
                  </div>
                  <div className="private-form__meta">
                     <div className="private-form__messages"></div>
                  </div>
               </div>
               </div>
            </div>
            <button id="loginBtn" type="button"
               className={`uiButton private-button private-button--primary private-button--default m-bottom-4 login-submit private-button--non-link ${
                  (password)?"":"disabled private-button--disabled "}`} 
                  onClick={changePassword}>
               <i18n-string data-locale-at-render="en-us" data-key="login.form.button">تغییر رمز عبور</i18n-string>
            </button>
            
         </form>
         {error.errorText?
         <i style={{color:"brown"}}>{error.errorText}</i>:
         <></>}
     </div>
    )
}
export default ChangePass