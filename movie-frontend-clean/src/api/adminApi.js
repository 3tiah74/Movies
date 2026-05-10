import api from './axiosConfig'

export function getAdminUsers() {
  return api.get('/api/admin/users')
}

export function deleteAdminUser(id) {
  return api.delete(`/api/admin/users/${id}`)
}
