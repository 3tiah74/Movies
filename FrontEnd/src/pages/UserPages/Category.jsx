import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Category() {
  const [categories] = useState([
    { id: 1, name: "Action", count: 12 },
    { id: 2, name: "Drama", count: 8 },
    { id: 3, name: "Sci-Fi", count: 15 },
    { id: 4, name: "Comedy", count: 6 },
    { id: 5, name: "Horror", count: 9 },
    { id: 6, name: "Mystery", count: 5 },
  ]);

  return (
    <div className="category-page">
      <Container className="py-4">
        <h3 className="text-white fw-bold mb-4">Categories</h3>

        <Row className="g-3">
          {categories.map((cat) => (
            <Col key={cat.id} lg={3} md={4} sm={6} xs={6}>
              <Card className="bg-dark text-white border-0 category-card h-100">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">

                  <h5 className="mb-2">{cat.name}</h5>

                  <Badge bg="secondary" className="px-3 py-2 rounded-pill">
                    {cat.count} Movies
                  </Badge>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .category-page {
          background: #0b0b0b;
          min-height: 100vh;
        }

        .category-card {
          transition: 0.3s ease;
          cursor: pointer;
          border-radius: 14px;
        }

        .category-card:hover {
          transform: translateY(-6px);
          background: #1c1c1c !important;
        }
      `}</style>
    </div>
  );
}

export default Category;