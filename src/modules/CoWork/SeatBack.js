import { useState } from "react"
import SeatDate from "./SeatDate"
import env from "../../env"
import ActiveCowork from "./CoworkAction/ActiveCowork"
import DeActiveCowork from "./CoworkAction/DeActiveCowork"
import SeatText from "./SeatText"

function SeatBack(props){
    var [date ,setDate] = useState()
    const data = props.data
    console.log(props.check)
    return(
    <div className="seatPlace">
        <div className="reserveText">
                {data.message}
            </div>
            {data.calendar?<SeatDate action={setDate} check={props.check} 
                setCheck={props.setCheck}/>:<></>}
            <div className="buttonHolder">
                {data.buttons&&data.buttons.map((btn,i)=>(
                    <a href={btn.href+((btn.acceptDate&&date)?
                        (`&date=${date.year}-${date.month}-${date.day}`):"")
                    } key={i} className={btn.class+ (props.check?"":"disableBtn")} >
                        {btn.title}
                    </a>
                ))}
            </div>
    </div>
    )
}
export default SeatBack