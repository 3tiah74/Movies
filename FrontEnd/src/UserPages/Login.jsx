import React, { useState } from "react";
import formPic from "../assets/formPic.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Card, Modal } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showErrorPopup = (msg) => {
    setError(msg);
    setShowError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      showErrorPopup("All fields are required");
      return;
    }

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-black">
      <Card className="border-0 shadow-lg overflow-hidden" style={{ width: "900px", maxWidth: "95%" }}>
        <Row className="g-0">
          <Col md={6} className="d-none d-md-block">
            <div
              style={{
                backgroundImage: `url(${formPic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                minHeight: "450px",
              }}
            />
          </Col>

          <Col md={6} className="bg-dark text-white p-4 d-flex align-items-center">
            <div className="w-100 px-2">
              <h2 className="text-danger fw-bold text-center mb-4">
                Welcome Back
              </h2>

              <Form onSubmit={handleSubmit}>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  className="mb-3 bg-black text-white border-0 p-3"
                />

                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="mb-3 bg-black text-white border-0 p-3"
                />

                <div className="d-flex justify-content-end mb-3">
                  <small className="text-secondary">Forgot password?</small>
                </div>

                <Button type="submit" variant="danger" className="w-100 fw-bold py-2">
                  Login
                </Button>

                <p className="text-center mt-3 text-secondary">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-danger text-decoration-none fw-bold">
                    Sign up
                  </Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Card>

      <Modal
        show={showError}
        onHide={() => setShowError(false)}
        centered
        contentClassName="bg-dark text-white border-0"
      >
        <Modal.Body className="text-center py-4">
          <h5 className="text-danger mb-3">Error</h5>
          <p>{error}</p>
        </Modal.Body>

        <Modal.Footer className="border-0 justify-content-center">
          <Button variant="danger" onClick={() => setShowError(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .form-control::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(220,53,69,0.25);
          border: 1px solid #dc3545;
        }
      `}</style>
    </div>
  );
}

export default Login;