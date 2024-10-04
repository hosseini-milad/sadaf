import { useState } from "react"
import CoworkTableRow from "./CoworkTableRow";

function CoworkTable(props){
  const data = props.data
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
  if(!data||!data.length) return <main>waiting</main>
  else  return(
        <table>
        <thead>
        <tr>
          <th className="checkBoxStyle">
               #</th>
            <th>
              <p>نام و نام خانوادگی</p>
              <i></i>
            </th>
            <th>
              <p>اطلاعات کاربر</p>
              <i></i>
            </th>

            <th>
            <p>حوزه فعالیت</p>
              <i></i>
            </th>

            <th>
            <p>پرداخت</p>
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
            <CoworkTableRow detail={detail} showDetail={showDetail} 
              data={data} index={i} key={i} lang={lang}
              setRefresh={props.setRefresh} kind={props.kind}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default CoworkTable