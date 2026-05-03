package com.movies.movies.service;

import com.movies.movies.exception.ResourceNotFoundException;
import com.movies.movies.dto.MovieDTO;
import com.movies.movies.entity.Movie;
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

        movie.setName(dto.getName());
        movie.setDescription(dto.getDescription());
        movie.setReleaseYear(dto.getReleaseYear());
        movie.setRuntime(dto.getRuntime());

        return repo.save(movie);
    }

    public List<Movie> getAll() {
        return repo.findAll();
    }

    public Movie getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found"));
    }

    public Movie update(Long id, MovieDTO dto) {
        Movie movie = getById(id);

        movie.setName(dto.getName());
        movie.setDescription(dto.getDescription());
        movie.setReleaseYear(dto.getReleaseYear());
        movie.setRuntime(dto.getRuntime());

        return repo.save(movie);
    }

    public void delete(Long id) {
        Movie movie = getById(id);
        repo.delete(movie);
    }
}