CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    username varchar(100) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    status ENUM('Active', 'Inactive') DEFAULT 'Active',
    registration_date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id),
    UNIQUE KEY email (email)
) ENGINE=InnoDB;

CREATE TABLE categories (
    category_id int NOT NULL AUTO_INCREMENT,
    category_name varchar(100) NOT NULL,
    PRIMARY KEY (category_id)
) ENGINE=InnoDB;

CREATE TABLE movies (
    movie_id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description text,
    actors text,
    poster_path varchar(255),
    release_date date,
    rating decimal(3,1),
    duration_hours int,
    duration_minutes int,
    country varchar(100),
    added_date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (movie_id)
) ENGINE=InnoDB;

CREATE TABLE watchlist (
    user_id int NOT NULL,
    movie_id int NOT NULL,
    added_at timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, movie_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE reviews (
    review_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    movie_id int NOT NULL,
    review_text text,
    date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (review_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE movie_categories (
    movie_id int NOT NULL,
    category_id int NOT NULL,
    PRIMARY KEY (movie_id, category_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
) ENGINE=InnoDB;

COMMIT;


