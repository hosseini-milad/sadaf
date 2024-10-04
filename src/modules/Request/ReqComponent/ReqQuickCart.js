
function ReqQuickCart(props){
    const data = props.data
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="sub-avatar-container inRow">
                    
                    <ul className="sub-num">
                        <li>نهاد: {data.nahad}</li>
                        <li>حمایت : {data.support}</li>
                    </ul>
                    <div className="sub-info">
                    <p className="sub-name">خلاصه: {data.description}</p>
                    <p className="sub-id">اثبات نیاز: <br/>{data.proofReq}</p>
                    
                    </div>
                    
                </div>
                <div className="sub-num">
                <small>ایده ها: </small>
                    <ul>
                    {data.ideaData&&data.ideaData.map((idea,i)=>(
                        <li key={i}>{idea.description}</li>
                    ))}
                    </ul>
                </div>
            </div><hr/>
            <div className="sub-avatar inLine">

            </div>
    </div>
    )
}
export default ReqQuickCart