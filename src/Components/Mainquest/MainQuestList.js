import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faExclamation } from "@fortawesome/free-solid-svg-icons"
import Objectives from '../Objectives'
import { QuestButtonExpandLayout, Questcontainer, QuestLayout } from "./styled-components/mainquest.styled.components"

export const MainQuestList = ({ mainQuestList, setQuestList, mainTaskCompleted, mainTaskEdited, objective, setObjective, objectiveList, setObjectiveList, handleSubmitObjective, edit, setEdit, showInfo, setShowInfo, showObj,
    setShowObj,
    idShow,
    setIdShow,
    Mobile
}) => {
    // </QuestLayout>
    // console.log('this is new branch')
    return (
        <QuestLayout>
            <QuestButtonExpandLayout  onClick={() => setShowInfo(!showInfo)}>
                <h3>Main Quests {showInfo ? "-" : "+"}</h3>
            </QuestButtonExpandLayout>
            {showInfo && mainQuestList.map((mainTask, index) => {
                if (mainTask.type === "M") {
                    return (
                        <Questcontainer tabIndex="1" key={index} onClick={() => {
                            if (idShow === mainTask._id) {
                                setShowObj(true)
                                setIdShow(mainTask._id)
                            } else {
                                setIdShow(mainTask._id)
                                setShowObj(true)
                            }
                        }}>
                            <article className="quest">
                                <div className="titleQuests">
                                    {/* <FontAwesomeIcon className="icon" icon={faExclamation}/> */}
                                    <p className={mainTask.completed ? 'completed' : null}>{mainTask.name}</p>
                                </div>
                                {showObj && Mobile &&
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
                                    <button type='submit' onClick={() => mainTaskCompleted(mainTask._id)}>Completed</button>
                                </div>
                            </article>
                        </Questcontainer>
                    )
                } else { return null }
            })}
        </QuestLayout>
    )
}

export default MainQuestList