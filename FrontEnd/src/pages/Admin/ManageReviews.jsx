import React, { useEffect, useMemo, useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Container, Row, Table } from 'react-bootstrap'
import { getReviews, deleteReview } from '../../api/reviewsApi'
import { getContent } from '../../api/contentApi'
import { getUsers } from '../../api/usersApi'

const ManageReviews = () => {
  const [reviews, setReviews] = useState([])
  const [movies, setMovies] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [reviewsRes, moviesRes, usersRes] = await Promise.allSettled([
          getReviews(),
          getContent(),
          getUsers(),
        ])

        setReviews(reviewsRes.status === 'fulfilled' && Array.isArray(reviewsRes.value) ? reviewsRes.value : [])
        setMovies(moviesRes.status === 'fulfilled' && Array.isArray(moviesRes.value) ? moviesRes.value : [])
        setUsers(usersRes.status === 'fulfilled' && Array.isArray(usersRes.value) ? usersRes.value : [])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const movieMap = useMemo(() => new Map(movies.map((movie) => [String(movie.movieId), movie.title])), [movies])
  const userMap = useMemo(() => new Map(users.map((user) => [String(user.userId), user.username])), [users])

  const handleDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId)
      setReviews((prev) => prev.filter((review) => review.reviewId !== reviewId))
    } catch {
      // no-op
    }
  }

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
                  {loading && (
                    <tr style={{ backgroundColor: '#2c3034' }}>
                      <td className='border-0 text-center' colSpan={5}>Loading reviews...</td>
                    </tr>
                  )}
                  {!loading && reviews.length === 0 && (
                    <tr style={{ backgroundColor: '#2c3034' }}>
                      <td className='border-0 text-center' colSpan={5}>No reviews found.</td>
                    </tr>
                  )}
                  {!loading && reviews.map((review) => (
                    <tr style={{ backgroundColor: '#2c3034' }} key={review.reviewId}>
                      <td className='border-0 fw-bold rounded-start'>{movieMap.get(String(review.movieId)) || `Movie #${review.movieId}`}</td>
                      <td className='border-0'>{userMap.get(String(review.userId)) || `User #${review.userId}`}</td>
                      <td className='border-0 text-truncate' style={{ maxWidth: '250px' }} title={review.reviewText}>
                        {review.reviewText}
                      </td>
                      <td className='border-0 text-center'>{review.date ? new Date(review.date).toLocaleString() : 'N/A'}</td>
                      <td className='border-0 text-center rounded-end'>
                        <i className="bi bi-trash text-danger" title='Delete Review' style={{cursor:'pointer'}} onClick={() => handleDelete(review.reviewId)}></i>
                      </td>
                    </tr>
                  ))}
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