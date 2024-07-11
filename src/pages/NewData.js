import { useState } from "react";
import env from "../env";

function NewData(props) {
  const direction = props.direction
  const [nData,setNData] = useState()
  const [nDataArray,setNDataArray] = useState()
  const [content,setContent] = useState('')
  const convertNow=()=>{
    var finalArray = []
    var parseArray = nData.split("<a data-expand=\"no\"")
    for(var i=1;i<parseArray.length;i++){
      var rowData = parseArray[i]
      var href = splitRegex(rowData,"href=\"","\">")
      var title= splitRegex(rowData,"<h2>","</h2>")
      var malek= splitRegex(rowData,"</label><span>","</span></div>")
      var sabtNo= splitRegex(rowData,"<label>شماره ثبت : </label><span>","</span>")

      var sabtDate= splitRegex(rowData,"<label>تاریخ ثبت اظهارنامه : </label><span>","</span>")
      var ezharNo= splitRegex(rowData,"<label>شماره اظهارنامه : </label><span>","</span>")

      finalArray.push({
        href:href,
        title:title,
        malek:malek,
        sabtNo:sabtNo,
        sabtDate:sabtDate,
        ezharNo:ezharNo
      })
    }
    
    setNDataArray(finalArray)
    
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data:finalArray}),
    };
    console.log(postOptions);
    fetch(env.siteApi + "/add-data", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setTimeout(() => setContent(result), 200);
          setNData('')
        },
        (error) => {
          console.log(error);
        }
      );

  }
  return (
    <div className="user" style={{ direction: direction }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>New Data</p>
          </div>
        </div>
      </div>
      <div className="list-container">
        <textarea value={nData} onChange={(e)=>setNData(e.target.value)}/>
        <input type="button" value="convert" onClick={convertNow} />
      </div>
      <div className="list-footer">
        <div className="">
          <ul>
            {nDataArray&&nDataArray.map((item,i)=>(
              <li key={i}><a href={item.href}>{item.sabtNo}</a>
              
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NewData;

const splitRegex=(value,fString,lString)=>{
  var newValue = value.split(fString)[1]
  newValue = newValue?newValue.split(lString)[0]:''
  return(newValue)
}
