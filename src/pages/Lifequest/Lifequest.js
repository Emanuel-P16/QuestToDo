import React, { useState, useEffect } from "react";
import MainQuestList from "../../Components/MainQuestList"
import SideQuestList from "../../Components/SideQuestList";
import DailyQuest from '../../Components/DailyQuestComponents/DailyQuest'
// import DailyData from './dailyQuestsData'
import FormTask from "../../Components/FormTask";
import CompletedTasks from "../../Components/CompletedTasks"
import { LoginButton } from "../../Components/Login/Login";
import Profile from "../../Components/Login/Profile";
import { LogoutButton } from "../../Components/Login/LogOut";
// import { useAuth0 } from "@auth0/auth0-react";
import Pomodoro from "../../Components/Pomodoro/Pomodoro";
import useFetch from "../../hooks/useFetch";
const getLocalStorageCompleted = () => {
  let completedList = localStorage.getItem('CompletedList')
  if (completedList) {
    return (completedList = JSON.parse(localStorage.getItem('CompletedList')))
  } else {
    return []
  }
}
const getLocalStorageObjective = () => {
  let objectiveList = localStorage.getItem('ObjectiveList')
  if (objectiveList) {
    return (objectiveList = JSON.parse(localStorage.getItem('ObjectiveList')))
  } else {
    return []
  }
}

const Lifequest = () => {
  const [questTask, setQuestTask] = useState('');
  const [questList, setQuestList] = useState([])//getLocalStorage())
  const state = useFetch(`https://questtodoapi.herokuapp.com/api/quests`)//getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  // Objective hooks
  const [objective, setObjective] = useState('')
  const [objectiveList, setObjectiveList] = useState(getLocalStorageObjective())
  const [edit, setEdit] = useState('')
  // useAuth0
  // const {isAuthenticated} = useAuth0()
  const [url, setUrl] = useState('https://questtodoapi.herokuapp.com/api/quests')
  const isAuthenticated = true
  useEffect(() => {
    // getDatabaseList()

    if (state.data) setQuestList(state.data.quests)
  }, [state.data])

  const TaskEdited = (id) => {
    const taskToEdit = questList.find((item) => item._id === id)
    setIsEditing(true);
    setEditId(id)
    setQuestTask(taskToEdit.name)
  }
  // factorizacion de las listas para que sea solo una funcion para todas las listas

  const taskCompleted = (id) => {
    const item = questList.find((item) => item._id === id)
    item.completed = (!item.completed)
    item.type = "C"

    setQuestList([...questList])
    const timeout = setTimeout(() => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(item)
      })
        .then(res => res.json())
    }, 3000);
    return () => clearTimeout(timeout)
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    if (!questTask) {
    } else if (questTask && isEditing) {
      setQuestList(
        questList.map((item) => {
          if (item._id === editId) {
            item.name = questTask
            fetch(url, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(item)

            })
              .then(res => res.json())
            return { ...item, name: questTask }
          }
          return item;
        })
      )
      setQuestTask('')
      setIsEditing(false)
      setEditId(null)
    } else {
      const newItem = { _id: new Date().getTime().toString(), name: questTask, type: e.target[2].value, completed: false, user_id: 'test1' }
      setQuestList([...questList, newItem])
      setQuestTask('')
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newItem)

      })
        .then(res => res.json())
    }
  }

  const handleSubmitObjective = (e) => {
    e.preventDefault()
    const newObjective = { id: new Date().getTime().toString(), title: objective, type: objective, idd: edit, completed: false }
    setObjectiveList([...objectiveList, newObjective])
    setObjective('')
  }
  console.log(questList)
  return (
    <main>
      <div>
        {/* <Profile />
          <LogoutButton/>  */}
        <section className="header">
          <FormTask
            handleSubmit={handleSubmit}
            questTask={questTask}
            setQuestTask={setQuestTask}
          />
          <div className="level">
          </div>
        </section>
        <div className="grid">
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
              completedTasks={questList}
            //  setCompletedTasks={}
            />
          </section>
          {/* <section>
                <Pomodoro />
              </section> */}
        </div>
      </div>
      {/* <Profile />
          <LogoutButton/> */}
    </main>
  );
}

export default Lifequest