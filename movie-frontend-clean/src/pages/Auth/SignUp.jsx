import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authApi from '../../api/authApi'

export default function SignUp() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      await authApi.register({ username, email, password })
      navigate('/login', { replace: true })
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        'Registration failed.'
      setError(Array.isArray(msg) ? msg.join(' ') : String(msg))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <h1>Create account</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="form__error">{error}</p>}
        <label className="form__field">
          <span>Username</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label className="form__field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label className="form__field">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </label>
        <label className="form__field">
          <span>Confirm password</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </label>
        <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
          {loading ? 'Creating…' : 'Sign up'}
        </button>
      </form>
      <p className="auth-page__footer">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  )
}
