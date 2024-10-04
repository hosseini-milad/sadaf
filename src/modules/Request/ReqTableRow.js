import React ,{ useState } from "react"
import ReqQuickCart from "./ReqComponent/ReqQuickCart"


function ReqTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const data=props.data
  const lang=props.lang;
  const cart = props.cart
    return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion":"accordion"}>
            <td className="checkBoxStyle">
              {props.index+1}
            </td>
            <td>
            <div className="cu-avatar">
                    <p className="name">{data.title}<br/>
                    <small>دسته بندی: {data.category}</small></p>
                  </div>
            </td>
            <td>
              <div className="cu-avatar">
                  {data.mahiat?<img src="/img/avatar/business.png" alt="avatar"/>:
                  <img src="/img/avatar/person.png" alt="avatar"/>}
                  <div className="cu-name">
                    <p className="name">{data.userData&&
                      (data.userData.cName+" "+data.userData.sName)}<br/>
                    <small>شماره تماس: {data.userData?data.userData.phone:''}</small></p>
                  </div>
                  
                </div>
              </td>
              
            <td>
                <div className="order-num">
                    <p>{data.ideaCount}</p>
                </div>
            </td>
              <td>
                <div className="order-num">
                  {new Date(data.date).toLocaleDateString('fa')}
                </div>
              </td>
              <td>
                <div className="order-price">
                  <p>{data.active?
                  <i className="fa fa-check"/>:
                  <i className="fa fa-remove"/>}</p>
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
          <ReqQuickCart data={data}/>}
          </td></tr>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default ReqTableRow