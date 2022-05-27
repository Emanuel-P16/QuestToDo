import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Lifequest } from './pages/Lifequest';
import { lazy, Suspense } from 'react';
// import Navbar from './Components/Navbar/Navbar';

const Lifequest = lazy(() => import('./pages/Lifequest/Lifequest'))
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))

function App() {
  return (
    // useState Hooks
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Lifequest />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
