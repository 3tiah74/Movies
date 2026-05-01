import React from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { FaPlay, FaStar, FaPlus } from "react-icons/fa";

function MovieDetails() {
  const movie = {
    title: "Silo",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    category: ["Drama", "Science Fiction"],
    description:
      "In a ruined and toxic future, a community exists in a giant underground silo...",
    duration: "50:38",
    rating: 8.5,
  };

  return (
    <div className="bg-black text-white min-vh-100">

      <Container fluid className="px-5 py-4">

        <div
          className="position-relative rounded-4 overflow-hidden mb-5"
          style={{
            height: "500px",
            backgroundImage: `url(${movie.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <div className="position-absolute top-50 start-50 translate-middle">
            <Button
              variant="danger"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "80px", height: "80px" }}
            >
              <FaPlay size={26} />
            </Button>
          </div>
        </div>

        <Row className="mb-5">

          <Col md={3}>
            <img
              src={movie.poster}
              alt=""
              className="w-100 rounded-4 shadow"
              style={{ height: "420px", objectFit: "cover" }}
            />
          </Col>

          <Col md={9}>
            <div className="d-flex justify-content-between align-items-start">

              <div>
                <h2 className="fw-bold">{movie.title}</h2>

                <div className="d-flex gap-2 my-3">
                  {movie.category.map((cat, i) => (
                    <Badge bg="secondary" key={i}>
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="danger" className="px-3">
                <FaPlus /> Add to Favourite
              </Button>
            </div>

            <p className="text-secondary mb-4">
              {movie.description}
            </p>

            <div className="d-flex gap-4">
              <span>{movie.duration}</span>
              <span className="text-warning">
                <FaStar /> {movie.rating}
              </span>
            </div>
          </Col>
        </Row>

        <h5 className="mb-3">Season 1</h5>

        <Row className="g-3 mb-5">
          {[1, 2, 3, 4, 5, 6].map((ep, i) => (
            <Col md={6} key={i}>
              <Button
                variant={i === 0 ? "danger" : "secondary"}
                className="w-100 text-start"
              >
                ▶ Episode {ep}
              </Button>
            </Col>
          ))}
        </Row>

        <h5 className="mb-4">You may also like</h5>

        <Row className="g-4 mb-5">
          {[1, 2, 3, 4].map((item) => (
            <Col md={3} key={item}>
              <Card className="bg-dark text-white border-0">
                <Card.Img
                  src="https://via.placeholder.com/300x400"
                  className="rounded-4"
                />
                <Card.Body className="px-0">
                  <Card.Title>Movie Name</Card.Title>
                  <Badge bg="danger" className="me-2">
                    HD
                  </Badge>
                  <Badge bg="secondary">Season 1</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h5 className="mb-4">Comments</h5>

        <div className="mb-4 d-flex gap-3">
          <img
            src="https://via.placeholder.com/50"
            className="rounded-circle"
            alt=""
          />
          <Form.Control
            placeholder="Write your comments here..."
            className="bg-dark text-white border-secondary"
          />
        </div>

        {[1, 2, 3].map((c) => (
          <div key={c} className="d-flex gap-3 mb-4">
            <img
              src="https://via.placeholder.com/50"
              className="rounded-circle"
              alt=""
            />
            <div>
              <h6 className="mb-1">User Name</h6>
              <p className="text-secondary mb-1">
                Lorem ipsum dolor sit amet consectetur...
              </p>
              <small className="text-secondary">12/06/2020</small>
            </div>
          </div>
        ))}

      </Container>
    </div>
  );
}

export default MovieDetails;