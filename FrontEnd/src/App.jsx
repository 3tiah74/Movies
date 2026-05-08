import { Routes, Route } from 'react-router-dom'
import AddUpdateContent from './pages/Admin/AddUpdateContent'
import AdminDashboard from './pages/Admin/AdminDashboard'
import ManageCategories from './pages/Admin/ManageCategories'
import ManageContent from './pages/Admin/ManageContent'
import ManageReviews from './pages/Admin/ManageReviews'
import ManageUsers from './pages/Admin/ManageUsers'
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/UserPages/Home";
import Movies from "./pages/UserPages/Movies";
import Footer from "./layouts/LayoutUser/Footer";
import Header_2 from "./layouts/LayoutUser/Header2";
import Favorites from "./pages/UserPages/watchList";
import MovieDetails from "./pages/UserPages/Details";
import Profile from "./pages/UserPages/UserProfile";

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
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/watchList" element={<Favorites />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/user" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App
