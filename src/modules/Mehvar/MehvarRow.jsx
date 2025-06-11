import { useState } from "react"
import { PostReq } from "../../components/PostReq"

function MehvarRow(props){
    const data = props.data
    const [newData,setNewData] = useState({})
    const SaveNow=async()=>{
        const result = await PostReq(
            {method:"POST",url:props.url,
              body:{...newData,id:data._id}
            })
            if(!result.error){
              document.location.reload()
            }
    }
    
    return(
        <tr >
            <td>
                <input type="checkbox" defaultChecked={data.active}
                onChange={(e)=>setNewData(prevState => ({
                    ...prevState,
                    active: e.target.checked
                })
                )}
                ></input>
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
            {props.subject?
            <td><input type="text" defaultValue={data[props.subject]}
            onChange={(e)=>setNewData(prevState => ({
                ...prevState,
                    [props.subject]: e.target.value
                }
            ))}/></td>:<></>}
            <td>
            <button onClick={SaveNow} className="btn bg-gradient-primary tableBtn saveBtn">
                ذخیره</button>
            <button onClick={()=>window.location.href="/mehvar/"+data._id} className="btn bg-gradient-primary tableBtn editBtn">
                ویرایش</button></td>
        </tr>
    )
}
export default MehvarRow