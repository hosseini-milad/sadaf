import { useState } from "react"
import CompanyTableRow from "./CompanyTableRow";

function CompanyTable(props){
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
              <p>عنوان</p>
              <i></i>
            </th>
            <th>
              <p>مدیر عامل</p>
              <i></i>
            </th>
            <th>
              <p>بنر</p>
              <i></i>
            </th>

            <th>
            <p>انتشار</p>
              <i></i>
            </th>
            
            <th>
            <p>ویرایش</p>
              <i></i>
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?data.map((data,i)=>(
            <CompanyTableRow detail={detail} showDetail={showDetail} 
              data={data} index={i} key={i} lang={lang}
              setRefresh={props.setRefresh} kind={props.kind}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default CompanyTable