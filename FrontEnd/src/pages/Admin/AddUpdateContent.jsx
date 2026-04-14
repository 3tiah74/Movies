import React, { useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { getNames } from 'country-list'




const AddUpdateContent = () => {
  
  const countries = getNames().sort()
  
  const [posterPreview, setPosterPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4 '>
            <h1 className='text-white pt-4'>Add / Update Content</h1>
            <Form className='w-100'>
              <Row className='align-items-center justify-content-center mt-5'>
                <Col xl={6} lg={8} md={12} xs={12} className='mb-4 d-flex flex-column justify-content-center'>

                  {/* Title */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formTitle">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Title
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        placeholder='Enter Movie or Series Title'
                        className='control w-100' />
                    </Col>
                  </Form.Group>

                  {/* Type */}
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

                  {/* Number of Seasons (for Series) */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formSeasons">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Seasons
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        placeholder='Enter Number of Seasons'
                        type='number'
                        className='control w-100' />
                    </Col>
                  </Form.Group>

                  {/* Description */}
                  <Form.Group as={Row} className="mb-4" controlId="formDescription">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Description
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder='Enter Movie or Series Description'
                        className='control w-100' />
                    </Col>
                  </Form.Group>
                </Col>

                {/* Poster */}
                <Col xl={6} lg={4} md={12} className='mb-4 d-flex flex-column px-lg-4'>
                  <h5 className="text-white fw-bold mb-3">Upload Poster</h5>

                  <Form.Label
                    htmlFor="poster-upload"
                    className='control d-flex flex-column align-items-center justify-content-center w-100 overflow-hidden'
                    style={{ minHeight: '320px', cursor: 'pointer', padding: 0 }}
                  >
                    {posterPreview ? (
                      <img
                        src={posterPreview}
                        alt="Selected Poster"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                      />
                    ) : (
                      <span className="text-secondary fs-5 text-center px-3">
                        + Click here to choose a poster
                      </span>
                    )}
                  </Form.Label>

                  <Form.Control
                    id="poster-upload"
                    type="file"
                    accept="image/*"
                    className='d-none'
                    onChange={handleImageChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>

                  {/* Categories  */}
                  <Form.Group as={Row} className='mb-4 align-items-center' controlId='formCategories'>
                    <Form.Label column xl={2} lg={2} md={3} sm={3} xs={12} className='fw-bold text-white fs-5 text-nowrap mb-2 mb-md-0'>
                      Categories
                    </Form.Label>
                    <Col xl={10} lg={10} md={9} sm={9} xs={12}>
                      <Typeahead
                        id="categories-typeahead"
                        multiple
                        options={['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']}
                        placeholder="Choose categories..."
                        className='custom-typeahead' />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row className='align-items-center justify-content-center mt-4'>
                <Col xl={6} lg={6} md={12} xs={12} className='mb-4 d-flex flex-column justify-content-center'>

                  {/* Release Date  */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formReleaseDate">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Release Date
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type='date'
                        className='control w-100' />
                    </Col>
                  </Form.Group>

                  {/* Duration */}
                  <Form.Group as={Row} className='mb-4 align-items-center' controlId='formDuration'>
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Duration
                    </Form.Label>
                    <Col sm={9}>
                      <div className="d-flex align-items-center gap-3 w-100">
                        <div className="d-flex align-items-center w-50">
                          <Form.Control
                            type='number'
                            min="0"
                            max="9"
                            placeholder='Hours'
                            className='control w-100' />
                        </div>
                        <div className="d-flex align-items-center w-50">
                          <Form.Control
                            type='number'
                            min="0"
                            max="59"
                            placeholder='Minutes'
                            className='control w-100' />
                        </div>
                      </div>
                    </Col>
                  </Form.Group>
                </Col>
                <Col xl={6} lg={6} md={12} xs={12} className='mb-4 d-flex flex-column justify-content-center'>

                  {/* Rating  */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formRating">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Rating
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type='number'
                        min="0"
                        max="10"
                        step="0.1"
                        placeholder='Enter rating...'
                        className='control w-100' />
                    </Col>
                  </Form.Group>

                  {/* Country  */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formContentType">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Country
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select className='control w-100' defaultValue="series">
                        {countries.map((country, index) => (
                          <option key={index} value={country}>{country}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>

                  {/* Cast */}
                  <Form.Group as={Row} className='mb-4 align-items-center' controlId='formCast'>
                    <Form.Label column xl={2} lg={2} md={3} sm={3} xs={12} className='fw-bold text-white fs-5 text-nowrap mb-2 mb-md-0'>
                      Cast
                    </Form.Label>
                    <Col xl={10} lg={10} md={9} sm={9} xs={12}>
                      <Form.Control
                        placeholder='Enter cast members separated by commas'
                        className='control w-100' />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </AdminLayout >
    </>
  )
}

export default AddUpdateContent