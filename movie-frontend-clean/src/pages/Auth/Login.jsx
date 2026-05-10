import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import * as authApi from '../../api/authApi'
import { isAdminRole } from '../../utils/authSession'

function persistUserFromPayload(data) {
  const u = data?.user ?? data
  const id = u?.userId ?? u?.id
  if (id != null) localStorage.setItem('userId', String(id))
  if (u?.username) localStorage.setItem('username', u.username)
  if (u?.email) localStorage.setItem('email', u.email)
  if (u?.role) localStorage.setItem('role', u.role)
}

function hasInlineUser(data) {
  if (!data || typeof data !== 'object') return false
  if (data.user && (data.user.userId != null || data.user.id != null))
    return true
  return data.userId != null || data.id != null
}

function extractToken(data) {
  if (!data || typeof data !== 'object') return null
  return data.token ?? data.accessToken ?? data.jwt ?? null
}

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await authApi.login({ email, password })
      const token = extractToken(data)
      if (!token) {
        setError('No token returned from server.')
        return
      }
      localStorage.setItem('token', token)

      if (hasInlineUser(data)) {
        persistUserFromPayload(data)
      } else {
        const meRes = await authApi.getMe()
        persistUserFromPayload(meRes.data)
      }

      const role = localStorage.getItem('role')
      if (isAdminRole(role)) {
        navigate('/admin', { replace: true })
      } else {
        navigate(from === '/login' ? '/' : from, { replace: true })
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        'Login failed.'
      setError(Array.isArray(msg) ? msg.join(' ') : String(msg))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <h1>Log in</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="form__error">{error}</p>}
        <label className="form__field">
          <span>Email</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form__field">
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <p className="auth-page__footer">
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  )
}
