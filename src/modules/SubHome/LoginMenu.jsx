import { useState } from "react"
import LoginModal from "./LoginModal"
import errortrans from "../../translate/error"

function LoginMenu(props){
    const [showModal,setModal] = useState(0)
    const [tab,setTab] = useState(-1)
    return(<>
        <li className="dropdown" 
            onMouseOver={()=>setTab(10)} 
            onMouseOut={()=>setTab(-1)}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            <div className="navbar-user-item">
                <div className="navbar-user-icon">
                    <i className="fa fa-user"></i>
                    <ul className="dropdown-menu" style={{display:tab===10?"block":""}}>
                        <li>
                            <div onClick={()=>setModal(1)} 
                            className="loginMenu"> {errortrans.loginWorkawayer[props.lang]} </div>
                        </li>
                        <li>
                            <div  onClick={()=>setModal(2)} 
                            className="loginMenu">{errortrans.loginHost[props.lang]} </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-user-text">{errortrans.login[props.lang]}</div>
            </div>
            </a>
        </li>
        <LoginModal display={showModal} 
            setModal={setModal} lang={props.lang}/>
    </>
    )
}
export default LoginMenu