// import './App.css'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/Admin/AdminDashboard'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
