package movies.watchlist.controllers;

import movies.watchlist.models.entity.Watchlist;
import movies.watchlist.services.WatchlistService;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/api/watchlist")
@RequiredArgsConstructor
public class WatchlistController {

    private final WatchlistService watchlistService;

    @PostMapping("/add")
    public ResponseEntity<Watchlist> add(@RequestBody Watchlist item) {
        return ResponseEntity.ok(watchlistService.addToWatchlist(item));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Watchlist>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(watchlistService.getUserWatchlist(userId));
    }

    @DeleteMapping("/{watchlistId}")
    public ResponseEntity<Void> delete(@PathVariable Long watchlistId) {
        watchlistService.removeFromWatchlist(watchlistId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/test")
    public String test() {
        return "Controller is working!";
}
}