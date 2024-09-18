import { useEffect, useState } from "react"
import CompanyHolder from "./CompanyHolder"
import env from "../../env"

function CompanyFetch(){
    const dataUrl= window.location.pathname
    const companyId = dataUrl.split('/')[2]
    const [data,setData] = useState()
    console.log(companyId)
    useEffect(()=>{
        const postOptions={
            method:'get',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(env.siteApi + "/company/fetch-company/"+companyId,postOptions)
        .then(res => res.json())
        .then(
            (result) => {
                if(result.error){
                    console.log(result.error)
                }
                else{
                  setData(result.data)
                }
            },
            (error) => {
                console.log(error)
            })
        },[])
    if(data)
        return(
        <CompanyHolder data={data}/>
    )
}
export default CompanyFetch