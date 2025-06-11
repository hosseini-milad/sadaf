import { useState } from "react"
import StyleSelect from "../../components/Button/AutoComplete"
import StyleInput from "../../components/Button/Input"
import tabletrans from "../../translate/tables"
import { PostReq } from "../../components/PostReq"
import MehvarGoalItem from "./MehvarGoalItem"

function MehvarGoal(props){
    const content = props.content
    const goal = props.goal
    const [tempGoal,setTempGoal] = useState()
    const saveGoal=async()=>{
      var result = await PostReq(
        {method:"POST",url:"/data/update-mehvar-goal",
            body:{title:tempGoal,mehvarCode:content.mehvarCode}
        })
    }
    
    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>اهداف رویداد</h4>
            <p>توضیح اهداف رویداد</p>
          </div>
          <div className="row-box">
            <div className="probs-wrapper">
              <div className="input-wrapper">
                <StyleInput title="اهداف رویداد"
                 class={"formInput"} 
                 action={(e)=>setTempGoal(e)}/>
                <div className="save-btn formInput" onClick={saveGoal}>
                  افزودن
                </div>
              </div>
            {goal&&goal.map((item,i)=>(
              <MehvarGoalItem mehvarCode={content.mehvarCode} 
              goal={item} key={i}/>
            ))}
          </div>
          </div>
        </div>
    )
}
export default MehvarGoal