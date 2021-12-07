const CompletedTasks = ({completedTasks,setCompletedTasks}) => {
    return ( 
      <div>
          <h3>Completed Tasks</h3>
          {console.log(completedTasks)}
          {completedTasks.map((task,index) => {
               return( <article key={index}>
                    <p>{task.title}</p>
                </article> )
            })
        }
      </div>
       
    )
}
export default CompletedTasks