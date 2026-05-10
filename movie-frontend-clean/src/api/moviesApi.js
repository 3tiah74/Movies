import api from './axiosConfig'

export function getMovies() {
  return api.get('/api/movies')
}

export function getMovieById(id) {
  return api.get(`/api/movies/${id}`)
}

export function createMovie(payload) {
  return api.post('/api/movies', payload)
}

export function updateMovie(id, payload) {
  return api.put(`/api/movies/${id}`, payload)
}

export function deleteMovie(id) {
  return api.delete(`/api/movies/${id}`)
}
