package com.example.reviewservice.service;

import com.example.reviewservice.model.Review;
import com.example.reviewservice.repository.ReviewRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository repo;

    public ReviewService(ReviewRepository repo) {
        this.repo = repo;
    }

    public Review addReview(Review review) {
        return repo.save(review);
    }

    public List<Review> getAllReviews() {
        return repo.findAll();
    }

    public List<Review> getReviewsByMovie(Long movieId) {
        return repo.findByMovieId(movieId);
    }

    public List<Review> getReviewsByUser(Long userId) {
        return repo.findByUserId(userId);
    }

    public void deleteReview(Long reviewId) {
        repo.deleteById(reviewId);
    }
}
