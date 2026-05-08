import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, onAddToWatchlist }) {
  const navigate = useNavigate();

  const imageUrl = movie.poster_path?.startsWith("http")
    ? movie.poster_path
    : movie.poster_path
    ? `http://localhost:5000/uploads/${movie.poster_path}`
    : "https://via.placeholder.com/300x400";

  const duration =
    movie.duration_hours || movie.duration_minutes
      ? `${movie.duration_hours || 0}h ${movie.duration_minutes || 0}m`
      : "N/A";

  const handleOpenDetails = () => {
    navigate(`/movie/${movie.content_id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToWatchlist(movie);
  };

  return (
    <Card className="bg-dark text-white border-0 h-100 position-relative">
      <div onClick={handleOpenDetails} style={{ cursor: "pointer" }}>
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
            ⭐ {movie.rating ?? "N/A"}
          </Badge>
        </div>
      </div>

      <Card.Body className="p-2">
        <Card.Title className="text-truncate fs-6 mb-1">
          {movie.title}
        </Card.Title>

        <Button
          variant="danger"
          size="sm"
          className="w-100 rounded-pill"
          onClick={handleAdd}
        >
          Add to Watchlist
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;