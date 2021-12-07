const DailyList = ({dailyQuestList, dailyTaskCompleted}) => {
   
    return (
        <div>
            
            {dailyQuestList.map((quest,index) => {
                if (quest.type === 'daily'){
                 return( 
                     <article  className="quest" key={index}>
                         <p className={quest.completed ? 'completed' : null}>{quest.title}</p>
                         <button onClick={() => dailyTaskCompleted(quest.id)}>Completed</button>
                     </article>
                 )} else { return null}
             })
        }</div>
    )
}

export default DailyList