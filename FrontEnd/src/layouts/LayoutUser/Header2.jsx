import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaUser } from "react-icons/fa";

function Header_2() {
  const styles = {
    navbar: {
      background: "#111111",
      padding: "10px 20px",
      margin: 0,
      borderBottom: "1px solid #ffffff33",
    },
    logo: {
      width: "120px",
      height: "auto",
    },
    navLink: {
      color: "#f5f5f5",
      margin: "0 12px",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "15px",
    },
    userIcon: {
      position: "relative",
      marginLeft: "20px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    tooltip: {
      position: "absolute",
      bottom: "-30px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#222",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: "6px",
      fontSize: "12px",
      whiteSpace: "nowrap",
      opacity: 0,
      visibility: "hidden",
      transition: "0.2s",
    },
  };

  return (
    <Navbar expand="lg" style={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" style={styles.logo} />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/categories" style={styles.navLink}>
              Categories
            </Nav.Link>

            <Nav.Link as={Link} to="/movies" style={styles.navLink}>
              Movies
            </Nav.Link>

  

            <Link to="/user" style={styles.userIcon} className="user-hover">
              <FaUser size={26} className="text-white" />
              <span style={styles.tooltip} className="tooltip">
                Habiba
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .user-hover:hover .tooltip {
            opacity: 1 !important;
            visibility: visible !important;
          }
        `}
      </style>
    </Navbar>
  );
}

export default Header_2;