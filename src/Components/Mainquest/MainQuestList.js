import { useContext, useState } from 'react'
import { QuestContext } from '../../context/QuestContext'
import { GlobalButtonStyle } from '../../styled-components/layout.styled.component'
import Objectives from '../Objectives'
import { LayoutObjectiveQuestStyle, QuestButtonExpandLayout, Questcontainer, QuestLayout,Questarticle,ButtonQuests } from "./styled-components/mainquest.styled.components"

export const MainQuestList = ({  
    mainTaskEdited, 
    handleSubmitObjective,  
    setEdit, 
    showObj,
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
                            <Questarticle>                         
                                    {/* <FontAwesomeIcon className="icon" icon={faExclamation}/> */}
                                    <p className={mainTask.completed ? 'completed' : null}>{mainTask.name}</p>
                                {showObj &&
                                    <LayoutObjectiveQuestStyle>
                                    <Objectives
                                        handleSubmitObjective={handleSubmitObjective}
                                        mainTask={mainTask._id}
                                        idShow={idShow}
                                        setEdit={setEdit}
                                    />
                                    </LayoutObjectiveQuestStyle>}
                                <ButtonQuests>
                                    <GlobalButtonStyle type='submit' onClick={() => mainTaskEdited(mainTask._id)}>Edit</GlobalButtonStyle>
                                    <GlobalButtonStyle type='submit' onClick={() => taskCompleted(mainTask._id)}>Completed</GlobalButtonStyle>
                                </ButtonQuests>
                            </Questarticle>
                        </Questcontainer>
                    )
                } else { return null }
            })}
        </QuestLayout>
    )
}

export default MainQuestList