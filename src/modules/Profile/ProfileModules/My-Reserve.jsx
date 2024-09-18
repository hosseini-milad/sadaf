import { useEffect, useState } from "react"
import env from "../../../env"
import ReserveCard from "../../CoWork/CoworkAction/ReserveCard"

function MyReserve(props){
    const token = props.token
    const [reserve,setReserve] = useState()
    useEffect(()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
          }
          console.log(postOptions)
        fetch(env.siteApi + "/reserve/my-reserve",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setReserve(result.coWorkData)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    console.log(reserve)
    return(
        <div className="reserveList">
            {reserve&&reserve.map((res,i)=>(
                <ReserveCard data={res} key={i}/>
            ))}
            
        </div>
    )
}
export default MyReserve