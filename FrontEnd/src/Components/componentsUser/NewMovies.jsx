import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../componentsUser/MovieCard";
import { getContent } from "../../api/contentApi";

export default function NewMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadNewMovies = async () => {
      try {
        const data = await getContent();
        const sorted = (Array.isArray(data) ? data : [])
          .sort((a, b) => {
            const da = new Date(a?.addedDate || 0).getTime();
            const db = new Date(b?.addedDate || 0).getTime();
            return db - da;
          })
          .slice(0, 4);

        setMovies(sorted);
      } catch {
        setMovies([]);
      }
    };

    loadNewMovies();
  }, []);

  return (
    <div className="movies-page">
      <Container className="py-4">
        <h4 className="text-white fw-bold mb-4">New Movies</h4>

        <Row className="g-3">
          {movies.map((movie) => (
            <Col key={movie.movieId || movie.content_id} lg={3} md={4} sm={6} xs={6}>
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