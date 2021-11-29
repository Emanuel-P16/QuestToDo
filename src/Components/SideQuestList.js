const SideQuestList = ({sideQuestList}) => {
    return (
        <div>
           {sideQuestList.map((sideQuestTask) => {
               return(
                   <article>{sideQuestTask.title}</article>
               )
           })}
        </div>
    )
}

export default SideQuestList