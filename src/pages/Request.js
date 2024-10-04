import Cookies from "universal-cookie";
import Paging from "../modules/Components/Paging";
import errortrans from "../translate/error";
import { useEffect } from "react";
import { useState } from "react";
import env from "../env";
import {
  getFiltersFromUrl,
  updateUrlWithFilters,
  defaultFilterValues,
} from "../utils/filterUtils"; 
import ReqFilters from "../modules/Request/ReqComponent/ReqFilters";
import ReqTable from "../modules/Request/ReqTable";
const cookies = new Cookies();

function Requests(props) {
  const direction = props.lang ? props.lang.dir : errortrans.defaultDir;
  const lang = props.lang ? props.lang.lang : errortrans.defaultLang;
  const [content, setContent] = useState("");
  const [filters, setFilters] = useState();
  
  const token = cookies.get(env.cookieName);
  
  useEffect(() => {
    const body = {
      offset: filters&&filters.offset,
      pageSize: filters&&filters.pageSize,
      title: filters&&filters.title,
      search:filters&&filters.search,
      dateFrom: filters&&filters.date && filters.date.dateFrom,
      dateTo: filters&&filters.date && filters.date.dateTo,
      access: "manager",
    };
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token && token.token,
        userId: token && token.userId,
      },
      body: JSON.stringify(body),
    };
    //console.log(postOptions);
    fetch(env.siteApi + "/data/req-list", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setContent("");
          setTimeout(() => setContent(result), 200);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [filters]);
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
  return (
    <div className="user" style={{ direction: direction }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>تقاضای فناوری</p>
          </div>
        </div>
        
      </div>
      <div className="list-container">
        <ReqFilters
          lang={props.lang}
          setFilters={setFilters}
          options={content.brand}
          filters={filters}
        />
          <div className="user-list">
            <ReqTable data={content ? content.data : {}} lang={lang} />
          </div>
        <Paging
          content={content}
          size={content?content.size:1}
          setFilters={setFilters}
          filters={filters}
          updateUrlWithFilters={()=>{}}
          lang={props.lang}/>
      </div>
    </div>
  );
}
export default Requests;
