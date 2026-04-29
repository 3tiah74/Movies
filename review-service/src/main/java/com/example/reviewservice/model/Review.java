package com.example.reviewservice.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    @NotNull(message = "User ID is required")
    @Column(name = "user_id", nullable = false)
    private Long userId;

    @NotNull(message = "Movie ID is required")
    @Column(name = "movie_id", nullable = false)
    private Long movieId;

    @NotBlank(message = "Review text is required")
    @Column(name = "review_text", nullable = false)
    private String reviewText;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}