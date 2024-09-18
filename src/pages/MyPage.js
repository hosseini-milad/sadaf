import { useEffect, useState } from "react"
import env from "../env"
import errortrans from "../translate/error"
import CompanyHolder from "../modules/Company/CompanyHolder"

function MyPage(props){
    const token = props.token
    const [data,setMyData] = useState('')
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
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            {data?<CompanyHolder data={data} edit={true} />:<></>}
        </main>
    )
}
export default MyPage