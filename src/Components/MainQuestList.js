import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faExclamation } from "@fortawesome/free-solid-svg-icons"
import Objectives from './Objectives'

const MainQuestList = ({mainQuestList,setQuestList,mainTaskCompleted,mainTaskEdited,objective,setObjective,objectiveList,setObjectiveList,handleSubmitObjective,edit,setEdit}) => {
    const [showInfo,setShowInfo] = useState(true)
    const [showObj,setShowObj] = useState(false)
    const [idShow,setIdShow] = useState('')
    // console.log('this is new branch')
    return (
        <div className="mainQuestList">
            <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Main Quests {showInfo ? "-" : "+"}</h3>
            </button>
            {showInfo && mainQuestList.map((mainTask,index)=>{
                if(mainTask.type === "M"){
                    
                return(
                    
                    <div  tabIndex="1" key={index} className="questbutton" onClick={()=> {
                        if (idShow === mainTask.google_id) {
                            setShowObj(true)
                            setIdShow(mainTask.google_id)
                        } else {         
                            setIdShow(mainTask.google_id)
                            setShowObj(true)
                        }
                    }}>
                        <article className="quest">
                            <div className="titleQuests"> 
                                {/* <FontAwesomeIcon className="icon" icon={faExclamation}/> */}
                                <p className={mainTask.completed ? 'completed' : null}>{mainTask.name}</p> 
                            </div>
                            {showObj  &&
                             <Objectives 
                                objective={objective} setObjective={setObjective}
                                objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                                handleSubmitObjective={handleSubmitObjective}
                                mainTask={mainTask._id}
                                idShow={idShow} setIdShow={setIdShow}
                                mainQuestList={mainQuestList}
                                setQuestList={setQuestList}
                                edit={edit}
                                setEdit={setEdit}
                            />}
                            <div className="buttonQuests">
                            <button type='submit' onClick={() => mainTaskEdited(mainTask._id)}>Edit</button>
                            <button type='submit' onClick={() => mainTaskCompleted(mainTask.google_id)}>Completed</button>
                            </div>
                        </article>
                    </div>
                )} else {return null}
            })}
        </div>
    )
}

export default MainQuestList