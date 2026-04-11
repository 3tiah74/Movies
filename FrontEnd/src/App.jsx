import { Routes, Route } from 'react-router-dom'
import AddUpdateContent from './pages/Admin/AddUpdateContent'
import AdminDashboard from './pages/Admin/AdminDashboard'
import ManageCategories from './pages/Admin/ManageCategories'
import ManageContent from './pages/Admin/ManageContent'
import ManageReviews from './pages/Admin/ManageReviews'
import ManageUsers from './pages/Admin/ManageUsers'
import Footer from "./Components/Footer";
import Header_1 from "./Components/Header1";
import Login from "./UserPages/Login";
import SignUp from "./UserPages/SignUp";

function App() {

  return (
    <div>
       <Header_1 />
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/content" element={<AddUpdateContent />} />
        <Route path="/manageCategories" element={<ManageCategories />} />
        <Route path="/manageContent" element={<ManageContent />} />
        <Route path="/manageReviews" element={<ManageReviews />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
    <Footer />
  )
}

export default App
