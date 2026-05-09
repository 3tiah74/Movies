package com.movies.movies.controller;

import com.movies.movies.dto.MovieDTO;
import com.movies.movies.entity.Movie;
import com.movies.movies.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    @PostMapping
    public Movie create(@RequestBody MovieDTO dto) {
        return service.create(dto);
    }

    @GetMapping
    public List<Movie> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Movie getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Movie update(@PathVariable Long id, @RequestBody MovieDTO dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted successfully";
    }

    @GetMapping("/search")
    public List<Movie> search(@RequestParam String q) {
        return service.searchMovies(q);
    }

    @GetMapping("/category/{categoryId}")
    public List<Movie> getByCategory(@PathVariable Long categoryId) {
        return service.getMoviesByCategory(categoryId);
    }

    @GetMapping("/categories")
    public List<com.movies.movies.entity.Category> getAllCategories() {
        return service.getAllCategories();
    }
}

