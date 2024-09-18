import errortrans from "../../translate/error"

function LoginModal(props){
    const show = props.display
    return(
    <div className={show?"modal modal-login fade in modal-login-workawayer":"modal modal-login fade" }
        id="modalLogin" style={{display:show?"block":""}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" 
                onClick={()=>props.setModal(0)}>
                <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-title" id="modalLoginTitle">{errortrans.loginWorkawayer[props.lang]}</div>
            </div>
            <div className="modal-body">
                <div className="modal-body-content"></div>
                <div className="clear15"></div>
            <div className="modal-login-subfooter"></div>
            
            <div id="loginElements">
            <form id="loginElementsForm" method="POST">
                <input type="text" className="form-control input-modal-login" data-login="user" 
                    placeholder={errortrans.username[props.lang]} 
                    name="un" required />
                <input type="password" className="form-control input-modal-login" name="pw" data-login="pw" 
                    placeholder={errortrans.password[props.lang]} required />
                <button type="submit" className="btn btn-modal-login btn-block" data-action="login"> 
                    {errortrans.loginWorkawayer[props.lang]} </button>
                <div className="checkbox text-center">
                <label>
                    <input type="checkbox" value="1" data-login="remember" /> 
                        {errortrans.remember[props.lang]} </label>
                </div>
            </form>
            <hr />
            <a id="socialLoginGoogle" href="#" className="btn btn-login-social btn-block text-crop">
                <i className="fa fa-google"></i> {errortrans.googleLogin[props.lang]} </a>
            <hr />
            <div className="text-center">
                <p className="small">
                <a href="/en/password-reset/workawayer" data-login="lostpw"> {errortrans.forgetPassword[props.lang]} </a>
                </p>
            </div>
            </div>
            <div className="modal-login-subfooter-new">
            <div className="row no-gutter">
                <div className="col-sm-6">
                <a className="modal-login-subfooter-btn" href="/workawayer" >{errortrans.joinNow[props.lang]}</a>
                </div>
                <div className="col-sm-6">
                <a href="#" className="modal-login-subfooter-btn">{errortrans.loginHost[props.lang]}</a>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    )
}
export default LoginModal