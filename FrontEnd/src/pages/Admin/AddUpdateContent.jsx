import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Container } from 'react-bootstrap'

const AddUpdateContent = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4'>
            <h1 className='text-white pt-4'>Add / Update Content</h1>
              
          </Container>
        </div>
      </AdminLayout >
    </>
  )
}

export default AddUpdateContent