
const MainQuestList = ({mainQuestList}) => {
    return (
        <div>
            {mainQuestList.map((mainTask)=>{
                return(
                    <article>
                        {mainTask.title}
                    </article>
                )
            })}
        </div>
    )
}

export default MainQuestList