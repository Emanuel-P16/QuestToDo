import { useContext } from "react"
import { ObjectiveContext } from "../context/ObjectiveContext"
import { GlobalButtonStyle } from "../styled-components/layout.styled.component"


const FormObjective = ({handleSubmitObjective,mainTask,setEdit}) => {
    const { objective, setObjective} = useContext(ObjectiveContext)

    return (
     
        <div>
            <form className="form objectiveForm" action="" onSubmit={handleSubmitObjective}>
                <input type="text" 
                placeholder="Objective"
                value={objective}
                onChange={(e)=> {setObjective(e.target.value)
                    setEdit(mainTask)}}
                />
                
                <GlobalButtonStyle type="submit">Send Objective</GlobalButtonStyle>
            </form>
        </div>
    )
}
export default FormObjective