import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="page">
      <h1>Admin</h1>
      <p className="muted">Manage catalog, reviews, and users.</p>
      <ul className="admin-links">
        <li>
          <Link to="/admin/content">Manage movies</Link>
        </li>
        <li>
          <Link to="/admin/reviews">Manage reviews</Link>
        </li>
        <li>
          <Link to="/admin/users">Manage users</Link>
        </li>
      </ul>
    </div>
  )
}
