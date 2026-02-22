function CoworkQuick(props){
    const data = props.data
    var sDate = data&&data.sDate
    var date = data&&data.date
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="sub-avatar-container">
                    
                    <div className="sub-info">
                    <p className="sub-name">رهگیری پرداخت: {data.trackId}</p>
                    <small>تاریخ پرداخت: {new Date(date).toLocaleDateString('fa')}</small>
                    
                    </div>
                </div>
                <div className="sub-num">
                    <p>تاریخ شروع: {new Date(sDate).toLocaleDateString('fa')}</p>
                    <p> {data.licence}</p>
                </div>
            </div><hr/>
            <div className="sub-avatar inLine">

            </div>
    </div>
    )
}
export default CoworkQuick