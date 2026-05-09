import React, { useState } from "react";
import { Card, Badge, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addFavorite } from "../../api/favoritesApi";
import { getCurrentUser } from "../../api/authApi";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const imageUrl = movie.poster_path?.startsWith("http")
    ? movie.poster_path
    : movie.poster_path
    ? `http://localhost:5000/uploads/${movie.poster_path}`
    : "https://via.placeholder.com/300x400";

  const duration =
    movie.duration_hours || movie.duration_minutes
      ? `${movie.duration_hours || 0}h ${movie.duration_minutes || 0}m`
      : "N/A";

  const movieId = movie.movieId || movie.content_id;

  const handleAddToWatchlist = async (e) => {
    e.stopPropagation();
    try {
      let storedUser = JSON.parse(localStorage.getItem("user") || "null");

      if (!storedUser?.userId) {
        const profile = await getCurrentUser();
        if (profile?.userId) {
          storedUser = {
            ...(storedUser || {}),
            userId: profile.userId,
            username: profile.username || storedUser?.username,
            email: profile.email || storedUser?.email,
            role: profile.role || storedUser?.role,
          };
          localStorage.setItem("user", JSON.stringify(storedUser));
        }
      }

      if (!storedUser?.userId || !movieId) {
        setModalMessage("Please login first.");
        setShowModal(true);
        return;
      }

      await addFavorite({ userId: storedUser.userId, movieId });
      setModalMessage(`${movie.title} added to watchlist`);
      setShowModal(true);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        "Failed to add to watchlist.";
      setModalMessage(typeof message === "string" ? message : "Failed to add to watchlist.");
      setShowModal(true);
    }
  };

  const handleOpenDetails = () => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
    }
  };

  return (
    <>
      <Card className="bg-dark text-white border-0 h-100 position-relative">

        <div
          onClick={handleOpenDetails}
          style={{ cursor: "pointer" }}
        >
          <Card.Img
            src={imageUrl}
            style={{ height: 220, objectFit: "cover" }}
          />

          <div className="position-absolute top-0 start-0 m-2 d-flex gap-1">
            <Badge bg="dark">{movie.content_type}</Badge>
            <Badge bg="secondary">{duration}</Badge>
          </div>

          <div className="position-absolute top-0 end-0 m-2">
            <Badge bg="warning" text="dark">
              ⭐ {movie.rating}
            </Badge>
          </div>
        </div>

        <Card.Body className="p-2">
          <Card.Title className="fs-6 text-truncate">
            {movie.title}
          </Card.Title>

          <Button
            variant="danger"
            size="sm"
            className="w-100 rounded-pill"
            onClick={handleAddToWatchlist}
          >
            Add to Watchlist
          </Button>
        </Card.Body>
      </Card>

      {/* MODAL داخل الكارد */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Body className="text-center bg-dark text-white p-4">
          <h5>Added Successfully</h5>
          <p className="text-secondary">
            {modalMessage}
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
                navigate("/watchList");
              }}
            >
              Watchlist
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieCard;