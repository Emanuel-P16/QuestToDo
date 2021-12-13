
import { useState } from "react"
import DailyList from './DailyList'
const DailyQuest = ({dailyQuestList, setDailyQuestList,dailyTaskCompleted}) => {
    // console.log(dailyQuestList)
    const [showInfo,setShowInfo] = useState(true)
    return (
        <section className="mainQuestList">
          <button className="showInfo" onClick={() => setShowInfo(!showInfo)}>
                <h3>Daily Quests {showInfo ? "-" : "+"}</h3>
            </button>
         {showInfo &&
         <DailyList dailyQuestList={dailyQuestList} setDailyQuestList={setDailyQuestList} 
         dailyTaskCompleted={dailyTaskCompleted} />}
       </section>
    )
}

export default DailyQuest