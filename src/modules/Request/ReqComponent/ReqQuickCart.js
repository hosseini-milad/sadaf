
function ReqQuickCart(props){
    const data = props.data
    return(
      <div className="sub-order-table">
            <div className="sub-avatar inLine">
                <div className="sub-avatar-container inRow">
                    
                    <div className="sub-info">
                    <p className="sub-name">خلاصه: {data.description}</p>
                    <p className="sub-id">اثبات نیاز: <br/>{data.proofReq}</p>
                    
                    </div>
                    
                </div>
                <div className="sub-num">
                <small>ایده ها: </small>
                    <ul>
                    {data.ideaData&&data.ideaData.map((idea,i)=>(
                        <li key={i}>
                            <div>
                                <h6>{idea.title}</h6>
                                <i>{idea.userData&&idea.userData.phone}</i>
                                
                                <i>{(idea.userData&&idea.userData.sName)?
                                `(${idea.userData.sName})`:<></>}</i>
                                <hr/>
                                <small>{idea.description}</small>
                                <br/>
                                <i>{idea.ideaBenefit}</i>
                                <br/>
                                <i>{idea.ideaRecommend}</i>
                                <br/>
                                <i>{idea.ideaMoney}</i>
                                <br/>
                                <i>{idea.ideaTime}</i>
                                <br/>

                            </div>    
                        </li>
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