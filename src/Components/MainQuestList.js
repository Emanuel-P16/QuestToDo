import { useState } from "react/cjs/react.development"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamation } from "@fortawesome/free-solid-svg-icons"

const MainQuestList = ({mainQuestList,mainTaskCompleted,mainTaskEdited,deleteTask}) => {
    const [showInfo,setShowInfo] = useState(true)
    return (
        <div>
            <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Main Quests {showInfo ? "-" : "+"}</h3>
            </button>
            {showInfo && mainQuestList.map((mainTask)=>{
                if(mainTask.type === "main"){
                return(
                    
                    <div  tabIndex="1" key={mainTask.id} className="questbutton">
                        <article className="quest">
                            <div className="titleQuests"> 
                                <FontAwesomeIcon className="icon" icon={faExclamation}/>
                                <p className={mainTask.completed ? 'completed' : null}>{mainTask.title}</p> 
                            </div>
                            <div className="buttonQuests">
                            <button type='submit' onClick={() => mainTaskEdited(mainTask.id)}>Edit</button>
                            <button type='submit' onClick={() => mainTaskCompleted(mainTask.id)}>Completed</button>
                            </div>
                        </article>
                    </div>
                )} else {return null}
            })}
        </div>
    )
}

export default MainQuestList