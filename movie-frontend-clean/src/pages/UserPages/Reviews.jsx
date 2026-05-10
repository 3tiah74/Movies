import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as reviewsApi from '../../api/reviewsApi'
import { getStoredUserId } from '../../utils/authSession'

function normalizeList(data) {
  if (Array.isArray(data)) return data
  return data?.content ?? []
}

export default function Reviews() {
  const userId = getStoredUserId()
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(() => userId != null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (userId == null) return
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await reviewsApi.getReviewsByUser(userId)
        if (!cancelled) setReviews(normalizeList(data))
      } catch {
        if (!cancelled) setError('Could not load your reviews.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  if (userId == null) {
    return (
      <div className="page">
        <h1>My reviews</h1>
        <p className="muted">
          <Link to="/login">Log in</Link> to see your reviews.
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>My reviews</h1>
      {loading && <p className="muted">Loading…</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && !error && (
        <ul className="review-list">
          {reviews.length === 0 && <li className="muted">You have not posted any reviews yet.</li>}
          {reviews.map((r) => {
            const mid = r.movieId ?? r.movie?.id
            return (
              <li key={r.id ?? r.reviewId} className="review-item">
                {mid != null && (
                  <Link to={`/movies/${mid}`} className="review-item__link">
                    Movie #{mid}
                  </Link>
                )}
                <p className="review-item__text">{r.reviewText ?? r.text ?? ''}</p>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
