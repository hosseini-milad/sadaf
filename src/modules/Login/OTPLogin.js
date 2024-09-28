import { useEffect, useState } from "react"
import env from "../../env"
import Cookies from 'universal-cookie';
import OtpInput from 'react-otp-input';

function OTPLogin(props){
    const [phone,setPhone] = useState()
    const [reqOtp,setReqOtp] = useState()
    const [sentOtp,setSentOtp] = useState()
    const [otp,setOTP] = useState()

    const [error,setError] = useState({errorText:'',errorColor:"brown"})
    const sendOtp=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'},
            body:JSON.stringify({phone:phone})
          }
          console.log(postOptions)
        fetch(env.siteApi + "/auth/send-OTP",postOptions, {mode:'cors'})
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
               setReqOtp(1)
              console.log(result)
              if(result){
               setSentOtp(result.otp)
              }
            }
            
        },
        (error) => {
            console.log(error)
        })
    }
    useEffect(()=>{
      if(!otp||otp.length!==4) return
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'},
          body:JSON.stringify({phone:phone,otp:otp})
        }
        console.log(postOptions)
      fetch(env.siteApi + "/auth/login-OTP",postOptions, {mode:'cors'})
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
   },[otp])
    return(
      <div className="auth-box marketing-box">
         <div className="signup-link">
            <i18n-string data-locale-at-render="en-us" data-key="login.signupLink.text">ورود با کد یکبار مصرف</i18n-string>
            
         </div>
         {!reqOtp?
         <form style={{backgroundColor: "white"}} id="hs-login">
            <div></div>
            <div>
               <div className="private-form__set m-bottom-4">
               <div className="private-form__control-wrapper">
                  <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                     <label htmlFor="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                     <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                        <i18n-string data-locale-at-render="en-us" data-key="login.form.email">شماره موبایل</i18n-string>
                     </span>
                     </label>
                  </div>
                  <div className="private-form__input-wrapper">
                     <input id="username" className="form-control private-form__control login-email" 
                     onChange={(e)=>setPhone(e.target.value)}/>
                  </div>
                  <div className="private-form__meta">
                     <div className="private-form__messages"></div>
                  </div>
               </div>
               </div>
            </div>
            <button id="loginBtn" type="button"
               className={`uiButton private-button private-button--primary private-button--default m-bottom-4 login-submit private-button--non-link ${
                  (phone)?"":"disabled private-button--disabled "}`} 
                  onClick={sendOtp}>
               <i18n-string data-locale-at-render="en-us" data-key="login.form.button">ارسال کد</i18n-string>
            </button>
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
                           <i18n-string onClick={()=>props.setOTP(0)}
                           >ورود با رمز عبور</i18n-string>
                        </span>
                     </span>
                     </span>
                  </span>
               </span>
               </button>
            </div>
         </form>:
         <form style={{backgroundColor: "white"}} id="hs-login">
            <div></div>
            <div>
               <div className="private-form__set m-bottom-4">
               <div className="private-form__control-wrapper">
                  <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                     <label htmlFor="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                     <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                        <i18n-string data-locale-at-render="en-us" data-key="login.form.email">کد یکبار مصرف</i18n-string>
                     </span><br/>
                     <small>شماره موبایل {phone}</small>
                     </label>
                  </div>
                  <div><hr/></div>
                  <OtpInput
                     value={otp}
                     onChange={setOTP}
                     numInputs={4}
                     containerStyle={{direction:"ltr"}}
                     inputStyle="inputStyle"
                     renderSeparator={<span>-</span>}
                     renderInput={(props) => <input {...props} />}
                  />
                  <div className="private-form__meta">
                     <div className="private-form__messages"></div>
                  </div>
               </div>
               <i>{/*sentOtp*/}</i>
               </div>
            </div>
            {/*<button id="loginBtn" type="button"
               className={`uiButton private-button private-button--primary private-button--default m-bottom-4 login-submit private-button--non-link ${
                  (otp)?"":"disabled private-button--disabled "}`} 
                  onClick={checkOtp}>
               <i18n-string data-locale-at-render="en-us" data-key="login.form.button">ورود</i18n-string>
            </button>*/}
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
                           <i18n-string onClick={()=>props.setOTP(0)}
                           >ورود با رمز عبور</i18n-string>
                        </span>
                     </span>
                     </span>
                  </span>
               </span>
               </button>
            </div>
         </form>}
         {error.errorText?
         <i style={{color:"brown"}}>{error.errorText}</i>:
         <></>}
     </div>
    )
}
export default OTPLogin