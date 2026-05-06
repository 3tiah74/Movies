package com.movies.movies.service;

import com.movies.movies.dto.MovieDTO;
import com.movies.movies.entity.Movie;
import com.movies.movies.exception.ResourceNotFoundException;
import com.movies.movies.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository repo;

    public MovieService(MovieRepository repo) {
        this.repo = repo;
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

        return repo.save(movie);
    }

    public List<Movie> getAll() {
        return repo.findAll();
    }

    public Movie getById(Long id) {
        return repo.findById(id)
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

        return repo.save(movie);
    }

    public void delete(Long id) {
        Movie movie = getById(id);
        repo.delete(movie);
    }
}