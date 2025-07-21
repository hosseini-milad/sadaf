import { useEffect, useState } from "react"
import env from "../../../env"
import RequestRow from "./RequestRow"


function MyRequest(props){
    const token = props.token
    const [reserve,setReserve] = useState()
    useEffect(()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
          }
          console.log(postOptions)
        fetch(env.siteApi + "/data/my-request",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setReserve(result.data)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    return(
        <table className="transactionList">
            <tbody>
                <tr>
                    <td>ردیف</td>
                    <td>عنوان تقاضا</td>
                    <td>دسته بندی</td>
                    <td>وضعیت</td>
                    <td>تاریخ</td>
                </tr>
            {reserve&&reserve.map((trans,i)=>(
                <RequestRow key={i} index={i+1} data={trans}/>
            ))}
            </tbody>
        </table>
    )
}
export default MyRequest