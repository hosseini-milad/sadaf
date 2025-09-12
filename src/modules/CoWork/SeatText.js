import { useState } from "react"

function SeatText({text,abstract}){
    const [textSwitch,setTextSwitch] = useState(1)
    return(<div className="tahodHolder">
        {textSwitch?<p style={{textAlign:"justify"}} 
        dangerouslySetInnerHTML={{__html:abstract}}>
            </p>:
        <p style={{textAlign:"justify"}} 
        dangerouslySetInnerHTML={{__html:text}}>
            </p>}
        {textSwitch&&abstract?<input type="button" onClick={()=>setTextSwitch(0)} value={"مشاهده کامل"}/>:<></>}
        </div>
    )
}
export default SeatText