import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
} from "react-bootstrap";
import { FaPlay, FaStar, FaPlus, FaClock, FaCalendarAlt, FaGlobe } from "react-icons/fa";
import ReviewsSection from "./Reviews";

function MovieDetails() {
  const [movie, setMovie] = useState({
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
    status: "Released",
    seasons: 2,
    episodes: 20,
    rating: 8.5,
    vote_count: 12540,
    duration_minutes: 50,
    release_date: "2023-05-04",
    language: "en",
    country: "USA",
    categories: ["Drama", "Sci-Fi", "Mystery"],
    production_companies: ["Apple TV+", "AMC Studios"],
    budget: 0,
    revenue: 0,
    tags: ["post-apocalyptic", "dystopia", "thriller"],
    cast: [
      { name: "Rebecca Ferguson", role: "Juliette Nichols" },
      { name: "Tim Robbins", role: "Bernard" },
    ],
    reviews: [
      {
        review_id: 1,
        username: "Habiba",
        review_text: "Amazing series!",
        date: "2024-05-01T10:00:00",
      },
    ],
  });

  const handleAddReview = (payload) => {
    if (payload?.type === "replace") {
      setMovie((prev) => ({
        ...prev,
        reviews: Array.isArray(payload.data) ? payload.data : [],
      }));
    } else {
      setMovie((prev) => ({
        ...prev,
        reviews: [payload, ...(prev.reviews || [])],
      }));
    }
  };

  return (
    <div className="bg-black text-white min-vh-100">

      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${movie.backdrop_path})`,
        }}
      >
        <div className="hero-overlay"></div>

        <Container className="hero-content">

          <h1 className="fw-bold">{movie.title}</h1>
          <p className="text-secondary">{movie.original_title}</p>

          <div className="d-flex gap-3 align-items-center mt-2 flex-wrap">
            <span className="text-warning">
              <FaStar /> {movie.rating} ({movie.vote_count})
            </span>

            <span><FaClock /> {movie.duration_minutes}m</span>

            <span><FaCalendarAlt /> {movie.release_date}</span>

            <span><FaGlobe /> {movie.language}</span>

            <span className="text-secondary">
              {movie.content_type}
            </span>
          </div>

          <div className="mt-3 d-flex gap-2 flex-wrap">
            {movie.categories.map((cat, i) => (
              <Badge key={i} bg="secondary">
                {cat}
              </Badge>
            ))}
          </div>

          <div className="mt-3 d-flex gap-2 flex-wrap">
            {movie.tags.map((tag, i) => (
              <Badge key={i} bg="dark">
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="mt-4 d-flex gap-3">
            <Button variant="danger">
              <FaPlay /> Play
            </Button>

            <Button variant="outline-light">
              <FaPlus /> Watchlist
            </Button>
          </div>

        </Container>
      </div>

      <Container className="py-5">

        <Row className="mb-5">
          <Col md={3}>
            <img
              src={movie.poster_path}
              className="w-100 rounded-4 shadow"
              alt=""
            />
          </Col>

          <Col md={9}>
            <h4 className="fw-bold mb-3">Overview</h4>
            <p className="text-secondary">{movie.description}</p>

            <div className="mt-4">
              <h6>Production</h6>
              <p className="text-secondary">
                {movie.production_companies.join(", ")}
              </p>
            </div>

            <div className="mt-3">
              <h6>Country</h6>
              <p className="text-secondary">{movie.country}</p>
            </div>

            <div className="mt-3">
              <h6>Cast</h6>
              {movie.cast.map((c, i) => (
                <p key={i} className="text-secondary mb-1">
                  {c.name} as {c.role}
                </p>
              ))}
            </div>
          </Col>
        </Row>

        {movie.content_type === "Series" && (
          <>
            <h5 className="mb-3 fw-bold">Seasons</h5>
            <Row className="g-3 mb-5">
              {Array.from({ length: movie.seasons }).map((_, i) => (
                <Col md={4} key={i}>
                  <Button className="season-btn w-100">
                    ▶ Season {i + 1}
                  </Button>
                </Col>
              ))}
            </Row>
          </>
        )}

        <ReviewsSection
          reviews={movie.reviews}
          onAddReview={handleAddReview}
        />

      </Container>

      <style>{`
        .hero-section {
          position: relative;
          height: 500px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 40px 0;
        }

        .season-btn {
          background: #1c1c1c;
          border: none;
          padding: 15px;
          border-radius: 12px;
        }

        .season-btn:hover {
          background: #2a2a2a;
        }
      `}</style>

    </div>
  );
}

export default MovieDetails;