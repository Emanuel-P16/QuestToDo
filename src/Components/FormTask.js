const FormTask = ({handleSubmit,questTask,setQuestTask}) => {
    return ( 
      <div className="formContainer">
        <form className="form" action="" onSubmit={handleSubmit}>
           <input type="text"
           value={questTask}
           onChange={(e)=> setQuestTask(e.target.value)}
           />
           <button type="submit">Send</button>
           <select  name="type_input" id="type_input">
             <option value="M">MainQuest</option>
             <option value="S">SideQuest</option>
           </select>
  
         </form>
      </div>
    )
}

export default FormTask