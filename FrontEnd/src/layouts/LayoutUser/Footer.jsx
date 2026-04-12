import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const styles = {
    footer: {
      background: "#0d0d0d",
      color: "#fff",
      padding: "60px 0 20px",
      marginTop: "50px",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    red: {
      color: "#e50914",
    },
    text: {
      color: "#aaa",
      fontSize: "14px",
      marginTop: "10px",
      maxWidth: "250px",
    },
    title: {
      fontWeight: "600",
      marginBottom: "15px",
    },
    link: {
      display: "block",
      color: "#aaa",
      textDecoration: "none",
      marginBottom: "8px",
      fontSize: "14px",
      transition: "0.3s",
    },
    social: {
      display: "flex",
      gap: "12px",
      fontSize: "18px",
      marginTop: "10px",
    },
    icon: {
      color: "#fff",
      cursor: "pointer",
      transition: "0.3s",
      fontSize: "18px",
    },
    bottom: {
      borderTop: "1px solid #222",
      marginTop: "40px",
      paddingTop: "15px",
      textAlign: "center",
      color: "#777",
      fontSize: "13px",
    },
  };

  return (
    <footer style={styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <div style={styles.logo}>
              Mov<span style={styles.red}>Ser</span> Hub
            </div>
            <p style={styles.text}>
              Your premier destination for streaming movies, TV series, and exclusive content.
            </p>
          </Col>

          <Col md={2}>
            <h6 style={styles.title}>Platform</h6>
            <Link className="footer-link" style={styles.link} to="/">Home</Link>
            <Link className="footer-link" style={styles.link} to="/movies">Movies</Link>
            <Link className="footer-link" style={styles.link} to="/series">TV Series</Link>
            <Link className="footer-link" style={styles.link} to="/new">New Releases</Link>
          </Col>

          <Col md={3}>
            <h6 style={styles.title}>Support</h6>
            <Link className="footer-link" style={styles.link} to="/faq">FAQ</Link>
            <Link className="footer-link" style={styles.link} to="/help">Help Center</Link>
            <Link className="footer-link" style={styles.link} to="/contact">Contact Us</Link>
          </Col>

          <Col md={3}>
            <h6 style={styles.title}>Legal</h6>
            <Link className="footer-link" style={styles.link} to="/privacy">Privacy Policy</Link>
            <Link className="footer-link" style={styles.link} to="/terms">Terms of Service</Link>

            <div style={styles.social}>
              <FaFacebookF className="footer-icon" style={styles.icon} />
              <FaTwitter className="footer-icon" style={styles.icon} />
              <FaInstagram className="footer-icon" style={styles.icon} />
              <FaYoutube className="footer-icon" style={styles.icon} />
            </div>
          </Col>
        </Row>

        <div style={styles.bottom}>
          © 2024 MovSer Hub. All rights reserved.
          <br />
          Supported Regions: North America, Europe, Asia-Pacific, Latin America.
        </div>
      </Container>

      <style>
        {`
          .footer-link:hover {
            color: #e50914 !important;
            transform: translateX(3px);
          }

          .footer-icon:hover {
            color: #e50914 !important;
            transform: scale(1.2);
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;