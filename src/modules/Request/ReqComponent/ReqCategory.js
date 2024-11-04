import { useEffect, useState } from "react"
import {PostReq} from "../../../components/PostReq";
import StyleSelect from "../../../components/Button/AutoComplete";

function ReqCategory(props){
  const [newCat,setNewCat] = useState()
  const [data,setData] = useState()
  const [mehvarOpt,setMehvarOpt] = useState()
  const lang=props.lang;
  const addNewCat=async()=>{
    if(!newCat){
      return
    }
    const result = await PostReq(
      {method:"POST",url:"/data/set-category",
        body:newCat
      })
      if(!result.error){
        //document.location.reload()
      }
      
  }
  useEffect(()=>{initial()},[])
  const initial=async()=>{
    var result = await PostReq(
      {method:"POST",url:"/data/list-category",
        body:{}
      })
      setData(result.data)
      setMehvarOpt(result.mehvarData)
  }
  //if(!data||!data.length) return <main>waiting</main>
  return(
    <div className="user" style={{direction:"rtl"}}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>دسته بندی ها</p>
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
              <p>محور</p>
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
            <tr key={i}>
              <td>{data.title}</td>
              <td>{data.catCode}</td>
              <td>{data.mehvarData&&data.mehvarData[0]&&
              data.mehvarData[0].title}</td>
              </tr>)
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
                catCode: e?e.target.value:"",
              }))}/></td>
            <td><StyleSelect 
            options={mehvarOpt}
            label="title"
            action={(e) =>
              setNewCat((prevState) => ({
                ...prevState,
                mehvar: e?e.mehvarCode:"",
              }))}/></td>
            <td><button onClick={addNewCat}>افزودن</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
export default ReqCategory