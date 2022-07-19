import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Note from './components/note'

function App() {
  return (
    <div className='flex flex-col items-center h-screen bg-slate-200 dark:bg-slate-800 text-gray-600 dark:text-gray-400'>
      <div className='flex flex-col space-y-4'>
        <h1 className='uppercase font-bold pt-4'>Welcome to notes</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Note />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
