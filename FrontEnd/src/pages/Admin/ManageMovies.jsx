import React, { useEffect, useMemo, useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Link } from 'react-router'
import { Col, Container, Form, Row, Button, Table, Badge } from 'react-bootstrap'
import logo from '../../assets/john.jpg'
import { getContent, deleteContent } from '../../api/contentApi'

const ManageMovies = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true)
        const data = await getContent()
        setMovies(Array.isArray(data) ? data : [])
      } catch {
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  const filteredMovies = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return movies
    return movies.filter((movie) => String(movie?.title || '').toLowerCase().includes(q))
  }, [movies, query])

  const handleDelete = async (movieId) => {
    try {
      await deleteContent(movieId)
      setMovies((prev) => prev.filter((movie) => movie.movieId !== movieId))
    } catch {
      // no-op
    }
  }

  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{paddingBottom:'50px' ,minHeight:'100vh'}}>
          <Container className='pt-4'>
            <h1 className='text-white mb-4'>Manage Movies</h1>
            <Row className='align-items-center'>
              <Col lg={3} md={6} xs={6} className='mb-3'>
                <Form className='d-flex'>
                  <div className='w-100 position-relative'>
                    <Form.Control
                      placeholder='Search Movies...'
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className='rounded-pill pe-5'
                    />
                    <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-secondary fs-5"></i>
                  </div>
                </Form>
              </Col>
              <Col lg={3} md={6} xs={6} className="ms-auto d-flex justify-content-end mb-3">
                <Button variant="danger" as={Link} to='/content' className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
                  Add Movie <i className="bi bi-plus-lg"></i>
                </Button>
              </Col>
            </Row>
            <Row className='mt-4'>
              <Table responsive className='align-middle border-0 text-white' style={{ borderCollapse: 'separate', borderSpacing: '0 15px',minWidth:'800px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2c3034' }} className='text-light'>
                    <th className='border-0 ps-3 rounded-start'>Poster</th>
                    <th className='border-0'>Title</th>
                    <th className='border-0 text-center'>Release Date</th>
                    <th className='border-0 text-center rounded-end'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr style={{ backgroundColor: '#2c3034' }}>
                      <td className='border-0 text-center' colSpan={4}>Loading movies...</td>
                    </tr>
                  )}
                  {!loading && filteredMovies.length === 0 && (
                    <tr style={{ backgroundColor: '#2c3034' }}>
                      <td className='border-0 text-center' colSpan={4}>No movies found.</td>
                    </tr>
                  )}
                  {!loading && filteredMovies.map((movie) => {
                    const imageUrl = movie?.posterPath || movie?.poster_path || logo
                    const categories = Array.isArray(movie?.categories) ? movie.categories.map((c) => c?.name).filter(Boolean) : []
                    return (
                      <tr style={{ backgroundColor: '#2c3034' }} key={movie.movieId}>
                        <td className='border-0 rounded-start ps-3 py-3' style={{ width: '240px' }}>
                          <div className='position-relative' style={{ width: '200px', minWidth: '200px' }}>
                            <img src={imageUrl} alt="Poster" className="w-100 rounded" style={{ height: '125px', objectFit: 'contain', backgroundColor: '#1a1d20' }} />
                            <div className='position-absolute top-0 start-0 m-1 bg-dark bg-opacity-75 rounded px-1 text-white d-flex align-items-center' style={{ fontSize: '10px' }}>
                              <i className='bi bi-clock me-1' style={{ fontSize: '11px' }}></i>
                              <span>{movie.durationHours || 0}:{String(movie.durationMinutes || 0).padStart(2, '0')}:00</span>
                            </div>
                            <div className='position-absolute top-0 end-0 m-1 bg-dark bg-opacity-75 rounded px-1 text-white d-flex align-items-center' style={{ fontSize: '10px' }}>
                              <i className='bi bi-star-fill text-warning me-1' style={{ fontSize: '11px' }}></i>
                              <span>{movie.rating ?? 'N/A'}</span>
                            </div>
                          </div>
                        </td>
                        <td className='border-0 py-3 ' style={{maxWidth:'200px'}}>
                          <h5 className='text-white fw-bold mb-2 fs-3 '>{movie.title}</h5>
                          <div className='d-flex flex-wrap gap-2'>
                            {(categories.length ? categories : ['Uncategorized']).map((category, index) => (
                              <Badge key={index} bg="danger" className='rounded-pill px-3 py-2 fw-normal fs-6'>{category}</Badge>
                            ))}
                          </div>
                        </td>
                        <td className='text-center border-0 py-3'>{movie.releaseDate || 'N/A'}</td>
                        <td className='text-center border-0 py-3 rounded-end'>
                          <div className='d-flex justify-content-center gap-4'>
                            <div className='text-danger d-flex flex-column align-items-center' title='Delete Content' style={{ cursor: 'pointer' }} onClick={() => handleDelete(movie.movieId)}>
                              <i className='bi bi-trash fs-3 mb-1' ></i>
                              <span style={{ fontSize: '0.8rem' }}>Delete</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div >
      </AdminLayout>
    </>
  )
}

export default ManageMovies