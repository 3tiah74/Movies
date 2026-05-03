import React from 'react'
import '../../styles/AdminDashboard.css';
import AdminLayout from '../../layouts/AdminLayout'
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap'

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
            <Row className='mt-4 align-items-center justify-content-center'>
              <h2 className='text-white mb-4'>Add Admin</h2>
              <Form className='w-100'>
                <Row>
                  <Col xl={6} lg={6} md={12} sm={12} className='mb-4'>
                    <Form.Group as={Row} className="mb-4 align-items-center" controlId="formBasicName">
                      <Form.Label column sm={3} className='fw-bold fs-5 text-white text-nowrap'>Name</Form.Label>
                      <Col sm={9}>
                        <Form.Control className='control w-100' type="text" placeholder="Enter name" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4 align-items-center" controlId="formBasicEmail">
                      <Form.Label column sm={3} className='fw-bold fs-5 text-white text-nowrap'>Email</Form.Label>
                      <Col sm={9}>
                        <Form.Control className='control w-100' type="email" placeholder="Enter email" />
                      </Col>
                    </Form.Group>
                  </Col>

                  <Col xl={6} lg={6} md={12} sm={12} className='mb-4'>
                    <Form.Group as={Row} className="mb-4 align-items-center" controlId="formBasicPassword">
                      <Form.Label column sm={3} className='fw-bold fs-5 text-white text-nowrap'>Password</Form.Label>
                      <Col sm={9}>
                        <Form.Control className='control w-100' type="password" placeholder="Enter password" />
                      </Col>
                    </Form.Group>

                      <Col>
                        <Button variant='danger' type='submit' className='px-5 py-2 fw-bold fs-5 w-100'>
                          Add Admin
                        </Button>
                      </Col>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Container>
        </div>
      </AdminLayout >

    </>
  )
}

export default AdminDashboard