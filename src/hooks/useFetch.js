import { useState, useEffect } from "react"


const useFetch = (url, user) => {

  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    if (user === null) { return state }
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let userQuest = data.quests.map((x) => {
        
          if (x.google_id === user.google_id) {
            return x
          } 
          // else return { name: '', type:'', user_id: '' , google_id: '', completed: true, objectives: [{
          //   "name": "",
          //   "completed": true
          // }]}
          
        })

        if(userQuest){
              userQuest = userQuest.filter(quest => quest !== undefined)
          // if(userQuest === null ) {
            
          //    userQuest = [{ name: '', type:'', user_id: '' , google_id: '', completed: true, objectives: [{
          //     "name": "",
          //     "completed": true
          //   }]}]
          // }
        
          setState({
            loading: false,
            error: null,
            data: userQuest
          })
        } else {
          setState({
            loading: false,
            error: null,
            data: null
          })
        }
       
      })
  }, [url])
  return state;
}
export default useFetch


