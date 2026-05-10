package com.letterboxd.auth_service.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.letterboxd.auth_service.entity.Role;
import com.letterboxd.auth_service.entity.User;
import com.letterboxd.auth_service.repository.UserRepository;

@Configuration
public class DataSeeder {

    @Bean
    public CommandLineRunner createDefaultAdmin(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        return args -> {

            String adminEmail = "admin@letterboxd.com";

            if (!userRepository.existsByEmail(adminEmail)) {

                User admin = User.builder()
                        .username("admin")
                        .email(adminEmail)
                        .password(passwordEncoder.encode("admin123"))
                        .role(Role.ADMIN)
                        .build();

                userRepository.save(admin);

                System.out.println("Default admin created successfully");
            }
        };
    }
}