import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as watchlistApi from '../../api/watchlistApi'
import { getStoredUserId } from '../../utils/authSession'

function normalizeList(data) {
  if (Array.isArray(data)) return data
  return data?.content ?? []
}

export default function WatchList() {
  const userId = getStoredUserId()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(() => userId != null)
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (userId == null) return
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await watchlistApi.getWatchlistByUser(userId)
        if (!cancelled) setItems(normalizeList(data))
      } catch {
        if (!cancelled) setError('Could not load watchlist.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  async function handleRemove(watchlistId) {
    setMsg('')
    try {
      await watchlistApi.removeWatchlistItem(watchlistId)
      setItems((prev) => prev.filter((w) => (w.id ?? w.watchlistId) !== watchlistId))
      setMsg('Removed.')
    } catch {
      setMsg('Could not remove item.')
    }
  }

  if (userId == null) {
    return (
      <div className="page">
        <h1>Watchlist</h1>
        <p className="muted">
          <Link to="/login">Log in</Link> to manage your watchlist.
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Watchlist</h1>
      {msg && <p className="muted small-msg">{msg}</p>}
      {loading && <p className="muted">Loading…</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && !error && (
        <ul className="watchlist">
          {items.length === 0 && <li className="muted">Your watchlist is empty.</li>}
          {items.map((w) => {
            const wid = w.id ?? w.watchlistId
            const movie = w.movie ?? w
            const mid = w.movieId ?? movie?.id ?? movie?.movieId
            const title = movie?.title ?? (mid != null ? `Movie #${mid}` : 'Film')
            return (
              <li key={wid} className="watchlist__row">
                <div>
                  {mid != null ? (
                    <Link to={`/movies/${mid}`}>{title}</Link>
                  ) : (
                    <span>{title}</span>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn--ghost btn--small"
                  onClick={() => handleRemove(wid)}
                >
                  Remove
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
