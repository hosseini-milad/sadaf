import { useState } from "react"
import SeatDate from "./SeatDate"
import env from "../../env"
import ActiveCowork from "./CoworkAction/ActiveCowork"
import DeActiveCowork from "./CoworkAction/DeActiveCowork"

function SeatOldReserve(props){
    
    const data = props.data
    return(
        <div className="seatPlace">
            {data.isActive?<ActiveCowork data={data}/>
            :<DeActiveCowork data={data} />}

        </div>
    )
}
export default SeatOldReserve