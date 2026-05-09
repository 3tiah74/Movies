package com.example.reviewservice.service;

import com.example.reviewservice.dto.ReviewRequest;
import com.example.reviewservice.dto.ReviewResponse;
import com.example.reviewservice.exception.ResourceNotFoundException;
import com.example.reviewservice.model.Review;
import com.example.reviewservice.repository.ReviewRepository;
import org.springframework.stereotype.Service;

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
                .build();

        return mapToResponse(reviewRepository.save(review));
    }

    public List<ReviewResponse> getAllReviews() {
        return reviewRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public List<ReviewResponse> getReviewsByMovieId(Long movieId) {
        return reviewRepository.findByMovieId(movieId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public List<ReviewResponse> getReviewsByUserId(Long userId) {
        return reviewRepository.findByUserId(userId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public ReviewResponse updateReview(Long id, ReviewRequest request) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found"));

        review.setUserId(request.getUserId());
        review.setMovieId(request.getMovieId());
        review.setReviewText(request.getReviewText());

        return mapToResponse(reviewRepository.save(review));
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }

    private ReviewResponse mapToResponse(Review review) {
        return ReviewResponse.builder()
                .reviewId(review.getReviewId())
                .userId(review.getUserId())
                .movieId(review.getMovieId())
                .reviewText(review.getReviewText())
                .date(review.getDate())
                .build();
    }
}
