import React, { useState, useContext } from "react";
import MainQuestList from "../../Components/Mainquest/MainQuestList"
import SideQuestList from "../../Components/SideQuestList";
// import DailyQuest from '../../Components/DailyQuestComponents/DailyQuest'
// import DailyData from './dailyQuestsData'
import FormTask from "../../Components/FormTask";
import CompletedTasks from "../../Components/CompletedTasks"
import { LayoutMainStyle, LayoutSectionStyle, LayoutGridStyle, LayoutQuestContainer, LayoutObjectiveStandAloneStyle, LayoutObjectiveContainerStyle } from "../../styled-components/layout.styled.component";
import { ObjectID } from 'bson';
import Objectives from "../../Components/Objectives";
import { QuestContext } from "../../context/QuestContext";
import { ObjectiveContext} from "../../context/ObjectiveContext";

const Lifequest = () => {
  const [questTask, setQuestTask] = useState('');
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [edit, setEdit] = useState('')
  const [showObj, setShowObj] = useState(false)
  const [idShow, setIdShow] = useState('')
  const {url,user,questList,setQuestList} = useContext(QuestContext)
  const {objective,setObjective,objectiveList,setObjectiveList} = useContext(ObjectiveContext)



  const TaskEdited = (id) => {
    console.log(id)
    const taskToEdit = questList.find((item) => item._id === id)
    setIsEditing(true);
    setEditId(id)
    setQuestTask(taskToEdit.name)
  }
  // factorizacion de las listas para que sea solo una funcion para todas las listas


  
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
        _id: new ObjectID(),
        name: questTask,
        type: e.target[2].value,
        user_id: '628d186bcaf6514211939bb6',
        google_id: user.google_id, 
        completed: false, 
        objectives: [{
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
          method: 'PUT',headers: {'Accept': 'application/json','Content-type': 'application/json'},
          body: JSON.stringify(item)
        })
          .then(res => res.json())
      } return null
    })
    const newObjective = {id: new Date().getTime().toString(), title: objective, type: objective, idd: edit, completed: false }
    setObjectiveList([...objectiveList, newObjective])
    setObjective('')
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
            mainTaskEdited={TaskEdited}
            handleSubmitObjective={handleSubmitObjective}
            edit={edit}
            setEdit={setEdit}
            showObj={showObj}
            setShowObj={setShowObj}
            idShow={idShow}
            setIdShow={setIdShow}
          />
          <SideQuestList
            sideTaskEdited={TaskEdited}
          />
          {/* <DailyQuest
            dailyQuestList={questList} setDailyQuestList={setQuestList}
            dailyTaskCompleted={taskCompleted}
          /> */}
          <CompletedTasks
            completedTasks={questList}
          />
        </LayoutQuestContainer>
        {showObj  &&
          <LayoutQuestContainer>
            {
              questList.map((mainTask, index) => {
                if (mainTask.type === "M") {
                  console.log(idShow)
                      console.log(mainTask._id)
                      if (idShow !== mainTask._id) return null
                  return (
                    <LayoutObjectiveStandAloneStyle tabIndex="1" key={index} onClick={() => {
                      
                      
                      if (idShow === mainTask._id) {
                        setShowObj(true)
                        setIdShow(mainTask._id)
                      } else {
                        setIdShow(null)
                        setShowObj(false)
                    
                      }
                    }}>
                  
                      <LayoutObjectiveContainerStyle>
                        <div className="titleQuests">
                          <p className={mainTask.completed ? 'completed' : null}>{mainTask.name}</p>
                      </div>
                        {showObj &&
                          <Objectives
                            handleSubmitObjective={handleSubmitObjective}
                            mainTask={mainTask._id}
                            idShow={idShow} setIdShow={setIdShow}
                            edit={edit}
                            setEdit={setEdit}
                          />}
                      </LayoutObjectiveContainerStyle>
                    </LayoutObjectiveStandAloneStyle>
                  )
                } return null
              })}
          </LayoutQuestContainer>}
      </LayoutGridStyle>
    </LayoutMainStyle>
  );
}

export default Lifequest