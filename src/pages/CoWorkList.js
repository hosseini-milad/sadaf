import { useEffect, useState } from "react"
import { PostReq } from "../components/PostReq"
import Paging from "../modules/Components/Paging"
import env from "../env"
import CoworkFilters from "../modules/CoWork/Modules/CoworkFilters"
import CoworkTable from "../modules/CoWork/CoworkTable"

function CoWorkList(props){
    const [data,setData] = useState()
    const [loading,setLoading] = useState()
    const [kind,setKind] = useState(0)
    
    useEffect(()=>{initial()},[])
    const initial=async()=>{
        var result = await PostReq(
        {method:"GET",url:
          "/reserve/all-reserve"
        })
        setData(result.data)
    }
    return(
        <div className="user" style={{ direction: "rtl" }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>لیست صندلی اشتراکی </p>
          </div>
        </div>
      </div>
      <div className="list-container">
        <div className="user-list">
            {loading ? (
              env.loader
            ) : (
              <CoworkTable data={data} lang={'fa'} list={1}/>
            )}
        </div>
      </div>
    </div>
    )
}
export default CoWorkList