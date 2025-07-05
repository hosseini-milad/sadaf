import env from "../../../env"

function ClientQuick(props){
    const data = props.data
    console.log(data)
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="imageShow">
                    <span>کدملی: {data.meliCode}</span>
                    {data.meliImage?
                    <img src={env.siteApiUrl+data.meliImage}/>:<></>}
                </div>
                <div className="sub-num">
                    <p>وضعیت رزرو: {data.regCode}</p>
                    <p> {data.licence}</p>
                </div>
            </div><hr/>
            <div className="sub-avatar inLine">

            </div>
    </div>
    )
}
export default ClientQuick