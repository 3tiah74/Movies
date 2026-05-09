import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../componentsUser/MovieCard";

export default function NewMovies() {
  const [movies] = useState([
    {
      content_id: 3,
      title: "Dune Part 2",
      poster_path: "https://via.placeholder.com/300x450",
      duration_hours: 2,
      duration_minutes: 46,
      rating: 8.7,
      content_type: "Movie",
    },
    {
      content_id: 4,
      title: "The Penguin",
      poster_path: "https://via.placeholder.com/300x450",
      duration_hours: 1,
      duration_minutes: 0,
      rating: 8.3,
      content_type: "Series",
    },
  ]);

  return (
    <div className="movies-page">
      <Container className="py-4">
        <h4 className="text-white fw-bold mb-4">New Movies</h4>

        <Row className="g-3">
          {movies.map((movie) => (
            <Col key={movie.content_id} lg={3} md={4} sm={6} xs={6}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .movies-page {
          min-height: 100vh;
          background: #0b0b0b;
        }
      `}</style>
    </div>
  );
}