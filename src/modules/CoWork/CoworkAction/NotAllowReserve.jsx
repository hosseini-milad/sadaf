function NotAllowReserve(props){
    const data = props.data
    return(
        <>
            <div className="reserveText">
            لطفا ابتدا پروفایل کاربری خود را تکمیل نمایید
            </div>
            <div className="buttonHolder">
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                href="/profile"> تکمیل پروفایل کاربری</a>
            </div>
        </>
    )
}
export default NotAllowReserve