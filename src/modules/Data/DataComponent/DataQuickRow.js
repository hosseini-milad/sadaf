import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function DataQuickRow(props){
    const orderItem = props.orderItem

    const [content,setContent]=useState()
    return(
      <>
        {content?<div className="sub-avatar-container">
                <img src={env.siteApiUrl+content.thumbUrl}
                alt={content.sku}/>
                <div className="sub-info">
                <p className="sub-name">{content.title}</p>
                <p className="sub-id">کد محصول: {content.sku}</p>
                </div>
            </div>:env.loader}</>
    )
}
export default DataQuickRow