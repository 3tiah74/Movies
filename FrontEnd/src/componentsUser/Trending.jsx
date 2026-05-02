import React from "react";
import { Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Section from "./Section";

export default function Trending() {
  return (
    <Section title="Trending">
      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Movie 1", image: "https://i.pinimg.com/1200x/86/c4/9d/86c49da248573cd807f7cb17a4d0ea14.jpg", duration: "2:30", rating: "8.1", genres: ["Action"] }} />
      </Col>
    </Section>
  );
}