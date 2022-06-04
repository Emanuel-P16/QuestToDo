import { useContext } from "react"
import { QuestContext } from "../context/QuestContext"


const ObjectiveList = ({mainTask}) => {
    const completedObj = (x,obj) => {
        obj.completed = (!obj.completed)
        fetch(`https://questtodoapi.herokuapp.com/api/quests/${x._id}`,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(x)
        })
        .then(res=> res.json())
        
        questList.map((object)=>{
            if(object._id === x._id){
                setQuestList([...questList])
                    
            }return null
        })
      
    } 
    const {questList,setQuestList} = useContext(QuestContext)
        return (
            questList.map((x)=>{
                if(mainTask === x._id){
                    return (x.objectives.map((obj,index) =>{
                        return(
                            <div className='objective' key={index}>
                                <h4 onClick={() => completedObj(x,obj)} className={obj.completed ? 'completed' : null}>{obj.name}</h4>
                            </div>
                        )
                    }))
                }
             return null
            })
        )

    
}

export default ObjectiveList

