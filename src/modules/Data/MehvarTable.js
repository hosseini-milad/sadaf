import { useEffect, useState } from "react"
import {PostReq} from "../../components/PostReq";
import TableRow from "../Company/Modules/TableRow";

function MehvarTable(props){
  const [newCat,setNewCat] = useState()
  const [data,setData] = useState()
  const lang=props.lang;
  const addNewCat=async()=>{
    if(!newCat){
      return
    }
    const result = await PostReq(
      {method:"POST",url:"/data/set-mehvar",
        body:newCat
      })
      if(!result.error){
        //document.location.reload()
      }
      
  }
  useEffect(()=>{initial()},[])
  const initial=async()=>{
    var result = await PostReq(
      {method:"POST",url:"/data/list-mehvar",
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
            <p>محورها</p>
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
          {data?data.map((data,i)=>(
            <TableRow data={data} key={i} code="mehvarCode" title="title"
            url="/data/update-mehvar"
            deleteUrl="/data/remove-mehvar"/>)
            ):<></>}
          <tr>
            <td><input type="text"
            onChange={(e) =>
              setNewCat((prevState) => ({
                ...prevState,
                title:  e?e.target.value:"",
              }))}/></td>
            <td><input type="text"
            onChange={(e) =>
              setNewCat((prevState) => ({
                ...prevState,
                mehvarCode: e?e.target.value:"",
              }))}/></td>
            <td><button onClick={addNewCat}>افزودن</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
export default MehvarTable