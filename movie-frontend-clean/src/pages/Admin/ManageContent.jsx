import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as moviesApi from '../../api/moviesApi'

function normalizeList(data) {
  if (Array.isArray(data)) return data
  return data?.content ?? data?.movies ?? []
}

export default function ManageContent() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await moviesApi.getMovies()
        if (!cancelled) setMovies(normalizeList(data))
      } catch {
        if (!cancelled) setError('Could not load movies.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleDelete(id) {
    if (!window.confirm('Delete this movie?')) return
    try {
      await moviesApi.deleteMovie(id)
      setMovies((prev) => prev.filter((m) => (m.id ?? m.movieId) !== id))
    } catch {
      setError('Could not delete movie.')
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Movies</h1>
        <Link to="/admin/content/new" className="btn btn--primary">
          Add movie
        </Link>
      </div>
      {loading && <p className="muted">Loading…</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => {
              const id = m.id ?? m.movieId
              return (
                <tr key={id}>
                  <td>{m.title ?? '—'}</td>
                  <td>{m.year ?? m.releaseYear ?? '—'}</td>
                  <td className="data-table__actions">
                    <Link to={`/admin/content/edit/${id}`} className="btn btn--ghost btn--small">
                      Edit
                    </Link>
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
