import React, { useRef ,useEffect, useState} from 'react';
import StyleInput from '../../components/Button/Input';
import { PostReq } from '../../components/PostReq';
import MehvarScheduleItem from './MehvarScheduleItem';

function MehvarSchedule(props){
    const content = props.content
      const schedule = props.schedule
      const [tempSchedule,setTempSchedule] = useState()
      const [tempTime,setTempTime] = useState()
      const saveSchedule=async()=>{
        var result = await PostReq(
          {method:"POST",url:"/data/update-mehvar-schedule",
              body:{title:tempSchedule, date:tempTime,
                mehvarCode:content.mehvarCode}
          })
      }
        
    return(
      <div className="pd-row">
          <div className="row-title">
            <h4>برنامه زمانی رویداد</h4>
            <p>توضیح برنامه زمانی رویداد</p>
          </div>
          <div className="row-box">
            <div className="probs-wrapper">
              <div className="input-wrapper inRow">
                <StyleInput title="برنامه زمانی رویداد"
                 class={"formInput"} 
                 action={(e)=>setTempTime(e)}/>
                 <StyleInput title="زمان"
                 class={"formInput"} 
                 action={(e)=>setTempSchedule(e)}/>
                <div className="plus-btn formInput" onClick={saveSchedule}>
                  +
                </div>
              </div>
            {schedule&&schedule.map((item,i)=>(
              <MehvarScheduleItem mehvarCode={content.mehvarCode} 
              goal={item} key={i}/>
            ))}
          </div>
          </div>
        </div>
    )
}
export default MehvarSchedule