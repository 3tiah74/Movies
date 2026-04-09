import React from 'react'
import '../../styles/AdminDashboard.css';
import AdminLayout from '../../layouts/AdminLayout'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'

const AdminDashboard = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark'>
          <Container className='pt-5'>
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
          </Container>
          <Container className="pt-5">
            <Row className="mt-4">
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
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Container>
          <Container className="pt-5">
            <Row>
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
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Abdulla</td>
                    <td>abdulla@example.com</td>
                    <td>2023-01-01 12:00:00</td>
                    <td className='text-center'>
                      <i class="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
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