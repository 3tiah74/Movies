import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Col, Container, Form, Row } from 'react-bootstrap'

const AddUpdateContent = () => {
  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4 '>
            <h1 className='text-white pt-4'>Add / Update Content</h1>
            <Row className='align-items-center justify-content-center mt-5'>
              <Col xl={6} lg={8} md={9} xs={12} className='mb-4 d-flex align-items-center'>
                <Form className='w-100'>
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formTitle">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Title
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        placeholder='Enter Movie or Series Title'
                        className='control w-100'
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formContentType">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Content Type
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select className='control w-100' defaultValue="series">
                        <option value="series">Series</option>
                        <option value="movie">Movie</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formSeasons">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Seasons
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        placeholder='Enter Number of Seasons'
                        className='control w-100'
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4" controlId="formDescription">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Description
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder='Enter Movie or Series Description'
                        className='control w-100'
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xl={6} lg={4} md={9} className='mb-4 d-flex flex-column px-lg-4'>
                <h5 className="text-white fw-bold mb-3">Upload Poster</h5>
                <div
                  className="control d-flex align-items-center justify-content-center"
                  style={{
                    minHeight: '300px'
                  }}
                >
                  <span className="text-secondary fs-5 text-center px-3">
                    Poster Space
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout >
    </>
  )
}

export default AddUpdateContent