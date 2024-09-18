import React ,{ useState } from "react"
import CompanyQuickCart from "./CompanyQuickCart"
import env from "../../../env"
import { PostReq } from "../../../components/PostReq"


function CompanyTableRow(props){
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
                    <p>{data.title}</p>
                </div>
            </td>
            <td>
              <div className="cu-avatar">
                  {data.mahiat?<img src="/img/avatar/business.png" alt="avatar"/>:
                  <img src="/img/avatar/person.png" alt="avatar"/>}
                  <div className="cu-name">
                    <p className="name">{data.managerName}<br/>
                    <small>شماره تماس: {data.managerPhone}</small></p>
                  </div>
                  
                </div>
              </td>
              <td>
                <div className="order-num">
                  <img src={env.siteApiUrl+ data.bannerThumb}/>
                </div>
              </td>
              <td>
                <div className="order-price" 
                onClick={()=>publishItem(data.managerPhone,data.publish)}>
                  {data.publish?
                    <i className="fa fa-check"></i>:
                    <i className="fa fa-remove redIcon"></i>}
                </div>
              </td>
              <td>
                {props.kind?<div className="order-price">
                  {data.change?
                    <i className="fa fa-check"></i>
                    :<></>}
                </div>:<div className="order-price">
                  <button type="button" 
                  onClick={()=>acceptEdit(data.managerPhone)}>
                    تایید ویرایش</button>
                </div>}
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
          <CompanyQuickCart data={data}/>}
          </td></tr>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default CompanyTableRow