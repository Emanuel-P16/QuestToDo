

const MainQuestList = ({mainQuestList,mainTaskCompleted,mainTaskEdited,deleteTask}) => {
    return (
        <div>
            <h3>Main Quests!</h3>
            {mainQuestList.map((mainTask)=>{
                if(mainTask.type === "main"){
                return(
                    <article className="quest" key={mainTask.id}>
                    <p className={mainTask.completed ? 'completed' : null}>{mainTask.title}</p>
                        <button type='submit' onClick={() => mainTaskEdited(mainTask.id)}>Edit</button>
                        <button type='submit' onClick={() => mainTaskCompleted(mainTask.id)}>Completed</button>
                    </article>
                )} else {return null}
            })}
        </div>
    )
}

export default MainQuestList