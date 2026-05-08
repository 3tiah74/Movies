import React from "react";
import { Card, Badge, Stack } from "react-bootstrap";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `http://localhost:5000/uploads/${movie.poster_path}`
    : "https://via.placeholder.com/300x400";

  const duration = movie.duration_hours
    ? `${movie.duration_hours}h ${movie.duration_minutes || 0}m`
    : "N/A";

  return (
    <Card className="border-0 bg-dark text-white h-100 shadow-sm movie-card">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ height: "300px", objectFit: "cover" }}
        />

        <div className="position-absolute top-0 start-0 m-2 d-flex gap-2">
          <Badge bg="dark">{movie.content_type}</Badge>
          <Badge bg="secondary">{duration}</Badge>
        </div>

        <div className="position-absolute top-0 end-0 m-2">
          <Badge bg="warning" text="dark">
            ⭐ {movie.rating || "N/A"}
          </Badge>
        </div>
      </div>

      <Card.Body className="px-2 py-2">
        <Card.Title
          className="mb-1 text-truncate"
          style={{ fontSize: "15px" }}
        >
          {movie.title}
        </Card.Title>

        <Card.Text
          className="text-secondary mb-2"
          style={{ fontSize: "13px" }}
        >
          {movie.categories?.join(", ") || "No Category"}
        </Card.Text>

        <Stack direction="horizontal" gap={2} className="small text-light">
          <span>⏱ {duration}</span>
          <span className="ms-auto">⭐ {movie.rating || "N/A"}</span>
        </Stack>
      </Card.Body>

      <style>{`
        .movie-card {
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .movie-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </Card>
  );
}

export default MovieCard;