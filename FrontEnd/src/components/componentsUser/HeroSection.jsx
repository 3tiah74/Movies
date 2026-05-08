import React from "react";
import { Container, Button } from "react-bootstrap";
import bg from "../../assets/formPic.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container>
        <h1>Avatar: The Way of Water</h1>
        <p>Action | Adventure | Sci-Fi</p>

        <Button variant="danger" className="me-2">
          Watch Now
        </Button>
        <Button variant="outline-light">
          Watch Later
        </Button>
      </Container>

      <style>
        {`
          .hero-section {
            height: 80vh;
            background-image: url(${bg});
            background-size: cover;
            background-position: center;
            color: white;
            display: flex;
            align-items: center;
            position: relative;
          }

          .hero-section::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.6);
          }

          .hero-section .container {
            position: relative;
            z-index: 2;
          }

          .hero-section h1 {
            font-size: 48px;
            font-weight: bold;
          }

          .hero-section p {
            font-size: 18px;
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;