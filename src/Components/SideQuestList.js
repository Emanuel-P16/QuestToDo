const SideQuestList = ({sideQuestList, sideTaskCompleted, sideTaskEdited}) => {
    return (
        <div>
            <h3>Side Quests</h3> 
           {sideQuestList.map((sideQuestTask) => {
               if (sideQuestTask.type === 'side') {

               
               return(
                   <article className="quest" key={sideQuestTask.id}>
                       <p className={sideQuestTask.completed ? 'completed' : null}>{sideQuestTask.title}</p>
                        <button type='submit' onClick={() => sideTaskEdited(sideQuestTask.id)}>Edit</button>
                        <button type='submit' onClick={() => sideTaskCompleted(sideQuestTask.id)}>Completed</button>
                   </article>
               )} else {return null}
           })}
        </div>
    )
}

export default SideQuestList