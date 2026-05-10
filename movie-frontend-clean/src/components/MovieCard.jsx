import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
  if (!movie) return null
  const id = movie.id ?? movie.movieId
  const title = movie.title ?? 'Untitled'
  const year = movie.year ?? movie.releaseYear ?? ''
  const poster =
    movie.posterUrl || movie.poster || movie.imageUrl || null

  return (
    <article className="movie-card">
      <Link to={`/movies/${id}`} className="movie-card__link">
        <div className="movie-card__poster">
          {poster ? (
            <img src={poster} alt="" loading="lazy" />
          ) : (
            <span className="movie-card__placeholder">{title}</span>
          )}
        </div>
        <div className="movie-card__meta">
          <h3 className="movie-card__title">{title}</h3>
          {year !== '' && <p className="movie-card__year">{year}</p>}
        </div>
      </Link>
    </article>
  )
}
