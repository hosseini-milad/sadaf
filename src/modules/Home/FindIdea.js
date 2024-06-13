import IdeaTab from "../FindIdea/IdeaTab"
import MainIdea from "../FindIdea/SingleIdea"

function FindIdea(props){
  
  return(
    <div className="ideaPart">
      <IdeaTab />
      <MainIdea />
    </div>
   )
}
export default FindIdea