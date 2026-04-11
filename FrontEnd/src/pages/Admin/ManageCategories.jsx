import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import '../../styles/AdminDashboard.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const ManageCategories = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4'>
            <Row>
              <h1 className='text-white mb-4'>Manage Categories</h1>
              <Col lg={6} md={10} xs={12}>
                <Form className='d-flex gap-3 align-items-stretch w-100 mb-4'>
                  <Form.Group className="flex-grow-1" controlId="formCategoryName">
                    <Form.Control
                      placeholder='New Category Name'
                      className='control'
                    />
                  </Form.Group>
                  <Button variant="danger" type="submit" className='px-5 fw-bold'>
                    Add Category
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className='pt-3 g-3'>
              <h3 className='text-white mb-4'>Existing Categories</h3>
              <Col lg={3} md={4} xs={6}>
                <div className='border border-secondary rounded p-3 d-flex justify-content-between align-items-center bg-black'>
                  <span className='text-white fw-bold'>Action</span>
                  <i className="bi bi-trash text-danger fs-5"  style={{ cursor: 'pointer' }} title='Delete Category'></i>
                </div>
              </Col>
            </Row>
          </Container >
        </div >
      </AdminLayout >
    </>
  )
}

export default ManageCategories