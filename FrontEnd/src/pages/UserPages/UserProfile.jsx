import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Modal,
} from "react-bootstrap";

function Profile() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("account");

  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
  });

  const [formData, setFormData] = useState(user);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFormData(user);
    setShow(true);
  };

  const handleSave = () => {
    setUser(formData);
    setShow(false);
  };

  const styles = {
    page: {
      background: "#0d0d0d",
      minHeight: "100vh",
      color: "#fff",
      padding: "40px 0",
    },
    avatar: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      border: "3px solid red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px",
      fontWeight: "bold",
    },
    nav: {
      borderBottom: "1px solid #ffffff22",
    },
    navLink: {
      color: "#aaa",
      marginRight: "20px",
      cursor: "pointer",
    },
    activeNav: {
      color: "#fff",
      borderBottom: "2px solid red",
    },
    input: {
      background: "transparent",
      border: "1px solid #444",
      color: "#fff",
    },
    editBtn: {
      background: "red",
      border: "none",
    },
  };

  return (
    <div style={styles.page}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md="auto">
            <div style={styles.avatar}>{user.name[0]}</div>
          </Col>

          <Col>
            <h2>{user.name}</h2>
          </Col>

          <Col md="auto">
            <Button style={styles.editBtn} onClick={handleShow}>
              Edit Profile
            </Button>
          </Col>
        </Row>

        <Nav style={styles.nav} className="mb-4">
          <Nav.Item>
            <Nav.Link
              onClick={() => setActiveTab("account")}
              style={
                activeTab === "account"
                  ? { ...styles.navLink, ...styles.activeNav }
                  : styles.navLink
              }
            >
              Account Info
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              onClick={() => setActiveTab("security")}
              style={
                activeTab === "security"
                  ? { ...styles.navLink, ...styles.activeNav }
                  : styles.navLink
              }
            >
              Security
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              onClick={() => setActiveTab("subscription")}
              style={
                activeTab === "subscription"
                  ? { ...styles.navLink, ...styles.activeNav }
                  : styles.navLink
              }
            >
              Subscription
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === "account" && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control value={user.name} readOnly style={styles.input} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={user.email} readOnly style={styles.input} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control value={user.phone} readOnly style={styles.input} />
            </Form.Group>
          </Form>
        )}

        {activeTab === "security" && (
          <div className="text-light opacity-75">
            Security settings coming soon
          </div>
        )}

        {activeTab === "subscription" && (
          <div className="text-light opacity-75">
            Subscription details coming soon
          </div>
        )}

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton style={{ background: "#111", color: "#fff" }}>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ background: "#111", color: "#fff" }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={styles.input}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={styles.input}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  style={styles.input}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer style={{ background: "#111" }}>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button style={styles.editBtn} onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Profile;