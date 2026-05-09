import React, { useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { getNames } from 'country-list'
import { getCategories } from '../../api/categoriesApi'
import { addContent } from '../../api/contentApi'
import { useNavigate } from 'react-router-dom'

const AddUpdateContent = () => {
  const navigate = useNavigate();

  const countries = getNames().sort()
  
  const [posterPreview, setPosterPreview] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    releaseDate: '',
    durationHours: '',
    durationMinutes: '',
    rating: '',
    country: countries[0] || '',
    actors: '',
    posterPath: '',
  });

  React.useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const data = await getCategories();
        setCategories(Array.isArray(data) ? data : []);
      } catch {
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };

    loadCategories();
  }, []);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setMessage('');

      const categoryIds = selectedCategories
        .map((selected) => selected?.categoryId)
        .filter((id) => id != null);

      await addContent({
        title: formData.title,
        description: formData.description,
        actors: formData.actors,
        posterPath: formData.posterPath,
        releaseDate: formData.releaseDate || null,
        rating: formData.rating ? Number(formData.rating) : null,
        durationHours: formData.durationHours ? Number(formData.durationHours) : null,
        durationMinutes: formData.durationMinutes ? Number(formData.durationMinutes) : null,
        country: formData.country,
        categoryIds,
      });

      setMessage('Movie saved successfully.');
      setFormData({
        title: '',
        description: '',
        releaseDate: '',
        durationHours: '',
        durationMinutes: '',
        rating: '',
        country: countries[0] || '',
        actors: '',
        posterPath: '',
      });
      setPosterPreview(null);
      setSelectedCategories([]);

      setTimeout(() => {
        navigate('/manageMovies');
      }, 600);
    } catch (err) {
      const msg = err?.response?.data?.message || err?.response?.data || 'Failed to save movie.';
      setMessage(typeof msg === 'string' ? msg : 'Failed to save movie.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4 '>
            <h1 className='text-white pt-4'>Add / Update Content</h1>
            <Form className='w-100' onSubmit={handleSubmit}>
              <Row className='align-items-center justify-content-center mt-5'>
                <Col xl={6} lg={8} md={12} xs={12} className='mb-4 d-flex flex-column justify-content-center'>

                  {/* Title */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formTitle">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Title
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        placeholder='Enter Movie Title'
                        value={formData.title}
                        onChange={(e) => handleChange('title', e.target.value)}
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
                        rows={10}
                        placeholder='Enter Movie Description'
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        className='control w-100' />
                    </Col>
                  </Form.Group>
                </Col>

                {/* Poster URL */}
                <Col xl={6} lg={4} md={12} className='mb-4 d-flex flex-column px-lg-4'>
                  <h5 className="text-white fw-bold mb-3">Poster URL</h5>

                  <Form.Control
                    type="text"
                    placeholder='Enter Poster Image URL'
                    value={formData.posterPath}
                    onChange={(e) => {
                      handleChange('posterPath', e.target.value);
                      setPosterPreview(e.target.value);
                    }}
                    className='control w-100 mb-3'
                  />

                  <div 
                    className='control d-flex flex-column align-items-center justify-content-center w-100 overflow-hidden'
                    style={{ minHeight: '280px', padding: 0, border: '2px dashed #444' }} >
                    {posterPreview ? (
                      <img
                        src={posterPreview}
                        alt="Poster Preview"
                        onError={() => setPosterPreview(null)}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                    ) : (
                      <span className="text-secondary fs-5 text-center px-3">
                        Image preview will appear here
                      </span>
                    )}
                  </div>
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
                        labelKey={(option) => option.categoryName || option.name || ''}
                        options={categories}
                        selected={selectedCategories}
                        onChange={(selected) => setSelectedCategories(selected)}
                        placeholder="Choose categories..."
                        isLoading={loadingCategories}
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
                        value={formData.releaseDate}
                        onChange={(e) => handleChange('releaseDate', e.target.value)}
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
                            value={formData.durationHours}
                            onChange={(e) => handleChange('durationHours', e.target.value)}
                            className='control w-100' />
                        </div>
                        <div className="d-flex align-items-center w-50">
                          <Form.Control
                            type='number'
                            min="0"
                            max="59"
                            placeholder='Minutes'
                            value={formData.durationMinutes}
                            onChange={(e) => handleChange('durationMinutes', e.target.value)}
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
                        value={formData.rating}
                        onChange={(e) => handleChange('rating', e.target.value)}
                        className='control w-100' />
                    </Col>
                  </Form.Group>

                  {/* Country  */}
                  <Form.Group as={Row} className="mb-4 align-items-center" controlId="formContentType">
                    <Form.Label column sm={3} className='fw-bold text-white fs-5 text-nowrap'>
                      Country
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select className='control w-100' value={formData.country} onChange={(e) => handleChange('country', e.target.value)}>
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
                        value={formData.actors}
                        onChange={(e) => handleChange('actors', e.target.value)}
                        className='control w-100' />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col>
                  <Button variant='danger' type='submit' disabled={submitting}>
                    {submitting ? 'Saving...' : 'Save Movie'}
                  </Button>
                  {message && <p className='mt-3 text-white'>{message}</p>}
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