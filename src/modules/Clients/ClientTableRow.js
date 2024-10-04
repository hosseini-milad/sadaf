import React ,{ useState } from "react"
import ClientQuick from "./Modules/ClientQuick"
import env from "../../env"
import { PostReq } from "../../components/PostReq"


function ClientTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const data=props.data

 
    return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion":"accordion"}>
            <td className="checkBoxStyle">
              {props.index+1}
            </td>
            <td>
              <div className="cu-avatar">
                  {data.mahiat?<img src="/img/avatar/business.png" alt="avatar"/>:
                  <img src="/img/avatar/person.png" alt="avatar"/>}
                  <div className="cu-name">
                    <p className="name">{data.cName+" " + data.sName}<br/>
                    <small>شماره تماس: {data.phone}</small></p>
                  </div>
                  
                </div>
              </td>
              <td>
                <div className="order-num">
                <p className="name">{data.work}</p>
                </div>
              </td>
              <td>
                <div className="order-price" >
                  
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
          <ClientQuick data={data}/>}
          </td></tr>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default ClientTableRow