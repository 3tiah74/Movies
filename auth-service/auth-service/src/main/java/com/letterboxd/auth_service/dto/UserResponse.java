package com.letterboxd.auth_service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {

    private Integer userId;
    private String username;
    private String email;
    private String role;
}