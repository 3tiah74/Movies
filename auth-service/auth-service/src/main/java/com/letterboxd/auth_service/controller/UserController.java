package com.letterboxd.auth_service.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.letterboxd.auth_service.dto.UserResponse;
import com.letterboxd.auth_service.entity.User;
import com.letterboxd.auth_service.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/profile")
    public UserResponse getProfile(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return mapToResponse(user);
    }

    @PutMapping("/profile")
    public UserResponse updateProfile(Authentication authentication, @RequestBody UserResponse request) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (request.getUsername() != null) user.setUsername(request.getUsername());
        // Email update is tricky because it's the login identifier, 
        // but for simplicity in this project we'll allow it.
        if (request.getEmail() != null) user.setEmail(request.getEmail());

        userRepository.save(user);
        return mapToResponse(user);
    }

    private UserResponse mapToResponse(User user) {
        return UserResponse.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole().name())
                .registrationDate(user.getRegistrationDate() != null ? new java.text.SimpleDateFormat("yyyy-MM-dd").format(user.getRegistrationDate()) : "N/A")
                .build();
    }
}