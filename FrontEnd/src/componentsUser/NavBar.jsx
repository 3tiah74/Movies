import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function NavbarMain() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand className="brand">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>

          <Form className="d-flex search-wrapper">
            <FormControl
              type="search"
              placeholder="Search movies..."
              className="custom-search"
            />
          </Form>

          <Nav className="ms-auto nav-links">
            <Nav.Link className="nav-item">Categories</Nav.Link>
            <Nav.Link className="nav-item">Movies</Nav.Link>
            <Nav.Link className="nav-item">Series</Nav.Link>
          </Nav>

          <Nav className="ms-3">
            <Nav.Link as={Link} to="/login" className="login-btn">
              Login / Signup
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <style>
        {`
          .custom-navbar {
            background: #0d0d0d;
            border-bottom: 1px solid #1f1f1f;
            padding: 12px 0;
          }

          .brand {
            display: flex;
            align-items: center;
          }

          .logo {
            width: 120px;
            transition: 0.3s;
          }

          .logo:hover {
            transform: scale(1.05);
          }

          .search-wrapper {
            width: 40%;
          }

          .custom-search {
            background-color: #1a1a1a !important;
            border: 1px solid #2a2a2a !important;
            color: #fff !important;
            border-radius: 25px;
            padding-left: 18px;
            transition: 0.3s;
          }

          .custom-search::placeholder {
            color: #aaa !important;
          }

          .custom-search:focus {
            border-color: #e50914 !important;
            box-shadow: 0 0 0 0.2rem rgba(229, 9, 20, 0.2) !important;
          }

          .nav-links {
            display: flex;
            align-items: center;
          }

          .nav-item {
            color: #fff !important;
            margin: 0 10px;
            font-weight: 500;
            transition: 0.3s;
          }

          .nav-item:hover {
            color: #e50914 !important;
          }

          .login-btn {
            color: #e50914 !important;
            border: 1px solid #e50914;
            padding: 6px 14px;
            border-radius: 20px;
            transition: 0.3s;
            font-weight: 500;
          }

          .login-btn:hover {
            background: #e50914;
            color: #fff !important;
          }

          @media (max-width: 991px) {
            .search-wrapper {
              width: 100%;
              margin: 10px 0;
            }

            .nav-links {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
}

export default NavbarMain;