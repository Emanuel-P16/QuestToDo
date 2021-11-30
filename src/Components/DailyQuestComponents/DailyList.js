const DailyList = ({dailyQuestList, dailyTaskCompleted}) => {
   
    return (
        <div>
            
            {dailyQuestList.map((quest,index) => {
                 return( 
                     <article key={index}>
                         <p className={quest.completed ? 'completed' : null}>{quest.title}</p>
                         <button onClick={() => dailyTaskCompleted(quest.id)}>Completed</button>
                     </article>
                 )
             })
        }</div>
    )
}

export default DailyList