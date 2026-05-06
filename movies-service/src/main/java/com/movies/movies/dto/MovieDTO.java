package com.movies.movies.dto;

import java.time.LocalDate;

public class MovieDTO {

    private String title;
    private String description;
    private String actors;
    private String posterPath;
    private LocalDate releaseDate;
    private Double rating;
    private Integer durationHours;
    private Integer durationMinutes;
    private String country;

    // getters & setters
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getActors() {
        return actors;
    }
    public void setActors(String actors) {
        this.actors = actors;
    }
    public String getPosterPath() {
        return posterPath;
    }
    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }
    public LocalDate getReleaseDate() {
        return releaseDate;
    }
    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }
    public Double getRating() {
        return rating;
    }
    public void setRating(Double rating) {
        this.rating = rating;
    }
    public Integer getDurationHours() {
        return durationHours;
    }
    public void setDurationHours(Integer durationHours) {
        this.durationHours = durationHours;
    }
    public Integer getDurationMinutes() {
        return durationMinutes;
    }
    public void setDurationMinutes(Integer durationMinutes) {
        this.durationMinutes = durationMinutes;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }

    
}