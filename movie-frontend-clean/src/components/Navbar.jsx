import { Link, NavLink, useNavigate } from 'react-router-dom'
import { clearAuthSession, isAdminRole } from '../utils/authSession'

export default function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const admin = isAdminRole(role)

  function handleLogout() {
    clearAuthSession()
    navigate('/login')
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        FilmLog
      </Link>
      <nav className="navbar__links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        {token && (
          <>
            <NavLink to="/reviews">My reviews</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </>
        )}
        {token && admin && <NavLink to="/admin">Admin</NavLink>}
      </nav>
      <div className="navbar__auth">
        {!token ? (
          <>
            <Link to="/login" className="btn btn--ghost">
              Log in
            </Link>
            <Link to="/signup" className="btn btn--primary">
              Sign up
            </Link>
          </>
        ) : (
          <button type="button" className="btn btn--ghost" onClick={handleLogout}>
            Log out
          </button>
        )}
      </div>
    </header>
  )
}
