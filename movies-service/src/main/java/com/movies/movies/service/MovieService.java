package com.movies.movies.service;

import com.movies.movies.dto.MovieDTO;
import com.movies.movies.entity.Category;
import com.movies.movies.entity.Movie;
import com.movies.movies.exception.ResourceNotFoundException;
import com.movies.movies.repository.CategoryRepository;
import com.movies.movies.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepo;
    private final CategoryRepository categoryRepo;

    public MovieService(MovieRepository movieRepo, CategoryRepository categoryRepo) {
        this.movieRepo = movieRepo;
        this.categoryRepo = categoryRepo;
    }

    public Movie create(MovieDTO dto) {

        Movie movie = new Movie();

        movie.setTitle(dto.getTitle());
        movie.setDescription(dto.getDescription());
        movie.setActors(dto.getActors());
        movie.setPosterPath(dto.getPosterPath());
        movie.setReleaseDate(dto.getReleaseDate());
        movie.setRating(dto.getRating());
        movie.setDurationHours(dto.getDurationHours());
        movie.setDurationMinutes(dto.getDurationMinutes());
        movie.setCountry(dto.getCountry());

        
        if (dto.getCategoryIds() != null) {
            List<Category> categories = categoryRepo.findAllById(dto.getCategoryIds());
            movie.setCategories(categories);
        }

        return movieRepo.save(movie);
    }

    public List<Movie> getAll() {
        return movieRepo.findAll();
    }

    public Movie getById(Long id) {
        return movieRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id: " + id));
    }

    public Movie update(Long id, MovieDTO dto) {

        Movie movie = getById(id);

        movie.setTitle(dto.getTitle());
        movie.setDescription(dto.getDescription());
        movie.setActors(dto.getActors());
        movie.setPosterPath(dto.getPosterPath());
        movie.setReleaseDate(dto.getReleaseDate());
        movie.setRating(dto.getRating());
        movie.setDurationHours(dto.getDurationHours());
        movie.setDurationMinutes(dto.getDurationMinutes());
        movie.setCountry(dto.getCountry());

        
        if (dto.getCategoryIds() != null) {
            List<Category> categories = categoryRepo.findAllById(dto.getCategoryIds());
            movie.setCategories(categories);
        }

        return movieRepo.save(movie);
    }

    public void delete(Long id) {
        Movie movie = getById(id);
        movieRepo.delete(movie);
    }
}