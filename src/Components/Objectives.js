import FormObjective from './FormObjective'
import ObjectiveList from './ObjectiveList'

const Objectives = ({objective,setObjective,objectiveList,setObjectiveList,handleSubmitObjective,mainTask,edit,setEdit,idShow,setIdShow}) => {
    
    if (idShow === mainTask){
        return (
        
            <div>
                       
                <FormObjective 
                 objective={objective} setObjective={setObjective}
                 objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                 handleSubmitObjective={handleSubmitObjective}
                 mainTask={mainTask}
                 edit={edit}
                 setEdit={setEdit}
                 />
                
    
                <ObjectiveList 
                objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                mainTask={mainTask} 
                />
            </div>
        )
    } else {
        return(
            null
        )
    }
}

export default Objectives