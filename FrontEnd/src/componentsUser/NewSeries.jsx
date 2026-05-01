import React from "react";
import { Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Section from "./Section";

export default function NewSeries() {
  return (
    <Section title="New Series">
      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Series 1", image: "https://via.placeholder.com/400x250", duration: "2:30", rating: "8.1", genres: ["Action"] }} />
      </Col>

      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Series 2", image: "https://via.placeholder.com/400x250", duration: "1:50", rating: "7.5", genres: ["Drama"] }} />
      </Col>

      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Series 3", image: "https://via.placeholder.com/400x250", duration: "2:10", rating: "9.0", genres: ["Thriller"] }} />
      </Col>

      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Series 4", image: "https://via.placeholder.com/400x250", duration: "3:00", rating: "8.7", genres: ["Action"] }} />
      </Col>
    </Section>
  );
}