import React from "react";
import { Card, Badge, Stack } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card className="border-0 bg-dark text-white h-100 shadow-sm movie-card">

      <div className="position-relative">
        <Card.Img
          variant="top"
          src={movie.image}
          style={{ height: "300px", objectFit: "cover" }}
        />


        <div className="position-absolute top-0 start-0 m-2 d-flex gap-2">
          <Badge bg="dark">HD</Badge>
          <Badge bg="secondary">{movie.duration}</Badge>
        </div>


        <div className="position-absolute top-0 end-0 m-2">
          <Badge bg="warning" text="dark">
            ⭐ {movie.rating}
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


        <Card.Text className="text-secondary mb-2" style={{ fontSize: "13px" }}>
          {movie.category}
        </Card.Text>


        <Stack direction="horizontal" gap={2} className="small text-light">
          <span>⏱ {movie.duration}</span>
          <span className="ms-auto">⭐ {movie.rating}</span>
        </Stack>

      </Card.Body>


      <style>{`
        .movie-card {
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
      `}</style>

    </Card>
  );
}

export default MovieCard;