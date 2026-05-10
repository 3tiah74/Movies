import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as reviewsApi from '../../api/reviewsApi'

function normalizeList(data) {
  if (Array.isArray(data)) return data
  return data?.content ?? []
}

export default function ManageReviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await reviewsApi.getReviews()
        if (!cancelled) setReviews(normalizeList(data))
      } catch {
        if (!cancelled) setError('Could not load reviews.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleDelete(id) {
    if (!window.confirm('Delete this review?')) return
    try {
      await reviewsApi.deleteReview(id)
      setReviews((prev) => prev.filter((r) => (r.id ?? r.reviewId) !== id))
    } catch {
      setError('Could not delete review.')
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Reviews</h1>
        <Link to="/admin" className="btn btn--ghost">
          Dashboard
        </Link>
      </div>
      {loading && <p className="muted">Loading…</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Movie</th>
              <th>User</th>
              <th>Text</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => {
              const id = r.id ?? r.reviewId
              const mid = r.movieId ?? r.movie?.id
              return (
                <tr key={id}>
                  <td>
                    {mid != null ? (
                      <Link to={`/movies/${mid}`}>#{mid}</Link>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td>{r.userId ?? r.user?.id ?? '—'}</td>
                  <td className="data-table__clip">{r.reviewText ?? r.text ?? ''}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn--danger btn--small"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
