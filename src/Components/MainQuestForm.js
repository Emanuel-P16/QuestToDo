const MainQuestForm = ({mainQuestTask,setMainQuestTask,mainQuestList,setMainQuestList,handleSubmit}) => {
    return  (
        <form action="" onSubmit={handleSubmit}>
            <h3>MAIN QUESTS</h3>
            <input 
            type="text"
            placeholder='Slay the Dragon!'
            value={mainQuestTask}
            onChange={(e) => setMainQuestTask(e.target.value)} />
            <button type='submit'>SEND</button>
        </form>
    )
}

export default MainQuestForm