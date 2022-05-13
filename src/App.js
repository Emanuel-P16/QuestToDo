import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Lifequest } from './pages/Lifequest';
import { lazy, Suspense } from 'react';

const Lifequest = lazy(() => import('./pages/Lifequest/Lifequest'))

function App() {
  return (
    // useState Hooks
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lifequest />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
