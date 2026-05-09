import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../componentsUser/MovieCard";
import { getContent } from "../../api/contentApi";

export default function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const data = await getContent();
        const sorted = (Array.isArray(data) ? data : [])
          .sort((a, b) => (b?.rating || 0) - (a?.rating || 0))
          .slice(0, 4);
        setMovies(sorted);
      } catch {
        setMovies([]);
      }
    };

    loadTrending();
  }, []);

  return (
    <div className="movies-page">
      <Container className="py-4">
        <h4 className="text-white fw-bold mb-4">Trending</h4>

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