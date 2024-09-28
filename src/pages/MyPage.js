import { useEffect, useState } from "react"
import env from "../env"
import errortrans from "../translate/error"
import CompanyHolder from "../modules/Company/CompanyHolder"

function MyPage(props){
    const token = props.token
    const [data,setMyData] = useState('')
    const [change,setChange] = useState('')
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
    useEffect(()=>{
        const postOptions={
            method:'get',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
        }
        fetch(env.siteApi + "/company/get-my-company",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setMyData(result.data)
                setChange(result.change)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    console.log(data)
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            {(data&&data.managerPhone)?
            <CompanyHolder data={data} edit={true} />:
            <div className="createPageHolder">
                <button className="createBtn" onClick={()=>
                    document.location.href="/my-page-edit"
                }>
                ایجاد/ویرایش صفحه شرکت
                </button>
                
                {change?
                
                <span className="changeAlert" >
                    صفحه شما ویرایش شده است. در انتظار تایید مدیریت
                </span>:<></>}
            </div>}
        </main>
    )
}
export default MyPage