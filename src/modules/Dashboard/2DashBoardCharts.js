import { useEffect, useState } from "react"
import WeekStatistic from "./charts/WeekStatistic"
import RXChart from "./charts/RXChart"
import env from "../../env"
import StockChart from "./charts/StockChart"
import UserChart from "./charts/UserChart"
import StyleInput from "../../components/Button/Input"
import StyleDatePicker from "../../components/Button/DatePicker"
function DashboardChart(props){
  const [data,setData] = useState('')
  const [filters,setFilters] = useState()
  useEffect(()=>{
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(filters),
    };
    console.log(postOptions);
    fetch(env.siteApi + "/report/report-main", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result)
        },
        (error) => {
          console.log(error);
        }
      );
  },[filters])
  
    return(
        <div className="row mt-4">
        <div className="col-lg-12 mt-4 mb-3">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-dark shadow-table border-radius-lg py-3 pe-1">
                <div className="chart">
                {data?<UserChart lang={props.lang} direction={props.direction}
                  label={["فروردین","اردیبهشت","خرداد","تیر","مرداد",
                    "شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"
                  ]}
                  data={data.data}/>:<>Waiting</>}
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="filterText">
                <h6 className="mb-0 ">آمار اختراعات</h6>
                <p className="text-sm ">اختراعات ثبت شده</p>
              </div>
              <div className="filters">
                <StyleDatePicker title={"انتخاب تاریخ"}
                  class="filterComponent" 
                  direction={'rtl'}
                  local={"fa"}
                  action={(e) =>
                    setFilters((prevState) => ({
                      ...prevState,
                      date: e,
                    }))
                  }/>
              </div>
              <hr className="dark horizontal"/>
              <div className="d-flex ">
                <i className="fas fa-history"></i>
                <p className="mb-0 text-sm">مشاهده جزئیات اختراعات </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashboardChart