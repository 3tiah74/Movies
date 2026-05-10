import { useEffect, useMemo, useState } from 'react'
import * as moviesApi from '../../api/moviesApi'
import MovieCard from '../../components/MovieCard'

function normalizeList(data) {
  if (Array.isArray(data)) return data
  return data?.content ?? data?.movies ?? []
}

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return movies
    return movies.filter((m) => {
      const title = (m.title ?? '').toLowerCase()
      const director = (m.director ?? '').toLowerCase()
      return title.includes(q) || director.includes(q)
    })
  }, [movies, query])

  return (
    <div className="page">
      <h1>Movies</h1>
      <input
        type="search"
        className="input search-input"
        placeholder="Search by title or director…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search movies"
      />
      {loading && <p className="muted">Loading…</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && !error && (
        <div className="movie-grid">
          {filtered.map((m) => (
            <MovieCard key={m.id ?? m.movieId} movie={m} />
          ))}
        </div>
      )}
      {!loading && !error && filtered.length === 0 && (
        <p className="muted">No movies match your search.</p>
      )}
    </div>
  )
}
