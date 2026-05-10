import { Link } from 'react-router-dom'

export default function UserProfile() {
  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')
  const role = localStorage.getItem('role')
  const userId = localStorage.getItem('userId')

  if (!token) {
    return (
      <div className="page">
        <h1>Profile</h1>
        <p className="muted">
          <Link to="/login">Log in</Link> to view your profile.
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Profile</h1>
      <dl className="profile-dl">
        <dt>User ID</dt>
        <dd>{userId ?? '—'}</dd>
        <dt>Username</dt>
        <dd>{username ?? '—'}</dd>
        <dt>Email</dt>
        <dd>{email ?? '—'}</dd>
        <dt>Role</dt>
        <dd>{role ?? '—'}</dd>
      </dl>
      <p className="muted small">
        Profile editing is not available in this app version.
      </p>
    </div>
  )
}
