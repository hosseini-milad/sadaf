function DeActiveCowork(props){
    const data = props.data
    const payNow=()=>{
        console.log("pay now")
    }
    return(
        <>
            <div className="reserveText">
                شما درخواست غیر فعالی دارید
                تاریخ فعال سازی
                {data&&new Date(data.sDate).toLocaleDateString('fa')}
            </div>
            <div className="buttonHolder">
                <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                onClick={payNow}> پرداخت رزرو</a>
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                > مشاهده اطلاعات رزرو</a>
            </div>
        </>
    )
}
export default DeActiveCowork