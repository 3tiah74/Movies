import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Modal, Button } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";
import { getCurrentUser } from "../../api/authApi";
import { getFavorites, removeFavorite } from "../../api/favoritesApi";
import { getContent } from "../../api/contentApi";

function Watchlist() {
  const [movies, setMovies] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWatchlist = async () => {
      try {
        setLoading(true);
        const [user, watchlist, allMovies] = await Promise.all([
          getCurrentUser(),
          (async () => {
            const me = await getCurrentUser();
            return getFavorites(me.userId);
          })(),
          getContent(),
        ]);

        setUserId(user?.userId || null);

        const movieMap = new Map((Array.isArray(allMovies) ? allMovies : []).map((m) => [String(m.movieId), m]));
        const mapped = (Array.isArray(watchlist) ? watchlist : []).map((item) => {
          const movie = movieMap.get(String(item.movieId));
          return {
            id: item.watchlistId,
            title: movie?.title || `Movie #${item.movieId}`,
            image: movie?.posterPath || movie?.poster_path || "https://via.placeholder.com/300x400",
            duration: `${movie?.durationHours || 0}:${String(movie?.durationMinutes || 0).padStart(2, "0")}:00`,
          };
        });

        setMovies(mapped);
      } catch {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    loadWatchlist();
  }, []);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    if (!selectedMovie) return;
    removeFavorite(selectedMovie.id)
      .then(() => {
        setMovies((prev) => prev.filter((m) => m.id !== selectedMovie.id));
      })
      .finally(() => setShowDeleteModal(false));
  };

  const handleClearAll = () => {
    Promise.all(movies.map((movie) => removeFavorite(movie.id)))
      .then(() => setMovies([]))
      .finally(() => setShowClearModal(false));
  };

  return (
    <div className="bg-black min-vh-100 py-5">
      <Container>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-white fw-bold m-0">My Watchlist</h3>

          <Button
            variant="outline-danger"
            onClick={() => setShowClearModal(true)}
          >
            Clear Watchlist
          </Button>
        </div>

        {loading ? (
          <div className="text-center text-secondary py-5">
            <h4>Loading watchlist...</h4>
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center text-secondary py-5">
            <h4>No movies in your watchlist</h4>
          </div>
        ) : (
          <Row className="g-4">

            {movies.map((movie) => (
              <Col lg={3} md={4} sm={6} xs={12} key={movie.id}>

                <Card
                  onClick={() => handleShow(movie)}
                  className="bg-dark text-white border-0 rounded-4 overflow-hidden"
                  style={{ cursor: "pointer" }}
                >

                  <Card.Img
                    src={movie.image}
                    style={{ height: 260, objectFit: "cover" }}
                  />

                  <Card.Body className="p-2">

                    <Card.Title className="fs-6 fw-semibold mb-1 text-truncate">
                      {movie.title}
                    </Card.Title>

                    <div className="d-flex justify-content-between align-items-center">

                      <span className="text-secondary small">
                        {movie.duration}
                      </span>

                      <FaBookmark className="text-warning" />

                    </div>

                    <div className="mt-2 d-flex gap-2 flex-wrap">
                      <Badge bg="danger">Action</Badge>
                      <Badge bg="secondary">Adventure</Badge>
                    </div>

                  </Card.Body>

                </Card>

              </Col>
            ))}

          </Row>
        )}

        {/* DELETE MODAL */}
        <Modal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          centered
        >
          <Modal.Body className="text-center bg-dark text-white rounded p-4">

            <h5 className="mb-2">
              Remove "{selectedMovie?.title}"?
            </h5>

            <p className="text-secondary mb-4">
              You can add it again anytime
            </p>

            <div className="d-flex gap-2">

              <Button
                variant="outline-light"
                className="w-50"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                className="w-50"
                onClick={handleDelete}
              >
                Remove
              </Button>

            </div>

          </Modal.Body>
        </Modal>

        {/* CLEAR MODAL */}
        <Modal
          show={showClearModal}
          onHide={() => setShowClearModal(false)}
          centered
        >
          <Modal.Body className="text-center bg-dark text-white rounded p-4">

            <h5 className="mb-2">Clear Watchlist?</h5>

            <p className="text-secondary mb-4">
              This will remove all saved movies
            </p>

            <div className="d-flex gap-2">

              <Button
                variant="outline-light"
                className="w-50"
                onClick={() => setShowClearModal(false)}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                className="w-50"
                onClick={handleClearAll}
              >
                Clear All
              </Button>

            </div>

          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
}

export default Watchlist;