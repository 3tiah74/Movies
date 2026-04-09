import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../styles/AdminHeader.css"

const links = {
    content: "/manageContent",
    categories: "/manageCategories",
    users: "/manageUsers",
    reviews: "/manageReviews",
}

const AdminHeader = () => {
    return (
        <header className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="w-100 bg-black">
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
                            {Object.entries(links).map(([key, link]) => (
                                <Nav.Link as={Link} to={link} key={key} className="d-inline-flex justify-content-center text-white text-capitalize" >
                                    {key}
                                </Nav.Link>
                            ))}
                            <Nav className="button mx-auto mt-3 mt-lg-0">
                                <Nav.Link as={Link} to="/login" className='justify-content-center bg-white text-dark rounded-pill d-flex align-items-center gap-2 px-4 py-1'>
                                    Logout<i className="bi bi-box-arrow-right"></i>
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