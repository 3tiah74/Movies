import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/formPic.jpg";
import { getContent } from "../../api/contentApi";

function HeroSection() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadHeroMovie = async () => {
      try {
        const data = await getContent();
        const sorted = (Array.isArray(data) ? data : []).sort(
          (a, b) => (b?.rating || 0) - (a?.rating || 0)
        );
        setMovie(sorted[0] || null);
      } catch {
        setMovie(null);
      }
    };

    loadHeroMovie();
  }, []);

  const heroImage = movie?.posterPath || movie?.poster_path || bg;
  const categories = Array.isArray(movie?.categories)
    ? movie.categories.map((c) => c?.name).filter(Boolean).join(" | ")
    : "Action | Adventure | Sci-Fi";

  return (
    <div className="hero-section">
      <Container>
        <h1>{movie?.title || "Featured Movie"}</h1>
        <p>{categories || "Action | Adventure | Sci-Fi"}</p>

        <Button 
          variant="danger" 
          className="me-2"
          onClick={() => movie?.movieId && navigate(`/movie/${movie.movieId}`)}
        >
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
            background-image: url(${heroImage});
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