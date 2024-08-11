
function Login(props){
    
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
         style={{backgroundColor:"var(--main-color)"}}>
         <div className="auth-box marketing-box">
            <div className="signup-link">
               <i18n-string data-locale-at-render="en-us" data-key="login.signupLink.text">حساب کاربری ندارید؟</i18n-string>
               <a className="private-link uiLinkWithoutUnderline m-left-1 uiLinkDark" href="https://app.hubspot.com/signup-hubspot/crm?hubs_signup-cta=login-signup-cta&amp;hubs_signup-url=app.hubspot.com%2Flogin" tabindex="0" aria-disabled="false">
                  <i18n-string data-locale-at-render="en-us" data-key="login.signupLink.ctaVariantB">ایجاد حساب کاربری</i18n-string>
               </a>
            </div>
            <form style={{backgroundColor: "white;"}} id="hs-login">
               <div></div>
               <div>
                  <div className="private-form__set m-bottom-4">
                  <div className="private-form__control-wrapper">
                     <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                        <label for="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                        <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                           <i18n-string data-locale-at-render="en-us" data-key="login.form.email">شماره تماس</i18n-string>
                        </span>
                        </label>
                     </div>
                     <div className="private-form__input-wrapper">
                        <input id="username" type="email" tabindex="1" aria-labelledby="UIFormControl-label-2" className="form-control private-form__control login-email" value=""/>
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
                        <label for="password" id="UIFormControl-label-4" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                        <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                           <i18n-string data-locale-at-render="en-us" data-key="login.form.password">کلمه عبور</i18n-string>
                        </span>
                        </label>
                        <small id="password-help" tabindex="-1" className="private-microcopy private-form__inlinehelp is--text--help">
                        <button aria-disabled="false" className="uiButton private-button private-button__link private-button--default" data-button-use="link" tabindex="0" type="button">
                           <span>نمایش کلمه عبور</span>
                        </button>
                        </small>
                     </div>
                     <div className="private-form__input-wrapper">
                        <input id="password" type="password" tabindex="2" aria-labelledby="UIFormControl-label-4" aria-describedby="undefined-help undefined-description" className="form-control private-form__control login-password m-bottom-3" value=""/>
                     </div>
                     <div className="private-form__meta">
                        <div className="private-form__messages"></div>
                     </div>
                     <small id="password-description" tabindex="-1" className="private-microcopy private-form__description is--text--help">
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
               <button data-test-id="password-login-button" id="loginBtn" aria-disabled="true" className="uiButton private-button private-button--primary private-button--default m-bottom-4 login-submit disabled private-button--disabled private-button--non-link" data-button-use="primary" tabindex="-1" type="submit">
                  <i18n-string data-locale-at-render="en-us" data-key="login.form.button">ورود</i18n-string>
               </button>
               <hr/>
               <div className="LoginOptionsstyles__ThirdPartyLoginWrapper-mv5y1z-0 AOjGZ">
                  <button data-test-id="sso-login-button" id="ssoBtn" aria-disabled="false" className="uiButton private-button private-button--tertiary private-button--default width-100 private-button--non-link" data-button-use="tertiary" tabindex="0" type="button">
                  <span className="private-truncated-string width-100" data-content="true">
                     <span className="private-truncated-string__inner">
                        <span className="private-truncated-string__reverse">
                        <span className="private-truncated-string__reverse__tail">
                           <span className="private-truncated-string__reverse__content">
                              <i18n-string data-locale-at-render="en-us" data-key="login.form.sso.loginButton">ورود با رمز یکبار مصرف</i18n-string>
                           </span>
                        </span>
                        </span>
                     </span>
                  </span>
                  </button>
               </div>
            </form>
            </div>
    </main>
   )
}
export default Login