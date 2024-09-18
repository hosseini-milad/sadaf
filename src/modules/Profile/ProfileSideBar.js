import env from "../../env";

function ProfileSideBar(props){
    const menu = props.menu
    const signOut=()=>{
        props.cookie.remove(env.cookieName,{ path: '/' });
       setTimeout(()=>(window.location.reload(),1000))
    }
    const changeTab=(item)=>{
        props.setTab(item.index)
        document.location.href=
            `/profile#${item.enTitle}`
    }
    return(
        <div className="SideBar">
            <div className="MenuSideBar">
                {menu&&menu.map(menuItem=>(
                    <div className={"MenuItem " +
                        (menuItem.index==props.tab?"activeMenu":"")} key={menuItem.index}
                    onClick={()=>changeTab(menuItem)}>
                        {menuItem.title}
                    </div>
                ))}
                
                <div className="MenuItem cancelBtn" onClick={signOut}>
                    خروج
                </div>
            </div>
        </div>
    )
}
export default ProfileSideBar