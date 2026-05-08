package com.example.reviewservice.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ReviewResponse {
    private Long reviewId;
    private Long userId;
    private Long movieId;
    private String reviewText;
    private LocalDateTime date;
}
