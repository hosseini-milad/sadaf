import { useEffect, useState } from "react"
import ProfileBody from "../modules/Profile/ProfileBody"
import ProfileHeader from "../modules/Profile/ProfileHeader"
import ProfileSideBar from "../modules/Profile/ProfileSideBar"
import errortrans from "../translate/error"

import Cookies from 'universal-cookie';
import env, { searchUrl } from "../env"
import LoginHolder from "../modules/Login/LoginHolder"
import MyReserve from "../modules/Profile/ProfileModules/My-Reserve"
import ChangePass from "../modules/Profile/ProfileModules/ChangePass"
const cookies = new Cookies();
const menu=[
    {title:"پروفایل کاربری",enTitle:"userprofile",index:0},
    {title:"تغییر رمزعبور",enTitle:"password",index:3},
]

function Profile(props){
    const url= document.location.href
    const [tab,setTab] = useState(0)
    const token = cookies.get(env.cookieName)
    const [userData,setUserData] = useState()
    useEffect(()=>{
        if(!token){return}
        const tabUrl = searchUrl(url,menu,setTab)
        const postOptions={
            method:'get',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
          }
          console.log(postOptions)
        fetch(env.siteApi + "/user/fetch-client",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){
                if(result.error=="Invalid Token Error"){
                cookies.remove(env.cookieName, { path: "/" });
                setTimeout(() => (document.location.reload(), 500));
                }
            }
            else{
                setUserData(result.data)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    if(token)
    return(
        <main className="profileHolder">
            <ProfileSideBar data={userData} cookie={cookies}
                tab={tab} setTab={setTab} menu={menu}/>
            {userData?
                tab==0?<ProfileBody  data={userData} 
                token={token} tab={tab}/>:
                tab==1?<MyReserve  data={userData} 
                token={token} tab={tab}/>:
                tab==3?<ChangePass  data={userData} 
                token={token} tab={tab}/>:<></>:
                <></>}
        </main>
    )
    else return(<LoginHolder />)
}
export default Profile