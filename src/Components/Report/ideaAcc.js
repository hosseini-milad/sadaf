import { useState } from "react"
import env from "../../env"

function IdeaAcc(props){
    const data = props.data
    const [open,setOpen] = useState(0)
    if(data)
    return(
        <li className="hsg-accordion__item" data-hsg-mounted="">
            <button className="hsg-accordion__label" onClick={()=>setOpen(open?0:1)}>
                <h3 className="hsg-accordion__label-text marketing-hero-product">{props.title} 
                <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                    {!open?<i className="fa fa-plus"></i>:
                        <i className="fa fa-minus"></i>}
                </span>
                </h3>
            </button>
            {open?<div id="hsg-accordion__content-0" aria-hidden="true">
                <ul className="accField">
                    {data&&data.map((data,i)=>(
                    <li>{data}</li>
                    ))}
                </ul>
            </div>:<></>}
        </li>
    )

}
export default IdeaAcc