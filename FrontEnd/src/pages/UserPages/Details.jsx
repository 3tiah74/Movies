import React, { useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import {
  FaPlay,
  FaStar,
  FaPlus,
  FaClock,
  FaCalendarAlt,
  FaGlobe,
} from "react-icons/fa";
import ReviewsSection from "./Reviews";

function MovieDetails() {
  const [movie] = useState({
    content_id: 1,
    title: "Silo",
    original_title: "Silo",
    description:
      "In a ruined and toxic future, a community exists in a giant underground silo where thousands of people live in isolation under strict rules.",
    poster_path:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    backdrop_path:
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330",
    content_type: "Series",
    rating: 8.5,
    vote_count: 12540,
    duration_minutes: 50,
    release_date: "2023-05-04",
    language: "en",
    country: "USA",
    categories: ["Drama", "Sci-Fi", "Mystery"],
    production_companies: ["Apple TV+", "AMC Studios"],
    cast: [
      { name: "Rebecca Ferguson", role: "Juliette Nichols" },
      { name: "Tim Robbins", role: "Bernard" },
    ],
    reviews: [],
  });

  const duration = `${Math.floor(movie.duration_minutes / 60)}h ${
    movie.duration_minutes % 60
  }m`;

  const handleAddReview = (newReview) => {
    movie.reviews = [...movie.reviews, newReview];
  };

  return (
    <div className="movie-page">

      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${movie.backdrop_path})` }}
      >
        <div className="overlay"></div>

        <Container className="hero-content">

          <h1 className="title">{movie.title}</h1>
          <p className="subtitle">{movie.original_title}</p>

          <div className="meta">

            <span className="rating">
              <FaStar /> {movie.rating} ({movie.vote_count})
            </span>

            <span><FaClock /> {duration}</span>
            <span><FaCalendarAlt /> {movie.release_date}</span>
            <span><FaGlobe /> {movie.language}</span>

          </div>

          <div className="tags">
            {movie.categories.map((cat, i) => (
              <Badge key={i} className="tag">{cat}</Badge>
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
  >
    <FaPlus /> Watchlist
  </Button>

</div>

        </Container>
      </div>

      {/* CONTENT */}
      <Container className="content">

        <Row className="align-items-start g-5">

          {/* POSTER */}
          <Col md={3}>
            <div className="poster-card">
              <img src={movie.poster_path} alt="" />
            </div>
          </Col>

          {/* INFO */}
          <Col md={9}>

            <h4 className="section-title">Overview</h4>
            <p className="desc">{movie.description}</p>

            <div className="info-block">
              <h6>Production</h6>
              <p>{movie.production_companies.join(", ")}</p>
            </div>

            <div className="info-block">
              <h6>Country</h6>
              <p>{movie.country}</p>
            </div>

            <div className="info-block">
              <h6>Cast</h6>
              {movie.cast.map((c, i) => (
                <p key={i}>
                  {c.name} <span className="text-muted">as</span> {c.role}
                </p>
              ))}
            </div>

          </Col>

        </Row>

        <ReviewsSection
          reviews={movie.reviews}
          onAddReview={handleAddReview}
        />

      </Container>

      {/* STYLE */}
      <style>{`
        .movie-page {
          background: #0b0b0b;
          color: white;
          min-height: 100vh;
        }

        /* HERO */
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

        .subtitle {
          color: #aaa;
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

        .actions {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .play-btn {
          background: #e50914;
          border: none;
          padding: 10px 18px;
        }

        .watch-btn {
          background: transparent;
          border: 1px solid #fff;
          padding: 10px 18px;
        }

        /* CONTENT */
        .content {
          padding-top: 40px;
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
        }

        .info-block {
          margin-top: 20px;
        }

        .info-block h6 {
          color: #fff;
        }

        .info-block p {
          color: #aaa;
        }
      `}</style>

    </div>
  );
}

export default MovieDetails;