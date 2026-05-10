package movies.watchlist.models.dtos;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class WatchlistResponse {
    private Long watchlistId;
    private Long userId;
    private Long movieId;
    
   
    private String movieName;
    private Integer releaseYear;
    private String description;
    
    private LocalDateTime addedAt;
}