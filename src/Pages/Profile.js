import { useEffect, useState } from "react"
import ProfileBody from "../modules/Profile/ProfileBody"
import ProfileHeader from "../modules/Profile/ProfileHeader"
import ProfileSideBar from "../modules/Profile/ProfileSideBar"

import Cookies from 'universal-cookie';
import env, { searchUrl } from "../env"
import LoginHolder from "../modules/Login/LoginHolder"
import MyRequest from "../modules/Profile/ProfileModules/My-Request"
import ChangePass from "../modules/Profile/ProfileModules/ChangePass"
import MyTransaction from "../modules/Profile/ProfileModules/My-Transaction"
const cookies = new Cookies();
const menu=[
    {title:"پروفایل کاربری",enTitle:"userprofile",index:0},
    {title:"درخواست های من",enTitle:"myrequest",index:1},
    {title:"ایده های من",enTitle:"idea",index:2},
    {title:"تغییر رمزعبور",enTitle:"password",index:3},
]

function Profile(props){
    const url= document.location.href
    const [tab,setTab] = useState(0)
    const token = cookies.get(env.cookieName)
    const [userData,setUserData] = useState()
    useEffect(()=>{
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
                console.log(result.error)
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
                tab==1?<MyRequest  data={userData} 
                token={token} tab={tab}/>:
                tab==2?<MyTransaction  data={userData} 
                token={token} tab={tab}/>:
                tab==3?<ChangePass  data={userData} 
                token={token} tab={tab}/>:<></>:
                <></>}
        </main>
    )
    else return(<LoginHolder />)
}
export default Profile