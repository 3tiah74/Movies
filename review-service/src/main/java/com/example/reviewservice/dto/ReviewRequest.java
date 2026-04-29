package com.example.reviewservice.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReviewRequest {

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotNull(message = "Movie ID is required")
    private Long movieId;

    @NotBlank(message = "Review text is required")
    private String reviewText;
}