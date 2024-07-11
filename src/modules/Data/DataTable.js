import { useState } from "react"
import DataTableRow from "./DataTableRow"

function DataTable(props){
  const data = props.data
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
  if(!data||!data.length) return <main>waiting</main>
  else  return(
        <table>
        <thead>
        <tr>
          <th className="checkBoxStyle">
               ___</th>
            <th>
              <p>عنوان</p>
              <i></i>
            </th>
            <th>
              <p>مخترع</p>
              <i></i>
            </th>
            <th>
              <p>تاریخ</p>
              <i></i>
            </th>

            <th>
            <p>اعتبار</p>
              <i></i>
            </th>
            <th>
            <p>وضعیت</p>
              <i></i>
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?data.map((data,i)=>(
            <DataTableRow detail={detail} showDetail={showDetail} 
              cart={props.cart}
              data={data} index={i} key={i} lang={lang}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default DataTable