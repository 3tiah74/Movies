import React, { useState } from "react";
import { Card, Form, Button, Row, Col, Modal } from "react-bootstrap";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

function ReviewsSection({ reviews, onAddReview }) {
  const [newReview, setNewReview] = useState({
    username: "",
    text: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleSubmit = () => {
    if (!newReview.username || !newReview.text) return;

    onAddReview({
      review_id: Date.now(),
      username: newReview.username,
      review_text: newReview.text,
      date: new Date().toISOString(),
    });

    setNewReview({ username: "", text: "" });
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    const updated = reviews.filter((r) => r.review_id !== deleteId);
    onAddReview({ type: "replace", data: updated });
    setShowDeleteModal(false);
  };

  const handleEdit = (rev) => {
    setEditingId(rev.review_id);
    setEditedText(rev.review_text);
  };

  const handleSave = (id) => {
    const updated = reviews.map((r) =>
      r.review_id === id ? { ...r, review_text: editedText } : r
    );

    onAddReview({ type: "replace", data: updated });
    setEditingId(null);
  };

  const formatTime = (date) => {
    const d = new Date(date);
    const now = new Date();
    const diff = Math.floor((now - d) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;

    return d.toLocaleDateString();
  };

  return (
    <div className="mt-5 text-white">

      <h4 className="fw-bold mb-4">Reviews</h4>

      <Card className="review-input-card mb-4">
        <Card.Body>
          <Row className="g-3">

            <Col md={4}>
              <Form.Control
                placeholder="Your Name"
                value={newReview.username}
                onChange={(e) =>
                  setNewReview({ ...newReview, username: e.target.value })
                }
                className="custom-input"
              />
            </Col>

            <Col md={8}>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Write your review..."
                value={newReview.text}
                onChange={(e) =>
                  setNewReview({ ...newReview, text: e.target.value })
                }
                className="custom-input"
              />
            </Col>

          </Row>

          <div className="text-end mt-3">
            <Button variant="danger" onClick={handleSubmit}>
              Post Review
            </Button>
          </div>
        </Card.Body>
      </Card>

      {reviews.length === 0 && (
        <div className="text-center my-5">
          <h6 className="text-secondary">
            Be the first one to comment
          </h6>
        </div>
      )}

      {reviews.map((rev) => (
        <Card key={rev.review_id} className="review-card mb-3">
          <Card.Body>

            <div className="d-flex justify-content-between align-items-start">

              <div className="d-flex gap-3 align-items-center">

                <div className="avatar">
                  {rev.username.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h6 className="mb-1 text-white">{rev.username}</h6>
                  <small className="time-text">
                    {formatTime(rev.date)}
                  </small>
                </div>

              </div>

              <div className="actions">

                {editingId === rev.review_id ? (
                  <>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleSave(rev.review_id)}
                    >
                      <FaCheck />
                    </Button>

                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setEditingId(null)}
                    >
                      <FaTimes />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="sm"
                      variant="outline-light"
                      onClick={() => handleEdit(rev)}
                    >
                      <FaEdit />
                    </Button>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => confirmDelete(rev.review_id)}
                    >
                      <FaTrash />
                    </Button>
                  </>
                )}

              </div>

            </div>

            <div className="mt-3">

              {editingId === rev.review_id ? (
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="custom-input"
                />
              ) : (
                <p className="review-text">
                  {rev.review_text}
                </p>
              )}

            </div>

          </Card.Body>
        </Card>
      ))}

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Body className="bg-dark text-white text-center p-4">
          <h5>Are you sure you want to delete this review?</h5>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>

            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <style>{`
        .review-input-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 16px;
        }

        .review-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 16px;
          transition: 0.3s;
          color: #fff;
        }

        .review-card:hover {
          transform: translateY(-3px);
          background: #181818;
        }

        .custom-input,
        .custom-input:focus {
          background: #0d0d0d !important;
          border: 1px solid #333 !important;
          color: #fff !important;
          box-shadow: none !important;
        }

        .custom-input::placeholder {
          color: #aaa;
        }

        .avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e50914, #8b0000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #fff;
        }

        .review-text {
          color: #fff;
          margin: 0;
        }

        .time-text {
          color: #b5b5b5;
        }

        .actions {
          display: flex;
          gap: 6px;
          opacity: 0;
          transition: 0.2s;
        }

        .review-card:hover .actions {
          opacity: 1;
        }

        h6 {
          color: #fff;
        }
      `}</style>

    </div>
  );
}

export default ReviewsSection;