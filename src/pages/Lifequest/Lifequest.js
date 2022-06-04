import React, { useState, useEffect, useContext } from "react";
import MainQuestList from "../../Components/Mainquest/MainQuestList"
import SideQuestList from "../../Components/SideQuestList";
import DailyQuest from '../../Components/DailyQuestComponents/DailyQuest'
// import DailyData from './dailyQuestsData'
import FormTask from "../../Components/FormTask";
import CompletedTasks from "../../Components/CompletedTasks"
import { LayoutMainStyle, LayoutSectionStyle, LayoutGridStyle, LayoutQuestContainer, LayoutObjectiveStandAloneStyle, LayoutObjectiveContainerStyle } from "../../styled-components/layout.styled.component";
// import {GoogleLogin} from 'react-google-login'
// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode'
// import {useNavigate} from 'react-router-dom'
// import { LoginButton } from "../../Components/Login/Login";
// import Profile from "../../Components/Login/Profile";
// import { LogoutButton } from "../../Components/Login/LogOut";
// import { useAuth0 } from "@auth0/auth0-react";
// import Pomodoro from "../../Components/Pomodoro/Pomodoro";
import useFetch from "../../hooks/useFetch";
// const getLocalStorageCompleted = () => {
import { ObjectID } from 'bson';
import Objectives from "../../Components/Objectives";
import { QuestContext } from "../../context/QuestContext";
//   let completedList = localStorage.getItem('CompletedList')
//   if (completedList) {
//     return (completedList = JSON.parse(localStorage.getItem('CompletedList')))
//   } else {
//     return []
//   }
// }
const getLocalStorageObjective = () => {
  let objectiveList = localStorage.getItem('ObjectiveList')
  if (objectiveList) {
    return (objectiveList = JSON.parse(localStorage.getItem('ObjectiveList')))
  } else {
    return []
  }
}

const Lifequest = () => {
  const [url, setUrl] = useState('https://questtodoapi.herokuapp.com/api/quests')
  const [questTask, setQuestTask] = useState('');
  const [questList, setQuestList] = useState([])//getLocalStorage())
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  // const state = useFetch(`${url}`, user)//getLocalStorage())

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  // Objective hooks
  const [objective, setObjective] = useState('')
  const [objectiveList, setObjectiveList] = useState('')//useState(getLocalStorageObjective())
  const [edit, setEdit] = useState('')
  // useAuth0
  // const {isAuthenticated} = useAuth0()
  // const isAuthenticated = true
  // const navigate = useNavigate()
  //// mainquest useSTATES
  const [showInfo, setShowInfo] = useState(true)
  const [showObj, setShowObj] = useState(false)
  const [idShow, setIdShow] = useState('')
  const [Mobile, setMobiles] = useState(false)
  const {state} = useContext(QuestContext)
  // console.log(questcontext)

  useEffect(() => {
    // getDatabaseList()
    if (state.data) { setQuestList(state.data) } else { setQuestList([]) }
    isMobile()
  }, [state.data])

  useEffect(() => {
    setUser(user)

  }, [user])


  const TaskEdited = (id) => {
    console.log(id)
    const taskToEdit = questList.find((item) => item._id === id)
    setIsEditing(true);
    setEditId(id)
    setQuestTask(taskToEdit.name)
  }
  // factorizacion de las listas para que sea solo una funcion para todas las listas

  const taskCompleted = async (id) => {
    if (id === undefined) return null
    const item = questList.find((item) => item._id === id)

    item.completed = (!item.completed)
    item.type = "C"
    // const timeout = setTimeout(() => {
    //   fetch(`${url}/${item._id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(item)
    //   })
    //     .then(res => res.json())
    // }, 3000);
    // return () => clearTimeout(timeout)
    await fetch(`${url}/${item._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
  }
  const handleSubmit = async (e) => {

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
        _id: new ObjectID(), name: questTask, type: e.target[2].value, user_id: '628d186bcaf6514211939bb6', google_id: user.google_id, completed: false, objectives: [{
          "name": "",
          "completed": false
        }]
      }

      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newItem)

      })
        .then(res => res.json())
      setQuestList([...questList, newItem])
      setQuestTask('')
      console.log(questList)

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
      } return null
    })
    const newObjective = { id: new Date().getTime().toString(), title: objective, type: objective, idd: edit, completed: false }
    setObjectiveList([...objectiveList, newObjective])
    setObjective('')
  }

  const isMobile = () => {

    var isMobiles = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobiles) {
      setMobiles(false)
      return true
    }
    setMobiles(false)
    return false
  }
  return (
    <LayoutMainStyle>
      <LayoutSectionStyle>
        <FormTask
          handleSubmit={handleSubmit}
          questTask={questTask}
          setQuestTask={setQuestTask}
        />
        {/* <div className="level">
          </div> */}
      </LayoutSectionStyle>
      <LayoutGridStyle>
        <LayoutQuestContainer>
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
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            showObj={showObj}
            setShowObj={setShowObj}
            idShow={idShow}
            setIdShow={setIdShow}
            Mobile={Mobile}
          />
          {/* const [showInfo, setShowInfo] = useState(true)
  const [showObj, setShowObj] = useState(false)
  const [idShow, setIdShow] = useState('') */}

          <SideQuestList sideQuestList={questList}
            sideTaskCompleted={taskCompleted}
            sideTaskEdited={TaskEdited}
          />
          {/* <DailyQuest
            dailyQuestList={questList} setDailyQuestList={setQuestList}
            dailyTaskCompleted={taskCompleted}
          /> */}
          <CompletedTasks
            completedTasks={questList}
          //  setCompletedTasks={}
          />
        </LayoutQuestContainer>
        {showObj && !Mobile &&
          <LayoutQuestContainer>
            {showObj && !Mobile &&
              questList.map((mainTask, index) => {
                if (mainTask.type === "M") {
                  return (
                    <LayoutObjectiveStandAloneStyle tabIndex="1" key={index} className="questbutton" onClick={() => {
                      if (idShow === mainTask._id) {
                        setShowObj(true)
                        setIdShow(mainTask._id)
                      } else {
                        setIdShow(mainTask._id)
                        setShowObj(true)
                      }
                    }}>
                      <LayoutObjectiveContainerStyle className="quest">
                        {/* <div className="titleQuests">
                          <p className={mainTask.completed ? 'completed' : null}>{mainTask.name}</p>
                      </div> */}
                        {showObj &&
                          <Objectives
                            objective={objective} setObjective={setObjective}
                            objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                            handleSubmitObjective={handleSubmitObjective}
                            // no se usan mas , para borrar luego 
                            mainTask={mainTask._id}
                            idShow={idShow} setIdShow={setIdShow}
                            mainQuestList={questList}
                            setQuestList={setQuestList}
                            edit={edit}
                            setEdit={setEdit}
                          />}

                      </LayoutObjectiveContainerStyle>
                    </LayoutObjectiveStandAloneStyle>
                  )
                } return null
              })}
            {/* // <Objectives
                                    //     objective={objective} setObjective={setObjective}
                                    //     objectiveList={objectiveList} setObjectiveList={setObjectiveList}
                                    //     handleSubmitObjective={handleSubmitObjective}
                                    //     mainTask={mainTask._id}
                                    //     idShow={idShow} setIdShow={setIdShow}
                                    //     mainQuestList={questList}
                                    //     setQuestList={setQuestList}
                                    //     edit={edit}
                                    //     setEdit={setEdit}
                                    // />} */}
          </LayoutQuestContainer>}
      </LayoutGridStyle>
    </LayoutMainStyle>
  );
}

export default Lifequest