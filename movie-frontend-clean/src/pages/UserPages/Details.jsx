import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as moviesApi from '../../api/moviesApi'
import * as reviewsApi from '../../api/reviewsApi'
import * as watchlistApi from '../../api/watchlistApi'
import { getStoredUserId } from '../../utils/authSession'

async function fetchMovieDetail(movieId) {
  const [movieRes, revRes] = await Promise.all([
    moviesApi.getMovieById(movieId),
    reviewsApi.getReviewsByMovie(movieId),
  ])
  const reviews = Array.isArray(revRes.data)
    ? revRes.data
    : revRes.data?.content ?? []
  return { movie: movieRes.data, reviews }
}

export default function Details() {
  const { id } = useParams()
  const movieId = Number(id)
  const movieIdValid = Number.isFinite(movieId)
  const userId = getStoredUserId()

  const [movie, setMovie] = useState(null)
  const [reviews, setReviews] = useState([])
  const [reviewText, setReviewText] = useState('')
  const [loading, setLoading] = useState(movieIdValid)
  const [error, setError] = useState('')
  const [actionMsg, setActionMsg] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!movieIdValid) return
    let cancelled = false
    ;(async () => {
      try {
        const { movie: m, reviews: r } = await fetchMovieDetail(movieId)
        if (cancelled) return
        setMovie(m)
        setReviews(r)
        setError('')
      } catch {
        if (!cancelled) setError('Could not load this movie.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [movieId, movieIdValid])

  async function handleAddReview(e) {
    e.preventDefault()
    setActionMsg('')
    if (!userId) {
      setActionMsg('Log in to post a review.')
      return
    }
    if (!reviewText.trim()) return
    setSubmitting(true)
    try {
      await reviewsApi.createReview({
        movieId,
        userId,
        reviewText: reviewText.trim(),
      })
      setReviewText('')
      const { movie: m, reviews: r } = await fetchMovieDetail(movieId)
      setMovie(m)
      setReviews(r)
      setError('')
      setActionMsg('Review posted.')
    } catch {
      setActionMsg('Could not post review.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleAddWatchlist() {
    setActionMsg('')
    if (!userId) {
      setActionMsg('Log in to use your watchlist.')
      return
    }
    try {
      await watchlistApi.addToWatchlist({ userId, movieId })
      setActionMsg('Added to watchlist.')
    } catch {
      setActionMsg('Could not add to watchlist.')
    }
  }

  if (!movieIdValid) {
    return (
      <div className="page">
        <p className="form__error">Invalid movie.</p>
        <Link to="/movies">Back to movies</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="page">
        <p className="muted">Loading…</p>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className="page">
        <p className="form__error">{error || 'Not found.'}</p>
        <Link to="/movies">Back to movies</Link>
      </div>
    )
  }

  const title = movie.title ?? 'Untitled'
  const year = movie.year ?? movie.releaseYear ?? ''
  const poster = movie.posterUrl || movie.poster || movie.imageUrl

  return (
    <div className="page movie-detail">
      <Link to="/movies" className="back-link">
        ← Movies
      </Link>
      <div className="movie-detail__layout">
        <div className="movie-detail__poster">
          {poster ? (
            <img src={poster} alt="" />
          ) : (
            <div className="movie-detail__poster-placeholder">{title}</div>
          )}
        </div>
        <div className="movie-detail__info">
          <h1>
            {title}
            {year !== '' && <span className="muted"> ({year})</span>}
          </h1>
          {movie.director && <p>Directed by {movie.director}</p>}
          {movie.description && <p className="description">{movie.description}</p>}
          <div className="row gap">
            <button type="button" className="btn btn--primary" onClick={handleAddWatchlist}>
              Add to watchlist
            </button>
          </div>
          {actionMsg && <p className="muted small-msg">{actionMsg}</p>}
        </div>
      </div>

      <section className="reviews-section">
        <h2>Reviews</h2>
        {userId ? (
          <form className="form form--inline" onSubmit={handleAddReview}>
            <label className="form__field form__field--grow">
              <span>Your review</span>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={3}
                required
              />
            </label>
            <button type="submit" className="btn btn--primary" disabled={submitting}>
              {submitting ? 'Posting…' : 'Post'}
            </button>
          </form>
        ) : (
          <p className="muted">
            <Link to="/login">Log in</Link> to write a review.
          </p>
        )}
        <ul className="review-list">
          {reviews.length === 0 && <li className="muted">No reviews yet.</li>}
          {reviews.map((r) => (
            <li key={r.id ?? r.reviewId} className="review-item">
              <p className="review-item__text">{r.reviewText ?? r.text ?? ''}</p>
              <p className="review-item__meta muted small">
                User #{r.userId ?? r.user?.id ?? '—'}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
