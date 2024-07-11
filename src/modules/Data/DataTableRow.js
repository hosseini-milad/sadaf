import React ,{ useState } from "react"
import PayStatus from "../Components/PayStatus"
import DataQuickDetail from "./DataComponent/DataQuickDetail"
import DataQuickCart from "./DataComponent/DataQuickCart"


function DataTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const data=props.data
  const lang=props.lang;
  const cart = props.cart
console.log(data);
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
                    <p className="name">{data.malek}<br/>
                    <small>کدملی: {data.malekNo?data.malekNo:'-'}</small></p>
                  </div>
                  
                </div>
              </td>
              <td>
                <div className="order-num">
                  {data.sabtDate}
                </div>
              </td>
              <td>
                <div className="order-price">
                  <p>{data.etebar?"دارد":"ندارد"}</p>
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
          <DataQuickCart data={data}/>}
          </td></tr>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default DataTableRow