package movies.watchlist.services;

import movies.watchlist.models.entity.Watchlist;
import movies.watchlist.repository.WatchlistRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WatchlistService {

    private final WatchlistRepository watchlistRepository;

    public Watchlist addToWatchlist(Watchlist item) {
        return watchlistRepository.save(item);
    }

    public List<Watchlist> getUserWatchlist(Long userId) {
        return watchlistRepository.findByUserId(userId);
    }

    public void removeFromWatchlist(Long watchlistId) {
        watchlistRepository.deleteById(watchlistId);
    }
}