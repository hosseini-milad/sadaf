import { useState } from "react"
import { PostReq } from "../../../components/PostReq"

function TableRow(props){
    const data = props.data
    const [newData,setNewData] = useState({})
    const [check,setCheck] = useState(data.active)
    const SaveNow=async()=>{
        const result = await PostReq(
            {method:"POST",url:props.url,
              body:{...newData,id:data._id}
            })
            if(!result.error){
              //document.location.reload()
            }
    }
    const DeleteNow=async()=>{
        const result = await PostReq(
            {method:"POST",url:props.deleteUrl,
              body:{id:data._id}
            })
            if(!result.error){
              document.location.reload()
            }
    }
    return(
        <tr>
            <td>
            <i className={check?"fa fa-check greenIcon":
             "fa fa-check grayIcon"} onClick={(e)=>{setNewData(prevState => ({
                ...prevState,
                active: !check
            }));setCheck(!check)}}></i>
            <input type="text" defaultValue={data[props.title]}
            onChange={(e)=>setNewData(prevState => ({
                    ...prevState,
                    [props.title]: e.target.value
                }
            ))}/></td>
            <td><input type="text" defaultValue={data[props.code]}
            onChange={(e)=>setNewData(prevState => ({
                ...prevState,
                    [props.code]: e.target.value
                }
            ))}/></td>
            <td>
            <button onClick={SaveNow} className="btn bg-gradient-primary tableBtn saveBtn">
                ذخیره</button>
            <button onClick={DeleteNow} className="btn bg-gradient-primary tableBtn cancelBtn">
                حذف</button></td>
        </tr>
    )
}
export default TableRow