import { useState } from "react/cjs/react.development"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faExclamation } from "@fortawesome/free-solid-svg-icons"
import Objectives from './Objectives'

const MainQuestList = ({mainQuestList,mainTaskCompleted,mainTaskEdited,objective,setObjective,objectiveList,setObjectiveList,handleSubmitObjective,edit,setEdit}) => {
    const [showInfo,setShowInfo] = useState(true)
    const [showObj,setShowObj] = useState(false)
    const [idShow,setIdShow] = useState('')

    return (
        <div>
            <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Main Quests {showInfo ? "-" : "+"}</h3>
            </button>
            {showInfo && mainQuestList.map((mainTask)=>{
                if(mainTask.type === "main"){
                return(
                    
                    <div  tabIndex="1" key={mainTask.id} className="questbutton" onClick={()=> {
                        if (idShow === mainTask.id) {
                            setShowObj(true)
                            setIdShow(mainTask.id)
                        } else {         
                            setIdShow(mainTask.id)
                            setShowObj(true)
                        }
                    }}>
                        <article className="quest">
                            <div className="titleQuests"> 
                                {/* <FontAwesomeIcon className="icon" icon={faExclamation}/> */}
                                <p className={mainTask.completed ? 'completed' : null}>{mainTask.title}</p> 
                            </div>
                            {showObj  &&
                             <Objectives 
                                objective={objective} setObjective={setObjective}
                                objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                                handleSubmitObjective={handleSubmitObjective}
                                mainTask={mainTask.id}
                                idShow={idShow} setIdShow={setIdShow}
                                edit={edit}
                                setEdit={setEdit}
                            />}
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