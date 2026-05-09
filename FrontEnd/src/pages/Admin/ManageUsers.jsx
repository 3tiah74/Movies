import React, { useEffect, useMemo, useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import { getUsers, deleteUser } from '../../api/usersApi'

const ManageUsers = () => {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [statusByUserId, setStatusByUserId] = useState({})

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true)
        const data = await getUsers()
        const normalized = Array.isArray(data) ? data : []
        setUsers(normalized)
        setStatusByUserId(
          normalized.reduce((acc, user) => {
            acc[user.userId] = user.status || 'Active'
            return acc
          }, {})
        )
      } catch {
        setUsers([])
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter((user) =>
      String(user?.username || '').toLowerCase().includes(q) ||
      String(user?.email || '').toLowerCase().includes(q)
    )
  }, [users, query])

  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
      setUsers((prev) => prev.filter((user) => user.userId !== id))
    } catch {
      // no-op
    }
  }

  const handleToggleStatus = (id) => {
    setStatusByUserId((prev) => ({
      ...prev,
      [id]: prev[id] === 'Active' ? 'Inactive' : 'Active',
    }))
  }

  const formatUserRegistrationDate = (user) => {
    return user?.registrationDate || user?.registration_date || user?.createdAt || 'N/A';
  }



  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4'>
            <Row className='align-items-center'>
              <Col lg={6} md={6} xs={6} className=''>
                <h1 className='text-white mb-4'>Manage Users</h1>
              </Col>
              <Col lg={3} md={6} xs={6} className='ms-auto mb-4'>
                <Form className='d-flex'>
                  <div className='w-100 position-relative'>
                    <Form.Control
                      placeholder='Search Users...'
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className='rounded-pill pe-5'
                    />
                    <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-secondary fs-5"></i>
                  </div>
                </Form>
              </Col>
            </Row>
            <Row className='mt-4'>
              <Table responsive className='align-middle border-0 text-white' style={{ borderCollapse: 'separate', borderSpacing: '0 15px', minWidth: '800px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2c3034' }} className='text-light'>
                    <th className='border-0 rounded-start'>Name</th>
                    <th className='border-0'>Email</th>
                    <th className='border-0'>Registration Date</th>
                    <th className='border-0 text-center'>Status</th>
                    <th className='border-0 rounded-end text-center'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr style={{ backgroundColor: '#2c3034' }}>
                      <td className='border-0 text-center' colSpan={5}>Loading users...</td>
                    </tr>
                  )}
                  {!loading && filteredUsers.length === 0 && (
                    <tr style={{ backgroundColor: '#2c3034' }}>
                      <td className='border-0 text-center' colSpan={5}>No users found.</td>
                    </tr>
                  )}
                  {!loading && filteredUsers.map((user) => (
                    // Backend has no status update endpoint yet, so toggle is local UI state.
                    <tr style={{ backgroundColor: '#2c3034' }} key={user.userId}>
                      <td className='border-0 rounded-start'>{user.username}</td>
                      <td className='border-0'>{user.email}</td>
                      <td className='border-0'>{formatUserRegistrationDate(user)}</td>
                      <td className='text-center border-0'>
                        <span className={`badge rounded-pill px-3 py-2 fs-6 ${statusByUserId[user.userId] === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                          {statusByUserId[user.userId] || 'Active'}
                        </span>
                      </td>
                      <td className='text-center rounded-end border-0'>
                        <i
                          className={`bi ${statusByUserId[user.userId] === 'Active' ? 'bi-person-slash text-warning' : 'bi-person-check text-success'} me-3`}
                          style={{ cursor: 'pointer' }}
                          title={statusByUserId[user.userId] === 'Active' ? 'Deactivate Account' : 'Activate Account'}
                          onClick={() => handleToggleStatus(user.userId)}
                        ></i>
                        <i
                          className="bi bi-trash text-danger"
                          style={{ cursor: 'pointer' }}
                          title="Delete Account"
                          onClick={() => handleDelete(user.userId)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  )
}

export default ManageUsers