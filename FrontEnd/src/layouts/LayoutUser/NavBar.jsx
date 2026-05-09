import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/Logo.png";

function NavbarMain() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // MOCK LOGIN (مؤقت للتجربة فقط)
    const mockUser = {
      name: "Test User",
      email: "test@test.com",
    };

    localStorage.setItem("user", JSON.stringify(mockUser));

    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const isLoggedIn = user && Object.keys(user).length > 0;

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
        <Container>

          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>

          {isLoggedIn && (
            <Form className="d-flex search-wrapper">
              <FormControl
                type="search"
                placeholder="Search movies..."
                className="custom-search"
              />
            </Form>
          )}

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">

            {isLoggedIn ? (
              <Nav className="align-items-center nav-links">

                <Nav.Link as={Link} to="/categories" className="nav-item">
                  Categories
                </Nav.Link>

                <Nav.Link as={Link} to="/movies" className="nav-item">
                  Movies
                </Nav.Link>

                <Link to="/user" className="user-icon">
                  <FaUser size={22} />
                  <span className="tooltip">{user?.name || "User"}</span>
                </Link>

              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login" className="login-btn">
                  Login / Signup
                </Nav.Link>
              </Nav>
            )}

          </Navbar.Collapse>

        </Container>
      </Navbar>

      <style>
        {`
          .custom-navbar {
            background: #0d0d0d;
            border-bottom: 1px solid #1f1f1f;
            padding: 12px 0;
          }

          .logo {
            width: 120px;
          }

          .search-wrapper {
            width: 40%;
          }

          .custom-search {
            background-color: #1a1a1a !important;
            border: 1px solid #2a2a2a !important;
            color: #fff !important;
            border-radius: 25px;
          }

          .custom-search::placeholder {
            color: #aaa !important;
          }

          .custom-search:focus {
            border-color: #e50914 !important;
            box-shadow: 0 0 0 0.2rem rgba(229, 9, 20, 0.2) !important;
          }

          .nav-item {
            color: #fff !important;
            margin: 0 10px;
          }

          .nav-item:hover {
            color: #e50914 !important;
          }

          .login-btn {
            color: #e50914 !important;
            border: 1px solid #e50914;
            padding: 6px 14px;
            border-radius: 20px;
          }

          .login-btn:hover {
            background: #e50914;
            color: #fff !important;
          }

          .user-icon {
            position: relative;
            margin-left: 15px;
            color: white;
            cursor: pointer;
          }

          .tooltip {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            background: #222;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            opacity: 0;
            visibility: hidden;
            transition: 0.2s;
            white-space: nowrap;
          }

          .user-icon:hover .tooltip {
            opacity: 1;
            visibility: visible;
          }

          @media (max-width: 991px) {
            .search-wrapper {
              width: 100%;
              margin: 10px 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default NavbarMain;