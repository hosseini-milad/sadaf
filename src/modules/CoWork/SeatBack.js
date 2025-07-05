import { useState } from "react"
import SeatDate from "./SeatDate"
import env from "../../env"
import ActiveCowork from "./CoworkAction/ActiveCowork"
import DeActiveCowork from "./CoworkAction/DeActiveCowork"

function SeatBack(props){
    
    const data = props.data
    return(
        <div className="seatPlace">
            <div className="reserveText">
                {data.message}
            </div>
            <div className="buttonHolder">
                {data.buttons&&data.buttons.map((btn,i)=>(
                    <a href={btn.href} key={i} class={btn.class} >
                        {btn.title}
                    </a>
                ))}
            </div>
        </div>
    )
}
export default SeatBack