import React from "react";
import { Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Section from "./Section";

export default function NewMovies() {
  return (
    <Section title="New Movies">
      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Movie 1", image: "https://i.pinimg.com/1200x/86/c4/9d/86c49da248573cd807f7cb17a4d0ea14.jpg", duration: "2:30", rating: "8.1", genres: ["Action"] }} />
      </Col>

      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Movie 2", image: "https://via.placeholder.com/400x250", duration: "1:50", rating: "7.5", genres: ["Drama"] }} />
      </Col>

      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Movie 3", image: "https://via.placeholder.com/400x250", duration: "2:10", rating: "9.0", genres: ["Thriller"] }} />
      </Col>

      <Col lg={3} md={4} sm={6} xs={6}>
        <MovieCard movie={{ title: "Movie 4", image: "https://via.placeholder.com/400x250", duration: "3:00", rating: "8.7", genres: ["Action"] }} />
      </Col>
    </Section>
  );
}