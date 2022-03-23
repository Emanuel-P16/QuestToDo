import { useState } from "react"

const CompletedTasks = ({completedTasks,setCompletedTasks}) => {
    const [showInfo,setShowInfo] = useState(false)
    return ( 
      <div className="mainQuestList">
         <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Completed Quests {showInfo ? "-" : "+"}</h3>
            
            </button>
          {showInfo && completedTasks.map((task,index) => {
            if (task.type === "C"){ 
               return(
                  <article key={index}>
                    <p className="completed">{task.name}</p>
                  </article> )
            }})
            
        }
      </div>
       
    )
}
export default CompletedTasks