import React from "react";
import { Container, Row } from "react-bootstrap";

function Section({ title, children }) {
  return (
    <div className="section">
      <Container>
        <h4 className="section-title">{title}</h4>
        <Row className="g-3">{children}</Row>
      </Container>

      <style>{`
        .section {
          background: #0d0d0d;
          padding: 40px 0;
        }

        .section-title {
          color: white;
          font-weight: 700;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default Section;