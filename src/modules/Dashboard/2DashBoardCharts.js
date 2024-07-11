import { useEffect, useState } from "react"
import WeekStatistic from "./charts/WeekStatistic"
import RXChart from "./charts/RXChart"
import env from "../../env"
import StockChart from "./charts/StockChart"
import UserChart from "./charts/UserChart"
function DashboardChart(props){
  const [data,setData] = useState('')
  
    return(
        <div class="row mt-4">
        <div class="col-lg-12 mt-4 mb-3">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow-table border-radius-lg py-3 pe-1">
                <div class="chart">
                <UserChart lang={props.lang} direction={props.direction}
                  label={["فروردین","اردیبهشت","خرداد","تیر","مرداد",
                    "شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"
                  ]}
                  data={data&&data.pWeight}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">آمار اختراعات</h6>
              <p class="text-sm ">اختراعات ثبت شده 5 ساله</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm">مشاهده جزئیات اختراعات </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashboardChart