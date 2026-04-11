import React from 'react'
import '../../styles/AdminDashboard.css';
import AdminLayout from '../../layouts/AdminLayout'
import { Container, Row, Col, Card, Table, Form,Button } from 'react-bootstrap'

const AdminDashboard = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }} >
          <Container className='pt-4'>
            <h1 className='text-white mb-4'>Welcome Abdulla</h1>
            <Row>
              <Col lg={4}>
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">500</Card.Title>
                      <Card.Text className="text-secondary">
                        Total Content
                      </Card.Text>
                    </div>
                    <i className="bi bi-film text-danger"></i>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">500</Card.Title>
                      <Card.Text className="text-secondary">
                        Total Users
                      </Card.Text>
                    </div>
                    <i className="bi bi-person-fill text-danger"></i>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">500</Card.Title>
                      <Card.Text className="text-secondary">
                        Total Categories
                      </Card.Text>
                    </div>
                    <i className="bi bi-grid-fill text-danger"></i>
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
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Account' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Account' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Account' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Account' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row className='pt-3'>
              <h2 className='text-white mb-4'>Latest Content Added</h2>
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
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Content' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Content' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Content' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i className="bi bi-trash text-danger" title='Delete Content' style={{ cursor: 'pointer' }}></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row className='pt-3'>
              <h2 className='text-white mb-4'>Add Admin</h2>
              <Form className='d-flex gap-3 align-items-stretch w-100 ' >
                <Form.Group className="flex-grow-1" controlId="formBasicName">
                  <Form.Control className='control' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="flex-grow-1" controlId="formBasicEmail">
                  <Form.Control className='control' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="flex-grow-1" controlId="formBasicPassword">
                  <Form.Control className='control' type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant='danger' type='submit' className='px-5 fw-bold'>
                  Add Admin
                </Button>
              </Form>
            </Row>
          </Container>
        </div>
      </AdminLayout >

    </>
  )
}

export default AdminDashboard