import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Lifequest } from './pages/Lifequest';
import { lazy, Suspense, useState } from 'react';
import { QuestContext } from './context/QuestContext';
import useFetch from './hooks/useFetch';
// import Navbar from './Components/Navbar/Navbar';

const Lifequest = lazy(() => import('./pages/Lifequest/Lifequest'))
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))


function App() {
  // const user = {
  //   id: 1234,
  //   name: 'emanuel',
  //   email: 'palazon.emanuel@gmail.com'
  // }
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const state = useFetch(`https://questtodoapi.herokuapp.com/api/quests`, user)//getLocalStorage())

  return (
    <QuestContext.Provider value={{
      user,
      setUser,
      state
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
