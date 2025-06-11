import { useState } from "react"
import StyleSelect from "../../components/Button/AutoComplete"
import StyleInput from "../../components/Button/Input"
import tabletrans from "../../translate/tables"
import { PostReq } from "../../components/PostReq"

function MehvarSubjectItem(props){
    const index = props.index
    const goal = props.goal
    const [tempGoal,setTempGoal] = useState()
    const [tempDate,setTempDate] = useState()
    const editGoal=async()=>{
      var result = await PostReq(
        {method:"POST",url:"/data/update-mehvar-schedule",
            body:{title:tempGoal,mehvarCode:props.mehvarCode,
              id:goal._id,date:tempDate
            }
        })
    }
    return(
      <div className="input-wrapper inRow" >
        <StyleInput defaultValue={goal.title}
          class={"formInput"} 
          action={(e)=>setTempGoal(e)}/>
        <StyleInput defaultValue={goal.date}
          class={"formInput"} 
          action={(e)=>setTempDate(e)}/>
        <div className="plus-btn greenBtn formInput" onClick={editGoal}>
          <i className="fa fa-check"></i>
        </div>
      </div>
            
    )
}
export default MehvarSubjectItem