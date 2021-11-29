import React,{useState,useEffect} from "react";
import MainQuestForm from "./Components/MainQuestForm";
import MainQuestList from "./Components/MainQuestList"
import SideQuestForm from './Components/SideQuestForm'
import SideQuestList from "./Components/SideQuestList";

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

  return (
   <main>
     <section>
      <MainQuestForm
        mainQuestTask={mainQuestTask} setMainQuestTask={setMainQuestTask}
        mainQuestList={mainQuestList} setMainQuestList={setMainQuestList}
        handleSubmit={handleSubmit}
      />
      <MainQuestList 
      mainQuestList={mainQuestList}
      mainTaskCompleted={mainTaskCompleted}
      mainTaskEdited={mainTaskEdited} 
     />
      <SideQuestForm
        sideQuestTask={sideQuestTask} setSideQuestTask={setSideQuestTask}
        sideQuestList={sideQuestList} setSideQuestList={setSideQuestList}
        sideHandleSubmit={sideHandleSubmit}
      />
      <SideQuestList sideQuestList={sideQuestList} 
        sideTaskCompleted={sideTaskCompleted}
        sideTaskEdited={sideTaskEdited} 
      />
     </section>
   </main>
  );
}

export default App;
