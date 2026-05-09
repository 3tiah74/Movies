import { Routes, Route } from 'react-router-dom'
import AddUpdateContent from './pages/Admin/AddUpdateContent'
import AdminDashboard from './pages/Admin/AdminDashboard'

import ManageReviews from './pages/Admin/ManageReviews'
import ManageMovies from './pages/Admin/ManageMovies'
import ManageUsers from './pages/Admin/ManageUsers'
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/UserPages/Home";
import Movies from "./pages/UserPages/Movies";
import Category from "./pages/UserPages/Category";
import Favorites from "./pages/UserPages/watchList";
import MovieDetails from "./pages/UserPages/Details";
import Profile from "./pages/UserPages/UserProfile";
import Search from "./pages/UserPages/Search";
import UserLayout from './layouts/UserLayout';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/content" element={<AddUpdateContent />} />
        <Route path="/manageMovies" element={<ManageMovies />} />

        <Route path="/manageReviews" element={<ManageReviews />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/watchList" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/user" element={<Profile/>} />
          <Route path="/search" element={<Search />} />
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App

