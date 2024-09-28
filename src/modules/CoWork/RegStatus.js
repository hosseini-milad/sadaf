import { useEffect, useState } from "react"
import SeatPanel from "./SeatPanel"
import env from "../../env"
import Cookies from 'universal-cookie';
import SeatOldReserve from "./SeatOldReserve";
import NotAllowReserve from "./CoworkAction/NotAllowReserve";
const cookies = new Cookies();

function RegStatus(props){
    const token = cookies.get(env.cookieName)
    const [coWork,setCoWork] = useState('')
    const [canReserve,setCanReserve] = useState('')
    useEffect(()=>{
        const postOptions={
            method:'get',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
          }
        fetch(env.siteApi + "/reserve/fetch-cowork",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setCoWork(result.cowork)
                setCanReserve(result.canReserve)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    return(
    <div className="checkSeat">
        <div className="seatTabHolder">
            <div className="seatTab">
                <img src="/img/shared-seat-min-1.png" />
            </div>
            <div className="seatTab">
                <img src="/img/dedicated-seat-min.png" />
            </div>
            <div className="seatTab">
                <img src="/img/private-room-min.png" />
            </div>
        </div>
        <div className="seatPanel">
            {canReserve?(coWork)?<SeatOldReserve data={coWork}/>:
                <SeatPanel token={token}/>:
                <NotAllowReserve />}
        </div>
    </div>)
}
export default RegStatus