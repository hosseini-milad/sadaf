import { useEffect, useState } from "react"
import env from "../../env"
import dashtrans from "../../translate/dashboard"

function DashBoardDaily(props){
  const [data,setData] = useState('')
  
  console.log(data)
    return(<>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="fas fa-lightbulb-o"></i>
                    </div>
                    <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                        <p className="text-sm mb-0 text-capitalize">اختراعات حقوقی</p>
                        <h4 className="mb-0">3400</h4>
                    </div>
                    </div>
                    <hr className="dark horizontal my-0"/>
                    <div className="card-footer p-3">
                    <p className="mb-0">اختراعات سال پیش: 
                      <span className="text-success text-sm font-weight-bolder">
                      9200  
                      </span></p>
                    </div>
                </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">تعداد مخترعین</p>
                <h4 className="mb-0">134</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">سال قبل تا امروز: 
              <span className="text-success text-sm font-weight-bolder">
              121</span></p>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-lightbulb-o"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">اختراعات حقیقی</p>
                <h4 className="mb-0">1200</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">اختراعات سال پیش: 
              <span className="text-success text-sm font-weight-bolder">
              43 </span></p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-user"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">تعداد مخترعین حقیقی</p>
                <h4 className="mb-0 creditHolder">243
                </h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0">سال قبل تا امروز:
              <span className="text-success text-sm font-weight-bolder">
              123 </span></p>
            </div>
          </div>
        </div>
      </div>
      
      </>
    )
}
export default DashBoardDaily