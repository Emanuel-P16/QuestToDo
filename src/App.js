import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Lifequest } from './pages/Lifequest';
import { lazy, Suspense, useEffect, useState } from 'react';
import { QuestContext } from './context/QuestContext';
import useFetch from './hooks/useFetch';
// import Navbar from './Components/Navbar/Navbar';

const Lifequest = lazy(() => import('./pages/Lifequest/Lifequest'))
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))


function App() {
  const [url] = useState('https://questtodoapi.herokuapp.com/api/quests')
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const state = useFetch(`https://questtodoapi.herokuapp.com/api/quests`, user)
  const [questList, setQuestList] = useState([])

  useEffect(() => {
    if (state.data) { setQuestList(state.data) } else { setQuestList([]) }
  }, [state.data,setQuestList])
  
  
  const taskCompleted = async (id) => {
    if (id === undefined) return null
    const item = questList.find((item) => item._id === id)

    item.completed = (!item.completed)
    item.type = "C"
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

  return (
    <QuestContext.Provider value={{
      url,
      user,
      setUser,
      state,
      questList,
      setQuestList,
      taskCompleted
    }}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Lifequest />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QuestContext.Provider>
  )
}

export default App;
