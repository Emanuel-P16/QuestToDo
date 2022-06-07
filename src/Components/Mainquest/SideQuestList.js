import { useContext, useState } from "react"
import { QuestContext } from "../../context/QuestContext"
import { GlobalButtonStyle } from "../../styled-components/layout.styled.component"
import { ButtonQuests, Questarticle, QuestButtonExpandLayout, Questcontainer, QuestLayout } from "./styled-components/mainquest.styled.components"
const SideQuestList = ({ sideTaskEdited }) => {
    const [showInfo, setShowInfo] = useState(true)
    const { questList, taskCompleted } = useContext(QuestContext)

    return (
        <QuestLayout>
            <QuestButtonExpandLayout  onClick={() => setShowInfo(!showInfo)}>
                <h3>Side Quests {showInfo ? "-" : "+"}</h3>
            </QuestButtonExpandLayout>
            {showInfo && questList.map((sideQuestTask) => {
                if (sideQuestTask.type === 'S') {
                    return (
                        <Questcontainer tabIndex="2" key={sideQuestTask._id}>
                            <Questarticle  >
                                    <p className={sideQuestTask.completed ? 'completed' : null}>{sideQuestTask.name}</p>
                                <ButtonQuests>
                                    <GlobalButtonStyle type='submit' onClick={() => sideTaskEdited(sideQuestTask._id)}>Edit</GlobalButtonStyle>
                                    <GlobalButtonStyle type='submit' onClick={() => taskCompleted(sideQuestTask._id)}>Completed</GlobalButtonStyle>
                                </ButtonQuests>
                            </Questarticle>
                        </Questcontainer>
                    )
                } else { return null }
            })}
        </QuestLayout>
    )
}

export default SideQuestList    