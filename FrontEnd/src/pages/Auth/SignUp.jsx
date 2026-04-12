import React, { useState } from "react";
import formPic from "../assets/formPic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", formData);

    setTimeout(() => {
      alert("Account created successfully!");
      navigate("/login");
    }, 800);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#0d0d0d" }}>
      <Card style={{ width: "80%", maxWidth: "800px", height: "450px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
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
              <h2 className="text-danger text-center mb-4">Register</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control name="fullName" type="text" placeholder="Full Name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="email" type="email" placeholder="Email Address" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
                </Form.Group>

                <Button type="submit" variant="danger" className="w-100 fw-bold">
                  Sign Up
                </Button>

                <div className="text-center mt-3">
                  <span className="text-light small">Already have an account? </span>

                  <Link to="/login" className="text-danger fw-bold text-decoration-underline">
                    Log in
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

export default SignUp;
