import { useEffect, useState } from "react"
import env from "../../../env"
import TransactionRow from "./TransactionRow"

function MyTransaction(props){
    const token = props.token
    const [transaction,setTransaction] = useState()
    useEffect(()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
          }
          console.log(postOptions)
        fetch(env.siteApi + "/data/my-idea-list",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setTransaction(result.data)
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
                    <td>عنوان ایده</td>
                    <td>تقاضای فناوری</td>
                    <td>تاریخ</td>
                </tr>
            {transaction&&transaction.map((trans,i)=>(
                <TransactionRow key={i} index={i+1} data={trans}/>
            ))}
            </tbody>
        </table>
    )
}
export default MyTransaction