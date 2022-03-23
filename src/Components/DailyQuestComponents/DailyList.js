const DailyList = ({dailyQuestList, dailyTaskCompleted}) => {
   
    return (
        <div>
            
            {dailyQuestList.map((quest,index) => {
                if (quest.type === 'D'){
                 return( 
                    <div tabIndex="3" key={index} className="questbutton">
                     <article  className="quest" >
                         
                         <div>
                             <p className={quest.completed ? 'completed' : null}>{'Work in progress'}</p>
                         </div>
                         <div>
                             <button onClick={() => dailyTaskCompleted(quest.id)}>Completed</button>
                         </div>
                     </article>
                    </div> 
                 )} else { return null}
             })
        }</div>
    )
}

export default DailyList