import { useState } from "react"
const SideQuestList = ({sideQuestList, sideTaskCompleted, sideTaskEdited}) => {
    const [showInfo,setShowInfo] = useState(true)
    return (
        <div>
            <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Side Quests {showInfo ? "-" : "+"}</h3>
            </button>
           {showInfo && sideQuestList.map((sideQuestTask) => {
               if (sideQuestTask.type === 'side') {

               
               return(
                    <div tabIndex="2" key={sideQuestTask.id} className="questbutton">
                        <article className="quest" >
                            <div>
                             <p className={sideQuestTask.completed ? 'completed' : null}>{sideQuestTask.title}</p>
                            </div>
                            <div>
                             <button type='submit' onClick={() => sideTaskEdited(sideQuestTask.id)}>Edit</button>
                             <button type='submit' onClick={() => sideTaskCompleted(sideQuestTask.id)}>Completed</button>
                            </div>
                        </article>
                    </div>
               )} else {return null}
           })}
        </div>
    )
}

export default SideQuestList