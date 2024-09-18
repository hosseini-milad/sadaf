import { useState } from "react"
import SeatDate from "./SeatDate"
import env from "../../env"

function SeatPanel(props){
    const [date,setDate] = useState()
    const token = props.token
    const [message,setMessage] = useState()
    const reserveNow=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId },
            body:JSON.stringify({sDate:date,title:"صندلی اشتراکی",
                kind:"shareSeat"
            })
            }
            console.log(postOptions)
        fetch(env.siteApi + "/reserve/set-cowork",postOptions)
        .then(res => res.json())
        .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setMessage("در حال انتقال به درگاه پرداخت")
                setTimeout(()=>
                window.location.href=(env.siteApiUrl+
                    "/api/payment/zibal?reserveid="+
                    result.reserveid),2000)
            }
        },
        (error) => {
            console.log(error)
        })
    }
    const today = new Date().toLocaleDateString('fa')
    return(
        <div className="seatPlace">
            <div className="reserveText">
                <SeatDate action={setDate}/>
            </div>
            {date?<small>تاریخ: 
                {`${date.year}/${date.month}/${date.day}`}
                الی 
                {`${date.year}/${date.month+1}/${date.day}`}
            </small>:<></>}
            {message?<small>{message}</small>:<></>}
            <div className="buttonHolder">
                {date?<a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                onClick={reserveNow}> رزرو صندلی</a>:
                <a className="cl-button disableBtn -small -light ga_nav_link homepage-hp-nav " 
                > رزرو صندلی</a>}
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                > مشاهده اطلاعات رزرو</a>
            </div>
        </div>
    )
}
export default SeatPanel