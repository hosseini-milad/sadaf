import React ,{ useState } from "react"
import env from "../../env"
import { PostReq } from "../../components/PostReq"
import CoworkQuick from "./Modules/CoworkQuick"


function CoworkTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const data=props.data

  const acceptEdit=async(managerPhone)=>{
    const result = await PostReq(
      {method:"POST",url:"/company/accept-edit",
        body:{managerPhone:managerPhone}
      })
      if(!result.error){
        props.setRefresh(Math.random())
      }
    
  }
  const publishItem=async(managerPhone,publish)=>{
    const result = await PostReq(
      {method:"POST",url:"/company/update-company",
        body:{managerPhone:managerPhone,publish:!publish}
      })
      if(!result.error){
        props.setRefresh(Math.random())
      }
    
  }
    return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion":"accordion"}>
            <td className="checkBoxStyle">
              {props.index+1}
            </td>
            <td>
                <div className="cu-avatar rightAlign">
                    <p>{data.userInfo[0]&&data.userInfo[0].cName} 
                    {data.userInfo[0]&&data.userInfo[0].sName}
                    </p>
                </div>
            </td>
            <td>
              <div className="cu-avatar">
                  {data.mahiat?<img src="/img/avatar/business.png" alt="avatar"/>:
                  <img src="/img/avatar/person.png" alt="avatar"/>}
                  <div className="cu-name">
                    <p className="name">
                    {data.userInfo[0]&&data.userInfo[0].meliCode}<br/>
                    <small>شماره تماس: 
                    {data.userInfo[0]&&data.userInfo[0].phone}</small></p>
                  </div>
                  
                </div>
              </td>
              <td>
                <div className="order-num">
                  <p>{data.userInfo[0]&&data.userInfo[0].work}</p>
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
                <div className="order-price" 
                onClick={()=>publishItem(data.managerPhone,data.publish)}>
                  {data.active?
                    <i className="fa fa-check greenIcon"></i>:
                    <i className="fa fa-remove redIcon"></i>}
                </div>
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
export default CoworkTableRow