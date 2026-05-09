import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function ReviewsSection({ reviews = [], onAddReview, currentUser = "User" }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) return;

    const ok = await onAddReview(text);
    if (!ok) return;

    setText("");
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

      {/* INPUT CARD */}
      <Card className="review-input-card p-3 mb-4">

        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="custom-input"
        />

        <div className="text-end mt-3">
          <Button className="post-btn" onClick={handleSubmit}>
            Post Review
          </Button>
        </div>

      </Card>

      {/* EMPTY STATE */}
      {reviews.length === 0 ? (
        <div className="text-center my-5 empty-text">
          Be the first one to comment
        </div>
      ) : (
        reviews.map((rev) => (
          <Card key={rev.review_id || rev.reviewId} className="review-card p-3 mb-3">

            <div className="d-flex gap-3 align-items-center">

              <div className="avatar">
                {(rev.username || `User ${rev.userId || ""}`)?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h6 className="mb-0 username">{rev.username || `User ${rev.userId || ""}`}</h6>
                <small className="time">
                  {formatTime(rev.date || rev.createdAt)}
                </small>
              </div>

            </div>

            <p className="mt-3 mb-0 review-text">
              {rev.review_text || rev.reviewText}
            </p>

          </Card>
        ))
      )}

      {/* STYLES */}
      <style>{`
        .review-input-card {
          background: linear-gradient(145deg, #141414, #0d0d0d);
          border: 1px solid #222;
          border-radius: 16px;
        }

        .review-card {
          background: linear-gradient(145deg, #141414, #0d0d0d);
          border: 1px solid #222;
          border-radius: 16px;
          transition: 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-3px);
          border-color: #e50914;
        }

        .custom-input,
        .custom-input:focus {
          background: #0b0b0b !important;
          border: 1px solid #333 !important;
          color: #fff !important;
          box-shadow: none !important;
          border-radius: 12px;
        }

        .custom-input::placeholder {
          color: #777;
        }

        .post-btn {
          background: #e50914;
          border: none;
          padding: 8px 20px;
          border-radius: 10px;
          font-weight: 500;
        }

        .post-btn:hover {
          background: #b00610;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e50914, #7a0000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #fff;
        }

        .username {
          color: #fff;
        }

        .time {
          color: #999;
        }

        .review-text {
          color: #ddd;
          line-height: 1.5;
        }

        .empty-text {
          color: #888;
          font-size: 15px;
        }
      `}</style>

    </div>
  );
}

export default ReviewsSection;