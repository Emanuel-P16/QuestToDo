import { useState } from "react"
import { Questarticle, QuestButtonExpandLayout, QuestLayout } from "./styled-components/mainquest.styled.components"

const CompletedList = ({completedTasks}) => {
    const [showInfo,setShowInfo] = useState(false)
    return ( 
      <QuestLayout>
         <QuestButtonExpandLayout className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Completed Quests {showInfo ? "-" : "+"}</h3>
            
            </QuestButtonExpandLayout>
          {showInfo && completedTasks.map((task,index) => {
            if (task.type === "C"){ 
               return(
                  <Questarticle key={index}>
                    <p className="completed">{task.name}</p>
                  </Questarticle> )
            }
            return null
          })
            
        }
      </QuestLayout>
       
    )
}
export default CompletedList