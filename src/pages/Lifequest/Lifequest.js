import React, { useState, useEffect } from "react";
import MainQuestList from "../../Components/MainQuestList"
import SideQuestList from "../../Components/SideQuestList";
import DailyQuest from '../../Components/DailyQuestComponents/DailyQuest'
// import DailyData from './dailyQuestsData'
import FormTask from "../../Components/FormTask";
import CompletedTasks from "../../Components/CompletedTasks"
// import {GoogleLogin} from 'react-google-login'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
// import { LoginButton } from "../../Components/Login/Login";
// import Profile from "../../Components/Login/Profile";
// import { LogoutButton } from "../../Components/Login/LogOut";
// import { useAuth0 } from "@auth0/auth0-react";
// import Pomodoro from "../../Components/Pomodoro/Pomodoro";
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
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const state = useFetch(`https://questtodoapi.herokuapp.com/api/quests`,user)//getLocalStorage())
  
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
  const navigate = useNavigate()

  
  useEffect(() => {
    // getDatabaseList()

    if (state.data) {setQuestList(state.data)} else { setQuestList([])}
    console.log(state.data)
    console.log(questList)
  }, [state.data])

  useEffect(()=>{
    setUser(user)
  },[user])

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
      fetch(`${url}/${item._id}`, {
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
            fetch(`${url}/${item._id}`, {
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
      const newItem = {
        name: questTask, type: e.target[2].value, user_id: '628d186bcaf6514211939bb6' , google_id: user.google_id, completed: false, objectives: [{
          "name": "",
          "completed": false
        }]
      }
      setQuestList([...questList, newItem])
      setQuestTask('')
      console.log(newItem)
      fetch(url, {
        method: 'POST',
        mode: 'cors',
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

    questList.map((item) => {
      if (item._id === edit) {

        item.objectives = [...item.objectives, {
          "name": objective,
          "completed": false
        }]
        fetch(`${url}/${item._id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify(item)

        })
          .then(res => res.json())
        // setQuestList(questList)
      }
    })
    const newObjective = { id: new Date().getTime().toString(), title: objective, type: objective, idd: edit, completed: false }
    setObjectiveList([...objectiveList, newObjective])
    setObjective('')
  }

  const googleSuccess = async (res) => {
    // console.log(res)
    const result = jwt_decode(res.credential)
    // console.log(result)
    const profile = {email: result.email, picture: result.picture,google_id: result.sub,user_id: ''}
    localStorage.setItem('profile',JSON.stringify(profile))
    setUser(profile.email)
    window.location.reload();
    // console.log(user)
  }

  const googleFailure = (error) => {
    console.log('Algo salio mal')
    console.log(error)
  }
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  // console.log(user)
  return (
    <main>
      <div>
        <GoogleLogin
          onSuccess={googleSuccess}
          onError={googleFailure}
        />;
        <button onClick={logout}>
          Logout
        </button>
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
              setQuestList={setQuestList}
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
          <div>

          </div>
    </main>
  );
}

export default Lifequest