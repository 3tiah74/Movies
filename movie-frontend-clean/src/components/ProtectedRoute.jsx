import { Navigate, useLocation } from 'react-router-dom'
import { isAdminRole } from '../utils/authSession'

export default function ProtectedRoute({ children, adminOnly }) {
  const token = localStorage.getItem('token')
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (adminOnly) {
    const role = localStorage.getItem('role')
    if (!isAdminRole(role)) {
      return <Navigate to="/" replace />
    }
  }

  return children
}
