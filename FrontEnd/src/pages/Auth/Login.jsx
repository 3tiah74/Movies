import React, { useState } from "react";
// import formPic from "../Components/formPic.jpg";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    console.log("Login Data:", formData);

    setTimeout(() => {
      alert("Login successful!");
      navigate("/"); 
    }, 800);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#0d0d0d" }}>
      <Card style={{ width: "80%", maxWidth: "800px", height: "400px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
        <Row className="g-0 h-100">
          <Col md={6}>
            <div
              style={{
                // backgroundImage: `url(${formPic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            />
          </Col>

          <Col md={6} className="d-flex justify-content-center align-items-center bg-dark">
            <div style={{ width: "80%" }}>
              <h2 className="text-danger text-center mb-4">Login</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>

                <div className="text-end mb-3">
                  <span className="text-light small text-decoration-underline" style={{ cursor: "pointer" }}>
                    Forgot password?
                  </span>
                </div>

                <Button type="submit" variant="danger" className="w-100 fw-bold">
                  Login
                </Button>

                <div className="text-center mt-3">
                  <span className="text-light small">Don’t have an account? </span>

                  <Link to="/signup" className="text-danger fw-bold text-decoration-underline">
                    Sign up
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Login;