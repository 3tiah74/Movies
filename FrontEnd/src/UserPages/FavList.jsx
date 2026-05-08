import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Modal,
  Button,
} from "react-bootstrap";
import { FaPlay, FaHeart, FaRegHeart } from "react-icons/fa";

function Favorites() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar",
      image:
        "https://i.pinimg.com/webp/1200x/92/2f/1d/922f1d3da32dcfa0d5062b70d2d973fb.webp",
      duration: "3:12:00",
      liked: true,
    },
    {
      id: 2,
      title: "John Wick",
      image: "https://via.placeholder.com/300x400",
      duration: "2:10:00",
      liked: true,
    },
    {
      id: 3,
      title: "Fast X",
      image: "https://via.placeholder.com/300x400",
      duration: "2:21:00",
      liked: false,
    },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    setMovies(movies.filter((m) => m.id !== selectedMovie.id));
    setShowDeleteModal(false);
  };

  const handleClearAll = () => {
    setMovies([]);
    setShowClearModal(false);
  };

  return (
    <div className="bg-black min-vh-100 py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h3 className="text-white fw-bold m-0">My Favorites</h3>

          <Button
            variant="outline-danger"
            onClick={() => setShowClearModal(true)}
          >
            Clear All
          </Button>
        </div>

        {movies.length === 0 ? (
          <div className="text-center text-secondary py-5">
            <h4>No movies to display</h4>
          </div>
        ) : (
          <Row className="g-4">
            {movies.map((movie) => (
              <Col lg={3} md={4} sm={6} xs={12} key={movie.id}>
                <Card
                  className="bg-dark text-white border-0 rounded-4 overflow-hidden movie-card"
                  onClick={() => handleShow(movie)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="position-relative">
                    <Card.Img
                      src={movie.image}
                      style={{ height: "320px", objectFit: "cover" }}
                    />

                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-0 hover-overlay d-flex align-items-center justify-content-center">
                      <div className="bg-danger rounded-circle p-3">
                        <FaPlay />
                      </div>
                    </div>

                    <span className="position-absolute top-0 start-0 m-2 bg-black bg-opacity-75 px-2 py-1 rounded small">
                      {movie.duration}
                    </span>

                    <span className="position-absolute top-0 end-0 m-2 text-danger fs-5">
                      {movie.liked ? <FaHeart /> : <FaRegHeart />}
                    </span>
                  </div>

                  <Card.Body>
                    <Card.Title className="fs-6 fw-semibold">
                      {movie.title}
                    </Card.Title>

                    <div className="d-flex gap-2">
                      <Badge bg="danger">Action</Badge>
                      <Badge bg="secondary">Adventure</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Delete single movie modal */}
        <Modal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          centered
          contentClassName="bg-dark text-white border-0"
        >
          <Modal.Body className="text-center py-4">
            <h5 className="mb-3">
              Remove "{selectedMovie?.title}"?
            </h5>
            <p className="text-secondary small">
              This action cannot be undone
            </p>
          </Modal.Body>

          <Modal.Footer className="border-0 justify-content-center">
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal
          show={showClearModal}
          onHide={() => setShowClearModal(false)}
          centered
          contentClassName="bg-dark text-white border-0"
        >
          <Modal.Body className="text-center py-4">
            <h5 className="mb-3">Clear all favorites?</h5>
            <p className="text-secondary small">
              This will remove all movies from your list
            </p>
          </Modal.Body>

          <Modal.Footer className="border-0 justify-content-center">
            <Button
              variant="secondary"
              onClick={() => setShowClearModal(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleClearAll}>
              Clear All
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <style>
        {`
        .movie-card {
          transition: transform 0.3s ease;
        }

        .movie-card:hover {
          transform: scale(1.05);
        }

        .movie-card:hover .hover-overlay {
          opacity: 0.7;
        }

        .hover-overlay {
          transition: opacity 0.3s ease;
        }
        `}
      </style>
    </div>
  );
}

export default Favorites;