import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddUpdateContent from './pages/Admin/AddUpdateContent'
import ManageContent from './pages/Admin/ManageContent'
import ManageReviews from './pages/Admin/ManageReviews'
import ManageUsers from './pages/Admin/ManageUsers'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Details from './pages/UserPages/Details'
import Home from './pages/UserPages/Home'
import Movies from './pages/UserPages/Movies'
import Reviews from './pages/UserPages/Reviews'
import UserProfile from './pages/UserPages/UserProfile'
import WatchList from './pages/UserPages/watchList'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}

function AdminLayout() {
  return (
    <ProtectedRoute adminOnly>
      <Outlet />
    </ProtectedRoute>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Details />} />
        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <Reviews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <WatchList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="content" element={<ManageContent />} />
          <Route path="content/new" element={<AddUpdateContent />} />
          <Route path="content/edit/:id" element={<AddUpdateContent />} />
          <Route path="reviews" element={<ManageReviews />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>
      </Route>
    </Routes>
  )
}
