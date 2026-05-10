import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as moviesApi from '../../api/moviesApi'
import MovieCard from '../../components/MovieCard'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await moviesApi.getMovies()
        const list = Array.isArray(data) ? data : data?.content ?? data?.movies ?? []
        if (!cancelled) setMovies(list.slice(0, 8))
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

  return (
    <div className="page">
      <section className="hero-block">
        <h1>Track films you watch</h1>
        <p className="muted">
          Browse the catalog, log reviews, and build your watchlist.
        </p>
        <Link to="/movies" className="btn btn--primary">
          Browse movies
        </Link>
      </section>

      <section>
        <h2>Recently added</h2>
        {loading && <p className="muted">Loading…</p>}
        {error && <p className="form__error">{error}</p>}
        {!loading && !error && (
          <div className="movie-grid">
            {movies.map((m) => (
              <MovieCard key={m.id ?? m.movieId} movie={m} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
