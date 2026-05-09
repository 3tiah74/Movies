import React, { useEffect, useMemo, useState } from 'react'
import '../../styles/AdminDashboard.css';
import AdminLayout from '../../layouts/AdminLayout'
import { getRecentUsers, getRecentMovies, getStats } from '../../api/dashboardApi';
import { Container, Row, Col, Card, Table } from 'react-bootstrap'

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, totalMovies: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [usersResult, moviesResult, statsResult] = await Promise.allSettled([
        getRecentUsers(),
        getRecentMovies(),
        getStats(),
      ]);

      setUsers(usersResult.status === 'fulfilled' && Array.isArray(usersResult.value) ? usersResult.value : []);
      setMovies(moviesResult.status === 'fulfilled' && Array.isArray(moviesResult.value) ? moviesResult.value : []);
      setStats(statsResult.status === 'fulfilled' ? statsResult.value : { totalUsers: 0, totalMovies: 0 });
      setLoading(false);
    };

    loadData();
  }, []);

  const latestUsers = useMemo(() => [...users].sort((a, b) => (b?.userId || 0) - (a?.userId || 0)).slice(0, 5), [users]);
  const latestMovies = useMemo(() => [...movies].sort((a, b) => (b?.movieId || 0) - (a?.movieId || 0)).slice(0, 5), [movies]);

  const formatUserRegistrationDate = (user) => {
    return user?.registrationDate || user?.registration_date || user?.createdAt || 'N/A';
  };



  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }} >
          <Container className='pt-4'>
            <h1 className='text-white mb-4'>Welcome Abdulla</h1>
            <Row>
              <Col lg={6}>
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">{stats.totalMovies}</Card.Title>
                      <Card.Text className="text-secondary">
                        Total Movies
                      </Card.Text>
                    </div>
                    <i className="bi bi-film text-danger"></i>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">{stats.totalUsers}</Card.Title>
                      <Card.Text className="text-secondary">
                        Total Users
                      </Card.Text>
                    </div>
                    <i className="bi bi-person-fill text-danger"></i>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4 pt-3">
              <h2 className='text-white mb-4'>Recent User Registrations</h2>
              <Table responsive >
                <thead>
                  <tr>
                    <th className="text-danger">User Name</th>
                    <th className="text-danger">Email</th>
                    <th className="text-danger">Registration Date</th>
                    <th className="text-danger text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && <tr><td colSpan={4} className='text-center text-secondary'>Loading users...</td></tr>}
                  {!loading && latestUsers.length === 0 && <tr><td colSpan={4} className='text-center text-secondary'>No users found.</td></tr>}
                  {!loading && latestUsers.map((user) => (
                    <tr key={user.userId}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{formatUserRegistrationDate(user)}</td>
                      <td className='text-center'>
                        <i className="bi bi-trash text-danger" title='Delete Account' style={{ cursor: 'pointer' }}></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
            <Row className='pt-3'>
              <h2 className='text-white mb-4'>Latest Movies Added</h2>
              <Table responsive>
                <thead >
                  <tr>
                    <th className="text-danger">Title</th>
                    <th className="text-danger">Added By</th>
                    <th className="text-danger">Addition Date</th>
                    <th className="text-danger text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && <tr><td colSpan={4} className='text-center text-secondary'>Loading movies...</td></tr>}
                  {!loading && latestMovies.length === 0 && <tr><td colSpan={4} className='text-center text-secondary'>No movies found.</td></tr>}
                  {!loading && latestMovies.map((movie) => (
                    <tr key={movie.movieId}>
                      <td>{movie.title}</td>
                      <td>N/A</td>
                      <td>{movie.addedDate ? new Date(movie.addedDate).toLocaleString() : 'N/A'}</td>
                      <td className='text-center'>
                        <i className="bi bi-trash text-danger" title='Delete Content' style={{ cursor: 'pointer' }}></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      </AdminLayout >

    </>
  )
}

export default AdminDashboard