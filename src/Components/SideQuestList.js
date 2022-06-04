import { useContext, useState } from "react"
import { QuestContext } from "../context/QuestContext"
const SideQuestList = ({  sideTaskEdited}) => {
    const [showInfo,setShowInfo] = useState(true)
    const {questList,taskCompleted} = useContext(QuestContext)

    return (
        <div className="mainQuestList">
            <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Side Quests {showInfo ? "-" : "+"}</h3>
            </button>
           {showInfo && questList.map((sideQuestTask) => {
               if (sideQuestTask.type === 'S') {

               
               return(
                    <div tabIndex="2" key={sideQuestTask._id} className="questbutton">
                        <article className="quest" >
                            <div>
                             <p className={sideQuestTask.completed ? 'completed' : null}>{sideQuestTask.name}</p>
                            </div>
                            <div>
                             <button type='submit' onClick={() => sideTaskEdited(sideQuestTask._id)}>Edit</button>
                             <button type='submit' onClick={() => taskCompleted(sideQuestTask._id)}>Completed</button>
                            </div>
                        </article>
                    </div>
               )} else {return null}
           })}
        </div>
    )
}

export default SideQuestList    