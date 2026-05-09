import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaPlay, FaStar, FaPlus, FaCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ReviewsSection from "./Reviews";
import { getContentById } from "../../api/contentApi";
import { getReviewsByMovie, addReview } from "../../api/reviewsApi";
import { addFavorite } from "../../api/favoritesApi";
import { getCurrentUser } from "../../api/authApi";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const [movieRes, reviewsRes] = await Promise.all([
          getContentById(id),
          getReviewsByMovie(id),
        ]);

        setMovie(movieRes || null);
        setReviews(Array.isArray(reviewsRes) ? reviewsRes : []);
      } catch (err) {
        const message =
          err?.response?.data?.message ||
          err?.response?.data ||
          "Failed to load movie details.";
        setError(typeof message === "string" ? message : "Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleAddReview = async (reviewText) => {
    try {
      const user = await getCurrentUser();
      if (!user?.userId) {
        throw new Error("Please login first.");
      }

      const created = await addReview({
        userId: user.userId,
        movieId: Number(id),
        reviewText,
      });

      setReviews((prev) => [created, ...prev]);
      return true;
    } catch {
      return false;
    }
  };

  const handleAddToWatchlist = async () => {
    try {
      const user = await getCurrentUser();
      if (!user?.userId || !movie?.movieId) {
        return;
      }

      await addFavorite({ userId: user.userId, movieId: movie.movieId });
    } catch {
      // no-op
    }
  };

  if (loading) {
    return <div className="bg-black text-white p-4">Loading movie...</div>;
  }

  if (error || !movie) {
    return <div className="bg-black text-danger p-4">{error || "Movie not found."}</div>;
  }

  const categories = Array.isArray(movie?.categories)
    ? movie.categories.map((cat) => cat?.name).filter(Boolean)
    : [];

  const releaseDate = movie?.releaseDate || movie?.release_date;
  const posterPath = movie?.posterPath || movie?.poster_path;

  return (
    <div className="movie-page">
      <div
        className="hero"
        style={{ backgroundImage: `url(${posterPath})` }}
      >
        <div className="overlay"></div>

        <Container className="hero-content">
          <h1 className="title">{movie.title}</h1>

          <div className="meta">
            <span className="rating">
              <FaStar /> {movie.rating}
            </span>

            <span>
              <FaCalendarAlt /> {releaseDate || "N/A"}
            </span>
          </div>

          <div className="tags">
            {categories.map((cat, i) => (
              <Badge key={i} className="tag">
                {cat}
              </Badge>
            ))}
          </div>

          <div className="actions d-flex gap-2 flex-wrap">
            <Button
              variant="danger"
              className="d-flex align-items-center gap-2 px-4 rounded-pill fw-semibold"
            >
              <FaPlay /> Play
            </Button>

            <Button
              variant="outline-light"
              className="d-flex align-items-center gap-2 px-4 rounded-pill fw-semibold"
              onClick={handleAddToWatchlist}
            >
              <FaPlus /> Watchlist
            </Button>
          </div>
        </Container>
      </div>

      <Container className="content">
        <Row className="align-items-start g-5">
          <Col md={3}>
            <div className="poster-card">
              <img src={posterPath} alt={movie.title} />
            </div>
          </Col>

          <Col md={9}>
            <h4 className="section-title">Overview</h4>

            <p className="desc">{movie.description}</p>

            {/* ✅ NEW SECTION UNDER DESCRIPTION */}
            <div className="extra-info mt-4">
              <div className="info-block">
                <h6>Rating</h6>
                <p>
                  <FaStar style={{ color: "#f5c518" }} /> {movie.rating}
                </p>
              </div>

              <div className="info-block">
                <h6>Release Date</h6>
                <p>
                  <FaCalendarAlt /> {releaseDate || "N/A"}
                </p>
              </div>

              <div className="info-block">
                <h6>Categories</h6>
                <p>{categories.join(", ") || "N/A"}</p>
              </div>
            </div>
          </Col>
        </Row>

        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
        />
      </Container>

      <style>{`
        .movie-page {
          background: #0b0b0b;
          color: white;
          min-height: 100vh;
        }

        .hero {
          height: 520px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.95),
            rgba(0,0,0,0.3)
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-bottom: 40px;
        }

        .title {
          font-size: 42px;
          font-weight: bold;
        }

        .meta {
          display: flex;
          gap: 15px;
          margin-top: 10px;
          flex-wrap: wrap;
          color: #ddd;
        }

        .rating {
          color: #f5c518;
          font-weight: 500;
        }

        .tags {
          margin-top: 12px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          background: #2a2a2a !important;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        .content {
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .poster-card img {
          width: 100%;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .section-title {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .desc {
          color: #bbb;
          line-height: 1.8;
        }

        .info-block {
          margin-top: 15px;
        }

        .info-block h6 {
          color: #fff;
          margin-bottom: 5px;
        }

        .info-block p {
          color: #aaa;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default MovieDetails;