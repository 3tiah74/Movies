import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Container, Row, Table } from 'react-bootstrap'

const ManageReviews = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4'>
            <h1 className='text-white mb-4'>Manage Reviews</h1>
            <Row>
              <Table responsive className='align-middle border-0 text-white' style={{ borderCollapse: 'separate', borderSpacing: '0 15px', minWidth: '800px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2c3034' }} className='text-light'>
                    <th className='border-0 rounded-start' style={{ width: '20%' }}>Title</th>
                    <th className='border-0' style={{ width: '10%' }}>User Name</th>
                    <th className='border-0' style={{ width: '40%' }}>Review</th>
                    <th className='border-0 text-center' style={{ width: '20%' }}>Date</th>
                    <th className='border-0 text-center rounded-end' style={{ width: '10%' }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#2c3034' }}>
                    <td className='border-0 fw-bold rounded-start'>John Wick 4</td>
                    <td className='border-0'>Abdulla</td>
                    <td className='border-0 text-truncate' style={{ maxWidth: '250px' }} title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio recusandae minus voluptatem, iusto perferendis quia adipisci aut unde amet excepturi praesentium veritatis eum repellat fugiat dolor ratione aliquid omnis!'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio recusandae minus voluptatem, iusto perferendis quia adipisci aut unde amet excepturi praesentium veritatis eum repellat fugiat dolor ratione aliquid omnis!</td>
                    <td className='border-0 text-center'>2026-1-1 12:00:00</td>
                    <td className='border-0 text-center rounded-end'>
                      <i className="bi bi-trash text-danger" title='Delete Review' style={{cursor:'pointer'}}></i>
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

export default ManageReviews