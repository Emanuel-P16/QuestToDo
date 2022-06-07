import { useContext } from 'react'
import { ObjectiveContext } from '../context/ObjectiveContext'
// import { QuestContext } from '../context/QuestContext'
import FormObjective from './FormObjective'
import ObjectiveList from './ObjectiveList'

const Objectives = ({handleSubmitObjective,mainTask,setEdit,idShow}) => {
    const { objective, setObjective} = useContext(ObjectiveContext)
    if (idShow === mainTask){
        return (
            <div>        
                <FormObjective 
                 objective={objective} setObjective={setObjective}
                 handleSubmitObjective={handleSubmitObjective}
                 mainTask={mainTask}
                 setEdit={setEdit}
                 />
                <ObjectiveList 
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