import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as adminApi from '../../api/adminApi'
import { getStoredUserId } from '../../utils/authSession'

function normalizeList(data) {
  if (Array.isArray(data)) return data
  return data?.content ?? []
}

export default function ManageUsers() {
  const selfId = getStoredUserId()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await adminApi.getAdminUsers()
        if (!cancelled) setUsers(normalizeList(data))
      } catch {
        if (!cancelled) setError('Could not load users.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleDelete(id) {
    if (selfId != null && id === selfId) {
      setError('You cannot delete your own account from here.')
      return
    }
    if (!window.confirm('Delete this user?')) return
    try {
      await adminApi.deleteAdminUser(id)
      setUsers((prev) => prev.filter((u) => (u.id ?? u.userId) !== id))
    } catch {
      setError('Could not delete user.')
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Users</h1>
        <Link to="/admin" className="btn btn--ghost">
          Dashboard
        </Link>
      </div>
      {loading && <p className="muted">Loading…</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const id = u.id ?? u.userId
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{u.username ?? '—'}</td>
                  <td>{u.email ?? '—'}</td>
                  <td>{u.role ?? '—'}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn--danger btn--small"
                      onClick={() => handleDelete(id)}
                      disabled={selfId != null && id === selfId}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
