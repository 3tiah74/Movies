const AUTH_KEYS = ['token', 'userId', 'username', 'email', 'role']

export function clearAuthSession() {
  AUTH_KEYS.forEach((k) => localStorage.removeItem(k))
}

export function isAdminRole(role) {
  if (!role) return false
  const r = String(role).toUpperCase()
  return r === 'ADMIN' || r.includes('ADMIN')
}

export function getStoredUserId() {
  const raw = localStorage.getItem('userId')
  if (raw == null || raw === '') return null
  const n = Number(raw)
  return Number.isFinite(n) ? n : null
}
