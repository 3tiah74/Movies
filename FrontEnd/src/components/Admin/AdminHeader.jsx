import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../styles/AdminHeader.css"

const AdminHeader = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <Link to="/admin" className='logo'>
                            <img src={logo} alt="logo" className='img-fluid' />
                        </Link>
                        <span className='badge bg-danger rounded-pill ms-2'>
                            Admin Panel
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/ManageMovies">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/ManageCategories">Categories</Nav.Link>
                            <Nav.Link as={Link} to="/ManageUsers">Users</Nav.Link>
                            <Nav.Link as={Link} to="/ManageReviews">Reviews</Nav.Link>
                            <Nav className="button">
                                <Nav.Link as={Link} to="/login" className='bg-white text-dark rounded-pill d-flex align-items-center gap-2'>
                                    Logout<i class="bi bi-box-arrow-right"></i>
                                </Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default AdminHeader