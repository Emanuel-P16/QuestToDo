import React,{useState,useEffect} from "react";
import MainQuestForm from "./Components/MainQuestForm";
import MainQuestList from "./Components/MainQuestList"
import SideQuestForm from './Components/SideQuestForm'
import SideQuestList from "./Components/SideQuestList";
import DailyQuest from './Components/DailyQuestComponents/DailyQuest'
import DailyData from './dailyQuestsData'

const getLocalStorageMain = () =>{
  let mainQuestList = localStorage.getItem('mainList')
  if (mainQuestList){
    return (mainQuestList = JSON.parse(localStorage.getItem('mainList')))
  } else {
    return []
  }
}
const getLocalStorageSide = () =>{
  let sideQuestList = localStorage.getItem('sideList')
  if (sideQuestList){
    return (sideQuestList = JSON.parse(localStorage.getItem('sideList')))
  } else {
    return []
  }
}
function App() {
  // useState Hooks

  //mainQuest hooks
  const [mainQuestTask,setMainQuestTask] = useState('');
  const [mainQuestList,setMainQuestList] = useState(getLocalStorageMain())//useState([])
  const [isEditingMain,setIsEditingMain] = useState(false)
  const [editIdMain,setEditIdMain] = useState(null)

  // sideQuest Hooks
  const [sideQuestTask,setSideQuestTask] = useState('');
  const [sideQuestList,setSideQuestList] = useState(getLocalStorageSide())
  const [isEditingSide,setIsEditingSide] = useState(false)
  const [editIdSide,setEditIdSide] = useState(null)

  // DailyQuess Hooks

  const [dailyQuestTask,setDailyQuestTask] = useState('')
  const [dailyQuestList,setDailyQuestList] = useState(DailyData)
  
  // generalQuest hooks
  const [questTask,setQuestTask] = useState('');
  const [questList,setQuestList] = useState([])
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
 
  // Input Functions
  const handleSubmit = (e) =>{  
    e.preventDefault()
    if (!mainQuestTask){
    } else if (mainQuestTask && isEditingMain){
      setMainQuestList(
        mainQuestList.map((item)=>{
          if(item.id === editIdMain){
            return {...item,title:mainQuestTask}
          }
          return item;
        })
      )
      setMainQuestTask('')
      setIsEditingMain(false)
      setEditIdMain(null)
    } else {
      const newItem = { id: new Date().getTime().toString(),title: mainQuestTask}
      setMainQuestList( [...mainQuestList,newItem])
      setMainQuestTask('')
    }

  }
  const mainTaskCompleted = (id) => {
     const item = mainQuestList.find((item)  => item.id === id)
     item.completed = (!item.completed)
     setMainQuestList([...mainQuestList])
  }
  const mainTaskEdited = (id) => {
    const taskToEdit = mainQuestList.find((item) => item.id === id)
    setIsEditingMain(true);
    setEditIdMain(id)
    setMainQuestTask(taskToEdit.title)
  }

   useEffect(() => {
     localStorage.setItem('mainList',JSON.stringify(mainQuestList))
   }, [mainQuestList])

  const sideHandleSubmit = (e) =>{
    e.preventDefault()
    if (!sideQuestTask){

    } else if (sideQuestTask && isEditingSide){
      setSideQuestList(
        sideQuestList.map((item)=>{
          if(item.id === editIdSide){
            return {...item,title:sideQuestTask}
          }
          return item
        })
      )
      setSideQuestTask('')
      setIsEditingSide(false)
      setEditIdSide(null)
    } else{
      const newItem = {id: new Date().getTime().toString(),title: sideQuestTask,completed:false}
      setSideQuestList([...sideQuestList,newItem])
      setSideQuestTask('')
    }
  }
  const sideTaskCompleted = (id) => {
    const item = sideQuestList.find((item)  => item.id === id)
    item.completed = (!item.completed)
    setSideQuestList([...sideQuestList])
 }

  const sideTaskEdited = (id) =>{
    const taskToEdit = sideQuestList.find((item)=> item.id === id)
    setIsEditingSide(true)
    setEditIdSide(id)
    setSideQuestTask(taskToEdit.title)
  }
  useEffect(() => {
    localStorage.setItem('sideList',JSON.stringify(sideQuestList))
  }, [sideQuestList])

  const dailyTaskCompleted = (id) => {
    const item = dailyQuestList.find((item)  => item.id === id)
    item.completed = (!item.completed)
    setDailyQuestList([...dailyQuestList])
  }
 // factorizacion de las listas para que sea solo una funcion para todas las listas
  const handleSubmitGeneral = (e) =>{ 
    console.log(e) 
    console.log(e.target.id)
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
      const newItem = { id: new Date().getTime().toString(),title: questTask,type: e.target.id}
      setQuestList( [...questList,newItem])
      setQuestTask('')
    }
  }

  return (
   <main>
     <section>
       <div>
         <form action="" onSubmit={handleSubmitGeneral}>
           <input type="text"
           value={questTask}
           onChange={(e)=> setQuestTask(e.target.value)}
           />
           <button type='submit'>enviar</button>
           <select value={setSelectvalue} name="type_input" id="type_input">
             <option value="main">MainQuest</option>
             <option value="side">SideQuest</option>
             <option value="daily">DailyQuest</option>
           </select>
  
         </form>
       </div>
      {/* <MainQuestForm
        // mainQuestTask={mainQuestTask} setMainQuestTask={setMainQuestTask}
        // mainQuestList={mainQuestList} setMainQuestList={setMainQuestList}
        mainQuestTask={questTask} setMainQuestTask={setQuestTask}
        mainQuestList={questList} setMainQuestList={setQuestList}
        handleSubmit={handleSubmitGeneral}
      /> */}
      <MainQuestList 
       mainQuestList={questList}
       mainTaskCompleted={mainTaskCompleted}
       mainTaskEdited={mainTaskEdited} 
     />
      <SideQuestForm
        // sideQuestTask={sideQuestTask} setSideQuestTask={setSideQuestTask}
        // sideQuestList={sideQuestList} setSideQuestList={setSideQuestList}
        sideQuestTask={questTask} setSideQuestTask={setQuestTask}
        sideQuestList={questList} setSideQuestList={setQuestList}
        sideHandleSubmit={handleSubmitGeneral}
      />
      <SideQuestList sideQuestList={questList} 
        sideTaskCompleted={sideTaskCompleted}
        sideTaskEdited={sideTaskEdited} 
      />
     </section>
       <DailyQuest 
       dailyQuestTask={dailyQuestTask} setDailyQuestTask={setDailyQuestTask}
       dailyQuestList={dailyQuestList} setDailyQuestList={setDailyQuestList}
       dailyTaskCompleted={dailyTaskCompleted}
       />
   </main>
  );
}

export default App;
