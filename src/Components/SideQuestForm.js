

const SideQuestForm = ({sideQuestTask,setSideQuestTask,sideQuestList,setSideQuestList,sideHandleSubmit}) => {
    return (
        <form action="" onSubmit={sideHandleSubmit}>
        <h3>SIDE QUESTS</h3>
        <input 
        type="text"
        placeholder='Play Some Gwent!'
        value={sideQuestTask}
        onChange={(e) => setSideQuestTask(e.target.value)} />
        <button type='submit'>SEND</button>
    </form>
    )
}

export default SideQuestForm 