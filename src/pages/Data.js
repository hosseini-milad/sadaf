import Cookies from "universal-cookie";
import Paging from "../modules/Components/Paging";
import errortrans from "../translate/error";
import { useEffect } from "react";
import { useState } from "react";
import env from "../env";
import DataTable from "../modules/Data/DataTable";
import DataFilters from "../modules/Data/DataComponent/DataFilters";
import {
  getFiltersFromUrl,
  updateUrlWithFilters,
  defaultFilterValues,
  handleFilterChange,
} from "../utils/filterUtils"; 
const cookies = new Cookies();

function Data(props) {
  const direction = props.lang ? props.lang.dir : errortrans.defaultDir;
  const lang = props.lang ? props.lang.lang : errortrans.defaultLang;
  const [content, setContent] = useState("");
  const [filters, setFilters] = useState(getFiltersFromUrl());
  const [loading, setLoading] = useState(0);
  const [tab, setTab] = useState(0);
  const token = cookies.get(env.cookieName);

  function handleFilterChange(newFilters) {
    setFilters(newFilters);
    updateUrlWithFilters(newFilters);
  }
  const fetchNow=async()=>{
    console.log(content&&content.data)
    for(var i=0;i<content.data.length;i++){
      if(i>1)return
      const url = content.data[i].url
      const postOptions = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*",
        },
      };
      const sourceCode = await fetch("https://ipm.ssaa.ir/"+url,
        postOptions
      )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  useEffect(() => {
    setLoading(1);
    const body = {
      offset: filters.offset ? filters.offset : "0",
      pageSize: filters.pageSize ? filters.pageSize : "10",
      inventor: filters.customer,
      title: filters.title&&filters.title.replace( /ی/g, 'ي').replace(/ک/g,'ك'),
      malek: filters.malek,
      search:filters.search,
      fill:filters.fill,
      ezharname: filters.ezharname,
      dateFrom: filters.date && filters.date.dateFrom,
      dateTo: filters.date && filters.date.dateTo,
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
    console.log(postOptions);
    fetch(env.siteApi + "/data-list", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(0);
          setContent("");
          setTimeout(() => setContent(result), 200);
        },
        (error) => {
          setLoading(0);
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
            <p>{errortrans.data[lang]}</p>
          </div>
        </div>
        
      </div>
      <div className="list-container">
        <DataFilters
          lang={props.lang}
          setFilters={handleFilterChange}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
          options={content.brand}
          filters={filters}
        />
        {tab === 0 ? (
          <div className="user-list">
            {loading ? (
              env.loader
            ) : (
              <DataTable data={content ? content.data : {}} lang={lang} />
            )}
          </div>
        ) : (
          <div className="user-list">
            {loading ? (
              env.loader
            ) : (
              <DataTable
                orders={content ? content.cartList : {}}
                lang={lang}
                cart="1"
              />
            )}
          </div>
        )}
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
export default Data;
