import api from './axiosConfig'

export function addToWatchlist(payload) {
  return api.post('/api/watchlist/add', payload)
}

export function getWatchlistByUser(userId) {
  return api.get(`/api/watchlist/user/${userId}`)
}

export function removeWatchlistItem(watchlistId) {
  return api.delete(`/api/watchlist/${watchlistId}`)
}
