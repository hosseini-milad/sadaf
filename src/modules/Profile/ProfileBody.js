import { useState } from "react"
import MyInput from "../../components/Button/Input"
import env from "../../env"

function ProfileBody(props){
    const [changes,setChanges] = useState()
    const data = props.data
    const token = props.token
    const updateChanges=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId },
            body:JSON.stringify({...changes})
        }
        console.log(postOptions)
        fetch(env.siteApi + "/user/update-client",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                console.log(result)
            }
        },
        (error) => {
            console.log(error)
        })
    }
    return(
        <div className="fullWidth">
            <form className="profileForm">
                <MyInput title="نام" require={true} class="profileInput"
                action={setChanges} param="cName" defaultValue={data.cName}/>
                <MyInput title="نام خانوادگی" require={true} class="profileInput"
                action={setChanges} param="sName" defaultValue={data.sName}/>
                <MyInput title="کد ملی / شماره کارت اقامت" require={true} class="profileInput"
                action={setChanges} param="meliCode" defaultValue={data.meliCode}/>
                <MyInput title="حوزه فعالیت/تخصص" require={true} class="profileInput"
                action={setChanges} param="work" defaultValue={data.work}/>
                <MyInput title="شماره همراه" require={true} class="profileInput"
                disabled={true}
                action={setChanges} param="phone" defaultValue={data.phone}/>
                <MyInput title="ایمیل" require={true} class="profileInput"
                action={setChanges} param="email" defaultValue={data.email}/>
            </form>
            <div className="buttonHolder">
                <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                onClick={updateChanges}> ذخیره اطلاعات</a>
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                > پاک کردن فرم</a>
            </div>
                
        </div>
    )
}
export default ProfileBody