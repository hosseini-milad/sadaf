import { useEffect, useState } from "react"
import env from "../../../env"


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
        fetch(env.siteApi + "/request/my-request",postOptions)
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
    return(
        <div className="reserveList">
            {reserve&&reserve.map((res,i)=>(
                <div className="request" data={res} key={i}>
                    </div>
            ))}
            
        </div>
    )
}
export default MyRequest