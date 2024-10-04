import { useEffect, useState } from "react"
import { PostReq } from "../components/PostReq"
import Paging from "../modules/Components/Paging"
import env from "../env"
import ClientTable from "../modules/Clients/ClientTable"
import ClientFilters from "../modules/Clients/Modules/ClientFilters"

function ClientHolder(props){
    const [data,setData] = useState()
    const [filters,setFilters] = useState()
    const [refresh,setRefresh] = useState()
    const [loading,setLoading] = useState()
    const [kind,setKind] = useState(0)
    
    useEffect(()=>{initial()},[kind,refresh])
    const initial=async()=>{
        var result = await PostReq(
        {method:"POST",url:"/user/list-client",
            body:{}
        })
        setData(result.data)
    }
    return(
        <div className="user" style={{ direction: "rtl" }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>لیست کاربران</p>
          </div>
        </div>
      </div>
      <div className="list-container">
        <ClientFilters
          lang={props.lang}
          setFilters={setFilters}
          filters={filters}
        />
        <div className="user-list">
            {loading ? (
              env.loader
            ) : (
              <ClientTable data={data} lang={'fa'} 
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
export default ClientHolder