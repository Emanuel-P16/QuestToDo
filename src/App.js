 import { useState } from "react";
import MainQuestForm from "./Components/MainQuestForm";
import MainQuestList from "./Components/MainQuestList"
import SideQuestForm from './Components/SideQuestForm'
import SideQuestList from "./Components/SideQuestList";
function App() {
  // useState Hooks
  const [mainQuestTask,setMainQuestTask] = useState('');
  const [mainQuestList,setMainQuestList] = useState([])
  const [sideQuestTask,setSideQuestTask] = useState('');
  const [sideQuestList,setSideQuestList] = useState([])
  // Input Functions
  const handleSubmit = (e) =>{  
    e.preventDefault()
    if (!mainQuestTask){

    } else {

      const newItem = { id: new Date().getTime().toString(),title: mainQuestTask}
      setMainQuestList( [...mainQuestList,newItem])
      setMainQuestTask('')
    }

  }

  const sideHandleSubmit = (e) =>{
    e.preventDefault()
    if (!sideQuestTask){

    } else{
      const newItem = {id: new Date().getTime().toString(),title: sideQuestTask}
      setSideQuestList([...sideQuestList,newItem])
      setSideQuestTask('')
    }
  }
  return (
   <main>
     <section>
      <MainQuestForm
      mainQuestTask={mainQuestTask} setMainQuestTask={setMainQuestTask}
      mainQuestList={mainQuestList} setMainQuestList={setMainQuestList}
      handleSubmit={handleSubmit}
      />
      <MainQuestList mainQuestList={mainQuestList} />
      <SideQuestForm
        sideQuestTask={sideQuestTask} setSideQuestTask={setSideQuestTask}
        sideQuestList={sideQuestList} setSideQuestList={setSideQuestList}
        sideHandleSubmit={sideHandleSubmit}
      />
      <SideQuestList sideQuestList={sideQuestList} />
     </section>
   </main>
  );
}

export default App;
