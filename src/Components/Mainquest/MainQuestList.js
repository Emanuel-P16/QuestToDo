import { useContext, useState } from 'react'
import { QuestContext } from '../../context/QuestContext'
import Objectives from '../Objectives'
import { LayoutObjectiveQuestStyle, QuestButtonExpandLayout, Questcontainer, QuestLayout } from "./styled-components/mainquest.styled.components"

export const MainQuestList = ({  mainTaskEdited, objective, setObjective, objectiveList, setObjectiveList, handleSubmitObjective, edit, setEdit, showObj,
    setShowObj,
    idShow,
    setIdShow
}) => {
    const [showInfo,setShowInfo] = useState(true)
    const {questList,taskCompleted} = useContext(QuestContext)
    return (
        <QuestLayout>
            <QuestButtonExpandLayout onClick={() => setShowInfo(!showInfo)}>
                <h3>Main Quests {showInfo ? "-" : "+"}</h3>
            </QuestButtonExpandLayout>
            {showInfo && questList.map((mainTask, index) => {
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
                                {showObj &&
                                    <LayoutObjectiveQuestStyle>
                                    <Objectives
                                        objective={objective} setObjective={setObjective}
                                        objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                                        handleSubmitObjective={handleSubmitObjective}
                                        mainTask={mainTask._id}
                                        idShow={idShow} setIdShow={setIdShow}
                                        edit={edit}
                                        setEdit={setEdit}
                                    /></LayoutObjectiveQuestStyle>}
                                <div className="buttonQuests">
                                    <button type='submit' onClick={() => mainTaskEdited(mainTask._id)}>Edit</button>
                                    <button type='submit' onClick={() => taskCompleted(mainTask._id)}>Completed</button>
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