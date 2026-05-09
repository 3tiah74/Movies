package com.letterboxd.auth_service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class UserResponse {

    private Integer userId;
    private String username;
    private String email;
    private String role;
    private String registrationDate;
}