function CoworkQuick(props){
    const data = props.data
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="sub-avatar-container">
                    
                    <div className="sub-info">
                    <p className="sub-name">محصول: {data.productTitle}</p>
                    <small>{data.productDescription}</small>
                    <a href={data.url} className="sub-id">پیشنمایش</a>
                    
                    </div>
                </div>
                <div className="sub-num">
                    <p>شماره ثبت: {data.regCode}</p>
                    <p> {data.licence}</p>
                </div>
            </div><hr/>
            <div className="sub-avatar inLine">

            </div>
    </div>
    )
}
export default CoworkQuick