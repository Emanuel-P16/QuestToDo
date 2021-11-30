

const MainQuestList = ({mainQuestList,mainTaskCompleted,mainTaskEdited}) => {
    
    return (
        <div>
            {mainQuestList.map((mainTask)=>{
                return(
                    <article key={mainTask.id}>
                    <p className={mainTask.completed ? 'completed' : null}>{mainTask.title}</p>
                        <button type='submit' onClick={() => mainTaskEdited(mainTask.id)}>Edit</button>
                        <button type='submit' onClick={() => mainTaskCompleted(mainTask.id)}>Completed</button>
                    </article>
                )
            })}
        </div>
    )
}

export default MainQuestList