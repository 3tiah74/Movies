import axios from 'axios'
import { clearAuthSession } from '../utils/authSession'

// In dev, use same-origin `/api` so Vite proxies to the gateway (avoids browser CORS).
// In production builds, call the gateway host directly (configure CORS or serve behind same host).
const api = axios.create({
  baseURL: import.meta.env.DEV ? '' : 'http://localhost:8090',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      clearAuthSession()
      const path = window.location.pathname
      if (!path.startsWith('/login') && !path.startsWith('/signup')) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(err)
  }
)

export default api
