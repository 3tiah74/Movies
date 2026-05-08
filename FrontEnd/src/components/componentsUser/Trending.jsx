import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Trending() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const movies = [
    {
      content_id: 1,
      title: "Silo",
      poster_path: "https://via.placeholder.com/300x450",
      duration_hours: 2,
      duration_minutes: 30,
      rating: 8.1,
      categories: ["Action"],
      content_type: "Series",
    },
  ];

  const handleAddToWatchlist = () => {
    setShowModal(true);
  };

  return (
    <Container className="my-4">
      <h4 className="text-white fw-bold mb-3">Trending</h4>

      <Row className="g-3">
        {movies.map((movie) => (
          <Col key={movie.content_id} lg={3} md={4} sm={6} xs={6}>
            <MovieCard movie={movie} onAddToWatchlist={handleAddToWatchlist} />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center bg-dark text-white rounded p-4">
          <h5 className="mb-2">Added Successfully</h5>
          <p className="text-secondary mb-4">
            Movie added to your watchlist
          </p>

          <div className="d-flex gap-2">
            <Button
              variant="outline-light"
              className="w-50"
              onClick={() => setShowModal(false)}
            >
              OK
            </Button>

            <Button
              variant="danger"
              className="w-50"
              onClick={() => {
                setShowModal(false);
                navigate("/watchlist");
              }}
            >
              Watch My List
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}