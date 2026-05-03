SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

CREATE TABLE `users` (
    `user_id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role` ENUM('admin', 'user') DEFAULT 'user',
    `status` ENUM('Active', 'Inactive') DEFAULT 'Active',
    `registration_date` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`user_id`),
    UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE `categories` (
    `category_id` int NOT NULL AUTO_INCREMENT,
    `category_name` varchar(100) NOT NULL,
    PRIMARY KEY (`category_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE `content` (
    `content_id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` text,
    `cast` text,
    `content_type` ENUM('Movie', 'Series') DEFAULT 'Movie',
    `seasons` int DEFAULT NULL,
    `poster_path` varchar(255) DEFAULT NULL,
    `release_date` date DEFAULT NULL,
    `rating` decimal(3, 1) DEFAULT NULL,
    `duration_hours` int DEFAULT 0,
    `duration_minutes` int DEFAULT 0,
    `country` varchar(100) DEFAULT NULL,
    `added_date` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`content_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE `watchlist` (
    `user_id` int NOT NULL,
    `content_id` int NOT NULL,
    `added_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`user_id`, `content_id`),
    CONSTRAINT `fk_watch_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_watch_content` FOREIGN KEY (`content_id`) REFERENCES `content` (`content_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE `reviews` (
    `review_id` int NOT NULL AUTO_INCREMENT,
    `user_id` int NOT NULL,
    `content_id` int NOT NULL,
    `review_text` text,
    `date` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`review_id`),
    CONSTRAINT `fk_rev_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_rev_content` FOREIGN KEY (`content_id`) REFERENCES `content` (`content_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE `content_categories` (
    `content_id` int NOT NULL,
    `category_id` int NOT NULL,
    PRIMARY KEY (`content_id`, `category_id`),
    CONSTRAINT `fk_rel_content` FOREIGN KEY (`content_id`) REFERENCES `content` (`content_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_rel_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

COMMIT;