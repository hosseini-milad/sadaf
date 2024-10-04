import { useEffect, useState } from "react"
import {PostReq} from "../components/PostReq";

function Transactions(props){
  const [newCat,setNewCat] = useState()
  const [data,setData] = useState()
  const lang=props.lang;
  
  useEffect(()=>{initial()},[])
  const initial=async()=>{
    var result = await PostReq(
      {method:"POST",url:"/reserve/list-transactions",
        body:{}
      })
      setData(result.data)
  }
  //if(!data||!data.length) return <main>waiting</main>
  return(
    <div className="user" style={{direction:"rtl"}}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>تراکنش ها</p>
          </div>
        </div>
        
      </div>
      <div className="list-container">
        <table>
        <thead>
        <tr>
            <th>
              <p>عنوان</p>
              <i></i>
            </th>
            <th>
              <p>کد</p>
              <i></i>
            </th>
            <th>
              <p>عملیات</p>
              <i></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {data&&data.map((data,i)=>(
            <tr key={i}>
              <td>{data.reserveId}</td>
              <td>{data.userInfo[0]&&(data.userInfo[0].cName+ ' '+
              data.userInfo[0].sName)}</td>
              <td>{data.trackId}</td>
              <td>{data.success=="1"?
                <i className="fa fa-check greenIcon"></i>:
                <i className="fa fa-remove redIcon"></i>}
              </td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  </div>
  )
}
export default Transactions