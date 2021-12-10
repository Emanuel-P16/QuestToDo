

const ObjectiveList = ({objectiveList,setObjectiveList,mainTask}) => {
    const completedObj = (id) => {
            const item = objectiveList.find((item)=> item.id === id) 
            item.completed = (!item.completed)
            setObjectiveList([...objectiveList])
    } 
    return (
        <div>
            {objectiveList.map((obj,index)=>{
                if(mainTask === obj.idd){
                return(
                    <div className='objective' key={index}>
                        <h4 onClick={() => completedObj(obj.id)} className={obj.completed ? 'completed' : null}>{obj.title}</h4>
                        </div>
                    
                )} else {return null}
            })}
        </div>
    )
}

export default ObjectiveList