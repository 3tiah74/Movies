import { Routes, Route } from 'react-router-dom'
import AddUpdateContent from './pages/Admin/AddUpdateContent'
import AdminDashboard from './pages/Admin/AdminDashboard'
import ManageCategories from './pages/Admin/ManageCategories'
import ManageContent from './pages/Admin/ManageContent'
import ManageReviews from './pages/Admin/ManageReviews'
import ManageUsers from './pages/Admin/ManageUsers'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/content" element={<AddUpdateContent />} />
        <Route path="/manageCategories" element={<ManageCategories />} />
        <Route path="/manageContent" element={<ManageContent />} />
        <Route path="/manageReviews" element={<ManageReviews />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
      </Routes>
    </div>
  )
}

export default App
