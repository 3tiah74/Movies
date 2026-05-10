import api from './axiosConfig'

export function register(payload) {
  return api.post('/api/auth/register', payload)
}

export function login(payload) {
  return api.post('/api/auth/login', payload)
}

export function getMe() {
  return api.get('/api/auth/me')
}
