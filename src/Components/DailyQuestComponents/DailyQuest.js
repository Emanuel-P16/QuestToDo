
import DailyList from './DailyList'
const DailyQuest = ({dailyQuestList, setDailyQuestList,dailyTaskCompleted}) => {
    // console.log(dailyQuestList)
    return (
        <section>
         <h3>Daily Quests</h3>
         <DailyList dailyQuestList={dailyQuestList} setDailyQuestList={setDailyQuestList} 
         dailyTaskCompleted={dailyTaskCompleted} />
       </section>
    )
}

export default DailyQuest