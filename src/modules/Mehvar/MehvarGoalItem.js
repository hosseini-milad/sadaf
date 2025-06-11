import { useState } from "react"
import StyleSelect from "../../components/Button/AutoComplete"
import StyleInput from "../../components/Button/Input"
import tabletrans from "../../translate/tables"
import { PostReq } from "../../components/PostReq"

function MehvarGoalItem(props){
    const index = props.index
    const goal = props.goal
    const [tempGoal,setTempGoal] = useState()
    const editGoal=async()=>{
      var result = await PostReq(
        {method:"POST",url:"/data/update-mehvar-goal",
            body:{title:tempGoal,mehvarCode:props.mehvarCode,
              id:goal._id
            }
        })
    }
    return(
      <div className="input-wrapper" >
        <StyleInput defaultValue={goal.title}
          class={"formInput"} 
          action={(e)=>setTempGoal(e)}/>
        <div className="edit-btn formInput" onClick={editGoal}>
          ذخیره
        </div>
      </div>
            
    )
}
export default MehvarGoalItem