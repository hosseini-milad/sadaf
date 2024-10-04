function ClientQuick(props){
    const data = props.data
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="sub-avatar-container">
                    
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