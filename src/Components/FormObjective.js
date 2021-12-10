

const FormObjective = ({objective,setObjective,objectiveList,setObjectiveList,handleSubmitObjective,mainTask,edit,setEdit}) => {
  
    return (
     
        <div>
            <form className="form objectiveForm" action="" onSubmit={handleSubmitObjective}>
                <input type="text" 
                placeholder="Objective"
                value={objective}
                onChange={(e)=> {setObjective(e.target.value)
                    setEdit(mainTask)}}
                />
                
                <button type="submit">Send Objective</button>
            </form>
        </div>
    )
}
export default FormObjective