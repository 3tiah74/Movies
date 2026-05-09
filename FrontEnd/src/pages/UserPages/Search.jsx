import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/componentsUser/MovieCard";
import { searchContent } from "../../api/contentApi";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const performSearch = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await searchContent(query);
        setMovies(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to fetch search results.");
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]);

  return (
    <div className="search-page py-5">
      <Container>
        <div className="mb-5">
            <h2 className="text-white fw-bold m-0 border-start border-danger border-4 ps-3">
                Search Results for: <span className="text-danger">"{query}"</span>
            </h2>
            <span className="text-secondary">{movies.length} Results Found</span>
        </div>
        
        {error && <div className="alert alert-danger bg-dark text-danger border-danger">{error}</div>}

        <Row className="g-4">
          {loading ? (
            <Col className="text-center py-5">
                <Spinner animation="border" variant="danger" />
                <p className="text-secondary mt-3">Searching...</p>
            </Col>
          ) : !query ? (
            <Col className="text-center py-5">
                <h4 className="text-secondary">Please enter a search query.</h4>
            </Col>
          ) : movies.length === 0 ? (
            <Col className="text-center py-5">
                <h4 className="text-secondary">No movies found matching your search.</h4>
            </Col>
          ) : (
            movies.map((movie) => (
              <Col key={movie.movieId || movie.content_id} lg={3} md={4} sm={6} xs={6}>
                <MovieCard movie={movie} />
              </Col>
            ))
          )}
        </Row>
      </Container>

      <style>{`
        .search-page {
          min-height: 100vh;
          background: #000;
        }
      `}</style>
    </div>
  );
}
