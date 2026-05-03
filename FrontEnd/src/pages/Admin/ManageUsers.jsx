import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'

const ManageUsers = () => {
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
                  <tr style={{ backgroundColor: '#2c3034' }}>
                    <td className='border-0 rounded-start'>Abdulla</td>
                    <td className='border-0'>abdulla@gmail.com</td>
                    <td className='border-0'>2023-01-01 12:00:00</td>
                    <td className='text-center border-0'>
                      <span className='badge bg-success rounded-pill px-3 py-2 fs-6'>Active</span>
                    </td>
                    <td className='text-center rounded-end border-0'>
                      <i className="bi bi-person-slash text-warning me-3" style={{ cursor: 'pointer' }} title="Deactivate Account"></i>
                      <i className="bi bi-trash text-danger" style={{ cursor: 'pointer' }} title="Delete Account"></i>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#2c3034' }}>
                    <td className='border-0 rounded-start'>Abdulla</td>
                    <td className='border-0'>abdulla@gmail.com</td>
                    <td className='border-0'>2023-01-01 12:00:00</td>
                    <td className='text-center border-0'>
                      <span className='badge bg-danger rounded-pill px-3 py-2 fs-6'>Inactive</span>
                    </td>
                    <td className='text-center rounded-end border-0'>
                      <i className="bi bi-person-check text-success me-3" style={{ cursor: 'pointer' }} title="Activate Account"></i>
                      <i className="bi bi-trash text-danger" style={{ cursor: 'pointer' }} title="Delete Account"></i>
                    </td>
                  </tr>
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