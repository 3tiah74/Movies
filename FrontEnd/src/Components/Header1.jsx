import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Logo.png";

function Header_1() {

  const styles = {
    navbar: {
      background: "#111111",
      padding: "10px 20px",
      margin:0,
      borderBottom: "1px solid #ffffff33",
    },
    logo: {
      width: "120px",
      height: "auto",
    },
    navLink: {
      color: "white",
      margin: "0 10px",
      textDecoration: "none",
      fontWeight: "500",
    },
    loginBtn: {
      color: "white",
      border: "1px solid white",
      padding: "5px 12px",
      borderRadius: "6px",
      textDecoration: "none",
    }
  };

  return (
    <Navbar expand="lg" style={styles.navbar}>
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" style={styles.logo} />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          {/* Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/genre" style={styles.navLink}>
              Genre
            </Nav.Link>

            <Nav.Link as={Link} to="/country" style={styles.navLink}>
              Country
            </Nav.Link>

            <Nav.Link as={Link} to="/movies" style={styles.navLink}>
              Movies
            </Nav.Link>

            <Nav.Link as={Link} to="/series" style={styles.navLink}>
              Series
            </Nav.Link>

            <Nav.Link as={Link} to="/animation" style={styles.navLink}>
              Animation
            </Nav.Link>
          </Nav>


          <Nav>
            <Nav.Link as={Link} to="/login" style={styles.loginBtn}>
              Login / Signup
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header_1;