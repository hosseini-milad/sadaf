import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"
import DataQuickRow from "./DataQuickRow"

function DataQuickCart(props){
    const data = props.data
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="sub-avatar-container">
                    
                    <div className="sub-info">
                    <p className="sub-name">خلاصه: {data.abstract}</p>
                    <a href={data.url} className="sub-id">آدرس اصلی</a>
                    
                    </div>
                </div>
                <div className="sub-num">
                    <p>شماره اظهارنامه: {data.ezharname}</p>
                    <p>شماره ثبت : {data.sabtNo}</p>
                </div>
            </div><hr/>
            <div className="sub-avatar inLine">

            </div>
    </div>
    )
}
export default DataQuickCart