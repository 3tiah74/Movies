package com.example.reviewservice.service;

import com.example.reviewservice.dto.ReviewRequest;
import com.example.reviewservice.dto.ReviewResponse;
import com.example.reviewservice.exception.ResourceNotFoundException;
import com.example.reviewservice.model.Review;
import com.example.reviewservice.repository.ReviewRepository;
import org.springframework.stereotype.Service;
import com.example.reviewservice.exception.ResourceNotFoundException;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public ReviewResponse addReview(ReviewRequest request) {

        Review review = Review.builder()
                .userId(request.getUserId())
                .movieId(request.getMovieId())
                .reviewText(request.getReviewText())
                .createdAt(LocalDateTime.now())
                .build();

        Review savedReview = reviewRepository.save(review);

        return ReviewResponse.builder()
                .reviewId(savedReview.getReviewId())
                .userId(savedReview.getUserId())
                .movieId(savedReview.getMovieId())
                .reviewText(savedReview.getReviewText())
                .createdAt(savedReview.getCreatedAt())
                .build();
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public List<Review> getReviewsByMovieId(Long movieId) {
        return reviewRepository.findByMovieId(movieId);
    }

    public List<Review> getReviewsByUserId(Long userId) {
        return reviewRepository.findByUserId(userId);
    }
public Review updateReview(Long id, ReviewRequest request) {
    Review review = reviewRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Review not found"));

    review.setUserId(request.getUserId());
    review.setMovieId(request.getMovieId());
    review.setReviewText(request.getReviewText());

    return reviewRepository.save(review);
}
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}