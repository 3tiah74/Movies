package com.example.reviewservice.controller;

import com.example.reviewservice.dto.ReviewRequest;
import com.example.reviewservice.dto.ReviewResponse;
import com.example.reviewservice.service.ReviewService;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ReviewResponse addReview(@Valid @RequestBody ReviewRequest request) {
        return reviewService.addReview(request);
    }

    @GetMapping
    public List<ReviewResponse> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/movie/{movieId}")
    public List<ReviewResponse> getReviewsByMovieId(@PathVariable Long movieId) {
        return reviewService.getReviewsByMovieId(movieId);
    }

    @GetMapping("/user/{userId}")
    public List<ReviewResponse> getReviewsByUserId(@PathVariable Long userId) {
        return reviewService.getReviewsByUserId(userId);
    }

    @PutMapping("/{id}")
    public ReviewResponse updateReview(@PathVariable Long id, @RequestBody ReviewRequest request) {
        return reviewService.updateReview(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return "Review deleted successfully";
    }
}
