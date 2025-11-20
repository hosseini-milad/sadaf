import React ,{ useState } from "react"
import env from "../../env"
import { PostReq } from "../../components/PostReq"
import CoworkQuick from "./Modules/CoworkQuick"


function CoworkTableListRow(props){
  const data = props.data
  const userInfo = data&&data.userInfo
  console.log(userInfo)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  

    return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion":"accordion"}>
            <td className="checkBoxStyle">
              {props.index+1}
            </td>
            <td>
                <div className="cu-avatar rightAlign">
                    <p>{userInfo&&userInfo.cName} {" "}
                    {userInfo&&userInfo.sName} <br/>
                     <small> 
                    {data&&data.reserveid}</small>
                    </p>
                </div>
            </td>
            <td>
              <div className="cu-avatar">
                  {(data.active&&data.active>-1)?data.active>3?
                    <img src="/img/avatar/green.png" alt="avatar"/>:
                    <img src="/img/avatar/yellow.png" alt="avatar"/>:
                    <img src="/img/avatar/red.png" alt="avatar"/>}
                  <div className="cu-name">
                    <p className="name">
                    {userInfo&&data.userInfo.meliCode}<br/>
                    <small>شماره تماس: 
                    {userInfo&&userInfo.phone}</small></p>
                  </div>
                  
                </div>
              </td>
              <td>
                <div className="order-num">
                  <p>{userInfo&&userInfo.work}</p>
                </div>
              </td>
              <td>
                <div className="order-price">
                  {data.isPaid?
                    <i className="fa fa-check greenIcon"></i>:
                    <i className="fa fa-remove redIcon"></i>}
                </div>
              </td>
              <td>
                <div className="order-price">
                  {data.active&&data.active>-1?(data.active +" روز مانده "):"منقضی شده است"}
                </div>
                {/*<div className="order-price" 
                onClick={()=>publishItem(data.managerPhone,data.publish)}>
                  {data.active?
                    <i className="fa fa-check greenIcon"></i>:
                    <i className="fa fa-remove redIcon"></i>}
                </div>*/}
              </td>
            <td>
              <div className="more-btn">
              <i className={`tableIcon fas ${activeAcc?"fa-chevron-up":"fa-chevron-down"}`} 
                onClick={()=>props.showDetail(activeAcc?"-1":props.index)} ></i>
                
              </div>
            </td>
          </tr>
          {activeAcc?<tr className="sub-order">
        <td colSpan="10">{
          <CoworkQuick data={data}/>}
          </td></tr>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default CoworkTableListRow