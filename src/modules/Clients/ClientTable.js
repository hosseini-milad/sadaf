import { useState } from "react"
import ClientTableRow from "./ClientTableRow";

function ClientTable(props){
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
              <p>اطلاعات کاربر</p>
              <i></i>
            </th>
            <th>
              <p>زمینه کاری</p>
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
            <ClientTableRow detail={detail} showDetail={showDetail} 
              data={data} index={i} key={i} lang={lang}
              setRefresh={props.setRefresh} kind={props.kind}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default ClientTable