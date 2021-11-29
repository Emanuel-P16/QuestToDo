const SideQuestList = ({sideQuestList, sideTaskCompleted, sideTaskEdited}) => {
    return (
        <div>
           {sideQuestList.map((sideQuestTask) => {
               return(
                   <article key={sideQuestTask.id}>
                       <p className={sideQuestTask.completed ? 'completed' : null}>{sideQuestTask.title}</p>
                        <button type='submit' onClick={() => sideTaskEdited(sideQuestTask.id)}>Edit</button>
                        <button type='submit' onClick={() => sideTaskCompleted(sideQuestTask.id)}>Completed</button>
                   </article>
               )
           })}
        </div>
    )
}

export default SideQuestList