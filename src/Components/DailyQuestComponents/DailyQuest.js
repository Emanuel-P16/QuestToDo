import DailyForm from './DailyForm'
import DailyList from './DailyList'
const DailyQuest = ({dailyQuestTask,setDailyQuestTask, dailyQuestList, setDailyQuestList,dailyTaskCompleted}) => {
    console.log(dailyQuestList)
    return (
        <section>
         <DailyForm dailyQuestTask={dailyQuestTask} setDailyQuestTask={setDailyQuestTask}/>
         <DailyList dailyQuestList={dailyQuestList} setDailyQuestList={setDailyQuestList} 
         dailyTaskCompleted={dailyTaskCompleted} />
       </section>
    )
}

export default DailyQuest