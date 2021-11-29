

const MainQuestList = ({mainQuestList,taskCompleted}) => {
    
    return (
        <div>
            {mainQuestList.map((mainTask)=>{
                return(
                    <article key={mainTask.id}>
                    <p className={mainTask.completed ? 'completed' : null}>{mainTask.title}</p>
                        <button type='submit'>Edit</button>
                        <button type='submit' onClick={taskCompleted(mainTask.id)}>Completed</button>
                    </article>
                )
            })}
        </div>
    )
}

export default MainQuestList