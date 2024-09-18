import { useEffect, useState } from "react"
import { PostReq } from "../components/PostReq"
import Paging from "../modules/Components/Paging"
import env from "../env"
import CompanyTable from "../modules/Company/Modules/CompanyTable"
import CompanyFilters from "../modules/Company/Modules/CompanyFilters"

function CompanyHolder(props){
    const [data,setData] = useState()
    const [filters,setFilters] = useState()
    const [refresh,setRefresh] = useState()
    const [loading,setLoading] = useState()
    const [kind,setKind] = useState(0)
    
    useEffect(()=>{initial()},[kind,refresh])
    const initial=async()=>{
        var result = await PostReq(
        {method:"POST",url:kind?
          "/company/list-company-admin":
          "/company/list-change-admin",
            body:{}
        })
        setData(result.data)
    }
    return(
        <div className="user" style={{ direction: "rtl" }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            {kind?<p>صفحه شرکت ها</p>:
            <p>تغییرات شرکت ها</p>}
          </div>
        </div>
        <button onClick={()=>{setKind(kind?0:1)}}>تغییر</button>
      </div>
      <div className="list-container">
        <CompanyFilters
          lang={props.lang}
          setFilters={setFilters}
          filters={filters}
        />
        <div className="user-list">
            {loading ? (
              env.loader
            ) : (
              <CompanyTable data={data} lang={'fa'} 
              kind={kind} setRefresh={setRefresh}/>
            )}
        </div>
        <Paging
          content={data}
          size={data?data.size:1}
          setFilters={setFilters}
          filters={filters}
          lang={'fa'}/>
      </div>
    </div>
    )
}
export default CompanyHolder