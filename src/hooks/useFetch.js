import { useState, useEffect } from "react"


 const useFetch = (url,user) => {
  
  const [state,setState]  = useState({data:null, loading:true,error:null})
   
  useEffect(()=>{
    if (user === null) { return null}
    fetch(url)
    .then(resp => resp.json())
    .then(data=>{
      const userQuest = data.quests.map((x)=>{
       if (x.google_id === user.google_id) {
         return x
       }
      }) 
      console.log(userQuest)
      setState({
        loading: false,
        error:null,
        data
      })
    })
  },[url])
  return state; 
}
export default useFetch


