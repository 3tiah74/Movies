import api from './axiosConfig'

export function getReviews() {
  return api.get('/api/reviews')
}

export function getReviewsByMovie(movieId) {
  return api.get(`/api/reviews/movie/${movieId}`)
}

export function getReviewsByUser(userId) {
  return api.get(`/api/reviews/user/${userId}`)
}

export function createReview(payload) {
  return api.post('/api/reviews', payload)
}

export function updateReview(id, payload) {
  return api.put(`/api/reviews/${id}`, payload)
}

export function deleteReview(id) {
  return api.delete(`/api/reviews/${id}`)
}
