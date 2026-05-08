import React, { useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaPlay, FaStar, FaPlus, FaCalendarAlt } from "react-icons/fa";
import ReviewsSection from "./Reviews";

function MovieDetails() {
  const [movie] = useState({
    content_id: 1,
    title: "Silo",
    description:
      "In a ruined future, people live inside a giant underground silo.",
    poster_path:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    content_type: "Series",
    rating: 8.5,
    release_date: "2023-05-04",
    categories: ["Drama", "Sci-Fi"],
    reviews: [],
  });

  const handleAddReview = (newReview) => {
    movie.reviews = [...movie.reviews, newReview];
  };

  return (
    <div className="movie-page">
      <div
        className="hero"
        style={{ backgroundImage: `url(${movie.poster_path})` }}
      >
        <div className="overlay"></div>

        <Container className="hero-content">
          <h1 className="title">{movie.title}</h1>

          <div className="meta">
            <span className="rating">
              <FaStar /> {movie.rating}
            </span>

            <span>
              <FaCalendarAlt /> {movie.release_date}
            </span>
          </div>

          <div className="tags">
            {movie.categories.map((cat, i) => (
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
              <img src={movie.poster_path} alt={movie.title} />
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
                  <FaCalendarAlt /> {movie.release_date}
                </p>
              </div>

              <div className="info-block">
                <h6>Categories</h6>
                <p>{movie.categories.join(", ")}</p>
              </div>
            </div>
          </Col>
        </Row>

        <ReviewsSection
          reviews={movie.reviews}
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