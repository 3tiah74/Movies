import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../componentsUser/MovieCard";

export default function Trending() {
  const [movies] = useState([
    {
      content_id: 1,
      title: "Silo",
      poster_path: "https://via.placeholder.com/300x450",
      duration_hours: 2,
      duration_minutes: 30,
      rating: 8.1,
      content_type: "Series",
    },
  ]);

  return (
    <div className="movies-page">
      <Container className="py-4">
        <h4 className="text-white fw-bold mb-4">Trending</h4>

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