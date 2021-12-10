import React,{useState,useEffect} from "react";
import MainQuestList from "./Components/MainQuestList"
import SideQuestList from "./Components/SideQuestList";
import DailyQuest from './Components/DailyQuestComponents/DailyQuest'
import DailyData from './dailyQuestsData'
import FormTask from "./Components/FormTask";
import CompletedTasks from "./Components/CompletedTasks";

/// fontawesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faExclamation } from "@fortawesome/free-solid-svg-icons";

// library.add(fab,faExclamation)
const getLocalStorage = () =>{
  let  questList = localStorage.getItem('List')
  if (questList){
    return (questList = JSON.parse(localStorage.getItem('List')))
  } else {
    return DailyData
  }
}
const getLocalStorageCompleted = () =>{
  let completedList = localStorage.getItem('CompletedList')
  if (completedList) {
    return ( completedList =  JSON.parse(localStorage.getItem('CompletedList')))
  } else {
    return []
  }
}
const getLocalStorageObjective = () => {
  let objectiveList = localStorage.getItem('ObjectiveList')
  if (objectiveList){
    return ( objectiveList = JSON.parse(localStorage.getItem('ObjectiveList')))
  } else{
    return []
  }
}
function App() {
  // useState Hooks
 
  const [questTask,setQuestTask] = useState('');
  const [questList,setQuestList] = useState(getLocalStorage())
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
  const [completedTasks,setCompletedTasks] = useState(getLocalStorageCompleted())
 
// Objective hooks
const [objective,setObjective] = useState('')
const [objectiveList,setObjectiveList] = useState(getLocalStorageObjective())
const [edit,setEdit] = useState('')
  
  
  const TaskEdited = (id) => {
    const taskToEdit = questList.find((item) => item.id === id)
    setIsEditing(true);
    setEditId(id)
    setQuestTask(taskToEdit.title)
  }

   useEffect(() => {
     localStorage.setItem('List',JSON.stringify(questList))
     localStorage.setItem('CompletedList',JSON.stringify(completedTasks))
     localStorage.setItem('ObjectiveList',JSON.stringify(objectiveList))
   }, [questList,completedTasks,objectiveList])



 // factorizacion de las listas para que sea solo una funcion para todas las listas

  const taskCompleted = (id) => {
    const item = questList.find((item)=> item.id === id) 
    item.completed = (!item.completed)
    setQuestList([...questList])
    const timeout = setTimeout(() => {
      setCompletedTasks([...completedTasks, questList.find((item) => item.id === id)])
      setQuestList(questList.filter((item) => item.id !== id))
    }, 3000);
    return () => clearTimeout(timeout)
  }
  const handleSubmit = (e) =>{
  
    e.preventDefault()
    if (!questTask){
    } else if (questTask && isEditing){
      setQuestList(
        questList.map((item)=>{
          if(item.id === editId){
            return {...item,title:questTask}
          }
          return item;
        })
      )
      setQuestTask('')
      setIsEditing(false)
      setEditId(null)
    } else {
      const newItem = { id: new Date().getTime().toString(),title: questTask,type: e.target[2].value, completed: false}
      setQuestList( [...questList,newItem])
      setQuestTask('')
    }
  }

  
  const handleSubmitObjective = (e) => {
    e.preventDefault()
    const newObjective = { id: new Date().getTime().toString(), title: objective, type:objective,idd:edit,completed: false}
    setObjectiveList( [...objectiveList,newObjective] )
    setObjective('')
    
}

  return (
   <main>
      <section className="header"> 
        <FormTask 
        handleSubmit={handleSubmit}
        questTask={questTask}
        setQuestTask={setQuestTask}
       />
      <div className="level">
        {/* <h3>Level 30</h3> */}
      </div>
       </section>
     <section className="questContainer">
      <MainQuestList 
       mainQuestList={questList}
       mainTaskCompleted={taskCompleted}
       mainTaskEdited={TaskEdited} 
       objective={objective} setObjective={setObjective}
       objectiveList={objectiveList} setObjectiveList={setObjectiveList}
       handleSubmitObjective={handleSubmitObjective}
       edit={edit}
       setEdit={setEdit}
     />
      <SideQuestList sideQuestList={questList} 
        sideTaskCompleted={taskCompleted}
        sideTaskEdited={TaskEdited} 
      />
    
       <DailyQuest 
       dailyQuestList={questList} setDailyQuestList={setQuestList}
       dailyTaskCompleted={taskCompleted}
       />
       <CompletedTasks 
       completedTasks={completedTasks}
       setCompletedTasks={setCompletedTasks}
       />
     </section>
   </main>
  );
}

export default App;
