import React ,{ useState } from "react"
import ReqQuickCart from "./ReqComponent/ReqQuickCart"
import env from "../../env"


function ReqTableRow(props){
  const token = props.token
  const data=props.data
  const activeAcc = props.index===props.detail
  const updateTable=(active) => {
    const body = {id:data._id,active:active};
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token && token.token,
        userId: token && token.userId,
      },
      body: JSON.stringify(body),
    };
    //console.log(postOptions);
    fetch(env.siteApi + "/data/update-req", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          window.location.reload()
        },
        (error) => {
          console.log(error);
        }
      );
  }
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
                  <i className="fa fa-check" onClick={()=>updateTable(false)}/>:
                  <i className="fa fa-remove" onClick={()=>updateTable(true)}/>}</p>
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