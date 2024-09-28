function ActiveCowork(props){
    const data = props.data
    return(
        <>
            <div className="reserveText">
                شما درخواست فعالی دارید
                تاریخ فعال سازی
                {data&&new Date(data.sDate).toLocaleDateString('fa')}
            </div>
            <div className="buttonHolder">
                <a className="cl-button disableBtn -small -light ga_nav_link homepage-hp-nav " 
                > پرداخت رزرو</a>
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                > مشاهده اطلاعات رزرو</a>
            </div>
        </>
    )
}
export default ActiveCowork