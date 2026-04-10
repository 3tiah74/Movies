import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Container } from 'react-bootstrap'

const ManageReviews = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-5'>
            <h1 className='text-white mb-4'>Manage Reviews</h1>
          </Container>
        </div>
      </AdminLayout>
    </>
  )
}

export default ManageReviews